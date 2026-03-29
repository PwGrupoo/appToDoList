import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tarefas')}
      >
        <Text style={styles.buttonText}>Ir para Tarefas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Desenvolvedores')}
      >
        <Text style={styles.buttonText}>Ver Desenvolvedores</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cep')}
      >
        <Text style={styles.buttonText}>Ir para CEP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fceeb4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5C4300',
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#F2A51A',
    padding: 16,
    borderRadius: 16,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFF8EA',
    fontSize: 16,
    fontWeight: 'bold',
  },
});