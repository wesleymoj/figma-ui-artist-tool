import React from 'react';
import { EmailHeader } from './EmailHeader';
import { EmailFooter } from './EmailFooter';
import { SectionHeader } from './SectionHeader';
import { InfoCard } from './InfoCard';

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

interface BookingConfirmationProps {
  logoSrc: string;
  bookingData: BookingData;
  reservationData: ReservationData;
  emptyPickupData: EmptyPickupData;
}

export const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  logoSrc,
  bookingData,
  reservationData,
  emptyPickupData
}) => {
  return (
    <article className="bg-white relative max-w-[595px]">
      <EmailHeader 
        logoSrc={logoSrc}
        title="Confirmação de pedido"
      />
      
      <main className="z-0 w-full mt-2 px-6 max-md:max-w-full max-md:px-5">
        <section className="w-full py-px max-md:max-w-full">
          <div className="text-black text-xs font-normal leading-[18px] max-md:max-w-full">
            A Brado agradece sua nomeação! Confira abaixo o cronograma referente
            ao booking <span style={{fontWeight: 600}}>{bookingData.bookingNumber}</span>, com
            entrega no terminal <span style={{fontWeight: 600}}>{bookingData.terminal}</span>.​
          </div>
          
          <SectionHeader title="Resumo:" />
          
          <div className="w-full tracking-[0.2px] mt-2 max-md:max-w-full">
            <div className="flex w-full gap-6 flex-wrap max-md:max-w-full">
              <InfoCard 
                label="Pedido nº"
                value={bookingData.orderNumber}
              />
              <InfoCard 
                label="Instrução"
                value={bookingData.instruction}
                className="whitespace-nowrap"
              />
            </div>
            
            <div className="flex w-full gap-6 whitespace-nowrap flex-wrap mt-3 max-md:max-w-full">
              <InfoCard 
                label="Booking"
                value={bookingData.bookingCode}
                valueColor="text-[rgba(239,72,72,1)]"
              />
              <InfoCard 
                label="Cliente"
                value={bookingData.client}
              />
            </div>
            
            <div className="flex w-full gap-6 flex-wrap mt-3 max-md:max-w-full">
              <InfoCard 
                label="Canal"
                value={bookingData.channel}
                valueColor="text-[rgba(89,125,64,1)]"
                icon={bookingData.channelIcon}
                className="flex flex-col items-stretch whitespace-nowrap"
              />
              <InfoCard 
                label="Produto"
                value={bookingData.product}
              />
            </div>
          </div>
        </section>

        <section className="w-full mt-4 py-px max-md:max-w-full">
          <SectionHeader title="Dados da Rerserva:" />
          
          <div className="flex w-full flex-col items-stretch justify-center mt-2 max-md:max-w-full">
            <div className="flex w-full gap-6 whitespace-nowrap flex-wrap max-md:max-w-full">
              <InfoCard 
                label="Booking"
                value={reservationData.booking}
                valueColor="text-[rgba(239,72,72,1)]"
                className="tracking-[0.2px]"
              />
              <InfoCard 
                label="Armador:"
                value={reservationData.shipowner}
                className="tracking-[0.2px]"
              />
            </div>
            
            <div className="flex w-full gap-6 tracking-[0.2px] flex-wrap mt-3 max-md:max-w-full">
              <InfoCard 
                label="Destino"
                value={reservationData.destination}
                className="whitespace-nowrap"
              />
              <InfoCard 
                label="Quantidade"
                value={reservationData.quantity}
              />
            </div>
            
            <div className="flex w-full gap-6 tracking-[0.2px] flex-wrap mt-3 max-md:max-w-full">
              <InfoCard 
                label="Produto"
                value={reservationData.product}
              />
              <InfoCard 
                label="Terminal de Embarque"
                value={reservationData.terminal}
              />
            </div>
            
            <div className="flex w-full gap-6 tracking-[0.2px] flex-wrap mt-3 max-md:max-w-full">
              <InfoCard 
                label="Navio/Viagem"
                value={reservationData.shipVoyage}
              />
              <InfoCard 
                label="Contrato Multimodal"
                value={reservationData.multimodalContract}
              />
            </div>
            
            <div className="flex w-full gap-6 tracking-[0.2px] flex-wrap mt-3 max-md:max-w-full">
              <InfoCard 
                label="Freetime do Armador"
                value={reservationData.shipownerFreetime}
              />
              <InfoCard 
                label="Deadline Draft"
                value={reservationData.draftDeadline}
              />
            </div>
            
            <div className="flex w-full gap-6 tracking-[0.2px] flex-wrap mt-3 max-md:max-w-full">
              <InfoCard 
                label="Deadline Cargo"
                value={reservationData.cargoDeadline}
              />
              <div className="flex min-w-[156px] w-[261px] shrink h-[35px] flex-1 basis-8" />
            </div>
          </div>
        </section>

        <section className="w-full tracking-[0.2px] mt-4 py-px max-md:max-w-full">
          <SectionHeader title="Retirada dos Vazios:" />
          
          <div className="w-full mt-2 max-md:max-w-full">
            <InfoCard 
              label="Crosdocking Brado para Armador: "
              value={emptyPickupData.crossdocking}
              valueColor="text-[rgba(239,72,72,1)]"
              isFullWidth={true}
            />
            
            <div className="flex w-full gap-6 flex-wrap mt-3 max-md:max-w-full">
              <InfoCard 
                label="Local"
                value={emptyPickupData.location}
              />
              <InfoCard 
                label="Data de Retirada"
                value={emptyPickupData.pickupDate}
              />
            </div>
          </div>
        </section>
      </main>
      
      <EmailFooter 
        date="Terça-feira, 27 de maio de 2025"
        location="Rondonopolis - PR"
        copyright="© 2025 Conecta Brado"
      />
    </article>
  );
};
