import { StyleSheet } from "react-native";
import { colors } from "../themes/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 22,
  },

  label: {
    color: colors.textMuted || "#cbd5e1",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  input: {
    backgroundColor: colors.background || "#090d16",
    color: colors.textPrimary || "#ffffff",
    padding: 14,
    borderRadius: 8,
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.borderInput || "#334155",
  },
});
