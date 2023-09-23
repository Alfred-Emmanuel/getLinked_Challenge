"use client";
import { submitContactForm } from "@/actions/actions";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import Button from "./button";
import CustomModal2 from "./CustomModal2";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formResult, setFormResult] = useState(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const ref = useRef(null);

  async function clientAction(formData) {
    ref.current?.reset();
    const result = await submitContactForm(formData);
    setFormResult(result);
    if (result?.error) {
      toast.error(result.error);
    } else {
      setIsModalOpen(true);
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
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <legend className="text-primary-color text-[1.1rem] font-semibold">
              Questions or you need assistance?
            </legend>
          </Fade>
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <legend className="text-primary-color mb-4 lg:mb-0 text-[1.1rem] font-semibold">
              Let us know about it!
            </legend>
          </Fade>
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <legend className="lg:hidden text-[0.9rem] w-[80%] mb-5">
              Email us below about any questions related to our event
            </legend>
          </Fade>
        </div>
        <Fade direction="up" duration={2000} triggerOnce={true} className="input-group">
          <div class="input-group">
            <input
              type="text"
              placeholder=""
              id="First Name"
              name="first_name"
              required
              className="w-[100%] px-3 py-3 lg:mb-7 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md input-field"
            />
            <label htmlfor="First Name" className=" label-field">
              First Name
            </label>
          </div>
        </Fade>
        <Fade
          direction="up"
          duration={2000}
          triggerOnce={true}
          className="input-group"
        >
          <div class="input-group">
            <input
              type="email"
              placeholder=""
              id="Email"
              name="email"
              required
              className="w-[100%] px-3 py-3 lg:mb-7 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md input-field"
            />
            <label htmlfor="Email" className="label-field">
              Email
            </label>
          </div>
        </Fade>
        <Fade
          direction="up"
          duration={2000}
          triggerOnce={true}
          className="input-group"
        >
          <div class="input-group">
            <input
              type="tel"
              placeholder=""
              id="Phone Number"
              name="phone_number"
              required
              className="w-[100%] px-3 py-3 lg:mb-7 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md input-field"
            />
            <label htmlfor="First Name" className="label-field">
              Phone Number
            </label>
          </div>
        </Fade>
        <Fade
          direction="up"
          duration={2000}
          triggerOnce={true}
          className="input-group"
        >
          <div class="input-group">
            <textarea
              placeholder=""
              id="message"
              name="message"
              required
              className="w-[100%] px-3 py-3 lg:mb-5 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md input-field"
            />
            <label htmlfor="message" className="label-field">
              Message
            </label>
          </div>
        </Fade>

        <Fade direction="up" duration={2000} triggerOnce={true}>
          <div className="flex justify-center items-center mt-5 lg:pb-0 ">
            <Button />
          </div>
        </Fade>
      </form>
      {formResult && formResult.success && (
        <CustomModal2 isOpen={isModalOpen} closeModal={closeModal} />
      )}
    </>
  );
};

export default ContactForm;
