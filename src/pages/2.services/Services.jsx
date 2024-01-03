import { animate } from "motion";
import { useEffect } from "react";
import servicesBackground from "../../assets/763586951.jpg";
import AOS from "aos";
import $ from "jquery";

const Services = (props) => {
  props.darkMode
    ? animate("body", { backgroundColor: "rgb(2 6 23)" })
    : props.darkMode === false &&
      animate("body", { backgroundColor: "initial" });

  useEffect(() => {
    $(window).on("load", () => {
      $(".loader-wrapper").fadeOut("slow");
    });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  setTimeout(() => {
    AOS.refresh();
  }, 500);

  return (
    <>
      <div className="mb-[4rem]">
        <main>
          <div className="relative z-0 text-center">
            <img
              src={servicesBackground}
              alt="ServicesBg"
              className="w-full md:h-[40vw] md:object-cover"
            />
            <h1 className="absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-6xl tracking-wider">
              Services<span className="text-yellow-300">.</span>
            </h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="false"
            className={`${props.darkMode ? "text-white" : ""} text-center`}
          >
            <h1>
              We'll deliver internationally
              <span className="text-yellow-400">.</span>
            </h1>
            <p>
              With a network of carriers and terminals across North America, we
              can get your freight moving quickly and delivered to/from Canada
              and Mexico, as well as the Contiguous USA.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="false"
            className={`${props.darkMode ? "text-white" : ""} text-center`}
          >
            <h1>
              FTL & LTL<span className="text-yellow-400">.</span>
            </h1>
            <p>
              We'll move your Full Truckload or Less Than Truckload freight for
              a competitive price.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="false"
            className={`${props.darkMode ? "text-white" : ""} text-center`}
          >
            <h1>
              Specialized Freight<span className="text-yellow-400">.</span>
            </h1>
            <p>
              We have very competent drivers, partners and dedicated specialized
              equipment to meet your over-sized and over-weight freight.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="false"
            className={`${props.darkMode ? "text-white" : ""} text-center`}
          >
            <h1>
              Infrastructure<span className="text-yellow-400">.</span>
            </h1>
            <p>
              Our secure yard is located near the World Trade International
              Bridge. From here we can coordinate with all parties involved in
              the movement of freight. We have the right equipment to help get
              your freight on the road.
            </p>
          </div>
        </main>
      </div>
      <div className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
    </>
  );
};

export default Services;
