"use server";
import { revalidatePath } from "next/cache";

export async function submitContactForm(formData) {
  const email = formData.get("email")?.toString();
  const phone_number = formData.get("phone_number")?.toString();
  const first_name = formData.get("first_name")?.toString();
  const message = formData.get("message")?.toString();

  if (!email || !phone_number || !first_name || !message) return;

  const form_data = {
    email,
    phone_number,
    first_name,
    message,
  };

    try {
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/contact-form",
        {
          method: "POST",
          body: JSON.stringify(form_data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        return { success: true };
      } else {
        return { error: "Please type in the appropriate data into each field." };
      }
    } catch (error) {
      return { error: error.message };
    }
  revalidatePath("/contact")
}

export async function submitForm(formData){
  const email = formData.get("email")?.toString();
  const phone_number = formData.get("phone_number")?.toString();
  const team_name = formData.get("team_name")?.toString();
  const group_size = formData.get("group_size")?.toString();
  const project_topic = formData.get("project_topic")?.toString();
  const category = formData.get("category")?.toString();
  const privacy_policy_accepted = formData
    .get("privacy_policy_accepted")
    ?.toString();

  if (
    !email ||
    !phone_number ||
    !team_name ||
    !group_size ||
    !project_topic ||
    !category ||
    !privacy_policy_accepted
  )
    return;

  const formFields = {
    email,
    phone_number,
    team_name,
    group_size,
    project_topic,
    category,
    privacy_policy_accepted,
  };

  try {
    const response = await fetch(
      "https://backend.getlinked.ai/hackathon/registration",
      {
        method: "POST",
        body: JSON.stringify(formFields),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return { success: true };
    } else {
      return { error: "Email already exists!" };
    }
  } catch (error) {
    return { error: "Server Error, Please try again later." };
  }
  revalidatePath("/register");
};

