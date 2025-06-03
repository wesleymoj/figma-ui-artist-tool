
import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { PDFSectionHeader } from '../PDFSectionHeader';
import { PDFInfoCard } from '../PDFInfoCard';

interface ReservationData {
  booking: string;
  shipowner: string;
  destination: string;
  quantity: string;
  product: string;
  terminal: string;
  shipVoyage: string;
  multimodalContract: string;
  shipownerFreetime: string;
  draftDeadline: string;
  cargoDeadline: string;
}

interface PDFReservationSectionProps {
  reservationData: ReservationData;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 12,
  },
});

export const PDFReservationSection: React.FC<PDFReservationSectionProps> = ({ reservationData }) => (
  <>
    <PDFSectionHeader title="Dados da Reserva:" />

    <View style={styles.row}>
      <PDFInfoCard label="Booking" value={reservationData.booking} valueStyle="red" />
      <PDFInfoCard label="Armador:" value={reservationData.shipowner} />
    </View>

    <View style={styles.row}>
      <PDFInfoCard label="Destino" value={reservationData.destination} />
      <PDFInfoCard label="Quantidade" value={reservationData.quantity} />
    </View>

    <View style={styles.row}>
      <PDFInfoCard label="Produto" value={reservationData.product} />
      <PDFInfoCard label="Terminal de Embarque" value={reservationData.terminal} />
    </View>

    <View style={styles.row}>
      <PDFInfoCard label="Navio/Viagem" value={reservationData.shipVoyage} />
      <PDFInfoCard label="Contrato Multimodal" value={reservationData.multimodalContract} />
    </View>

    <View style={styles.row}>
      <PDFInfoCard label="Freetime do Armador" value={reservationData.shipownerFreetime} />
      <PDFInfoCard label="Deadline Draft" value={reservationData.draftDeadline} />
    </View>

    <View style={styles.row}>
      <PDFInfoCard label="Deadline Cargo" value={reservationData.cargoDeadline} />
      <View style={{ flex: 1 }} />
    </View>
  </>
);
