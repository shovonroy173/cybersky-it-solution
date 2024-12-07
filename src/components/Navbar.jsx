import { Link } from "react-router-dom";
import { SiGoogletranslate } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import IconBg from "./IconBg";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import DarkModeToggle from "../utils/DarkModeToggle";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const changeIconBG = () => {
    setActive(!active);
    console.log("Click");
  };
  return (
    <div
      className="w-full h-14  flex justify-between items-center fixed top-0 px-5 dark:bg-gray-700 bg-white z-20 transition-all duration-300 ease-in-out
    "
    >
      <div>
        <Link to="/" className="text-orange-600 font-extrabold">
          Logo <span>.</span>
        </Link>
      </div>
      <div className="flex items-center relative border border-gray-300 p-1 w-1/2 lg:w-1/4 rounded-md">
        <input
          type="text"
          placeholder="Search for food.."
          className="border-none outline-none w-full text-sm dark:bg-gray-700 bg-white dark:text-gray-100 text-gray-400 transition-all duration-300 ease-in-out"
        />
        <div className="absolute right-0.5">
          <IconBg active={true} icon={<CiSearch />} />
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <DarkModeToggle />
        <div className="hidden lg:block">
          <IconBg active={true} icon={<SiGoogletranslate />} />
        </div>

        <IconBg active={active} changeIconBG={changeIconBG} icon={<FaBars />} />
      </div>
    </div>
  );
};

export default Navbar;
