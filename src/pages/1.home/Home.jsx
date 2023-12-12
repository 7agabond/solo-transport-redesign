import truckImg from "../../assets/800318861.jpg";
import stiLogo from "../../assets/sti-logo-black-yellow.png";

const Home = () => {
  return (
    <div className="bg-slate-950">
      <main>
        <img src={truckImg} className="w-full" />
        <div className="static rounded-md md:relative md:max-w-[80%] mx-auto md:top-[-10rem] xl:top-[-22rem] shadow-md bg-slate-950">
          <h1 className=" text-yellow-300 font-bold text-4xl md:text-6xl xl:text-9xl text-center py-7 font-systemui">
            Solo Transport Inc.
          </h1>
          <img src={stiLogo} className="py-4 mx-auto" />
        </div>
      </main>
    </div>
  );
};

export default Home;
