import truckImg from "../../assets/800318861.jpg";
import stiLogo from "../../assets/sti-logo-black-yellow.png";

const Home = (props) => {
  return (
    <main className={`${props.darkMode ? "bg-slate-950" : "bg-white"}`}>
      <div>
        <img src={truckImg} className="w-full" />
        <div
          className={`${
            props.darkMode ? "bg-slate-950" : "bg-white"
          } static mx-auto rounded-lg md:relative md:max-w-[65%] md:top-[-10vw] xl:top-[-20vw] container-fadein`}
        >
          <h1 className=" text-yellow-300 font-bold text-4xl md:text-7xl text-center py-7 font-systemui">
            Solo Transport Inc.
          </h1>
          <img src={stiLogo} className="py-4 mx-auto w-[50%] md:w-[initial]" />
        </div>
      </div>
    </main>
  );
};

export default Home;
