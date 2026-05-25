import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.hero}>
        <Text style={styles.heroLabel}>✦ Organize. Foque. Conquiste.</Text>
        <Text style={styles.title}>Gerenciador{'\n'}PrjToDo</Text>
        <Text style={styles.subtitle}>
          Sua ferramenta simples e eficiente para organizar as tarefas do dia a dia.
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate('Tarefas')}
        >
          <Text style={styles.buttonPrimaryText}>Ver Minhas Tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => navigation.navigate('Desenvolvedores')}
        >
          <Text style={styles.buttonOutlineText}>Ver Desenvolvedores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => navigation.navigate('Cep')}
        >
          <Text style={styles.buttonOutlineText}>Consultar CEP</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 32,
  },
  hero: {
    flex: 1,
    justifyContent: 'center',
  },
  heroLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2563eb',
    letterSpacing: 1,
    textTransform: 'uppercase',
    backgroundColor: '#eff6ff',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
    marginBottom: 20,
    overflow: 'hidden',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#0f172a',
    letterSpacing: -1,
    lineHeight: 44,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748b',
    lineHeight: 22,
  },
  buttons: {
    gap: 12,
  },
  buttonPrimary: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  buttonPrimaryText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonOutline: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#bfdbfe',
  },
  buttonOutlineText: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '600',
  },
});