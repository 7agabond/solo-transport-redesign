import { useState, useEffect } from "react";
import { animate } from "motion";
import truckImg from "../../assets/800318861.jpg";
import stiLogo from "../../assets/sti-logo-black-yellow.png";
import Typed from "react-typed";
import $ from "jquery";

const Home = (props) => {
  props.darkMode
    ? animate("body", { backgroundColor: "rgb(2 6 23)" })
    : props.darkMode === false &&
      animate("body", { backgroundColor: "initial" });

  useEffect(() => {
    $(window).on("load", () => {
      $(".loader-wrapper").fadeOut("slow");
    });
  }, []);

  return (
    <>
      <main>
        <div className="md:relative text-center mb-[4rem] md:mb-[initial]">
          <img src={truckImg} className="w-full md:h-[96.4vh] object-cover" />
          <div className="md:absolute md:bottom-[10%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] text-center m-auto container-fadein w-[80%]">
            <h1 className="whitespace-nowrap text-yellow-300 text-4xl xl:text-6xl mt-[2rem] font-bold">
              Solo Transport Inc.
            </h1>
            <img
              src={stiLogo}
              className="m-auto mt-[4rem] mb-[3rem] md:w-[40%]"
            />
            <div
              className={`md:absolute p-[1rem] ${
                props.darkMode
                  ? "md:bg-black/[0.3] md:rounded-md"
                  : "md:bg-white/[0.4] md:rounded-md"
              }`}
            >
              <Typed
                className={`${
                  props.darkMode ? "text-white" : "text-gray-900"
                } md:text-2xl xl:text-4xl text-xl tracking-wide`}
                strings={[
                  "In business since 1998 and based out of Laredo, TX., we have the experience and capacity to meet your needs in flat bed and specialized freight.",
                ]}
                typeSpeed={30}
                backSpeed={140}
              />
            </div>
          </div>
        </div>
      </main>
      <div className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
    </>
  );
};

export default Home;
