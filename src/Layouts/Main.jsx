import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-[calc(100vh-270px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;