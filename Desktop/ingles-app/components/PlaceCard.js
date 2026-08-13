// components/PlaceCard.js
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function PlaceCard({ item, onPress }) {
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardOverlay}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <Text style={styles.cardTip}>Tip: {item.tip}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#4A3624',
  },
  cardPressed: {
    opacity: 0.8,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 4,
  },
  cardBody: {
    padding: 14,
  },
  cardDescription: {
    color: '#EFE6DC',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  cardTip: {
    color: '#D8C8B8',
    fontSize: 13,
    fontStyle: 'italic',
  },
});
