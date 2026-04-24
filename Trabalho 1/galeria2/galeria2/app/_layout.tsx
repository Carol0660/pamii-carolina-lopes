import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
    return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
            backgroundColor: '#000',
            borderTopColor: '#111',
            },
            tabBarActiveTintColor: '#f5a3ad',
            tabBarInactiveTintColor: '#aaa',
        }}
        >
        <Tabs.Screen
            name="index"
            options={{
            title: 'Fotos',
            tabBarIcon: ({ color }) => (
                <FontAwesome name="photo" size={24} color={color} />
            ),
            tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 12 }}>Fotos</Text>
            ),
            }}
        />

        <Tabs.Screen
            name="albuns"
            options={{
            title: 'Álbuns',
            tabBarIcon: ({ color }) => (
                <Ionicons name="journal" size={24} color={color} />
            ),
            tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 12 }}>Álbuns</Text>
            ),
            }}
        />

        <Tabs.Screen
            name="historias"
            options={{
            title: 'Histórias',
            tabBarIcon: ({ color }) => (
                <AntDesign name="book" size={24} color={color} />
            ),
            tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 12 }}>Histórias</Text>
            ),
            }}
        />

        <Tabs.Screen
            name="menu"
            options={{
            title: 'Menu',
            tabBarIcon: ({ color }) => (
                <AntDesign name="menu" size={24} color={color} />
            ),
            tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 12 }}>Menu</Text>
            ),
            }}
        />
        </Tabs>
    );
    }