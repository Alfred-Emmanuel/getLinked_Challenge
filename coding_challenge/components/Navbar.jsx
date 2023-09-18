// "use server"
import Link from "next/link";

const Navbar = ({ isDarkMode, handleDarkModeChange }) => {

      const toggleDarkMode = () => {
        handleDarkModeChange(!isDarkMode); // Invert the current state
      };
  return (
    <nav className=" md:h-24 md:flex md:items-center md:justify-center sticky border-bottom">
      <div className=" md:flex md:justify-between items-center md:mx-[7%] md:w-full  ">
        <h2 className="text-2xl font-bold">
          get<span className="text-[var(--primary-color)]">linked</span>
        </h2>
        <ul className="md:flex md:w-[50%] md:justify-around md:items-center ">
          <li>Home</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <Link
          href="#"
          className="bg-gradient-to-r from-pink-500 via-primary-color to-secondary-color px-12 py-2 rounded-lg "
          //   style={{ backgroundColor: mixedGradient }}
        >
          Register
        </Link>
        {/* <div>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
