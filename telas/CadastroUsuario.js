import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Alert, ActivityIndicator,
} from 'react-native';

const API_URL = 'http://192.168.15.5:8000/api';

export default function CadastroUsuario() {
  const [nome, setNome]   = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function cadastrar() {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          txNome:  nome,
          txEmail: email,
          txSenha: senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso!', data.message || 'Usuário cadastrado.');
        setNome('');
        setEmail('');
        setSenha('');
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
          <Text style={styles.iconText}>👤</Text>
        </View>
        <Text style={styles.title}>Cadastro de Usuário</Text>
        <Text style={styles.subtitle}>Preencha os dados para criar um novo usuário</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: João Silva"
          placeholderTextColor="#94a3b8"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: joao@email.com"
          placeholderTextColor="#94a3b8"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Mínimo 4 caracteres"
          placeholderTextColor="#94a3b8"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity
          style={[styles.botao, loading && styles.botaoDisabled]}
          onPress={cadastrar}
          disabled={loading}
        >
          {loading
            ? <ActivityIndicator color="#fff" />
            : <Text style={styles.botaoTexto}>Cadastrar Usuário</Text>
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
    backgroundColor: '#dbeafe', alignItems: 'center',
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
  botao: {
    backgroundColor: '#2563eb', paddingVertical: 15, borderRadius: 10,
    alignItems: 'center', marginTop: 24,
    shadowColor: '#2563eb', shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3, shadowRadius: 10, elevation: 5,
  },
  botaoDisabled: { backgroundColor: '#93c5fd' },
  botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});