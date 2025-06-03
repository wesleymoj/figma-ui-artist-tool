
import React from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

interface PDFHeaderProps {
  logoSrc: string;
  title: string;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0b6c6c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
    paddingVertical: 24,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: 80,
    height: 24,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.2,
  },
});

export const PDFHeader: React.FC<PDFHeaderProps> = ({ logoSrc, title }) => (
  <View style={styles.header} fixed>
    <Image src={logoSrc} style={styles.logo} />
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);
