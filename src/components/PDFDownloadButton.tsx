
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { BookingConfirmationPDF } from './pdf/BookingConfirmationPDF';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

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

interface PDFDownloadButtonProps {
  logoSrc: string;
  bookingData: BookingData;
  reservationData: ReservationData;
  emptyPickupData: EmptyPickupData;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  logoSrc,
  bookingData,
  reservationData,
  emptyPickupData
}) => {
  return (
    <PDFDownloadLink
      document={
        <BookingConfirmationPDF
          logoSrc={logoSrc}
          bookingData={bookingData}
          reservationData={reservationData}
          emptyPickupData={emptyPickupData}
        />
      }
      fileName={`booking-confirmation-${bookingData.bookingNumber}.pdf`}
    >
      {({ blob, url, loading, error }) => (
        <Button disabled={loading} className="gap-2">
          <Download size={16} />
          {loading ? 'Generating PDF...' : 'Download PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  );
};

