import { createContext, PropsWithChildren, useContext } from "react";
import Image from "next/image";

type StartContextType = {
  content: IContent;
};

interface IContent {
  imageUrl?: string;
  description?: string;
  callActionButton?: string;
}

type ContentTypeProps = PropsWithChildren & {
  content: IContent;
};

const startContext = createContext<StartContextType | undefined>(undefined);

const useStartContext = () => {
  const context = useContext(startContext);
  if (context === undefined) {
    throw new Error("useStartContext must be used within a StartProvider");
  }
  return context;
};

const StartComponent = ({ children, content }: ContentTypeProps) => {
  return (
    <startContext.Provider value={{ content }}>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90vw",
          margin: "0 auto",
          height: "65vh",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {children}
      </main>
    </startContext.Provider>
  );
};

export default StartComponent;

StartComponent.ImgUrl = function ImgUrl() {
  const { content } = useStartContext();
  return (
    <Image
      style={{
        borderRadius: "120px",
      }}
      width={200}
      height={200}
      src={content.imageUrl as string}
      alt="Dog"
      priority
    />
  );
};

StartComponent.Description = function Description() {
  const { content } = useStartContext();
  return (
    <p
      style={{
        textAlign: "center",
        fontSize: "2.5dvw",
        maxWidth: "500px",
        fontWeight: "bold",
        fontFamily: "'Arial', sans-serif",
        color: "#444",
        marginBottom: "20px",
      }}
    >
      {content.description}
    </p>
  );
};
StartComponent.CallToActionButton = function CallToActionButton() {
  const { content } = useStartContext();
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "1.5rem",
        fontWeight: "normal",
        borderRadius: "60px",
        cursor: "pointer",
        backgroundColor: "#F0C808",
        color: "rgb(255, 253, 226)",
        border: "none",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      {content.callActionButton}
    </button>
  );
};
