import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cep() {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>CEP</Text>
      <TextInput style={styles.input} value={cep} onChangeText={setCep} />

      <Text style={styles.label}>Logradouro</Text>
      <TextInput style={styles.input} value={logradouro} onChangeText={setLogradouro} />

      <Text style={styles.label}>Número</Text>
      <TextInput style={styles.input} value={numero} onChangeText={setNumero} />

      <Text style={styles.label}>Complemento</Text>
      <TextInput style={styles.input} value={complemento} onChangeText={setComplemento} />

      <Text style={styles.label}>Bairro</Text>
      <TextInput style={styles.input} value={bairro} onChangeText={setBairro} />

      <Text style={styles.label}>Cidade</Text>
      <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />

      <Text style={styles.label}>Estado</Text>
      <TextInput style={styles.input} value={estado} onChangeText={setEstado} />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fceeb4',
    padding: 20,
  },

  label: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#5C4300',
  },

  input: {
    backgroundColor: '#FFF8EA',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },

  botao: {
    backgroundColor: '#F2A51A',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});