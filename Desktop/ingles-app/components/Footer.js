import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>YOUR BEST VACATION EVER!</Text>
      <Pressable
        onPress={() => console.log('Contact pressed')}
        style={({ pressed }) => [
          styles.footerButton,
          pressed && styles.footerButtonPressed,
        ]}
      >
        <Text style={styles.footerButtonText}>COME VISIT TURKEY!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#2E2014',
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 16,
  },
  footerButton: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  footerButtonPressed: {
    backgroundColor: '#DDD',
  },
  footerButtonText: {
    color: '#3B2A1A',
    fontWeight: '700',
    letterSpacing: 1,
  },
});