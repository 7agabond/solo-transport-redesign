import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = (props) => {
  const [menu, setMenu] = useState(false);

  function menuToggle() {
    setMenu((prevMenu) => !prevMenu);
  }

  function mobileToggle() {
    props.modeToggle();
    menuToggle();
  }

  return (
    <div>
      <div
        className={`fixed ${
          props.darkMode ? "bg-black/[0.3] text-white" : "bg-white/[0.3]"
        } z-[998] hidden md:flex w-full justify-between border-solid border-b border-gray-200 shadow-md`}
      >
        <a href="/">
          <h1 className="font-fjalla text-4xl hover:text-yellow-400 transition-all tracking-wide p-5">
            SOLO TRANSPORT
          </h1>
        </a>
        <ul className="flex gap-4 items-center p-1">
          <li
            className="min-w-[80px] m-auto py-2 rounded-md text-center border-solid hover:border-b-2 hover:shadow-md active:translate-y-1 border-gray-200 hover:text-yellow-500 hover:cursor-pointer transition-all"
            onClick={props.modeToggle}
          >
            {props.darkMode ? "🌗" : "🌓"}
          </li>
          <a href="/">
            <li className="min-w-[80px] m-auto py-2 rounded-md text-center border-solid hover:border-b-2 hover:shadow-md active:translate-y-1 border-gray-200 hover:text-yellow-500 transition-all">
              Home
            </li>
          </a>
          <a href="/services">
            <li className="min-w-[80px] m-auto py-2 rounded-md text-center border-solid hover:border-b-2 hover:shadow-md active:translate-y-1 border-gray-200 hover:text-yellow-500 transition-all">
              Services
            </li>
          </a>
          <a href="/about">
            <li className="min-w-[80px] m-auto py-2 rounded-md text-center border-solid hover:border-b-2 hover:shadow-md active:translate-y-1 border-gray-200 hover:text-yellow-500 transition-all">
              About
            </li>
          </a>
          <a href="/contact">
            <li className="min-w-[80px] m-auto py-2 rounded-md text-center border-solid hover:border-b-2 hover:shadow-md active:translate-y-1 border-gray-200 hover:text-yellow-500 transition-all">
              Contact
            </li>
          </a>
        </ul>
      </div>
      <div
        className={`fixed ${
          props.darkMode ? "bg-black/[0.3] text-white" : "bg-white/[0.3]"
        } z-[998] md:hidden w-full flex justify-between items-center p-3 border-solid border-b border-gray-300 shadow-md`}
      >
        <h1 className="font-fjalla text-4xl z-[1] tracking-wide hover:text-yellow-500 transition-all">
          <a href="/">SOLO TRANSPORT</a>
        </h1>
        {menu ? (
          <RxCross2
            onClick={menuToggle}
            className={`${
              props.darkMode ? "hover:bg-gray-700" : "hover:bg-white"
            } z-[2] text-4xl hover:cursor-pointer rounded-full p-1 transition-all`}
          />
        ) : (
          <FiAlignJustify
            onClick={menuToggle}
            className={`${
              props.darkMode ? "hover:bg-gray-700" : "hover:bg-white"
            } z-[2] text-4xl hover:cursor-pointer rounded-full p-1 transition-all`}
          />
        )}
        <div
          className={
            menu
              ? `fixed md:hidden top-0 left-0 h-full w-full ${
                  props.darkMode ? "bg-slate-900" : "bg-gray-200"
                } ease-in-out duration-500`
              : `fixed md:hidden top-[-100%]`
          }
        >
          <ul className="block my-[11rem] text-center text-4xl">
            <li
              className="border-solid border-b border-[#FFF] p-5 font-bold font-mono tracking-wider cursor-pointer"
              onClick={mobileToggle}
            >
              {props.darkMode ? "🌗" : "🌓"}
            </li>
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
