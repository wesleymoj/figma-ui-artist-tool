
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFHeader } from './PDFHeader';
import { PDFFooter } from './PDFFooter';
import { PDFSummarySection } from './sections/PDFSummarySection';
import { PDFReservationSection } from './sections/PDFReservationSection';
import { PDFEmptyPickupSection } from './sections/PDFEmptyPickupSection';

interface BookingData {
  bookingNumber: string;
  terminal: string;
  orderNumber: string;
  instruction: string;
  bookingCode: string;
  client: string;
  channel: string;
  channelIcon: string;
  product: string;
}

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

interface EmptyPickupData {
  crossdocking: string;
  location: string;
  pickupDate: string;
}

interface BookingConfirmationPDFProps {
  logoSrc: string;
  bookingData: BookingData;
  reservationData: ReservationData;
  emptyPickupData: EmptyPickupData;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    paddingTop: 80,
    paddingBottom: 80,
    paddingHorizontal: 0,
  },
  main: {
    padding: 24,
    flex: 1,
  },
  introText: {
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export const BookingConfirmationPDF: React.FC<BookingConfirmationPDFProps> = ({
  logoSrc,
  bookingData,
  reservationData,
  emptyPickupData
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader logoSrc={logoSrc} title="Confirmação de pedido" />

      <View style={styles.main}>
        <Text style={styles.introText}>
          A Brado agradece sua nomeação! Confira abaixo o cronograma referente ao booking{' '}
          <Text style={styles.bold}>{bookingData.bookingNumber}</Text>, com entrega no terminal{' '}
          <Text style={styles.bold}>{bookingData.terminal}</Text>.
        </Text>

        <PDFSummarySection bookingData={bookingData} />
        <PDFReservationSection reservationData={reservationData} />
        <PDFEmptyPickupSection emptyPickupData={emptyPickupData} />
      </View>

      <PDFFooter />
    </Page>
  </Document>
);
