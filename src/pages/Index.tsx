
import { BookingConfirmation } from '@/components/email/BookingConfirmation';
import { PDFDownloadButton } from '@/components/PDFDownloadButton';

const Index = () => {
  const mockBookingData = {
    bookingNumber: "EBKG12650813",
    terminal: "BTP",
    orderNumber: "12120",
    instruction: "EO-S11984.H01",
    bookingCode: "241ISZ2370230",
    client: "AMAGGI",
    channel: "Verde",
    channelIcon: "https://cdn.builder.io/api/v1/image/assets/590a765021c54d6592076960791b88c5/4aabcbb033e36f89c211655098a9604f0332147d?placeholderIfAbsent=true",
    product: "Pluma de algodão"
  };

  const mockReservationData = {
    booking: "EBKG12650813",
    shipowner: "MSC",
    destination: "Malásia",
    quantity: "6 contêineres Dry 40",
    product: "Pluma Algodão",
    terminal: "BTP - Brasil Terminal Portuário",
    shipVoyage: "CAPE SOUNIO FI44AR",
    multimodalContract: "Sim",
    shipownerFreetime: "20 dias",
    draftDeadline: "09/11/2024 12:00",
    cargoDeadline: "14/11/2024 12:00"
  };

  const mockEmptyPickupData = {
    crossdocking: "Não",
    location: "Rondonópolis – Buffer no terminal",
    pickupDate: "31/10/2024"
  };

  const logoSrc = "https://cdn.builder.io/api/v1/image/assets/590a765021c54d6592076960791b88c5/389382900081777dd63e24f3e5dc5eea87e3a624?placeholderIfAbsent=true";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 gap-6">
      <div className="w-full max-w-2xl">
        <BookingConfirmation
          logoSrc={logoSrc}
          bookingData={mockBookingData}
          reservationData={mockReservationData}
          emptyPickupData={mockEmptyPickupData}
        />
      </div>
      
      <PDFDownloadButton
        logoSrc={logoSrc}
        bookingData={mockBookingData}
        reservationData={mockReservationData}
        emptyPickupData={mockEmptyPickupData}
      />
    </div>
  );
};

export default Index;

