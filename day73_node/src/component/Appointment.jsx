import React from 'react';

const Appointment = () => {
  return (
    <>
      <div className="container mt-[60px]" data-aos="fade-right" data-aos-duration="800">
        <h1 className='font-bold text-2xl  '>Make An Appointment</h1>
        <hr className='bg-blue-400 h-1 mt-2 w-28 m-auto' />

        <form action="" className="mt-4" data-aos="flip-down">
          <label htmlFor="date" className='text-left block ml-3'>Date</label>
          <input type="date" id="date" className='w-[95%] m-auto border p-2 rounded-sm' />

          <div className="time flex mt-4">
            <button className='bg-blue-100 ml-3 p-2 rounded-sm timebutton'>8:10-20:00</button>
            <button className='bg-blue-100 ml-3 p-2 rounded-sm timebutton'>8:10-20:00</button>
            <button className='bg-blue-100 ml-3 p-2 rounded-sm timebutton'>8:10-20:00</button>
            <button className='bg-blue-100 ml-3 p-2 rounded-sm timebutton'>8:10-20:00</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Appointment;