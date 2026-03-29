import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([
    { id: '1', title: 'Estudar React Native', data: '30/03/2026', concluida: false },
    { id: '2', title: 'Fazer atividade do professor', data: '31/03/2026', concluida: false },
    { id: '3', title: 'Criar layout do app', data: '01/04/2026', concluida: true },
    { id: '4', title: 'Testar navegação', data: '02/04/2026', concluida: false },
  ]);

  function marcarTarefa(id) {
    const listaNova = tarefas.map(function (item) {
      if (item.id === id) {
        return {
          ...item,
          concluida: !item.concluida,
        };
      } else {
        return item;
      }
    });

    setTarefas(listaNova);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => marcarTarefa(item.id)}
          >
            <Text style={styles.checkbox}>
              {item.concluida ? '☑' : '☐'}
            </Text>

            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.data}>{item.data}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8da',
    paddingTop: 20,
  },

  item: {
    backgroundColor: '#FFF8EA',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    fontSize: 22,
    color: '#F2A51A',
    marginRight: 12,
  },

  title: {
    fontSize: 16,
    color: '#5C4300',
    fontWeight: 'bold',
  },

  data: {
    fontSize: 13,
    color: '#7A5A00',
    marginTop: 4,
  },

  botao: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#F2A51A',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoTexto: {
    fontSize: 30,
    color: '#FFF8EA',
  },
});