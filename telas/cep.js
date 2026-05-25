import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Cep() {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.card}>
        {[
          { label: 'CEP', value: cep, setter: setCep },
          { label: 'Logradouro', value: logradouro, setter: setLogradouro },
          { label: 'Número', value: numero, setter: setNumero },
          { label: 'Complemento', value: complemento, setter: setComplemento },
          { label: 'Bairro', value: bairro, setter: setBairro },
          { label: 'Cidade', value: cidade, setter: setCidade },
          { label: 'Estado', value: estado, setter: setEstado },
        ].map(({ label, value, setter }) => (
          <View key={label} style={styles.group}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={setter}
              placeholderTextColor="#94a3b8"
            />
          </View>
        ))}

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  group: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    borderRadius: 9,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 15,
    color: '#0f172a',
  },
  botao: {
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});