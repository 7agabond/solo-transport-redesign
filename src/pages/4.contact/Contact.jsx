import { useEffect } from "react";
import { animate } from "motion";
import $ from "jquery";

const Contact = (props) => {
  useEffect(() => {
    $(window).on("load", () => {
      $(".loader-wrapper").fadeOut("slow");
    });
  }, []);

  props.darkMode
    ? animate("body", { backgroundColor: "rgb(2 6 23)" })
    : props.darkMode === false &&
      animate("body", { backgroundColor: "initial" });

  return (
    <>
      <div
        className={`${
          props.darkMode ? "bg-gray-400" : "bg-gray-900"
        } relative w-full h-[30vh]`}
      >
        <h1
          className={`${
            props.darkMode ? "text-gray-900" : "text-white"
          } whitespace-nowrap absolute text-[2.5rem] md:text-[4rem] font-semibold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] container-fadein md:tracking-wider`}
        >
          Contact Us<span className="text-yellow-300">.</span>
        </h1>
      </div>
      <div className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
    </>
  );
};

export default Contact;
