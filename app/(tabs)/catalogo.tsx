import { StyleSheet, Pressable, FlatList, Image } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Card } from 'react-native-paper';

const items = [
  { id: '1', title: 'Equipo de grabación', image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '2', title: 'Dron miniatura', image: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '3', title: 'AMD RX 7600 XT', image: 'https://m.media-amazon.com/images/I/71ft8gTPbUL._AC_SL1500_.jpg' },
];

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Productos</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }} // Asegura que los cards se distribuyan equitativamente en la fila
        contentContainerStyle={{ paddingHorizontal: 10 }} // Agrega un padding horizontal a la lista para evitar que los cards toquen los bordes de la pantalla
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.image }} /> 
            <View style={styles.textContainer}> 
              <Text style={styles.cardText}>{item.title}</Text> 
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  boxitem: {
    width: '15%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  card: {
    width: '45%',
    marginVertical: 10, // Agrega un margen vertical para separar los cards verticalmente
    marginHorizontal: 5, // Agrega un margen horizontal para separar los cards horizontalmente
  },
  textContainer: {
    position: 'absolute', // Coloca el texto encima de la imagen
    bottom: 0, // Alinea el texto con la parte inferior del card
    width: '100%', // Asegura que el contenedor del texto ocupe todo el ancho del card
    backgroundColor: 'rgba(0,0,0,0.5)', // Fondo semi-transparente
    padding: 5,
  },
  cardText: {
    color: 'white',
  }
});
