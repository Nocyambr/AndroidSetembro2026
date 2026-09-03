import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
    color: "#ffff",
  },

  subtitulo: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
  },

  imagem: {
    width: "100%",
    resizeMode: "contain",
  },

  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0 ,0, 0, 0.4)",
  },
});
