import { useEffect, useState } from "react";
import { animate } from "motion";
import AOS from "aos";
import $ from "jquery";
import forkliftImg from "../../assets/forklift.jpg";
import platformImg from "../../assets/img-2584_orig.jpg";

const About = (props) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      console.log(isMobile);
    } else {
      setIsMobile(false);
      console.log(isMobile);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    $(window).on("load", () => {
      $(".loader-wrapper").fadeOut("slow");
    });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  setTimeout(() => {
    AOS.refresh();
  }, 500);

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
          About <span className="text-yellow-300">Solo.</span>
        </h1>
      </div>
      {isMobile ? (
        <div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor-placement="bottom-bottom"
            className="text-center"
          >
            <h1
              className={`${
                props.darkMode ? "text-white" : ""
              } pt-[2rem] font-semibold tracking-wide text-[2rem] mb-[1rem] leading-tight`}
            >
              Established in <span className="text-yellow-300">1998.</span>
            </h1>
            <p
              className={`${
                props.darkMode ? "text-gray-400" : "text-gray-500"
              } px-[1.5rem] text-[1.3rem]`}
            >
              In August 1998, Solo started out as a modest brokerage with a few
              customers trying to differentiate itself from the rest by being
              transparent. We've grown into a capable provider, offering a wide
              range of services. We have decades of experience and have managed
              to stay competitive in this industry. Laredo is our home but we
              have partners all across the continent.
            </p>
            <p
              className={`${
                props.darkMode ? "text-gray-400" : "text-gray-500"
              } text-[1.5rem]`}
            >
              ↓
            </p>
          </div>
          <img
            src={forkliftImg}
            data-aos="fade"
            data-aos-once="true"
            data-aos-anchor-placement="bottom-bottom"
            className="py-[2rem] px-[0.5rem]"
          />
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor-placement="bottom-bottom"
            className="text-center"
          >
            <h1
              className={`${
                props.darkMode ? "text-white" : ""
              } px-[1rem] font-semibold tracking-wide text-[2rem] mb-[1rem] leading-tight`}
            >
              Our <span className="text-yellow-300">Goal.</span>
            </h1>
            <p
              className={`${
                props.darkMode ? "text-gray-400" : "text-gray-500"
              } px-[1.5rem] text-[1.3rem]`}
            >
              To deliver your products safely and on time. We want to develop
              lasting relationships with our Customers and Carriers.
            </p>
            <p
              className={`${
                props.darkMode ? "text-gray-400" : "text-gray-500"
              } text-[1.5rem]`}
            >
              ↓
            </p>
          </div>
          <img
            src={platformImg}
            data-aos="fade"
            data-aos-once="true"
            data-aos-anchor-placement="bottom-bottom"
            className="py-[2rem] px-[0.5rem]"
          />
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
            className={`${
              props.darkMode ? "text-white" : ""
            } whitespace-nowrap px-[1rem] text-center font-bold tracking-wide text-[2.3rem] pt-[4rem] pb-[9rem]`}
          >
            We're Here to <span className="text-yellow-300">Help.</span>
          </h1>
        </div>
      ) : (
        <div>
          <div className="services-grid-2 p-[2rem] max-w-[1200px] m-auto">
            <div
              data-aos="fade-right"
              data-aos-once="false"
              data-aos-anchor-placement="bottom-bottom"
              className="text-center"
            >
              <h1
                className={`${
                  props.darkMode ? "text-white" : ""
                } font-semibold tracking-wide text-[2rem] mb-[1rem] leading-tight`}
              >
                Established in <span className="text-yellow-300">1998.</span>
              </h1>
              <p
                className={`${
                  props.darkMode ? "text-gray-400" : "text-gray-500"
                } text-[1.5rem]`}
              >
                In August 1998, Solo started out as a modest brokerage with a
                few customers trying to differentiate itself from the rest by
                being transparent. We've grown into a capable provider, offering
                a wide range of services. We have decades of experience and have
                managed to stay competitive in this industry. Laredo is our home
                but we have partners all across the continent.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-once="false"
              data-aos-anchor-placement="bottom-bottom"
              className="text-center"
            >
              <h1
                className={`${
                  props.darkMode ? "text-white" : ""
                } font-semibold tracking-wide text-[2rem] mb-[1rem] leading-tight`}
              >
                Our <span className="text-yellow-300">Goal.</span>
              </h1>
              <p
                className={`${
                  props.darkMode ? "text-gray-400" : "text-gray-500"
                } text-[1.5rem]`}
              >
                To deliver your products safely and on time. We want to develop
                lasting relationships with our Customers and Carriers.
              </p>
            </div>
            <img
              src={forkliftImg}
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-anchor-placement="bottom-bottom"
              className="rounded-md h-[500px] object-cover"
            />
            <img
              src={platformImg}
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-anchor-placement="bottom-bottom"
              className="rounded-md h-[500px] object-cover"
            />
          </div>
          <h1
            data-aos="fade"
            data-aos-once="false"
            data-aos-anchor-placement="bottom-bottom"
            className={`${
              props.darkMode ? "text-white" : ""
            } text-center font-bold tracking-wide text-[2.5rem] pt-[5rem] pb-[7rem]`}
          >
            We're Here to <span className="text-yellow-300">Help.</span>
          </h1>
        </div>
      )}
      <div className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
    </>
  );
};

export default About;
