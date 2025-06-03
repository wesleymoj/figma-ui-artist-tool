
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

interface PDFInfoCardProps {
  label: string;
  value: string;
  valueStyle?: 'normal' | 'red' | 'green';
}

const styles = StyleSheet.create({
  infoCard: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.04)',
    borderRadius: 4,
    padding: 16,
  },
  infoCardFull: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    borderRadius: 4,
    padding: 16,
    marginBottom: 12,
  },
  label: {
    fontSize: 10,
    color: '#000000',
    marginBottom: 4,
  },
  value: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  valueRed: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ef4848',
  },
  valueGreen: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#597d40',
  },
});

export const PDFInfoCard: React.FC<PDFInfoCardProps & { isFullWidth?: boolean }> = ({ 
  label, 
  value, 
  valueStyle = 'normal',
  isFullWidth = false 
}) => {
  const getValueStyle = () => {
    switch (valueStyle) {
      case 'red': return styles.valueRed;
      case 'green': return styles.valueGreen;
      default: return styles.value;
    }
  };

  const cardStyle = isFullWidth ? styles.infoCardFull : styles.infoCard;

  return (
    <View style={cardStyle}>
      <Text style={styles.label}>{label}</Text>
      <Text style={getValueStyle()}>{value}</Text>
    </View>
  );
};
