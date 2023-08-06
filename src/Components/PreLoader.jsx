// eslint-disable-next-line no-unused-vars
import React from "react";
import "./preloader.css";

import hs from "../assets/hackoverflow.jpeg"

const PreLoader = () => {

  setTimeout(() => {
    const title = document.getElementById("title-p");
    title.classList.remove("tracking-in-expand");
    title.classList.add("tracking-out-contract");

    const hs = document.getElementById("hs");
    hs.classList.remove("puff-in-center");
    hs.classList.add("puff-out-center");
  }, 3500);

  return (
    <div className="h-full">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars2"></div>
      <div id="hs" className="puff-in-center h-[100dvh] flex justify-center items-center ">
        <img src={hs} alt="Hackoverflow-logo" className="-mt-36" />
      </div>
      <div
        id="title"
        className="absolute top-1/2 inset-x-0 font-Space font-light text-6xl max-xs:text-4xl text-center"
      >
        <p id="title-p" className="uppercase relative text-white tracking-in-expand">Hackoverflow</p>
      </div>
    </div>
  );
};

export default PreLoader;
