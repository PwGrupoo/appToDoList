import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    nome: 'Gustavo',
    imagem: ('../assets/dev1.png'),
  },
  {
    id: '2',
    nome: 'Leonni',
    imagem: ('../assets/dev2.png'),
  },
  {
    id: '3',
    nome: 'Henzo',
    imagem: ('../assets/dev3.png'),
  },
  {
    id: '4',
    nome: 'Matheus',
    imagem: ('../assets/dev4.png'),
  },
];

const Item = ({ nome, imagem }) => (
  <View style={styles.item}>
    <Image source={imagem} style={styles.image} />
    <Text style={styles.nome}>{nome}</Text>
  </View>
);

export default function Desenvolvedores() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item nome={item.nome} imagem={item.imagem} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
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
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 3,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C4300',
  },
});