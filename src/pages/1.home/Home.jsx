import truckImg from "../../assets/800318861.jpg";
import stiLogo from "../../assets/sti-logo-black-yellow.png";
import Typed from "react-typed";

const Home = (props) => {
  return (
    <main className={`${props.darkMode ? "bg-slate-950" : "bg-white"} `}>
      <div className="z-1">
        <img src={truckImg} className="w-full" />
        <div
          className={`${
            props.darkMode ? "bg-slate-950" : "bg-white"
          } static mx-auto rounded-lg md:relative md:max-w-[65%] md:top-[-10vw] xl:top-[-20vw] container-fadein`}
        >
          <h1 className=" text-yellow-300 font-bold text-4xl md:text-5xl text-center py-7 font-systemui">
            Solo Transport Inc.
          </h1>
          <img
            src={stiLogo}
            className="p-[2rem] md:pt-8 md:mb-[-3rem] xl:mb-[0] xl:pb-[5rem] mx-auto w-[100%] md:w-[50%]"
          />
        </div>
        <div className="hidden md:flex md:relative max-w-[70%] m-auto pb-[5rem] pt-[2rem] xl:mt-[-22rem]">
          <Typed
            className={`${
              props.darkMode ? "text-white" : "text-gray-700"
            } md:text-5xl sm:text-4xl text-xl tracking-wide`}
            strings={[
              "In business since 1998 and based out of Laredo, TX., we have the experience and capacity to meet your needs in flat bed and specialized freight.",
            ]}
            typeSpeed={100}
            backSpeed={140}
          />
        </div>
        <p className="px-5 py-8 text-gray-700 text-center md:hidden">
          "In business since 1998 and based out of Laredo, TX., we have the
          experience and capacity to meet your needs in flat bed and specialized
          freight.
        </p>
      </div>
    </main>
  );
};

export default Home;
