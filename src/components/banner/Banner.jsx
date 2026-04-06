import React from 'react';
import bannerImg from '../../assets/banner-main.png'
import bannerBg from '../../assets/bg-shadow.png'

const Banner = () => {
  return (
    <div className='hero  container mx-auto rounded-4xl overflow-hidden bg-gray-900'>
      <img className='w-full h-full object-cover' src={bannerBg} alt="" />
      <div className='hero-image text-white text-center p-10'>
        <img className='mx-auto mb-4' src={bannerImg} alt="" />
        {/* content */}
        <div className='text-center'>
          <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="py-4 text-2xl font-medium text-gray-400">Beyond Boundaries Beyond Limits</p>
          <span className=''>
            <button className="btn btn-primary rounded-2xl">Claim Free Credit</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;