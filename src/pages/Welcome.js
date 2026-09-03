import { useEffect } from "react";
import { Text, View, ImageBackground, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Welcome.styles";

export function Welcome({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Cadastro");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/fundo.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="light-content"
            />
            <View style={styles.subtitulo}>
              <Text style={styles.titulo}>Aulas de Terças e Quintas</Text>
              <Text style={styles.titulo}>3º Médio</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
