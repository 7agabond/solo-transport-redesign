import { useEffect, useState } from "react";
import React from "react";

function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2100);
  }, []);

  return (
    <>
      <div className={`${showLoader ? "loader-wrapper" : "hidden"}`}>
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
    </>
  );
}

export default Loader;
