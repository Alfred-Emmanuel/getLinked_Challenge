"use client"
import React from 'react'
import {experimental_useFormStatus as useFormStatus} from "react-dom";

const Button = () => {

const {pending} = useFormStatus();
  return (
    <button className=" flex justify-center items-center bg-gradient-to-r from-pink via-primary-color to-secondary-color  px-12 py-2 md:px-16 md:py-4 rounded-lg">
      {pending ? (
        <div className="animate-spin rounded-full h-7 w-7 border-t-4 border-b-4 border-black"></div>
      ) : (
        "Submit"
      )}
    </button>
  );
}

export default Button