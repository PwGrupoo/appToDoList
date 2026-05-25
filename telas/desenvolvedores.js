import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const DATA = [
  { id: '1', nome: 'Gustavo', imagem: require('../assets/gustavo.png') },
  { id: '2', nome: 'Leonni', imagem: require('../assets/leonni.png') },
  { id: '3', nome: 'Henzo', imagem: require('../assets/henzo.png') },
  { id: '4', nome: 'Matheus', imagem: require('../assets/matheus.png') },
];

const Item = ({ nome, imagem }) => (
  <View style={styles.item}>
    <Image source={imagem} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.role}>Desenvolvedor</Text>
    </View>
  </View>
);

export default function Desenvolvedores() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item nome={item.nome} imagem={item.imagem} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
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
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#bfdbfe',
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  role: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
});