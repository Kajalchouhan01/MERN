import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <>
      <div className="heading" data-aos="zoom-in">
        <h1 className="mt-3 font-bold text-3xl text-center">Our Services</h1>
        <hr className="w-24 bg-blue-400 h-1 m-auto mb-6" />
      </div>

      {/* Service Card 1 */}
      <div
        className="service-card flex items-center bg-white rounded-lg shadow-md p-6 mb-4"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon icon={faGlobe} className="text-blue-300 text-2xl" />
        <div className="service-info">
          <h2 className="font-bold text-xl mb-2">Another Service</h2>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
            Cupiditate quidem at quis. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      {/* Service Card 2 */}
      <div
        className="service-card flex items-center bg-white rounded-lg shadow-md p-6 mb-4"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon icon={faGlobe} className="text-blue-300 text-2xl" />
        <div className="service-info">
          <h2 className="font-bold text-xl mb-2">Another Service</h2>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
            Cupiditate quidem at quis. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      {/* Service Card 1 */}
      <div
        className="service-card flex items-center bg-white rounded-lg shadow-md p-6 mb-4"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon icon={faGlobe} className="text-blue-300 text-2xl" />
        <div className="service-info">
          <h2 className="font-bold text-xl mb-2">Another Service</h2>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
            Cupiditate quidem at quis. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;