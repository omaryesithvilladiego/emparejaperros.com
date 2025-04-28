"use client";

import ImageGridWithFetch from "@/components/common/ImageGridHome";
import NavBarButtons from "@/components/compound/NavBarButtons";
import StartComponent from "@/components/compound/StartComponent";
import "@n8n/chat/style.css";

export default function Home() {
  return (
    <div style={{
    }}>
      <NavBarButtons content={{}}>
        <NavBarButtons.ButtonLogo />
        <NavBarButtons
          content={{
            buttonRegister: "Registrarse",
            buttonShowDogs: "Ver perros",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <NavBarButtons.ButtonRegister />
            <NavBarButtons.ButtonShowDogs />
          </div>
        </NavBarButtons>
      </NavBarButtons>

      <StartComponent
        content={{
          imageUrl:
            "https://res.cloudinary.com/dus6lqk5v/image/upload/v1738309451/karsten-winegeart-NE0XGVKTmcA-unsplash-_1__tocvrj.webp",
          description: "Encuentra la pareja canina ideal para tu perro.",
          callActionButton: "¡Empareja ahora! ⭐",
        }}
      >
        <StartComponent.ImgUrl />
        <StartComponent.Description />
        <StartComponent.CallToActionButton />
      </StartComponent>
      <ImageGridWithFetch  />
    </div>
  );
}
