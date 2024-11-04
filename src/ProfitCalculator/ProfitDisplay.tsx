import React from 'react';

interface ValueDisplayProps {
  title: string;
  value: number | null;
  precision?: number;
  prefixSymbol?: string;
  suffixSymbol?: string;
}

export const ValueDisplay: React.FC<ValueDisplayProps> = ({
  title,
  value,
  precision = 4,
  prefixSymbol = '',
  suffixSymbol = '',
}) => {
  if (!value) {
    return null;
  }
  return (
    <section className="flex justify-between items-start self-stretch">
      <div className="text-white text-2xl font-bold">{title}</div>
      <div className="flex items-center gap-4 text-white text-center text-2xl font-normal md:whitespace-normal">
        {prefixSymbol}
        {value.toFixed(precision)}
        {suffixSymbol}
      </div>
    </section>
  );
};
