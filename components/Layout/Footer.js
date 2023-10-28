import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-4 ">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex justify-center">
          <p className="text-sm md:text-base">
            ©{" "}
            <span className="text-primary font-bold">
              GrowwStonks  2023 {" "}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;