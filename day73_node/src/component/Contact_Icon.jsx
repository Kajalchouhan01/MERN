import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact_Icon = () => {
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp functionality
    // For example, you can use a library like 'react-chat-widget' or 'react-whatsapp-widget'
    alert('Opening WhatsApp');
  };

  const openMail = () => {
    // Replace with your actual mail functionality
    window.location.href = 'mailto:komalprajapat267@mail.com';
  };

  const openFacebook = () => {
    // Replace 'your_facebook_username' with your actual Facebook username
    const facebookLink = 'https://www.facebook.com/isoftzone/';
    window.open(facebookLink, '_blank');
  };

  const openLinkedin = () => {
    // Replace 'your_instagram_username' with your actual Instagram username
    const Linkedin = 'https://www.linkedin.com/company/i-softzone/?originalSubdomain=in';
    window.open(Linkedin, '_blank');
  };

  const openTwitter = () => {
    // Replace 'your_twitter_username' with your actual Twitter username
    const twitterLink = 'https://twitter.com/isoftzone?lang=en';
    window.open(twitterLink, '_blank');
  };

  return (
    <div className="flex flex-wrap items-center justify-center bg-gray-100 rounded-full p-2 space-x-4 sm:justify-start w-[50%] m-auto mt-3"  data-aos="zoom-in"
    >
      {/* WhatsApp icon */}
      <div className="cursor-pointer hover:text-green-700 text-center ml-3" onClick={openWhatsApp} >
        <FontAwesomeIcon icon={faWhatsapp} className="text-1xl" />
      </div>

      {/* Mail icon */}
      <div className="cursor-pointer hover:text-purple-700 text-center ml-3" onClick={openMail}>
        <FontAwesomeIcon icon={faEnvelope} className="text-1xl" />
      </div>

      {/* Facebook icon */}
      <div className="cursor-pointer hover:text-blue-700 text-center ml-3" onClick={openFacebook}>
        <FontAwesomeIcon icon={faFacebook} className="text-1xl" />
      </div>

      {/* Instagram icon */}
      <div className="cursor-pointer hover:text-pink-700 text-center ml-3" onClick={openLinkedin}>
        <FontAwesomeIcon icon={faLinkedin} className="text-1xl" />
      </div>

      {/* Twitter icon */}
      <div className="cursor-pointer hover:text-blue-700 text-center ml-3" onClick={openTwitter}>
        <FontAwesomeIcon icon={faTwitter} className="text-1xl" />
      </div>
    </div>
  );
};

export default Contact_Icon;