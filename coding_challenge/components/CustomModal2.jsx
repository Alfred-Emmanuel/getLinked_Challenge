import React from "react";
import Image from "next/image";

const CustomModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-blur bg-opacity-80">
      <div className=" py-24 px-10 lg:py-0 lg:px-0">
        <div className="relative z-50 bg-transparent bg-opacity-20 border-primary-color border-2 p-5 lg:p-7 rounded-lg text-center">
          <Image
            src="/green-checkmark.png"
            width={300}
            height={300}
            className=""
          />
          <h2 className="text-xl lg:text-2xl mt-3 mb-3 font-semibold">
            Your message <br /> has been successfully sent.
          </h2>
          <p>We will be in touch shortly.</p>
          <button
            className="bg-gradient-to-r from-pink via-primary-color to-secondary-color  lg:px-40 py-2 px-10 rounded-lg mt-4"
            onClick={closeModal}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
