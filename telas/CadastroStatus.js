import { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, ScrollView, Alert, ActivityIndicator,
} from 'react-native';

const API_URL = 'http://192.168.15.5:8000/api';

const OPCOES = [
  { label: 'Pendente',      cor: '#f59e0b', fundo: '#fffbeb', borda: '#fde68a' },
  { label: 'Em andamento',  cor: '#2563eb', fundo: '#eff6ff', borda: '#bfdbfe' },
  { label: 'Concluída',     cor: '#16a34a', fundo: '#f0fdf4', borda: '#bbf7d0' },
  { label: 'Cancelada',     cor: '#dc2626', fundo: '#fef2f2', borda: '#fecaca' },
  { label: 'Em revisão',    cor: '#7c3aed', fundo: '#faf5ff', borda: '#e9d5ff' },
];

export default function CadastroStatus() {
  const [selecionado, setSelecionado] = useState(null);
  const [tarefaId, setTarefaId]       = useState(null);
  const [tarefas, setTarefas]         = useState([]);
  const [loading, setLoading]         = useState(false);
  const [loadingTarefas, setLoadingTarefas] = useState(true);

  // ✅ Busca as tarefas para o usuário escolher qual vincular
  useEffect(() => {
    async function buscarTarefas() {
      try {
        const response = await fetch(`${API_URL}/tarefas`, {
          headers: { 'Accept': 'application/json' },
        });
        const data = await response.json();
        setTarefas(data);
      } catch {
        Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
      } finally {
        setLoadingTarefas(false);
      }
    }
    buscarTarefas();
  }, []);

  async function cadastrar() {
    if (!tarefaId) {
      Alert.alert('Atenção', 'Selecione uma tarefa.');
      return;
    }
    if (!selecionado) {
      Alert.alert('Atenção', 'Selecione um status.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        // ✅ Envia tarefa_id + nome
        body: JSON.stringify({
          tarefa_id: tarefaId,
          nome:      selecionado,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso!', data.message || 'Status cadastrado.');
        setSelecionado(null);
        setTarefaId(null);
      } else {
        const erros = data.errors
          ? Object.values(data.errors).flat().join('\n')
          : data.message || 'Erro ao cadastrar.';
        Alert.alert('Erro', erros);
      }
    } catch {
      Alert.alert('Erro de conexão', 'Não foi possível conectar ao servidor.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <Text style={styles.iconText}>🏷️</Text>
        </View>
        <Text style={styles.title}>Cadastro de Status</Text>
        <Text style={styles.subtitle}>Vincule um status a uma tarefa existente</Text>
      </View>

      {/* ✅ Seleção de tarefa */}
      <View style={styles.card}>
        <Text style={styles.secaoTitulo}>1. Selecione a Tarefa</Text>

        {loadingTarefas ? (
          <ActivityIndicator color="#7c3aed" style={{ marginVertical: 16 }} />
        ) : tarefas.length === 0 ? (
          <Text style={styles.semTarefas}>Nenhuma tarefa encontrada. Cadastre uma primeiro.</Text>
        ) : (
          tarefas.map((t) => {
            const ativo = tarefaId === t.id;
            return (
              <TouchableOpacity
                key={t.id}
                style={[
                  styles.opcao,
                  {
                    borderColor: ativo ? '#7c3aed' : '#e2e8f0',
                    backgroundColor: ativo ? '#faf5ff' : '#f8fafc',
                  },
                ]}
                onPress={() => setTarefaId(t.id)}
                activeOpacity={0.7}
              >
                <View style={[styles.radio, { borderColor: ativo ? '#7c3aed' : '#cbd5e1' }]}>
                  {ativo && <View style={[styles.radioDentro, { backgroundColor: '#7c3aed' }]} />}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.opcaoTexto, { color: ativo ? '#7c3aed' : '#334155' }]}>
                    {t.titulo}
                  </Text>
                  {t.status && (
                    <Text style={styles.statusAtual}>Status atual: {t.status.nome}</Text>
                  )}
                </View>
                <Text style={styles.tarefaId}>#{t.id}</Text>
              </TouchableOpacity>
            );
          })
        )}
      </View>

      {/* Seleção de status */}
      <View style={[styles.card, { marginTop: 16 }]}>
        <Text style={styles.secaoTitulo}>2. Selecione o Status</Text>

        {OPCOES.map((op) => {
          const ativo = selecionado === op.label;
          return (
            <TouchableOpacity
              key={op.label}
              style={[
                styles.opcao,
                { borderColor: ativo ? op.cor : '#e2e8f0', backgroundColor: ativo ? op.fundo : '#f8fafc' },
              ]}
              onPress={() => setSelecionado(op.label)}
              activeOpacity={0.7}
            >
              <View style={[styles.radio, { borderColor: ativo ? op.cor : '#cbd5e1' }]}>
                {ativo && <View style={[styles.radioDentro, { backgroundColor: op.cor }]} />}
              </View>
              <Text style={[styles.opcaoTexto, { color: ativo ? op.cor : '#334155' }]}>
                {op.label}
              </Text>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          style={[
            styles.botao,
            (loading || !selecionado || !tarefaId) && styles.botaoDisabled,
          ]}
          onPress={cadastrar}
          disabled={loading || !selecionado || !tarefaId}
        >
          {loading
            ? <ActivityIndicator color="#fff" />
            : <Text style={styles.botaoTexto}>Salvar Status</Text>
          }
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8' },
  content: { padding: 20, paddingBottom: 40 },
  header: { alignItems: 'center', marginBottom: 24 },
  iconBox: {
    width: 64, height: 64, borderRadius: 18,
    backgroundColor: '#f3e8ff', alignItems: 'center',
    justifyContent: 'center', marginBottom: 12,
  },
  iconText: { fontSize: 30 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0f172a', marginBottom: 4 },
  subtitle: { fontSize: 13, color: '#64748b', textAlign: 'center' },
  card: {
    backgroundColor: '#fff', borderRadius: 16, padding: 20,
    borderWidth: 1, borderColor: '#e2e8f0',
    shadowColor: '#0f172a', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 8, elevation: 3,
  },
  secaoTitulo: {
    fontSize: 13, fontWeight: '700', color: '#7c3aed',
    marginBottom: 12, letterSpacing: 0.3,
  },
  semTarefas: {
    fontSize: 13, color: '#94a3b8', textAlign: 'center', paddingVertical: 12,
  },
  opcao: {
    flexDirection: 'row', alignItems: 'center',
    padding: 14, borderRadius: 12, borderWidth: 1.5,
    marginBottom: 10,
  },
  radio: {
    width: 20, height: 20, borderRadius: 10, borderWidth: 2,
    marginRight: 12, alignItems: 'center', justifyContent: 'center',
  },
  radioDentro: { width: 10, height: 10, borderRadius: 5 },
  opcaoTexto: { fontSize: 15, fontWeight: '600' },
  statusAtual: { fontSize: 11, color: '#94a3b8', marginTop: 2 },
  tarefaId: { fontSize: 12, color: '#cbd5e1', fontWeight: '600' },
  botao: {
    backgroundColor: '#7c3aed', paddingVertical: 15, borderRadius: 10,
    alignItems: 'center', marginTop: 8,
    shadowColor: '#7c3aed', shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3, shadowRadius: 10, elevation: 5,
  },
  botaoDisabled: { backgroundColor: '#c4b5fd', shadowOpacity: 0 },
  botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});
