
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

interface PDFSectionHeaderProps {
  title: string;
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0b6c6c',
    marginRight: 8,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#0b6c6c',
  },
});

export const PDFSectionHeader: React.FC<PDFSectionHeaderProps> = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.divider} />
  </View>
);
