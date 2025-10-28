import React from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-[#010175] p-8 rounded-2xl shadow-2xl shadow-[#ffa600]/20 w-full max-w-md mx-4 relative border border-[#ffa600]/50 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close payment options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-center text-white mb-2">Choose Your Payment Currency</h2>
        <p className="text-center text-gray-300 mb-8">You are about to claim the Casjoe Founder's Offer!</p>
        
        <div className="flex flex-col gap-4">
          <a
            href="https://flutterwave.com/pay/casjoelaunch"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-[#ffa600] hover:bg-[#ffb733] text-[#000066] font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-[#ffa600]/30"
          >
            Pay in Naira (₦100,000)
          </a>
          <a
            href="https://flutterwave.com/pay/casjoelaunch1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-transparent border-2 border-[#ffa600] text-[#ffa600] hover:bg-[#ffa600] hover:text-[#000066] font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
          >
            Pay in Dollar ($70)
          </a>
        </div>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Pay via Bank Transfer</h3>
          <div className="bg-[#000066] p-4 rounded-lg border border-[#ffa600]/30 text-left space-y-1">
            <p className="text-gray-300"><span className="font-bold text-white w-32 inline-block">Bank:</span> Moniepoint MFB</p>
            <p className="text-gray-300"><span className="font-bold text-white w-32 inline-block">Account Name:</span> CASJOETECH LTD</p>
            <p className="text-gray-300"><span className="font-bold text-white w-32 inline-block">Account Number:</span> 7035323038</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default PaymentModal;