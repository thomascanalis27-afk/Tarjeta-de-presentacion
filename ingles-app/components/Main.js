import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Hero from './Hero';
import Footer from './Footer';
import PlaceCard from './PlaceCard';
import { places } from '../Places';

export default function Main() {
  const handlePressItem = (item) => {
    console.log('Pressed:', item.title);
  };

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceCard item={item} onPress={handlePressItem} />}
      ListHeaderComponent={Hero}
      ListFooterComponent={Footer}
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
});