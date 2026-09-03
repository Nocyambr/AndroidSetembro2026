import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Login.styles";

export function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TELA DE LOGIN</Text>
      <Text style={styles.subtitulo}>Bem-vindo de volta!</Text>

      <TouchableOpacity
        style={styles.botaoEntrar}
        activeOpacity={0.7}
        onPress={() => navigation.replace("Dashboard")}
      >
        <Text style={styles.textoEntrar}>ENTRAR NO DASHBOARD</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>⬅ VOLTAR AO CADASTRO</Text>
      </TouchableOpacity>
    </View>
  );
}
