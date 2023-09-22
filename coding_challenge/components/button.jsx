"use client"
import React from 'react'
import {experimental_useFormStatus as useFormStatus} from "react-dom";
import { css } from "@emotion/react";
import { PacmanLoader } from "react-spinners";

const Button = () => {

const {pending} = useFormStatus();
  return (
    <button className=" flex justify-center items-center bg-gradient-to-r from-pink via-primary-color to-secondary-color  px-12 py-2 rounded-lg">
      {pending ? (
        <PacmanLoader
          color={"#ffffff"}
        size={10}
          css={css`
            display: block;
            margin: 0 auto;
          `}
        />
      ) : (
        "Submit"
      )}

    </button>
  );
}

export default Button