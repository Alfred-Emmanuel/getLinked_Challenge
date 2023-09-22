"use server";
import { revalidatePath } from "next/cache";
// import getCategories from "../../app/lib/getCategories";

export async function submitContactForm(formData) {
  const email = formData.get("email")?.toString();
  const phone_number = formData.get("phone_number")?.toString();
  const first_name = formData.get("first_name")?.toString();
  const message = formData.get("message")?.toString();

  if (!email || !phone_number || !first_name || !message) return;

  const form_data = {
    emai,
    phone_number,
    first_name,
    message,
  };

  try {
    await fetch("https://backend.getlinked.ai/hackathon/contact-form", {
      method: "POST",
      body: JSON.stringify(form_data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return {
      error: "Something went wrong!",
    };
  }

  revalidatePath("/contact")
}
