import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import { animate } from "motion";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import Loader from "../../components/Loader";
//

const Contact = (props) => {
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

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  props.darkMode
    ? animate("body", { backgroundColor: "rgb(2 6 23)" })
    : props.darkMode === false &&
      animate("body", { backgroundColor: "initial" });

  return (
    <>
      <div
        className={`${
          props.darkMode ? "bg-gray-900" : "bg-gray-950"
        } relative w-full h-[18rem]`}
      >
        <h1
          className={`${
            props.darkMode ? "text-gray-200" : "text-white"
          } whitespace-nowrap absolute text-[2.5rem] md:text-[4rem] font-semibold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] container-fadein md:tracking-wider`}
        >
          Contact Us<span className="text-yellow-300">.</span>
        </h1>
      </div>
      <div className="contact-grid">
        {isMobile ? (
          <>
            <div className="container-fadein">
              <MapContainer center={[27.6137701, -99.536271]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[27.6137701, -99.536271]}></Marker>
              </MapContainer>
            </div>
            <div className="container-fadein m-auto">
              <h1
                className={`${
                  props.darkMode ? "text-gray-300" : "text-gray-800"
                } pt-[2rem] pb-[1rem] px-[2rem] max-w-[800px] md:text-[0.9rem] xl:text-[1.2rem] font-semibold text-center`}
              >
                Let us know how we can help you meet your needs. Contact us via
                email to get started with a rate quote or give us a call so that
                we may address your concerns.
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
          </>
        ) : (
          <>
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
                email to get started with a rate quote or give us a call so that
                we may address your concerns.
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
          </>
        )}
      </div>
      <Loader />
    </>
  );
};

export default Contact;
