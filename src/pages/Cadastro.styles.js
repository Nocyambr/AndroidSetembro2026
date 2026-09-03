import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#090d16",
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "center",
  },
  headerBox: {
    alignItems: "center",
    marginBottom: 30,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00d2ff",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 14,
    color: "#ffffff",
  },
  formCard: {
    backgroundColor: "#131c2e",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  label: {
    color: "#cbd5e1",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#090d16",
    color: "#ffffff",
    padding: 14,
    borderRadius: 8,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#334155",
  },
  botaoCadastro: {
    backgroundColor: "#00d2ff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
  },
  textoBotao: {
    color: "#090d16",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 1,
  },
  linkLogin: {
    marginTop: 20,
    alignItems: "center",
  },
  textoLink: {
    color: "#ffffff",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
