import React from 'react';
import currancyImg from '../.././assets/Currency.png'
import logoImg from '../.././assets/logo.png'

const Navbar = ({coin}) => {
  return (
    <div className="navbar flex container mx-auto mb-4">
      <div className="flex-1">
        <img src={logoImg} alt="" />
      </div>
      <div className="flex gap-15">
        <ul className='flex gap-10 text-center items-center'>
          <li><a href="">Home</a></li>
          <li><a href="">Fixture</a></li>
          <li><a href="">Teams</a></li>
          <li><a href="">Schedules</a></li>
        </ul>
        <button className='btn btn-ghost gap-2'>
          {coin} coins
          <img src={currancyImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;