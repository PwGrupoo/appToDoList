import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Alert, ActivityIndicator,
} from 'react-native';

const API_URL = 'http://192.168.15.5:8000/api';

export default function CadastroTarefa() {
  const [usuarioId, setUsuarioId] = useState('');
  const [titulo, setTitulo]       = useState('');
  const [descricao, setDescricao] = useState('');
  const [loading, setLoading]     = useState(false);

  async function cadastrar() {
    if (!usuarioId.trim() || !titulo.trim()) {
      Alert.alert('Atenção', 'ID do usuário e título são obrigatórios.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/tarefas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          txId:        usuarioId,
          txTitulo:    titulo,
          txDescricao: descricao,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso!', data.message || 'Tarefa cadastrada.');
        setUsuarioId('');
        setTitulo('');
        setDescricao('');
      } else {
        const erros = data.errors
          ? Object.values(data.errors).flat().join('\n')
          : data.message || 'Erro ao cadastrar.';
        Alert.alert('Erro', erros);
      }
    } catch (e) {
      Alert.alert('Erro de conexão', 'Não foi possível conectar ao servidor.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <Text style={styles.iconText}>📋</Text>
        </View>
        <Text style={styles.title}>Cadastro de Tarefa</Text>
        <Text style={styles.subtitle}>Crie uma nova tarefa vinculada a um usuário</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>ID do Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 1"
          placeholderTextColor="#94a3b8"
          value={usuarioId}
          onChangeText={setUsuarioId}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Título da Tarefa</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Estudar React Native"
          placeholderTextColor="#94a3b8"
          value={titulo}
          onChangeText={setTitulo}
        />

        <Text style={styles.label}>Descrição (opcional)</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Descreva os detalhes da tarefa..."
          placeholderTextColor="#94a3b8"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        <TouchableOpacity
          style={[styles.botao, loading && styles.botaoDisabled]}
          onPress={cadastrar}
          disabled={loading}
        >
          {loading
            ? <ActivityIndicator color="#fff" />
            : <Text style={styles.botaoTexto}>Cadastrar Tarefa</Text>
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
    backgroundColor: '#fef9c3', alignItems: 'center',
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
  label: {
    fontSize: 13, fontWeight: '700', color: '#334155',
    marginBottom: 6, marginTop: 14, letterSpacing: 0.2,
  },
  input: {
    backgroundColor: '#f8fafc', borderWidth: 1.5, borderColor: '#e2e8f0',
    borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 15, color: '#0f172a',
  },
  textarea: { height: 100, paddingTop: 12 },
  botao: {
    backgroundColor: '#d97706', paddingVertical: 15, borderRadius: 10,
    alignItems: 'center', marginTop: 24,
    shadowColor: '#d97706', shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3, shadowRadius: 10, elevation: 5,
  },
  botaoDisabled: { backgroundColor: '#fcd34d' },
  botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});