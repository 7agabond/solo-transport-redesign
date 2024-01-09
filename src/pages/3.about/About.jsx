import { useEffect } from "react";
import { animate } from "motion";
import forkliftImg from "../../assets/forklift.jpg";
import platformImg from "../../assets/img-2584_orig.jpg";
import $ from "jquery";

const About = (props) => {
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
      <div>
        <div
          className={`${
            props.darkMode ? "bg-gray-300" : "bg-gray-900"
          } relative w-full h-[30vh]`}
        >
          <h1
            className={`${
              props.darkMode ? "text-gray-900" : "text-white"
            } absolute text-[2rem] md:text-[4rem] font-semibold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] container-fadein md:tracking-wider`}
          >
            About <span className="text-yellow-300">Solo.</span>
          </h1>
        </div>
        <div className="services-grid-2 p-[2rem] max-w-[1200px] m-auto">
          <div>
            <h1>Established in 1998.</h1>
            <p>
              In August 1998, Solo started out as a modest brokerage with a few
              customers trying to differentiate itself from the rest by being
              transparent. We've grown into a capable provider, offering a wide
              range of services. We have decades of experience and have managed
              to stay competitive in this industry. Laredo is our home but we
              have partners all across the continent.
            </p>
          </div>
          <div>
            <h1>Our Goal.</h1>
            <p>
              To deliver your products safely and on time. We want to develop
              lasting relationships with our Customers and Carriers.
            </p>
          </div>
          <img src={forkliftImg} className="h-[500px] object-cover" />
          <img src={platformImg} className="h-[500px] object-cover" />
        </div>
        <h1>We're Here to Help.</h1>
      </div>
      <div className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
    </>
  );
};

export default About;
