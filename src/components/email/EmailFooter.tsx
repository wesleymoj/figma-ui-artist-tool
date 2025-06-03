import React from 'react';

interface EmailFooterProps {
  date: string;
  location: string;
  copyright: string;
}

export const EmailFooter: React.FC<EmailFooterProps> = ({ date, location, copyright }) => {
  return (
    <footer className="bg-[rgba(11,108,108,1)] absolute z-0 w-[595px] text-[10px] text-white font-normal text-center tracking-[0.4px] leading-[15px] pl-[26px] pr-[25px] py-2 right-0 bottom-0 max-md:max-w-full max-md:px-5">
      {date} - {location}
      <br />
      {copyright}
    </footer>
  );
};
