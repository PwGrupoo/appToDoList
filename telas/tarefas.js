import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const DATA = [
  { id: '1', title: 'Estudar React Native' },
  { id: '2', title: 'Fazer atividade do professor' },
  { id: '3', title: 'Criar layout do app' },
  { id: '4', title: 'Testar navegação' },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Tarefas() {
  return (
    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fceeb4',
    paddingTop: 20,
  },

  item: {
    backgroundColor: '#FFF8EA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    elevation: 3,
  },

  title: {
    fontSize: 16,
    color: '#5C4300',
    fontWeight: '600',
  },

  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F2A51A',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },

  floatingButtonText: {
    fontSize: 30,
    color: '#FFF8EA',
  },
});