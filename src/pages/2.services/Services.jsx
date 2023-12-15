import servicesBackground from "../../assets/763586951.jpg";
import { animate, inView } from "motion";

const Services = (props) => {
  props.darkMode
    ? animate("body", { backgroundColor: "rgb(2 6 23)" })
    : props.darkMode === false &&
      animate("body", { backgroundColor: "initial" });

  const slideRight = document.getElementById("slide-right");

  inView("slideRight", () => {
    console.log("slide has entered the viewport!");
  });

  return (
    <div>
      <main>
        <div className="relative z-0 text-center">
          <img src={servicesBackground} alt="ServicesBg" className="w-full" />
          <h1 className="absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-6xl tracking-wider">
            Services<span className="text-yellow-300">.</span>
          </h1>
        </div>
        <div id="slide-right" className="wrap slideInRight animated">
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
        <div id="slide-right" className="wrap slideInRight animated">
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
        <div id="slide-right" className="wrap slideInRight animated">
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
        <div id="slide-right" className="wrap slideInRight animated">
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
        <div id="slide-right" className="wrap slideInRight animated">
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
        <div id="slide-right" className="wrap slideInRight animated">
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
        <div id="slide-right" className="wrap slideInRight animated">
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
        <div id="slide-right" className="wrap slideInRight animated">
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
        <div id="slide-right" className="wrap slideInRight animated">
          <h1>Hello!</h1>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
          <p>This is a test container!</p>
        </div>
        <div id="slide-right" className="wrap slideInRight animated">
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
