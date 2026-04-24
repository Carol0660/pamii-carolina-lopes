import { View, Text, StyleSheet, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function Albuns() {
    return (
        <View style={styles.container}>


        <Text style={styles.title}>Álbuns</Text>

 
        <View style={styles.icons}>
            <Entypo name="plus" size={24} color="#f5a3ad" />
            <Entypo name="magnifying-glass" size={24} color="#f5a3ad" />
            <Entypo name="dots-three-vertical" size={24} color="#f5a3ad" />
        </View>


        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Álbuns essenciais</Text>
            <Text style={styles.seeAll}>Ver tudo</Text>
        </View>


        <View style={styles.grid}>

            {[
            "Recentes",
            "Câmera",
            "Captura de tela",
            "Favoritos",
            "Baixar",
            "Animes",
            ].map((item, index) => (
            <View key={index} style={styles.card}>

                <Image
                source={{ uri: "https://picsum.photos/200" }}
                style={styles.image}
                />

                <Text style={styles.albumName}>{item}</Text>
                <Text style={styles.albumCount}>1</Text>

            </View>
            ))}

        </View>

        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },

    title: {
        position: 'absolute',
        top: 130,
        alignSelf: 'center',
        color: '#f5a3ad',
        fontSize: 30,
        fontWeight: '300',
    },

    icons: {
        position: 'absolute',
        right: 20,
        top: 275,
        flexDirection: 'row',
        gap: 22,
    },

    sectionHeader: {
        marginTop: 330, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
    },

    sectionTitle: {
        color: '#f5a3ad',
        fontSize: 18,
    },

    seeAll: {
        color: '#f5a3ad',
        fontSize: 14, 
    },

    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },

    card: {
        width: '32%',
        marginBottom: 25,
    },

    image: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 20, 
        backgroundColor: '#222',
    },

    albumName: {
        color: '#f5a3ad',
        marginTop: 8,
        fontSize: 15,
    },

    albumCount: {
        color: '#aaa',
        fontSize: 13,
    },
    });