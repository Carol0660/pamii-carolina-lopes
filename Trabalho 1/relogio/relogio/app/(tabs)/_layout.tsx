import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopColor: "#111",
        },
        tabBarActiveTintColor: "#f5a5ad",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Alarme',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alarm" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Relmundial"
        options={{
          title: 'Rel. Mundial',
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="world-o" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cronometro"
        options={{
          title: 'Cronômetro',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timer-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="temporizador"
        options={{
          title: 'Temporizador',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="hourglass-3" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}