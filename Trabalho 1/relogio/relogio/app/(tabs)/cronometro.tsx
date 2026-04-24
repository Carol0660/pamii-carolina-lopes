import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Cronometro() {
  return (
    <View style={styles.container}>

      <Text style={styles.menu}>⋮</Text>

      <Text style={styles.time}>00:00.00</Text>

      <View style={styles.buttons}>

        <View style={styles.buttonLeft}>
          <Text style={styles.textLeft}>Volta</Text>
        </View>

        <View style={styles.buttonRight}>
          <Text style={styles.textRight}>Iniciar</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },

  menu: {
    position: "absolute",
    top: 55,
    right: 20,
    color: "#f5a5ad",
    fontSize: 28,
  },

  time: {
    color: "#f5a5ad",
    fontSize: 56,
    fontWeight: "300",
    marginTop: 180,
  },

  buttons: {
    position: "absolute",
    bottom: 70, 
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    gap: 12,
  },

  buttonLeft: {
    flex: 1,
    backgroundColor: "#222",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
  },

  buttonRight: {
    flex: 1,
    backgroundColor: "#f5a5ad",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
  },

  textLeft: {
    color: "#888",
    fontSize: 16,
  },

  textRight: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
});