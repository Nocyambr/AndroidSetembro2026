import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../pages/Welcome";
import { Cadastro } from "../pages/Cadastro";
import { Login } from "../pages/Login";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
