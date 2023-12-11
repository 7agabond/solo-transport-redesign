import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function menuToggle() {
    setMenu((prevMenu) => !prevMenu);
  }

  return (
    <div>
      <div className="hidden md:flex justify-between bg-gray-400 p-5">
        <h1 className="font-fjalla text-4xl">
          <a href="/">Solo Transport</a>
        </h1>
        <ul className="flex gap-4 items-center p-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex justify-between items-center p-2">
        <h1 className="font-fjalla text-4xl">
          <a href="/">Solo Transport</a>
        </h1>
        {menu ? (
          <RxCross2
            onClick={menuToggle}
            className="z-[2] text-3xl hover:cursor-pointer"
          />
        ) : (
          <FiAlignJustify
            onClick={menuToggle}
            className="text-3xl hover:cursor-pointer"
          />
        )}
        <div
          className={
            menu
              ? `fixed md:hidden top-0 left-0 h-full w-full bg-gray-200 ease-in-out duration-500`
              : `fixed md:hidden top-[-100%]`
          }
        >
          <ul className="block gap-4 text-center p-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
