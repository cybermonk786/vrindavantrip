import React, { useState } from 'react';

interface DateRangeProps {
  fromDate?: string;
  toDate?: string;
  onFromDateChange?: (date: string) => void;
  onToDateChange?: (date: string) => void;
}

export const DateRangeBox: React.FC<DateRangeProps> = ({
  fromDate = '',
  toDate = '',
  onFromDateChange,
  onToDateChange,
}) => {
  const [internalFrom, setInternalFrom] = useState(fromDate);
  const [internalTo, setInternalTo] = useState(toDate);

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalFrom(e.target.value);
    onFromDateChange?.(e.target.value);
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalTo(e.target.value);
    onToDateChange?.(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* From Date Input */}
      <div className="flex flex-col flex-1">
        <label
          htmlFor="from-date"
          className="mb-1 text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          From Date
        </label>
        <input
          id="from-date"
          type="date"
          value={internalFrom}
          onChange={handleFromChange}
          className="px-3 py-2 text-sm text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Divider for larger screens */}
      <div className="hidden sm:flex items-center pt-5 text-gray-400">
        <span>—</span>
      </div>

      {/* To Date Input */}
      <div className="flex flex-col flex-1">
        <label
          htmlFor="to-date"
          className="mb-1 text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          To Date
        </label>
        <input
          id="to-date"
          type="date"
          value={internalTo}
          onChange={handleToChange}
          min={internalFrom} // Ensures "To" date cannot be earlier than "From" date
          className="px-3 py-2 text-sm text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};
