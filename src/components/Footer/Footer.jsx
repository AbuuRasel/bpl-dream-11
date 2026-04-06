import React from 'react';
import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
  return (
    <div className='w-full sm:footer-horizontal relative bg-[#020617] mt-50 pt-30'>
      <div className='container sm:footer-horizontal mx-auto'>
        {/* 🔶 Floating Newsletter Card */}
      <div className="absolute left-1/2 -top-32 -translate-x-1/2 w-full max-w-4xl px-4 z-10">
        <div className="relative rounded-2xl p-[1px] bg-white/20">

          {/* border glow layer */}
          <div className="rounded-2xl bg-[#0b1120] p-1">

            <div className="rounded-2xl bg-gradient-to-r from-blue-100 via-gray-100 to-yellow-200 p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.2)]">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Subscribe to our Newsletter
              </h2>

              <p className="text-gray-600 mt-2 mb-6">
                Get the latest updates and news right in your inbox!
              </p>

              <div className="flex justify-center gap-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full max-w-xs bg-white"
                />

                <button className="btn border-0 text-black font-semibold 
                  bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-500 
                  hover:scale-105 transition">
                  Subscribe
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 🔷 Footer */}
      <footer className="bg-[#020617] text-gray-400 pt-10 pb-10 px-6 md:px-16">

        {/* Logo */}
        <div className="flex justify-center py-10">
          <img
            src={footerLogo} // replace with your logo
            alt="logo"
            className="w-20"
          />
        </div>

        {/* Grid */}
        <div className="grid justify-center items-center md:grid-cols-3 gap-12 text-sm">

          {/* About */}
          <div className="max-w-xs">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">
              About Us
            </h3>
            <p className="leading-relaxed">
              We are a passionate team <br />
              dedicated to providing the
              best <br /> services to our customers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">• Home</li>
              <li className="hover:text-white cursor-pointer">• Services</li>
              <li className="hover:text-white cursor-pointer">• About</li>
              <li className="hover:text-white cursor-pointer">• Contact</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="max-w-xs">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">
              Subscribe
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-info rounded-r-none w-full text-black bg-gray-300"
              />
              <button className="btn rounded-l-none border-0 text-black font-semibold 
                bg-gradient-to-r from-pink-400 to-yellow-400">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          @2024 Your Company All Rights Reserved.
        </div>

      </footer>
      </div>
      
    </div>
  );
};

export default Footer;