import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './telas/splash';
import Login from './telas/login';
import Home from './telas/home';
import Tarefas from './telas/tarefas';
import Desenvolvedores from './telas/desenvolvedores';
import Cep from './telas/cep';

const Stack = createNativeStackNavigator();

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
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#F7D54A',
            },
            headerTintColor: '#5C4300',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Tarefas"
          component={Tarefas}
          options={{
            title: 'Tarefas',
            headerStyle: {
              backgroundColor: '#F7D54A',
            },
            headerTintColor: '#5C4300',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Desenvolvedores"
          component={Desenvolvedores}
          options={{
            title: 'Desenvolvedores',
            headerStyle: {
              backgroundColor: '#F7D54A',
            },
            headerTintColor: '#5C4300',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Cep"
          component={Cep}
          options={{
            title: 'CEP',
            headerStyle: {
              backgroundColor: '#F7D54A',
            },
            headerTintColor: '#5C4300',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}