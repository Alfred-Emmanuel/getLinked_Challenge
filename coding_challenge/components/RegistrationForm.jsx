"use client";
import Image from "next/image";
import { submitForm } from "@/actions/actions";
import CustomModal from "./CustomModal";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import RegistrationButton from "./registrationButton";

export function RegistrationForm({ categoriesData }) {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formResult, setFormResult] = useState(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  async function clientAction(formData) {
    ref.current?.reset();

    const result = await submitForm(formData);
    setFormResult(result);
    if (result?.error) {
      toast.error(result.error);
    } else {
      setIsModalOpen(true);
    }
  }
  return (
    <>
      <form
        className="px-12 mt-10 py-8 lg:mt-0 lg:px-16 lg:py-6 shadow-md lg:bg-white lg:bg-opacity-5 lg:border-primary-color lg:border-opacity-40"
        action={clientAction}
        ref={ref}
      >
        <legend className="hidden lg:block lg:mb-7 lg:text-3xl lg:font-semibold text-primary-color">
          Register
        </legend>
        <div className="flex lg:mb-4">
          <legend className="lg:text-[0.75rem]">
            Be part of this movement!
          </legend>
          <div className="flex justify-center w-[25%] mb-4 lg:mb-0 ml-2 border-b-2 border-primary-color border-dotted lg:w-[12%]">
            <Image src="/man-walking.png" alt="" width={20} height={20} />
            <Image src="/woman-walking.png" alt="" width={20} height={20} />
          </div>
        </div>
        <h1 className="text-2xl tracking-widest mb-4 lg:tracking-normal lg:text-2xl lg:mb-5">
          Create your account
        </h1>
        <div className="lg:flex gap-[6%]">
          <div className=" lg:w-[47%] ">
            <label className="text-[0.9rem] font-semibold lg:text-[1rem]">
              Team's Name
            </label>
            <input
              type="text"
              name="team_name"
              placeholder="Enter the name of your group"
              className="w-[100%] lg:mt-2 lg:mb-5 mt-1 mb-3 px-5 py-2 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
            />
          </div>
          <div className="lg:w-[47%]">
            <label className="text-[0.9rem] font-semibold lg:text-[1rem]">
              Phone Number
            </label>{" "}
            <br />
            <input
              type="tel"
              name="phone_number"
              placeholder="Enter your phone number"
              className="w-[100%] lg:mt-2 lg:mb-5 mt-1 mb-3 px-5 py-2 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
            />
          </div>
        </div>
        <div className="lg:flex gap-[6%]">
          <div className=" lg:w-[47%]">
            <label className="text-[0.9rem] font-semibold lg:text-[1rem]">
              Email
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="mt-1 mb-3 w-[100%] lg:mt-2 lg:mb-5 px-5 py-2 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
            />
          </div>
          <div className="lg:w-[47%]">
            <label className="text-[0.9rem] font-semibold lg:text-[1rem]">
              Project Topic
            </label>{" "}
            <br />
            <input
              type="text"
              name="project_topic"
              placeholder="What is your group project about?"
              className="mt-1 mb-3 w-[100%] lg:mt-2 lg:mb-5 px-5 py-2 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
            />
          </div>
        </div>
        <div className="flex gap-[6%]">
          <div className="lg:w-[47%]">
            <label className="text-[0.9rem] font-semibold lg:text-[1rem]">
              Category
            </label>{" "}
            <br />
            <select
              name="category"
              className="mt-1 mb-3 w-[100%] lg:mt-2 lg:mb-5 px-2 py-2 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md"
            >
              <option
                value="Select Your Category"
                className="bg-secondary-color text-white rounded-lg"
              >
                Select your category
              </option>
              {categoriesData.map(category => (
                <option
                  key={category.id}
                  value={category.id}
                  className="bg-secondary-color text-white rounded-lg"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:w-[47%]">
            <label className="text-[0.9rem] font-semibold lg:text-[1rem]">
              Group Size
            </label>{" "}
            <br />
            <select
              name="group_size"
              className="mt-1 mb-3 w-[100%] lg:mt-2 lg:mb-5 px-2 py-2 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
            >
              <option
                value="Select"
                className="bg-secondary-color text-white rounded-lg"
              >
                Select
              </option>
              {Array.from({ length: 20 }, (_, i) => (
                <option
                  key={i + 1}
                  value={i + 1}
                  className="bg-secondary-color text-white rounded-lg"
                >
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-pink opacity-80 text-[0.8rem] mb-4 lg:text-[0.9rem] lg:mb-5 ">
          Please review your registration details before submitting
        </p>
        <div className="flex lg:gap-2 gap-2">
          <input
            type="checkbox"
            id="privacy_policy_accepted"
            name="privacy_policy_accepted"
            className="lg:bg-transparent"
            required
          />
          <label
            className="text-[0.75rem] lg:text-[0.9rem]"
            htmlFor="privacy_policy_accepted"
          >
            I agree with the event&apos;s terms and conditions and privacy
            policy
          </label>
        </div>
        <div className="flex justify-center items-center mt-8 lg:pb-0 pb-10">
          <RegistrationButton />
        </div>
      </form>
      {formResult && formResult.success && (
        <CustomModal isOpen={isModalOpen} closeModal={closeModal} />
      )}
    </>
  );
}

export default RegistrationForm;
