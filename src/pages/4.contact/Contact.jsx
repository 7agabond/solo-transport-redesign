import { useEffect } from "react";
import { animate } from "motion";
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
      <div>Contact</div>
      <div className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
    </>
  );
};

export default Contact;
