import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.hero}>
      <Text style={styles.heroSubtitle}>EXPLORE TURKEY</Text>
      <Text style={styles.heroTitle}>TRAVEL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: '#3B2A1A',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heroSubtitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 2,
  },
  heroTitle: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: '900',
    marginTop: 8,
    letterSpacing: 4,
  },
});