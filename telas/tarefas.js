import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

// ⚠️ Troque pelo seu IP local (rode "ipconfig" no Windows ou "ifconfig" no Mac/Linux)
const API_URL = 'http://192.168.15.7:8000/api';

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    buscarTarefas();
  }, []);

  async function buscarTarefas() {
    try {
      setCarregando(true);
      setErro(null);
      const response = await fetch(`${API_URL}/tarefas`, {
        headers: { 'Accept': 'application/json' },
      });
      const data = await response.json();
      // Adiciona campo local "concluida" que não existe ainda no banco
      const formatadas = data.map(t => ({ ...t, concluida: false }));
      setTarefas(formatadas);
    } catch (e) {
      setErro('Não foi possível conectar à API.\nVerifique o IP e se o Laravel está rodando.');
    } finally {
      setCarregando(false);
    }
  }

  function marcarTarefa(id) {
    const listaNova = tarefas.map(function (item) {
      if (item.id === id) {
        return { ...item, concluida: !item.concluida };
      } else {
        return item;
      }
    });
    setTarefas(listaNova);
  }

  if (carregando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>Carregando tarefas...</Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.center}>
        <Text style={styles.erroTexto}>{erro}</Text>
        <TouchableOpacity style={styles.botaoRetentar} onPress={buscarTarefas}>
          <Text style={styles.botaoRetentarTexto}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, item.concluida && styles.itemConcluida]}
            onPress={() => marcarTarefa(item.id)}
            activeOpacity={0.7}
          >
            <View style={[styles.checkCircle, item.concluida && styles.checkCircleActive]}>
              {item.concluida && <Text style={styles.checkMark}>✓</Text>}
            </View>

            <View style={styles.info}>
              <Text style={[styles.title, item.concluida && styles.titleConcluida]}>
                {item.titulo}
              </Text>
              <Text style={styles.descricao} numberOfLines={1}>
                {item.descricao}
              </Text>
            </View>

            <View style={[styles.badge, item.concluida ? styles.badgeConcluida : styles.badgePendente]}>
              <Text style={[styles.badgeText, item.concluida ? styles.badgeTextConcluida : styles.badgeTextPendente]}>
                {item.concluida ? 'Concluída' : 'Pendente'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabTexto}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  center: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  loadingText: {
    marginTop: 14,
    fontSize: 14,
    color: '#64748b',
  },
  erroTexto: {
    fontSize: 14,
    color: '#ef4444',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  botaoRetentar: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  botaoRetentarTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  item: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  itemConcluida: {
    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#cbd5e1',
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircleActive: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  checkMark: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    color: '#0f172a',
    fontWeight: '600',
  },
  titleConcluida: {
    color: '#94a3b8',
    textDecorationLine: 'line-through',
  },
  descricao: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 3,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgePendente: {
    backgroundColor: '#fef3c7',
  },
  badgeConcluida: {
    backgroundColor: '#d1fae5',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  badgeTextPendente: {
    color: '#92400e',
  },
  badgeTextConcluida: {
    color: '#065f46',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 24,
    backgroundColor: '#2563eb',
    width: 58,
    height: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  fabTexto: {
    fontSize: 28,
    color: '#ffffff',
    lineHeight: 32,
  },
});