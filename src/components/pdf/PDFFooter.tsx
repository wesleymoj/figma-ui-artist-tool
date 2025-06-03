
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0b6c6c',
    padding: 16,
    textAlign: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 10,
    lineHeight: 1.5,
  },
});

export const PDFFooter: React.FC = () => (
  <View style={styles.footer} fixed>
    <Text style={styles.footerText}>
      Terça-feira, 27 de maio de 2025 - Rondonopolis - PR{'\n'}
      © 2025 Conecta Brado
    </Text>
  </View>
);
