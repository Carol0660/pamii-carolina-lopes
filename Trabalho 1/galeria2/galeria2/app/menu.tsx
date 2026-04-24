import { View, Text, StyleSheet } from 'react-native';

export default function Albums() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>João Siles Lindão ❤️</Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#f5a3ad',
        fontSize: 28,
    },
    });
