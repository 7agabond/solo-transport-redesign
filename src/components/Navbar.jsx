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
          <a href="/">SOLO TRANSPORT</a>
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
      <div className="md:hidden flex justify-between items-center p-2 border-solid border-b border-gray-300">
        <h1 className="font-fjalla text-4xl">
          <a href="/">SOLO TRANSPORT</a>
        </h1>
        {menu ? (
          <RxCross2
            onClick={menuToggle}
            className="z-[2] text-4xl hover:cursor-pointer hover:bg-white rounded-full p-1 transition-all"
          />
        ) : (
          <FiAlignJustify
            onClick={menuToggle}
            className="text-4xl hover:cursor-pointer hover:bg-gray-200 rounded-full p-1 transition-all"
          />
        )}
        <div
          className={
            menu
              ? `fixed md:hidden top-0 left-0 h-full w-full bg-gray-200 ease-in-out duration-500`
              : `fixed md:hidden top-[-100%]`
          }
        >
          <ul className="block my-[8rem] text-center text-4xl">
            <li className="border-solid border-b border-[#FFF] p-5 font-bold font-mono tracking-wider">
              <a href="/" className="hover:text-yellow-500 transition-all">
                home
              </a>
            </li>
            <li className="border-solid border-b border-[#FFF] p-5 font-bold font-mono tracking-wider">
              <a
                href="/services"
                className="hover:text-yellow-500 transition-all"
              >
                services
              </a>
            </li>
            <li className="border-solid border-b border-[#FFF] p-5 font-bold font-mono tracking-wider">
              <a href="/about" className="hover:text-yellow-500 transition-all">
                about
              </a>
            </li>
            <li className="p-5 font-bold font-mono tracking-wider">
              <a
                href="/contact"
                className="hover:text-yellow-500 transition-all"
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
