import React from "react";
import { revalidateTag } from "next/cache";
import getCategories from "../../components/getCategories";
import Image from "next/image";

async function Test() {
  const categoriesData = getCategories();
  const categories = await categoriesData;

  const res = await fetch(
    "https://650cbf1347af3fd22f67f59a.mockapi.io/Product",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  const products = await res.json();

  const addProductToDb = async formData => {
    "use server";
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
      !privacy_policy_accepted ||
      !group_size ||
      !project_topic
    )
      return;

    const newProduct = {
      email,
      phone_number,
      team_name,
      group_size,
      project_topic,
      category,
      privacy_policy_accepted,
    };

    await fetch("https://650cbf1347af3fd22f67f59a.mockapi.io/Product", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("Data submitted successfully");

    revalidateTag("products");
  };
  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Products</h1>
      <form
        action={addProductToDb}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <legend>Register</legend>
        <div className="lg:flex">
          <legend>Be part of this movement!</legend>
          <div className="lg:flex border w-[10%]">
            <Image src="/man-walking.png" alt="" width={10} height={10} />
            <Image src="/woman-walking.png" alt="" width={10} height={10} />
          </div>
          <h1>Create your account</h1>
        </div>
        <div className="lg:flex gap-[6%]">
          <div className=" lg:w-[47%]">
            <label>Team's Name</label> <br />
            <input
              type="text"
              name="team_name"
              placeholder="Enter the name of your group"
              className="lg:w-[100%] lg:mb-5 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
            />
          </div>
          <div className="lg:w-[47%]">
            <label>Phone Number</label> <br />
            <input
              type="tel"
              name="phone_number"
              placeholder="Enter your phone number"
              className="lg:w-[100%] lg:mb-5 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
            />
          </div>
        </div>
        <div className="lg:flex gap-[6%]">
          <div className=" lg:w-[47%]">
            <label>Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="lg:w-[100%] lg:mb-5 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
            />
          </div>
          <div className="lg:w-[47%]">
            <label>Project Topic</label> <br />
            <input
              type="text"
              name="project_topic"
              placeholder="What is your group project about?"
              className="lg:w-[100%] lg:mb-5 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
            />
          </div>
        </div>
        <div className="lg:flex gap-[6%]">
          <div className="lg:w-[47%]">
            <label>Category</label> <br />
            <select
              name="category"
              className="lg:w-[100%] lg:mb-5 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md"
            >
              <option value="" disabled>
                Select your category
              </option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:w-[47%]">
            <label>Group Size</label> <br />
            <select
              name="group_size"
              className="lg:w-[100%] lg:mb-5 lg:px-3 lg:py-2 bg-transparent border-white border-2 border-opacity-50 rounded-md "
            >
              <option value="" disabled>
                Select
              </option>
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <p>Please review your registration details before submitting</p>
          <div className="flex gap-5">
            <input type="checkbox" name="privacy_policy_accepted" required />
            <label>
              I agree with the event&apos;s terms and conditions and privacy
              policy
            </label>
          </div>
        </div>
        <button className="bg-blue text-white p-2 rounded-md">Submit</button>
      </form>

      <h2 className="text-center mb-5 text-2xl">Results</h2>

      <div className="flex flex-wrap gap-5 px-10">
        {products.map(product => (
          <div
            key={product.id}
            className="p-5 bg white mr-3 rounded-lg bg-white text-black mb-5"
          >
            <p className="mb-2 text-xl font-normal">
              <span className="text-primary-color text-[1.3rem] font-semibold">
                Email:
              </span>{" "}
              {product.email}
            </p>
            <p className="mb-2 text-xl font-normal">
              <span className="text-primary-color text-[1.3rem] font-semibold">
                Phone number:
              </span>
              {product.phone_number}
            </p>
            <p className="mb-2 text-xl font-normal">
              <span className="text-primary-color text-[1.3rem] font-semibold">
                Team Name:
              </span>
              {product.team_name}
            </p>
            <p className="mb-2 text-xl font-normal">
              <span className="text-primary-color text-[1.3rem] font-semibold">
                Group Size:
              </span>{" "}
              {product.group_size}
            </p>
            <p className="mb-2 text-xl font-normal">
              <span className="text-primary-color text-[1.3rem] font-semibold">
                Project Topic:
              </span>{" "}
              {product.project_topic}
            </p>
            <p className="mb-2 text-xl font-normal">
              <span className="text-primary-color text-[1.3rem] font-semibold">
                Category:
              </span>{" "}
              {product.category}
            </p>
            <p className="mb-2 text-xl font-normal">
              <span className="text-primary-color text-[1.3rem] font-semibold">
                Privacy Policy:
              </span>{" "}
              {product.privacy_policy_accepted}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Test;
