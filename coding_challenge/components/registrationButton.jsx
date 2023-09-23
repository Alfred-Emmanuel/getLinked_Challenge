"use client"
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const RegistrationButton = () => {
const { pending } = useFormStatus();

  return (
    <button className="bg-gradient-to-r from-pink via-primary-color to-secondary-color  px-12 py-2 rounded-lg">
      {pending
        ? "Submitting..."
        : "Submit"}
    </button>
  );
}

export default RegistrationButton