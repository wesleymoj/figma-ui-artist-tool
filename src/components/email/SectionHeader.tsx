import React from 'react';

interface SectionHeaderProps {
  title: string;
  dividerWidth?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, dividerWidth = "flex-1" }) => {
  return (
    <div className="flex min-h-[26px] w-full items-center gap-2 text-xs text-[rgba(11,108,108,1)] font-bold tracking-[0.2px] flex-wrap max-md:max-w-full">
      <h2 className="self-stretch my-auto">
        {title}
      </h2>
      <div className={`border self-stretch min-w-60 shrink h-px ${dividerWidth} basis-[0%] my-auto border-[rgba(11,108,108,1)] border-solid`} />
    </div>
  );
};
