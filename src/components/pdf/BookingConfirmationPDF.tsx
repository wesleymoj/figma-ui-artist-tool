
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

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
  row: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 12,
  },
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

export const BookingConfirmationPDF: React.FC<BookingConfirmationPDFProps> = ({
  logoSrc,
  bookingData,
  reservationData,
  emptyPickupData
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header - fixed on every page */}
      <View style={styles.header} fixed>
        <Image src={logoSrc} style={styles.logo} />
        <Text style={styles.headerTitle}>Confirmação de pedido</Text>
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        {/* Intro Text */}
        <Text style={styles.introText}>
          A Brado agradece sua nomeação! Confira abaixo o cronograma referente ao booking{' '}
          <Text style={styles.bold}>{bookingData.bookingNumber}</Text>, com entrega no terminal{' '}
          <Text style={styles.bold}>{bookingData.terminal}</Text>.
        </Text>

        {/* Resumo Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Resumo:</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Pedido nº</Text>
            <Text style={styles.value}>{bookingData.orderNumber}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Instrução</Text>
            <Text style={styles.value}>{bookingData.instruction}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Booking</Text>
            <Text style={styles.valueRed}>{bookingData.bookingCode}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Cliente</Text>
            <Text style={styles.value}>{bookingData.client}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Canal</Text>
            <Text style={styles.valueGreen}>{bookingData.channel}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Produto</Text>
            <Text style={styles.value}>{bookingData.product}</Text>
          </View>
        </View>

        {/* Dados da Reserva Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Dados da Reserva:</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Booking</Text>
            <Text style={styles.valueRed}>{reservationData.booking}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Armador:</Text>
            <Text style={styles.value}>{reservationData.shipowner}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Destino</Text>
            <Text style={styles.value}>{reservationData.destination}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Quantidade</Text>
            <Text style={styles.value}>{reservationData.quantity}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Produto</Text>
            <Text style={styles.value}>{reservationData.product}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Terminal de Embarque</Text>
            <Text style={styles.value}>{reservationData.terminal}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Navio/Viagem</Text>
            <Text style={styles.value}>{reservationData.shipVoyage}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Contrato Multimodal</Text>
            <Text style={styles.value}>{reservationData.multimodalContract}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Freetime do Armador</Text>
            <Text style={styles.value}>{reservationData.shipownerFreetime}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Deadline Draft</Text>
            <Text style={styles.value}>{reservationData.draftDeadline}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Deadline Cargo</Text>
            <Text style={styles.value}>{reservationData.cargoDeadline}</Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>

        {/* Retirada dos Vazios Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Retirada dos Vazios:</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.infoCardFull}>
          <Text style={styles.label}>Crosdocking Brado para Armador:</Text>
          <Text style={styles.valueRed}>{emptyPickupData.crossdocking}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Local</Text>
            <Text style={styles.value}>{emptyPickupData.location}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Data de Retirada</Text>
            <Text style={styles.value}>{emptyPickupData.pickupDate}</Text>
          </View>
        </View>
      </View>

      {/* Footer - fixed on every page */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>
          Terça-feira, 27 de maio de 2025 - Rondonopolis - PR{'\n'}
          © 2025 Conecta Brado
        </Text>
      </View>
    </Page>
  </Document>
);
