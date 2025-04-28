"use client";
import React, { lazy } from "react";
import NavBarButtons from "@/components/compound/NavBarButtons";

const ImageGridWithFetch_v2 = lazy(() =>
  import("@/components/common/imageGridDogs").then((mod) => ({
    default: mod.ImageGridWithFetch_v2,
  }))
);

const DogsPage: React.FC = () => {
  return (
    <div style={{ height: "200vh" }}>
      <NavBarButtons content={{}}>
        <NavBarButtons.ButtonLogo />
        <NavBarButtons
          content={{
            buttonRegister: "Click para registrar tu perro",
            buttonHome: "Inicio",
          }}
        >
          <NavBarButtons.ButtonRegister />
          <NavBarButtons.ButtonHome />
        </NavBarButtons>
      </NavBarButtons>
      <h1>Dogs Section</h1>
      <p>
        Welcome to the dogs section. Here you can find information about
        different breeds of dogs.
      </p>
      <ImageGridWithFetch_v2 />
    </div>
  );
};

export default DogsPage;
