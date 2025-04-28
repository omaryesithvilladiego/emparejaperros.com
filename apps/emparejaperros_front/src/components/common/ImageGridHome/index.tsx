import React from "react";
import withImageFetch from "../../../hoc/withImagesFetch";
import Image from "next/image";
import "./styles.css";

interface ImageGridProps {
  images: Array<string>;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }: ImageGridProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "10px",
        width: "95dvw",
        height: "100%",
        margin: "0 auto",
        flexWrap: "wrap",
        position: "relative",
        
      }}
    >
      {" "}
      {images &&
        images.map((image, index) => (
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "450px",
            height: "150px",
            backgroundColor: "rgba(255, 255, 255, 0.32)",
            borderRadius: "120px",
            padding: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.75)",
          }} key={index}  className="dog-info">
            

          <div
            
            style={{ position: "relative", width: "150px", height: "150px" }}
          >
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "120px" }}
              alt="dog"
            />
          </div>


          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            width: "50%",
            height: "100%",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "rgba(61, 51, 51, 0.67)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }} 
         >
            <h3>Nombre del perro</h3>
            <p>Raza del perro</p>
            
          </div>
          <div style={
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
           
            }
          }>
          <button
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "rgba(61, 51, 51, 0.67)",
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center", 
              justifyContent: "center",
              transition: "all 0.3s ease"
            }}
            onClick={() => alert("Más información")}
          >
            i
          </button>
          </div>
         
          </div>
        ))}
        
    </div>
    
  );
};

const ImageGridWithFetch = withImageFetch(ImageGrid);

export default ImageGridWithFetch;
