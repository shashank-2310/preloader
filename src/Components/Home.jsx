// eslint-disable-next-line no-unused-vars
import React from "react";

import PreLoader from "./PreLoader";

const Home = () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("fadeOut");
  }, 3500);
  setTimeout(() => {
    const home = document.getElementById("home");
    home.classList.remove("hidden");
    home.classList.add("puff-in-center");
    home.classList.add("flex");
  }, 5000);

  return (
    <>
      <div id="preloader" className="h-full w-full fixed">
        <PreLoader />
      </div>
      <div id="home" className="h-[100dvh] hidden flex-col justify-center items-center overflow-hidden">
        <h1 className="text-slate-500 text-8xl max-xs:text-4xl">hello world!!</h1>
        <p className="text-slate-500">3D carousel here</p>
      </div>
    </>
  );
};

export default Home;
