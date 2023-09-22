import Image from "next/image";
import Link from "next/link";
import getCategories from "../lib/getCategories";
import { revalidatePath } from "next/cache";

async function Register() {
  const categoriesData = getCategories();
  const categories = await categoriesData;

  const submitForm = async formData => {
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

    await fetch("https://backend.getlinked.ai/hackathon/registration", {
      method: "POST",
      body: JSON.stringify(formFields),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePath("/register");
  };

  return (
    <main>
      <div className="lg:flex lg:items-center gap-[2%] lg:mx-[11%] relative">
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" hidden lg:block absolute lg:w-[50%] lg:-top-[2%] lg:-left-[30%] lg:z-[10] opacity-80 blink-animation"
        />
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" top-[10%] -left-[40%] w-[90%] lg:block absolute lg:w-[42%] lg:top-[38%] lg:left-[72%] lg:z-[10] opacity-80 blink-animation"
        />
        <Image
          src="/star(4).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[20%] left-[80%] w-[3%] lg:w-[1%] lg:top-[19%] lg:left-[4%] lg:z-[10] lg:opacity-90 blink-animation"
        />
        <Image
          src="/star.png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[39%] left-[5%] w-[3%] lg:w-[1%] lg:top-[89%] lg:-left-[1%] lg:z-[10] lg:opacity-90 blink-animation"
        />
        <Image
          src="/star(4).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[71%] left-[85%] w-[3%] lg:w-[1%] lg:top-[78%] lg:left-[35%] lg:z-[10] lg:opacity-90 blink-animation"
        />
        <Image
          src="/star(2).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute -top-[3%] left-[80%] w-[3%] lg:w-[1%] lg:top-[4%] lg:left-[85%] lg:z-[10] lg:opacity-90 blink-animation"
        />
        <Image
          src="/star(2).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute -top-[3%] left-[80%] w-[3%] lg:w-[1%] lg:top-[99%] lg:left-[90%] lg:z-[10] lg:opacity-90 blink-animation"
        />
        <div className="lg:w-[40%] px-12 lg:px-0 h-[40vh] lg:h-auto lg:pt-[7%] ">
          <Link href="/">
            <Image
              className="lg:hidden pt-5"
              src="/back-btn.png"
              width={20}
              height={20}
              alt=""
            />
          </Link>
          <legend className=" lg:hidden text-xl pt-5 font-semibold text-primary-color">
            Register
          </legend>
          <div className="px-6 lg:px-0">
            {" "}
            <Image src="/man-in-chair.png" width={500} height={500} alt="" />
          </div>
        </div>
        <div className=" lg:w-[54%] ">
          <form
            className="px-12 mt-10 py-8 lg:mt-0 lg:px-16 lg:py-8 shadow-md lg:bg-white lg:bg-opacity-5 lg:border-primary-color lg:border-opacity-40"
            action={submitForm}
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
                  {categories.map(category => (
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
            <div className="flex lg:gap-5 gap-2">
              <input
                type="checkbox"
                name="privacy_policy_accepted"
                className="lg:bg-transparent"
                required
              />
              <label className="text-[0.75rem] lg:text-[0.9rem]">
                I agree with the event&apos;s terms and conditions and privacy
                policy
              </label>
            </div>
            <div className="flex justify-center items-center mt-8 lg:pb-0 pb-10">
              <button className="bg-gradient-to-r from-pink via-primary-color to-secondary-color  px-12 py-2 rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
