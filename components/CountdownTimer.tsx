import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl md:text-5xl font-bold text-white bg-[#ffa600]/10 p-4 rounded-lg shadow-lg w-20 md:w-24 text-center">
      {String(value).padStart(2, '0')}
    </span>
    <span className="mt-2 text-sm md:text-base font-medium text-gray-200 uppercase tracking-wider">{label}</span>
  </div>
);

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft | null = null;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!timeLeft) {
    return (
      <div className="flex flex-col items-center my-10 md:my-16">
        <h3 className="text-xl md:text-2xl font-semibold text-[#ffa600] mb-6 animate-pulse">The Offer Has Ended!</h3>
        <p className="text-lg text-gray-300">Thank you for your interest.</p>
      </div>
    );
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex flex-col items-center my-10 md:my-16">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-6">Launch & Offer Ends In:</h3>
      <div className="flex items-center space-x-2 md:space-x-4">
        <CountdownUnit value={days} label="Days" />
        <span className="text-4xl text-[#ffa600]/50 pb-8">:</span>
        <CountdownUnit value={hours} label="Hours" />
        <span className="text-4xl text-[#ffa600]/50 pb-8">:</span>
        <CountdownUnit value={minutes} label="Minutes" />
        <span className="text-4xl text-[#ffa600]/50 pb-8">:</span>
        <CountdownUnit value={seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;