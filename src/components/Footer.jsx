import React from "react";

const Footer = () => {
  return (
    <footer className="z-[997] fixed md:static bottom-0 flex justify-end bg-gray-900 border-solid border-t border-gray-400 w-full">
      <p className="text-white py-2 px-5 text-[0.8rem] md:text-base">
        © 2023{" "}
        <span className="hover:text-yellow-400 transition-all">
          Solo Transport Inc.
        </span>{" "}
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
