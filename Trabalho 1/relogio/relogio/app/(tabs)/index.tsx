import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Alarme() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Alarme</Text>

        <View style={styles.actions}>
          <Text style={styles.plus}>+</Text>
          <Text style={styles.menu}>⋮</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.empty}>Nenhum alarme</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  header: {
    marginTop: 80, 
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#f8a1a8", 
    fontSize: 32,
    fontWeight: "300",
    position: "absolute",
    left: 0,
    right: 0,
    textAlign:"center",
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15, 
  },

  plus: {
    color: "#f8a1a8",
    fontSize: 28,
  },

  menu: {
    color: "#f8a1a8",
    fontSize: 28,
  },

  /* CONTEÚDO */
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  empty: {
    color: "#f8a1a8",
    fontSize: 18,
  },
});