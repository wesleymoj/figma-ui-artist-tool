import React from 'react';

interface EmailHeaderProps {
  logoSrc: string;
  title: string;
}

export const EmailHeader: React.FC<EmailHeaderProps> = ({ logoSrc, title }) => {
  return (
    <header className="bg-[rgba(11,108,108,1)] z-0 flex w-full items-center gap-[16px_100px] text-sm text-white font-semibold text-center uppercase tracking-[0.2px] justify-between flex-wrap px-12 py-6 max-md:max-w-full max-md:px-5">
      <img
        src={logoSrc}
        alt="Company Logo"
        className="aspect-[3.33] object-contain w-20 self-stretch shrink-0 my-auto"
      />
      <h1 className="self-stretch my-auto">
        {title}
      </h1>
    </header>
  );
};
