import { animate } from "motion";
import { useEffect, useState } from "react";
import servicesBackground from "../../assets/763586951.jpg";
import AOS from "aos";
import $ from "jquery";

const Services = (props) => {
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
      <div className="mb-[4rem]">
        <main>
          <div className="relative z-0 text-center">
            <img
              src={servicesBackground}
              alt="ServicesBg"
              className="w-full md:h-[35vw] md:object-cover"
            />
            <h1 className="absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-6xl tracking-wider container-fadein">
              Services<span className="text-yellow-300">.</span>
            </h1>
          </div>
          {isMobile ? (
            <>
              <div
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-anchor-placement="bottom-bottom"
                className="text-center p-[1.7rem]"
              >
                <h1
                  className={`${
                    props.darkMode ? "text-[white]" : ""
                  } font-bold tracking-wide text-[1.6rem] mb-[0.5rem] leading-none`}
                >
                  We'll Deliver{" "}
                  <span className="text-yellow-400">Internationally.</span>
                </h1>
                <p
                  className={`${
                    props.darkMode ? "text-gray-400" : "text-gray-500"
                  } text-[1.2rem]`}
                >
                  With a network of carriers and terminals across North America,
                  we can get your freight moving quickly and delivered to/from
                  Canada and Mexico, as well as the Contiguous USA.
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-anchor-placement="bottom-bottom"
                className="text-center p-[1.7rem]"
              >
                <h1
                  className={`${
                    props.darkMode ? "text-[white]" : ""
                  } font-bold tracking-wide text-[1.6rem] mb-[0.5rem] leading-none`}
                >
                  FTL & LTL
                  <span className="text-yellow-400">.</span>
                </h1>
                <p
                  className={`${
                    props.darkMode ? "text-gray-400" : "text-gray-500"
                  } text-[1.2rem]`}
                >
                  We'll move your Full Truckload or Less Than Truckload freight
                  for a competitive price.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-anchor-placement="bottom-bottom"
                className="text-center p-[1.7rem]"
              >
                <h1
                  className={`${
                    props.darkMode ? "text-[white]" : ""
                  } font-bold tracking-wide text-[1.6rem] mb-[0.5rem] leading-none`}
                >
                  Infrastructure<span className="text-yellow-400">.</span>
                </h1>
                <p
                  className={`${
                    props.darkMode ? "text-gray-400" : "text-gray-500"
                  } text-[1.2rem]`}
                >
                  Our secure yard is located near the World Trade International
                  Bridge. From here we can coordinate with all parties involved
                  in the movement of freight. We have the right equipment to
                  help get your freight on the road.
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-anchor-placement="bottom-bottom"
                className="text-center p-[1.7rem]"
              >
                <h1
                  className={`${
                    props.darkMode ? "text-[white]" : ""
                  } font-bold tracking-wide text-[1.6rem] mb-[0.5rem] leading-none`}
                >
                  Specialized Freight
                  <span className="text-yellow-400">.</span>
                </h1>
                <p
                  className={`${
                    props.darkMode ? "text-gray-400" : "text-gray-500"
                  } text-[1.2rem]`}
                >
                  We have very competent drivers, partners and dedicated
                  specialized equipment to meet your over-sized and over-weight
                  freight.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-anchor-placement="bottom-bottom"
                className="text-center p-[1.7rem]"
              >
                <h1
                  className={`${
                    props.darkMode ? "text-[white]" : ""
                  } font-bold tracking-wide text-[1.6rem] mb-[0.5rem] leading-none`}
                >
                  Industry Standard{" "}
                  <span className="text-yellow-400">Technology.</span>
                </h1>
                <p
                  className={`${
                    props.darkMode ? "text-gray-400" : "text-gray-500"
                  } text-[1.2rem]`}
                >
                  We operate our fleet of tractors with industry standard GPS
                  Tracking and electronic equipment monitoring. We can provide
                  you with the coordinates of your freight at a moment's notice.
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-anchor-placement="bottom-bottom"
                className="text-center p-[1.7rem]"
              >
                <h1
                  className={`${
                    props.darkMode ? "text-[white]" : ""
                  } font-bold tracking-wide text-[1.6rem] mb-[0.5rem] leading-none`}
                >
                  Customer <span className="text-yellow-400">Support.</span>
                </h1>
                <p
                  className={`${
                    props.darkMode ? "text-gray-400" : "text-gray-500"
                  } text-[1.2rem]`}
                >
                  We strive for honesty and transparency with you and everybody
                  we work with.
                </p>
              </div>
              <div
                data-aos="fade"
                data-aos-once="true"
                data-aos-anchor-placement="bottom-bottom"
                className="text-center p-[1.7rem]"
              >
                <h1
                  className={`${
                    props.darkMode ? "text-[white]" : ""
                  } font-bold tracking-wide text-[1.8rem] mt-[1rem] mb-[0.5rem] leading-none`}
                >
                  We offer a variety of services
                  <span className="text-yellow-400">.</span>
                </h1>
                <ul
                  className={`${
                    props.darkMode ? "text-gray-400" : "text-gray-800"
                  } text-[1.1rem] list-none font-light`}
                >
                  <li className="mb-[0.3rem]">Bonded Freight to/from Canada</li>
                  <li className="mb-[0.3rem]">
                    Door to Door Service US/Mexico
                  </li>
                  <li className="mb-[0.3rem]">Mexican Transportation</li>
                  <li className="mb-[0.3rem]">Border Crossing</li>
                  <li className="mb-[0.3rem]">Transloading</li>
                  <li className="mb-[0.3rem]">Drayage</li>
                  <li className="mb-[0.3rem]">Storage</li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-once="false"
                className="text-center p-[2rem] w-[65%] m-auto"
              >
                <h1
                  className={`${
                    props.darkMode ? "text-white" : ""
                  } font-bold tracking-wide text-[2rem] mb-[1rem] leading-tight`}
                >
                  We'll Deliver{" "}
                  <span className="text-yellow-400">Internationally.</span>
                </h1>
                <p
                  className={`${
                    props.darkMode ? "text-gray-400" : "text-gray-500"
                  } text-[1.7rem]`}
                >
                  With a network of carriers and terminals across North America,
                  we can get your freight moving quickly and delivered to/from
                  Canada and Mexico, as well as the Contiguous USA.
                </p>
              </div>
              <div className="services-grid p-[2rem] w-[75%] m-auto">
                <div
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-once="false"
                  className="text-center"
                >
                  <h1
                    className={`${
                      props.darkMode ? "text-white" : ""
                    } font-bold tracking-wide text-[2rem] mb-[1rem] leading-tight`}
                  >
                    FTL & LTL<span className="text-yellow-400">.</span>
                  </h1>
                  <p
                    className={`${
                      props.darkMode ? "text-gray-400" : "text-gray-500"
                    } text-[1.7rem]`}
                  >
                    We'll move your Full Truckload or Less Than Truckload
                    freight for a competitive price.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-once="false"
                  className="text-center"
                >
                  <h1
                    className={`${
                      props.darkMode ? "text-white" : ""
                    } font-bold tracking-wide text-[2rem] mb-[1rem] leading-tight`}
                  >
                    Infrastructure<span className="text-yellow-400">.</span>
                  </h1>
                  <p
                    className={`${
                      props.darkMode ? "text-gray-400" : "text-gray-500"
                    } text-[1.7rem]`}
                  >
                    Our secure yard is located near the World Trade
                    International Bridge. From here we can coordinate with all
                    parties involved in the movement of freight. We have the
                    right equipment to help get your freight on the road.
                  </p>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-once="false"
                  className="text-center"
                >
                  <h1
                    className={`${
                      props.darkMode ? "text-white" : ""
                    } font-bold tracking-wide text-[2rem] mb-[1rem] leading-tight`}
                  >
                    Specialized Freight
                    <span className="text-yellow-400">.</span>
                  </h1>
                  <p
                    className={`${
                      props.darkMode ? "text-gray-400" : "text-gray-500"
                    } text-[1.7rem]`}
                  >
                    We have very competent drivers, partners and dedicated
                    specialized equipment to meet your over-sized and
                    over-weight freight.
                  </p>
                </div>
              </div>
              <div className="services-grid-2 p-[2rem] w-[70%] m-auto">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-once="false"
                  className="text-center"
                >
                  <h1
                    className={`${
                      props.darkMode ? "text-white" : ""
                    } font-bold tracking-wide text-[2rem] mb-[1rem] leading-tight`}
                  >
                    Industry Standard{" "}
                    <span className="text-yellow-400">Technology.</span>
                  </h1>
                  <p
                    className={`${
                      props.darkMode ? "text-gray-400" : "text-gray-500"
                    } text-[1.7rem]`}
                  >
                    We operate our fleet of tractors with industry standard GPS
                    Tracking and electronic equipment monitoring. We can provide
                    you with the coordinates of your freight at a moment's
                    notice.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-once="false"
                  className="text-center"
                >
                  <h1
                    className={`${
                      props.darkMode ? "text-white" : ""
                    } font-bold tracking-wide text-[2rem] mb-[1rem] leading-tight`}
                  >
                    Customer <span className="text-yellow-400">Support.</span>
                  </h1>
                  <p
                    className={`${
                      props.darkMode ? "text-gray-400" : "text-gray-500"
                    } text-[1.7rem]`}
                  >
                    We strive for honesty and transparency with you and
                    everybody we work with.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade"
                data-aos-once="false"
                data-aos-anchor-placement="bottom-bottom"
                className="text-center p-[1.7rem]"
              >
                <h1
                  className={`${
                    props.darkMode ? "text-white" : ""
                  } font-bold tracking-wide text-[3rem] mb-[1rem]`}
                >
                  We offer a variety of services
                  <span className="text-yellow-400">.</span>
                </h1>
                <ul
                  className={`${
                    props.darkMode ? "text-gray-400" : "text-gray-800"
                  } text-[1.7rem] list-none font-light`}
                >
                  <li className="mb-[0.3rem]">Bonded Freight to/from Canada</li>
                  <li className="mb-[0.3rem]">
                    Door to Door Service US/Mexico
                  </li>
                  <li className="mb-[0.3rem]">Mexican Transportation</li>
                  <li className="mb-[0.3rem]">Border Crossing</li>
                  <li className="mb-[0.3rem]">Transloading</li>
                  <li className="mb-[0.3rem]">Drayage</li>
                  <li className="mb-[0.3rem]">Storage</li>
                </ul>
              </div>
            </>
          )}
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
//
