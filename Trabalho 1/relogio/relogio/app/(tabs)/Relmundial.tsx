import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RelogioMundial() {
  return (
    <View style={styles.container}>

      <View style={styles.topArea}>

        <View style={styles.timeContainer}>
          <Text style={styles.time}>16:37:03</Text>
          <Text style={styles.zone}>
            Horário Padrão de Brasília
          </Text>
        </View>

        <View style={styles.actions}>
          <Text style={styles.plus}>+</Text>
          <Text style={styles.menu}>⋮</Text>
        </View>

      </View>

      <View style={styles.content}>
        <Text style={styles.empty}>
          Nenhuma cidade
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  /* TOPO */
  topArea: {
    marginTop: 70,
    paddingHorizontal: 20,
  },

  timeContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  time: {
    color: "#f5a5ad",
    fontSize: 44, 
    fontWeight: "300",
  },

  zone: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "400",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
    marginTop: 10,
  },

  plus: {
    color: "#f5a5ad",
    fontSize: 28,
  },

  menu: {
    color: "#f5a5ad",
    fontSize: 28,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  empty: {
    color: "#f5a5ad",
    fontSize: 18,
    marginTop: 40,
    fontWeight: "400",
  },
});