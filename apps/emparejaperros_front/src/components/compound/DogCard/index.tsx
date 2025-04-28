import Image from "next/image";
import React from "react";
import { DogCardCompoundProps } from "./interfaces";



const DogCardCompound: React.FC<DogCardCompoundProps> = ({ imageUrl }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        minWidth: "10rem",
        height: "20rem",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "16px",
        marginTop: "1rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "80%",
          paddingTop: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "800px",
          overflow: "hidden",
        }}
      >
        <Image src={imageUrl} layout="fill" objectFit="cover" alt="dog" />
      </div>
      <section>
        <ul>
          <li>
            <button>Show</button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DogCardCompound;
