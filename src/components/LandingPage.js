import React from "react";
import "./LandingPage.css"; // Asegúrate de que este archivo contiene los estilos necesarios
import BackgroundFirstSection from "../assets/portada-figma.png"; // Asegúrate de que la ruta es correcta
import Logo from "../assets/logo.png";
import LogoFooter from "../assets/Group.png";

function LandingPage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-container">
      <header className="header">
        <div className="header-content">
          <img src={Logo} alt="Logo" className="header-logo" />
          <div className="header-links">
            <a href="#hero" onClick={() => scrollToSection("hero")}>
              Inicio
            </a>
            <a href="#about" onClick={() => scrollToSection("about")}>
              Nosotros
            </a>
            <a href="#community" onClick={() => scrollToSection("community")}>
              Galería
            </a>
          </div>
        </div>
      </header>{" "}
      {/* Nueva Sección con fondo de imagen y otra imagen superpuesta */}
      <section id="hero" className="hero-section">
        <div className="hero-background">
          <img src={BackgroundFirstSection} />
        </div>
        <div className="hero-content">
          <h1>¡Únete a la aventura de Cosmic Crusade!</h1>
          <p>
            Experimenta la emoción del juego inspirado en Starcraft II.
            <br></br>
            Conéctate con otros jugadores, comparte estrategias y conviértete en
            parte de nuestra vibrante comunidad.
          </p>
          <button className="play-button">Juega ahora</button>
        </div>
        <div className="hero-image">
          <img src={LogoFooter} alt="Foreground" />
        </div>
      </section>
      {/* Sección Similar a la Imagen Proporcionada */}
      <section id="about" className="image-text-section">
        <div className="image-container"></div>
        <div className="text-container">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un grupo de estudiantes de la Universidad Peruana de Ciencias
            Aplicadas apasionados por los videojuegos y que se encuentran
            cursando los últimos ciclos de las carreras de Ingeniería de
            Software y Ciencias de la Computación. Deseosos por revivir la
            experiencia de Starcraft y empapados de nostalgia, los miembros del
            proyecto decidieron hace un videojuego tributo a la aclamada
            franquicia de Blizzard, naciendo así Cosmic Crusade. ¡Esperamos seas
            parte de este extraordinario viaje con nosotros!
          </p>
        </div>
      </section>
      {/* Community Showcase Section */}
      <section id="community" className="community-showcase">
        <h2>Galería multimedia</h2>
        <p>
          Explora nuestra vibrante comunidad a través de impresionantes imágenes
          que capturan la esencia del juego.
        </p>
        <div className="image-grid">
          <div className="image-card image1"></div>
          <div className="image-card image2"></div>
          <div className="image-card image3"></div>
          <div className="image-card image4"></div>
          <div className="image-card image5"></div>
          <div className="image-card image6"></div>
          <div className="image-card image7"></div>
          <div className="image-card image8"></div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <div className="footer-links">
            <a href="#hero" onClick={() => scrollToSection("hero")}>
              Inicio
            </a>
            <a href="#about" onClick={() => scrollToSection("about")}>
              Nosotros
            </a>
            <a href="#community" onClick={() => scrollToSection("community")}>
              Galería
            </a>
          </div>
        </div>
        <p className="footer-rights">
          © 2024 Cosmic Crusade. Reservados todos los derechos. Únase a la
          comunidad Cosmic Crusade y experimente la emocionante jugabilidad de
          esta creación inspirada en Starcraft II.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
