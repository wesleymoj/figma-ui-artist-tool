
import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { PDFSectionHeader } from '../PDFSectionHeader';
import { PDFInfoCard } from '../PDFInfoCard';

interface BookingData {
  orderNumber: string;
  instruction: string;
  bookingCode: string;
  client: string;
  channel: string;
  product: string;
}

interface PDFSummarySectionProps {
  bookingData: BookingData;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 12,
  },
});

export const PDFSummarySection: React.FC<PDFSummarySectionProps> = ({ bookingData }) => (
  <>
    <PDFSectionHeader title="Resumo:" />
    
    <View style={styles.row}>
      <PDFInfoCard label="Pedido nº" value={bookingData.orderNumber} />
      <PDFInfoCard label="Instrução" value={bookingData.instruction} />
    </View>

    <View style={styles.row}>
      <PDFInfoCard label="Booking" value={bookingData.bookingCode} valueStyle="red" />
      <PDFInfoCard label="Cliente" value={bookingData.client} />
    </View>

    <View style={styles.row}>
      <PDFInfoCard label="Canal" value={bookingData.channel} valueStyle="green" />
      <PDFInfoCard label="Produto" value={bookingData.product} />
    </View>
  </>
);
