import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    if (usuario.trim() === 'admin' && senha.trim() === 'admin') {
      navigation.replace('MainTabs');
    } else {
      console.log('Usuário ou senha inválidos');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          value={usuario}
          onChangeText={setUsuario}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity onPress={entrar} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7D54A',
  },
  topArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5C4300',
  },
  subtitle: {
    fontSize: 16,
    color: '#7A5A00',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#FFF8EA',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    paddingBottom: 40,
  },
  label: {
    fontSize: 15,
    color: '#7A5A00',
    marginBottom: 8,
    marginTop: 10,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF2CC',
    borderWidth: 1,
    borderColor: '#F2C94C',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#5C4300',
  },
  button: {
    backgroundColor: '#F2A51A',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#FFF8EA',
    fontSize: 18,
    fontWeight: 'bold',
  },
});