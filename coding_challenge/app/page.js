import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="md:pl-[7%]  ">
        <Image
          src="/star.png"
          alt="first star"
          width={20}
          height={20}
          className=" absolute md:top-50 md:left-40 md:z-[10] md:opacity-90"
        />
        <Image
          src="/star(1).png"
          alt="second star"
          width={20}
          height={20}
          className=" absolute md:top-60 md:right-[49%] md:z-[10] md:opacity-90"
        />
        <Image
          src="/star(2).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute md:top-[77%] md:left-[30%] md:z-[10] md:opacity-90"
        />
        <div className=" md:text-right md:pr-[15%] md:mt-10">
          <h2 className="md:text-3xl md:relative italic font-medium w-auto ">
            Igniting a Revolution in{" "}
            <span className="md:relative">HR Innovation</span>
            <img
              src="/vector 4.png"
              alt="Curved Arch"
              className="absolute md:left-1/2 md:transform -translate-x-1/2 md:w-48 md:h-3 md:ml-[42%]"
            />
          </h2>
        </div>
        <div className="md:mt-[3%] md:flex ">
          <div>
            <Image src="/Title.png" width={650} height={650} />
            <p className="md:mb-10 md:mt-5 md:w-[60%]">
              Participate in getLinked Tech Hackathon 2023 and stand a chance to
              win a big prize
            </p>
            <Link
              href="#"
              className="bg-gradient-to-r from-pink-500 via-primary-color to-secondary-color px-12 py-3 rounded-lg "
            >
              Register
            </Link>
            <Image
              src="/Countdown time.png"
              width={200}
              height={200}
              className="mt-10"
            />
          </div>
          <div className="relative">
            <Image
              src="/man-wearing-smart-glasses.png"
              alt="man wearing smart glasses"
              width={500}
              height={500}
            />
            <Image
              src="/globe.png"
              alt="the globe"
              width={700}
              height={700}
              className=" absolute md:-top-5 md:-left-10 md:z-[10] md:opacity-90"
            />
            <Image
              src="/Purple-Lens-Flare-PNG.png"
              alt="the globe"
              width={900}
              height={900}
              className=" absolute md:-top-20 md:left-10 md:z-[10] md:opacity-90"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
