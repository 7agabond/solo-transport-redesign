import truckImg from "../../assets/800318861.jpg";
import stiLogo from "../../assets/sti-logo-black-yellow.png";
import Typed from "react-typed";
import { animate } from "motion";

const Home = (props) => {
  props.darkMode
    ? animate("body", { backgroundColor: "rgb(2 6 23)" })
    : props.darkMode === false &&
      animate("body", { backgroundColor: "initial" });

  return (
    <main>
      <div className="z-1">
        <img src={truckImg} className="w-full" />
        <div className="static mx-auto rounded-lg md:relative md:max-w-[65%] md:top-[-10vw] xl:top-[-20vw] container-fadein">
          <h1 className=" text-yellow-300 font-bold text-4xl md:text-5xl text-center py-7 font-systemui">
            Solo Transport Inc.
          </h1>
          <img
            src={stiLogo}
            className="p-[2rem] md:pt-8 md:mb-[-3rem] xl:mb-[0] xl:pb-[5rem] mx-auto w-[9s00%] md:w-[50%]"
          />
        </div>
        <div className="md:flex md:relative max-w-[70%] m-auto pb-[5rem] pt-[2rem] xl:mt-[-22rem] text-center">
          <Typed
            className={`${
              props.darkMode ? "text-white" : "text-gray-700"
            } md:text-4xl text-xl tracking-wide text-center`}
            strings={[
              "In business since 1998 and based out of Laredo, TX., we have the experience and capacity to meet your needs in flat bed and specialized freight.",
            ]}
            typeSpeed={50}
            backSpeed={140}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
