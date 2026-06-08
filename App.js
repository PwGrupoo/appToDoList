import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './telas/splash';
import Login from './telas/login';
import Home from './telas/home';
import Tarefas from './telas/tarefas';
import Desenvolvedores from './telas/desenvolvedores';
import Cep from './telas/cep';

// Novas telas de cadastro
import CadastroUsuario from './telas/CadastroUsuario';
import CadastroTarefa from './telas/CadastroTarefa';
import CadastroStatus from './telas/CadastroStatus';

const Stack = createNativeStackNavigator();

// Opções de header padrão (evita repetição)
const headerAzul = {
  headerStyle: { backgroundColor: '#2563eb' },
  headerTintColor: '#ffffff',
  headerTitleStyle: { fontWeight: 'bold' },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'PrjToDo', ...headerAzul }}
        />

        <Stack.Screen
          name="Tarefas"
          component={Tarefas}
          options={{ title: 'Minhas Tarefas', ...headerAzul }}
        />

        <Stack.Screen
          name="Desenvolvedores"
          component={Desenvolvedores}
          options={{ title: 'Desenvolvedores', ...headerAzul }}
        />

        <Stack.Screen
          name="Cep"
          component={Cep}
          options={{ title: 'Consultar CEP', ...headerAzul }}
        />

        {/* ---- Telas de Cadastro (POST para a API) ---- */}
        <Stack.Screen
          name="CadastroUsuario"
          component={CadastroUsuario}
          options={{ title: 'Cadastrar Usuário', ...headerAzul }}
        />

        <Stack.Screen
          name="CadastroTarefa"
          component={CadastroTarefa}
          options={{ title: 'Cadastrar Tarefa', ...headerAzul }}
        />

        <Stack.Screen
          name="CadastroStatus"
          component={CadastroStatus}
          options={{ title: 'Cadastrar Status', ...headerAzul }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}