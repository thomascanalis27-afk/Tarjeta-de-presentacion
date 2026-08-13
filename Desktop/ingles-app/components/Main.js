import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View, Text } from 'react-native';
import Hero from './Hero';
import Footer from './Footer';
import PlaceCard from './PlaceCard';
import { places } from '../Places';

export default function Main() {
  const [search, setSearch] = useState('');

  const handlePressItem = (item) => {
    console.log('Pressed:', item.title);
  };

  const filteredPlaces = places.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderSearchBar = () => (
    <View>
      <Hero />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar destino..."
          placeholderTextColor="#B8A99A"
          value={search}
          onChangeText={setSearch}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
    </View>
  );

  return (
    <FlatList
      data={filteredPlaces}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceCard item={item} onPress={handlePressItem} />}
      ListHeaderComponent={renderSearchBar()}
      ListFooterComponent={Footer}
      ListEmptyComponent={
        <Text style={styles.emptyText}>No se encontraron resultados</Text>
      }
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 24,
    backgroundColor: '#3B2A1A',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: '#3B2A1A',
  },
  searchInput: {
    backgroundColor: '#4E3B29',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#FFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#6B5643',
  },
  emptyText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});