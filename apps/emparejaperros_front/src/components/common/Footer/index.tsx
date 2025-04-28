const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(6, 16, 22)",
        textAlign: "center",
        position: "sticky",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "white",
          width: "50vw",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <p>
          Esta aplicación te ayuda a encontrar la pareja perfecta para tu perro.
        </p>
        <p>&copy; 2025 Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
