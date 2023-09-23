"use client";
import Image from "next/image";
import Link from "next/link";
import RegistrationForm from "@/components/RegistrationForm";
import getCategories from "@/components/getCategories";
import { Fade } from "react-awesome-reveal";
// import { revalidatePath } from "next/cache";

async function Register() {
  const categoriesData = getCategories();
  const categories = await categoriesData;

  return (
    <main>
      <div className="lg:flex lg:items-center gap-[2%] lg:mx-[11%] relative">
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" hidden lg:block absolute lg:w-[50%] lg:-top-[2%] lg:-left-[30%] lg:z-[10] opacity-80 blink-later-animation"
        />
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" top-[10%] -left-[40%] w-[90%] lg:block absolute lg:w-[40%] lg:top-[58%] lg:left-[72%] lg:h-[250px] lg:z-[10] opacity-80 blink-animation"
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
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <legend className=" lg:hidden text-xl pt-5 font-semibold text-primary-color">
              Register
            </legend>
          </Fade>
          <div className="px-6 lg:px-0">
            <Fade direction="up" duration={2000} triggerOnce={true}>
              <Image src="/man-in-chair.png" width={500} height={500} alt="" />
            </Fade>
          </div>
        </div>
        <div className=" lg:w-[54%] relative lg:z-50 ">
          <RegistrationForm categoriesData={categories} />
        </div>
      </div>
    </main>
  );
}

export default Register;
