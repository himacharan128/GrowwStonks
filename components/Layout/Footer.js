import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-4 rounded-xl">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex justify-center">
          <p className="text-sm md:text-base">
            ©{" "}
            <span className="text-primary font-bold">
              GrowwStonks  2023 {" "}
            </span>
          </p>
          <div className="text-xs text-right absolute bottom-0 right-0 m-4 pr-2 pb-2">
            <Link href="http://localhost:3000/api/topGainersLosers">
              <p className=" text-blue-300 text-xs text-right">Click Me if Page is not working Properly!</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;