import React from 'react';

const Enquiry = () => {
  return (
    <>
      <div className="enquirycontainer">
        <div
          className="innerenquirycontainer"
          style={{
            width: '95%',
            margin: 'auto',
          }}
        
        >
          <form className=" p-4 shadow-md mt-2"   data-aos="zoom-in-up" 
          data-aos-duration="800">
            <h1 className="mt-3 font-bold text-3xl text-center">Enquiry</h1>
            <hr className="w-28 bg-blue-300 mt-2 h-1 m-auto mb-6" />
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-[45%] mb-4 p-2 border rounded mr-1 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-[50%] mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Enter Message"
              className="w-full mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
              rows="5"
            ></textarea>
            
            <button
              type="submit"
              className="w-[50%] m-auto p-2 enquiryfrom color4 focus:outline-none text-white bg-blue-400 shadow-2xl hover:bg-orange-300 hover:text-black hover:scale-110 p-2"
            >
              {/* <span className="text-white bg-black p-2">Send</span> */}
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Enquiry;