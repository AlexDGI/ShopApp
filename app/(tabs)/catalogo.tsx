import { FlatList, StyleSheet, TouchableOpacity, Image, Button, ImageProps } from 'react-native';
import { Text, View } from '../../components/Themed';
import { SetStateAction, useState } from 'react';
import Modal from 'react-native-modal';


type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagen: ImageProps;
};

const productos: Producto[] = [
  { id: 1, nombre: 'Arco de fibra', precio: 587, imagen: require('../../assets/images/arco_.jpg') },
  { id: 2, nombre: 'AMD RX 7600', precio: 778, imagen: require('../../assets/images/amd_radeon_7600.jpg') },
  { id: 3, nombre: 'ssd NVME WD BLACK', precio: 958, imagen: require('../../assets/images/ssdNvmeWD.jpg') },
];


export default function TabTwoScreen() {
  const [listaProductos, setListaProductos] = useState(productos);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const toggleModal = (product: SetStateAction<null>) => {
    setSelectedProduct(product);
    setModalVisible(!modalVisible);
  };

  const renderCard = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => {
        toggleModal(item); // Abre el modal y pasa el producto seleccionado
      }}
      style={styles.card}
    >
      <Image
        source={item.imagen}
        style={styles.cardImage}
      />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{item.nombre}</Text>
        <Text style={styles.cardPrice}>${item.precio}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>
        Catálogo de Productos
      </Text>
      <FlatList
        data={listaProductos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
      />

      <Modal isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          {selectedProduct && (
            <>
              <Image
                source={selectedProduct.imagen}
                style={styles.modalImage}
              />
              <Text style={styles.modalTextTittle}>Nombre:</Text>
              <Text style={styles.modalText}>{selectedProduct.nombre}</Text>
              <Text style={styles.modalTextTittle}>Precio:</Text>
              <Text style={styles.modalText}>{selectedProduct.precio}</Text>
              <Button title="Cerrar Modal" onPress={() => toggleModal(null)} />
            </>
          )}
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cardImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
  },
  cardPrice: {
    fontSize: 14,
    color: 'gray',
  },
  modalContainer: {
    alignItems: 'center', // Centra el contenido verticalmente
    justifyContent: 'center', // Centra el contenido horizontalmente
  },
  modalImage: {
    position: 'relative',
    width: '100%', // Usa el 100% del ancho disponible
    height: 300
  },
  modalText: {
    fontSize: 25
  },
  modalTextTittle: {
    fontSize: 30
  }

});