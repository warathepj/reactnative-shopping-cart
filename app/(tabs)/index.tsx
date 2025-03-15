import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';

const PRODUCTS = [
  { 
    id: '1', 
    name: 'Product 1', 
    price: 10,
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  { 
    id: '2', 
    name: 'Product 2', 
    price: 20,
    image: 'https://images.unsplash.com/photo-1588131153911-a4ea5189fe19?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  { 
    id: '3', 
    name: 'Product 3', 
    price: 15,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      {item.image && (
        <Image 
          source={{ uri: item.image }} 
          style={styles.productImage}
          resizeMode="cover"
        />
      )}
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  const getTotal = () => cart.reduce((total, product) => total + product.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shopping Cart</Text>
        <View style={styles.cartIconContainer}>
          <IconSymbol name="cart.fill" size={24} color="#fff" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cart.length}</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
      <View style={styles.cart}>
        <Text style={styles.cartText}>Items in Cart: {cart.length}</Text>
        <Text style={styles.cartText}>Total: ${getTotal()}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FFA500',
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  productList: {
    padding: 10,
  },
  productItem: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cart: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#FFA500',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cartIconContainer: {
    position: 'relative',
    padding: 5,
  },
  cartBadge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#fff',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFA500',
    fontSize: 12,
    fontWeight: 'bold',
  },
});