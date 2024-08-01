import React from 'react';
import PhoneNumberQRCode from './PhoneNumberQRCode'; 
// import QRCode from 'qrcode.react';
import './payment.css';

const PaymentOnline = () => {
  const phoneNumber = '+91 9893785834';
  const paytmNumber = '+91 74156-64456';
  const phonePeNumber = '+91 74156-64456';
  const googlePayNumber = '+91 74156-64456';

  // Bank information
  const bankName = 'ICICI BANK';
  const ifscCode = 'ICIC000094';
  const accountHolderName = 'Mr. Pranay Gupta';
  const accountNumber = '09450500070';
  const accountType = 'Current Account';

  return (
    <div className="payment_container" data-aos="flip-down">
    

      <h1 className='mt-5 mb-2 font-bold text-center text-2xl '>Payment Online</h1>
        <hr className='w-16 mb-3 bg-pink-400 h-1 mt-2 m-auto'></hr>
      
              
      <div className="whitebox w-[96%] m-auto text-black rounded p-6">
        <div className="payment-numbers-container">
          <div className="payment-number flex mb-4">
            <h3 className='font-bold'>Paytm Number:</h3>
            <p className='ml-10'>{paytmNumber}</p>
          </div>
          <div className="payment-number flex mb-4">
            <h3 className='font-bold'>Phone Pe Number:</h3>
            <p className='ml-5'>{phonePeNumber}</p>
          </div>
          <div className="payment-number flex mb-4">
            <h3 className='font-bold'>Google Pay Number:</h3>
            <p className='ml-3'>{googlePayNumber}</p>
          </div>
        </div>

        <div className="bank-account-info-container mt-6 text-left">
          <h2 className='font-bold text-xl mb-3'>Bank Account Information</h2>
          <ul>
            <li ><strong>Bank Name:</strong><span className='m-'> {bankName}</span></li>
            <li><strong>IFSC code:</strong><span className='m-1'> {ifscCode}</span></li>
            <li><strong>Account Holder Name:</strong> <span className='m-'>{accountHolderName}</span></li>
            <li><strong>Account Number:</strong> <span className='m-'>{accountNumber}</span></li>
            <li><strong>Account Type:</strong> <span className='m-'>{accountType}</span></li>
          </ul>
        </div>

        <div className='mt-5 m-auto'>
          <PhoneNumberQRCode phoneNumber={phoneNumber}/>
        </div>
      </div>
    </div>
  );
};

export default PaymentOnline;