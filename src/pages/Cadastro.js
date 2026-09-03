import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Cadastro.styles";
import { useState } from "react";

import { CustomInput } from "../components/CustomInput";

export function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function handleCadastro() {
    //Verificar se há campos vazios ou preenchidos apenas com espaços.
    if (!email.trim() || !senha.trim() || !confirmarSenha.trim()) {
      Alert.alert(
        "Campos incompletos",
        "Por favor, preencha todos os campos do formulário.",
      );
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert(
        "E-mail inválido",
        "Por favor, digite um endereço de email válido.",
      );
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Senha fraca", "A senha deve conter no mínimo 6 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert(
        "Senhas divergentes",
        "A confirmação da senha não confere com a senha digitada",
      );
      return;
    }

    Alert.alert("Parabéns!", "Conta criada com sucesso", [
      {
        text: "Ir para o login",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#090d16" }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerBox}>
          <Text style={styles.titulo}>CRIAR CONTA</Text>
          <Text style={styles.subtitulo}>
            Preencha os dados para se cadastrar
          </Text>
        </View>

        <View style={styles.formCard}>
          <CustomInput
            label="E-MAIL INSTITUCIONAL"
            placeholder="seu.nome@aluno.senai.br"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput
            label="SENHA"
            placeholder="******"
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />

          <CustomInput
            label="CONFIRMAR SENHA"
            placeholder="******"
            secureTextEntry={true}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <TouchableOpacity
            style={styles.botaoCadastro}
            activeOpacity={0.6}
            onPress={handleCadastro}
          >
            <Text style={styles.textoBotao}>CADASTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkLogin}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textoLink}>Já tem uma conta? Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
