"use client";
import { submitContactForm } from "@/actions/actions";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import Button from "./button";

const ContactForm = () => {
  const ref = useRef(null);

  async function clientAction(formData) {
    // ref.current?.reset();
    const result = await submitContactForm(formData);
    if (result?.error) {
    //   alert(result.error);
    }
  }
  return (
    <>
      {" "}
      <form ref={ref} action={clientAction}>
        <Link href="/">
          <Image
            className="lg:hidden pt-5 mb-5"
            src="/back-btn.png"
            width={23}
            height={23}
            alt=""
          />
        </Link>
        <div className="lg:mb-7">
          <legend className="text-primary-color text-[1.1rem] font-semibold">
            Questions or you need assistance?
     
          </legend>
          <legend className="text-primary-color mb-4 lg:mb-0 text-[1.1rem] font-semibold">
            Let us know about it!
          </legend>
          <legend className="lg:hidden text-[0.9rem] w-[80%] mb-4">
            Email us below about any questions related to our event
          </legend>
        </div>
        <input
          placeholder="First name"
          name="first_name"
          required
          className="w-[100%] px-3 py-3 mb-5 lg:px-3 text-white lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
        />
        <input
          placeholder="Mail"
          name="email"
          required
          className="w-[100%] px-3 py-3 mb-5 lg:px-3 text-white lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
        />
        <input
          placeholder="Phone number"
          name="phone_number"
          required
          className="w-[100%] px-3 py-3 mb-5 lg:px-3 text-white lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
        />
        <textarea
          placeholder="Message"
          name="message"
          required
          className="w-[100%] px-3 py-3 lg:mb-5 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
        />
        <div className="flex justify-center items-center mt-5 lg:pb-0 ">
          <Button />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
