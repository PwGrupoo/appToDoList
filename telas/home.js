import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.hero}>
        <Text style={styles.heroLabel}>✦ Organize. Foque. Conquiste.</Text>
        <Text style={styles.title}>Gerenciador{'\n'}PrjToDo</Text>
        <Text style={styles.subtitle}>
          Sua ferramenta simples e eficiente para organizar as tarefas do dia a dia.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Cadastros</Text>

      <TouchableOpacity
        style={[styles.card, { borderLeftColor: '#2563eb' }]}
        onPress={() => navigation.navigate('CadastroUsuario')}
      >
        <Text style={styles.cardIcon}>👤</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Cadastrar Usuário</Text>
          <Text style={styles.cardSub}>Adicione um novo usuário ao sistema</Text>
        </View>
        <Text style={styles.cardArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, { borderLeftColor: '#d97706' }]}
        onPress={() => navigation.navigate('CadastroTarefa')}
      >
        <Text style={styles.cardIcon}>📋</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Cadastrar Tarefa</Text>
          <Text style={styles.cardSub}>Crie e organize suas tarefas</Text>
        </View>
        <Text style={styles.cardArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, { borderLeftColor: '#7c3aed' }]}
        onPress={() => navigation.navigate('CadastroStatus')}
      >
        <Text style={styles.cardIcon}>🏷️</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Cadastrar Status</Text>
          <Text style={styles.cardSub}>Defina os status das tarefas</Text>
        </View>
        <Text style={styles.cardArrow}>›</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Consultas</Text>

      <TouchableOpacity
        style={[styles.card, { borderLeftColor: '#0891b2' }]}
        onPress={() => navigation.navigate('Tarefas')}
      >
        <Text style={styles.cardIcon}>📂</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Ver Tarefas</Text>
          <Text style={styles.cardSub}>Acompanhe todas as suas tarefas</Text>
        </View>
        <Text style={styles.cardArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, { borderLeftColor: '#64748b' }]}
        onPress={() => navigation.navigate('Desenvolvedores')}
      >
        <Text style={styles.cardIcon}>👥</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Desenvolvedores</Text>
          <Text style={styles.cardSub}>Equipe do projeto</Text>
        </View>
        <Text style={styles.cardArrow}>›</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8' },
  content: { paddingHorizontal: 20, paddingTop: 48, paddingBottom: 40 },
  hero: { marginBottom: 32 },
  heroLabel: {
    fontSize: 11, fontWeight: '700', color: '#2563eb',
    letterSpacing: 1, textTransform: 'uppercase',
    backgroundColor: '#eff6ff', alignSelf: 'flex-start',
    paddingHorizontal: 12, paddingVertical: 5, borderRadius: 999,
    marginBottom: 16, overflow: 'hidden',
  },
  title: {
    fontSize: 36, fontWeight: 'bold', color: '#0f172a',
    letterSpacing: -1, lineHeight: 42, marginBottom: 12,
  },
  subtitle: { fontSize: 14, color: '#64748b', lineHeight: 22 },
  sectionTitle: {
    fontSize: 12, fontWeight: '800', color: '#94a3b8',
    letterSpacing: 1.5, textTransform: 'uppercase',
    marginBottom: 10, marginTop: 4,
  },
  card: {
    backgroundColor: '#fff', borderRadius: 14, padding: 16,
    flexDirection: 'row', alignItems: 'center',
    marginBottom: 10, borderLeftWidth: 4,
    borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1,
    borderTopColor: '#e2e8f0', borderRightColor: '#e2e8f0', borderBottomColor: '#e2e8f0',
    shadowColor: '#0f172a', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05, shadowRadius: 4, elevation: 2,
  },
  cardIcon: { fontSize: 26, marginRight: 14 },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#0f172a' },
  cardSub: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
  cardArrow: { fontSize: 22, color: '#cbd5e1', fontWeight: 'bold' },
});