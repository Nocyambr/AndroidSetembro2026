import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090d16",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00d2ff",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 30,
  },
  botaoEntrar: {
    backgroundColor: "#00a6d6",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    marginBottom: 12,
  },
  textoEntrar: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  botaoVoltar: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  textoBotao: {
    color: "#00d2ff",
    fontWeight: "bold",
  },
});
