import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const numColumns = 7;
const spacing = 2;
const size =
  (Dimensions.get('window').width - spacing * (numColumns - 1)) / numColumns;

const data = Array.from({ length: 140 });

export default function Fotos() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Fotos</Text>

        <View style={styles.icons}>
          <Entypo name="cloud" size={24} color="#f5a3ad" />
          <Entypo name="magnifying-glass" size={24} color="#f5a3ad" />
          <Entypo name="dots-three-vertical" size={24} color="#f5a3ad" />
        </View>
      </View>

      {/* DATA */}
      <Text style={styles.date}>mar. de 2026</Text>

      {/* GRID */}
      <FlatList
        data={data}
        numColumns={numColumns}
        keyExtractor={(_, i) => i.toString()}
        columnWrapperStyle={{ gap: spacing }}
        renderItem={() => (
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={styles.image}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  header: {
    paddingTop: 130,
    alignItems: 'center',
  },

  title: {
    color: '#f5a3ad',
    fontSize: 30,
    fontWeight: '300',
  },

  icons: {
    position: 'absolute',
    right: 20,
    top: 275, // 👈 levemente mais baixo
    flexDirection: 'row',
    gap: 22,
  },

  date: {
    marginTop: 180,
    marginLeft: 15,
    marginBottom: 10,
    color: '#f5a3ad',
    fontSize: 14,
  },

  image: {
    width: size,
    height: size,
    marginBottom: spacing,
  },
});