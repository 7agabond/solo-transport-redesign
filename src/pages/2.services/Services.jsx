import servicesBackground from "../../assets/763586951.jpg";
import { animate } from "motion";
import AOS from "aos";
import { useEffect } from "react";

const Services = (props) => {
  props.darkMode
    ? animate("body", { backgroundColor: "rgb(2 6 23)" })
    : props.darkMode === false &&
      animate("body", { backgroundColor: "initial" });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  setTimeout(() => {
    AOS.refresh();
  }, 500);

  return (
    <div className="mb-[4rem]">
      <main>
        <div className="relative z-0 text-center">
          <img src={servicesBackground} alt="ServicesBg" className="w-full" />
          <h1 className="absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-6xl tracking-wider">
            Services<span className="text-yellow-300">.</span>
          </h1>
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-once="false"
        >
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-once="false"
        >
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
      </main>
    </div>
  );
};

export default Services;
