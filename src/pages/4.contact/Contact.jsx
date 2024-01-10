import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useEffect } from "react";
import { animate } from "motion";
import "leaflet/dist/leaflet.css";
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
      <div className="contact-grid">
        <div className="fadein-left">
          <MapContainer center={[27.6137701, -99.536271]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[27.6137701, -99.536271]}></Marker>
          </MapContainer>
        </div>
        <div className="fadein-right m-auto">
          <h1
            className={`${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            } pt-[2rem] pb-[1rem] px-[2rem] max-w-[800px] md:text-[0.9rem] xl:text-[1.2rem] font-semibold text-center`}
          >
            Let us know how we can help you meet your needs. Contact us via
            email to get started with a rate quote or give us a call so that we
            may address your concerns.
          </h1>
          <h1
            className={`${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            } p-[1rem] md:text-[0.9rem] xl:text-[1.2rem] font-semibold text-center`}
          >
            We're ready for your business.
          </h1>
          <h1
            className={`${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            } p-[1rem] md:text-[0.9rem] xl:text-[1.2rem] font-semibold text-center`}
          >
            email:
          </h1>
          <p
            className={`${
              props.darkMode ? "text-yellow-300" : "text-yellow-500"
            } p-[1rem] md:text-[0.9rem] xl:text-[1.2rem] font-light text-center`}
          >
            <a
              href="mailto:quote@solotransport.com"
              className="hover:underline"
            >
              quote@solotransport.com
            </a>
          </p>
          <h1
            className={`${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            } p-[1rem] md:text-[0.9rem] xl:text-[1.2rem] font-semibold text-center`}
          >
            phone:
          </h1>
          <p
            className={`${
              props.darkMode ? "text-yellow-300" : "text-yellow-500"
            } p-[1rem] md:text-[0.9rem] xl:text-[1.2rem] font-light text-center`}
          >
            (956) 712-4244
          </p>
          <h1
            className={`${
              props.darkMode ? "text-gray-300" : "text-gray-800"
            } p-[1rem] md:text-[0.9rem] xl:text-[1.2rem] font-semibold text-center`}
          >
            address:
          </h1>
          <p
            className={`${
              props.darkMode ? "text-yellow-300" : "text-yellow-500"
            } md:text-[0.9rem] xl:text-[1.2rem] font-light text-center`}
          >
            628 Enterprise St.
          </p>
          <p
            className={`${
              props.darkMode ? "text-yellow-300" : "text-yellow-500"
            } md:text-[0.9rem] xl:text-[1.2rem] font-light text-center`}
          >
            Laredo, Texas 78045
          </p>
          <p
            className={`${
              props.darkMode ? "text-yellow-300" : "text-yellow-500"
            } md:text-[0.9rem] xl:text-[1.2rem] font-light text-center`}
          >
            Interamerica Distribution Park
          </p>
        </div>
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
