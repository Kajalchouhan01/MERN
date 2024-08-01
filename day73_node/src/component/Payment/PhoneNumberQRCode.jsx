import React from 'react';
import QRCode from 'qrcode.react';

const PhoneNumberQRCode = ({ phoneNumber }) => {
  const phoneNumberText = `tel:${phoneNumber}`;

  return (  
    <div className="phone-number-qr-code  ">
      <QRCode value={phoneNumberText} className='m-auto'/>
      <p>Mr. Pranay Gupta</p>
    </div>
  );
};

export default PhoneNumberQRCode;