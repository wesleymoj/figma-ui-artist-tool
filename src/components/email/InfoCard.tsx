import React from 'react';

interface InfoCardProps {
  label: string;
  value: string;
  valueColor?: string;
  icon?: string;
  isFullWidth?: boolean;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ 
  label, 
  value, 
  valueColor = "text-black", 
  icon,
  isFullWidth = false,
  className = ""
}) => {
  const baseClasses = "rounded bg-[rgba(0,0,0,0.04)] px-4 py-1";
  const widthClasses = isFullWidth ? "w-full" : "min-w-[156px] flex-1 shrink basis-[0%]";
  
  return (
    <div className={`${baseClasses} ${widthClasses} ${className}`}>
      <div className="text-black text-[10px] font-normal">
        {label}
      </div>
      <div className={`${valueColor} text-xs font-medium mt-1`}>
        {icon ? (
          <div className="flex gap-1 items-center">
            <img
              src={icon}
              alt=""
              className="aspect-[1] object-contain w-3.5 shrink-0"
            />
            <span className="w-[199px]">{value}</span>
          </div>
        ) : (
          value
        )}
      </div>
    </div>
  );
};
