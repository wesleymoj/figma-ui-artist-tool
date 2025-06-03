
import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { PDFSectionHeader } from '../PDFSectionHeader';
import { PDFInfoCard } from '../PDFInfoCard';

interface EmptyPickupData {
  crossdocking: string;
  location: string;
  pickupDate: string;
}

interface PDFEmptyPickupSectionProps {
  emptyPickupData: EmptyPickupData;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 12,
  },
});

export const PDFEmptyPickupSection: React.FC<PDFEmptyPickupSectionProps> = ({ emptyPickupData }) => (
  <>
    <PDFSectionHeader title="Retirada dos Vazios:" />

    <PDFInfoCard 
      label="Crosdocking Brado para Armador:" 
      value={emptyPickupData.crossdocking} 
      valueStyle="red"
      isFullWidth={true}
    />

    <View style={styles.row}>
      <PDFInfoCard label="Local" value={emptyPickupData.location} />
      <PDFInfoCard label="Data de Retirada" value={emptyPickupData.pickupDate} />
    </View>
  </>
);
