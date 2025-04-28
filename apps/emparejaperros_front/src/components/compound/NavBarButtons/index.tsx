"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Props } from "./interfaces";
import { NavBarContext, useNavBarButtonsContext } from "./context";
import { roboto } from "@/fonts";

function NavBarButtons({ children, content, bgColor }: Props) {
  return (
    <NavBarContext.Provider value={{ content }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          backgroundColor: bgColor ? bgColor : "rgb(6, 16, 22)",
          height: "60px",
          position: "sticky",
          top: "0",
          gap: "1rem",
          zIndex: "1000",
          paddingRight: "1rem",
        }}
      >
        {children}
      </nav>
    </NavBarContext.Provider>
  );
}

NavBarButtons.ButtonRegister = function ButtonRegister(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const context = useNavBarButtonsContext();
  const content = context.content;
  return (
    <button
      className={roboto.className}
      style={{
        backgroundColor: "transparent",
        color: "#FEFCFD",
        padding: "0.5rem 1rem",
        border: ".2px solid #FEFCFD",
        borderRadius: "60px",
        cursor: "pointer",
      }}
      {...props}
    >
      {" "}
      {content.buttonRegister}{" "}
    </button>
  );
};

NavBarButtons.ButtonLogo = function ButtonLogo(
  props: React.CanvasHTMLAttributes<HTMLCanvasElement>
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const ctx2 = canvas.getContext("2d");
      if (ctx && ctx2) {
        // Dibujar el logo en el canvas
        ctx.fillStyle = "#FF0000";
        ctx.beginPath();
        ctx.arc(3, 15, 40, 0, 2 * Math.PI); // Círculo
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 15px Arial";
        ctx.textAlign = "end";
        ctx.textBaseline = "top";
        ctx.fillText("EmparejaPerros.com", 180, 20);
        ctx.shadowColor = "black";
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        cursor: "pointer",
      }}
      width={200}
      height={60}
      {...props}
    />
  );
};

NavBarButtons.ButtonLogin = function ButtonLogin(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const context = useNavBarButtonsContext();
  const content = context.content;
  return (
    <button
      style={{
        backgroundColor: "#f1356d",
        color: "white",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      {...props}
    >
      {" "}
      {content.buttonLogin}{" "}
    </button>
  );
};

NavBarButtons.ButtonHome = function ButtonHome(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const router = useRouter();
  const context = useNavBarButtonsContext();
  const content = context.content;
  return (
    <button
      style={{
        backgroundColor: "#FFCF56",
        color: "none",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "60px",
        cursor: "pointer",
      }}
      onClick={() => router.push("/")}
      {...props}
    >
      {" "}
      {content.buttonHome}
    </button>
  );
};

NavBarButtons.ButtonShowDogs = function ButtonShowDogs(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const context = useNavBarButtonsContext();
  const content = context.content;
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/dogs")}
      className={roboto.className}
      style={{
        backgroundColor: "#FFCF56",
        color: "none",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "60px",
        cursor: "pointer",
        marginRight: "1rem",
      }}
      {...props}
    >
      {" "}
      {content.buttonShowDogs}{" "}
    </button>
  );
};

export default NavBarButtons;
