import React from "react";
import "./LandingPage.css"; // Asegúrate de que este archivo contiene los estilos necesarios
import BackgroundFirstSection from "../assets/portada-figma.png"; // Asegúrate de que la ruta es correcta
import Logo from "../assets/logo.png";
import LogoFooter from "../assets/Group.png";

function LandingPage() {
  return (
    <div className="page-container">
      <header className="header">
        <div className="header-content">
          <img src={Logo} alt="Logo" className="header-logo" />
          <div className="header-links">
            <a href="/about">About us</a>
            <a href="/community">Community</a>
            <a href="/events">Events</a>
            <a href="/contact">Contacto</a>
          </div>
        </div>
      </header>{" "}
      {/* Nueva Sección con fondo de imagen y otra imagen superpuesta */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={BackgroundFirstSection} />
        </div>
        <div className="hero-content">
          <h1>Join the Cosmic Crusade Adventure!</h1>
          <p>
            Experience the thrill of Starcraft II inspired gameplay. <br></br>
            Connect with fellow gamers, share strategies, and become a part of
            our vibrant community.
          </p>
          <button className="play-button">Play now</button>
        </div>
        <div className="hero-image">
          <img src={LogoFooter} alt="Foreground" />
        </div>
      </section>
      {/* Sección Similar a la Imagen Proporcionada */}
      <section className="image-text-section">
        <div className="image-container"></div>
        <div className="text-container">
          <h2>Título de esta sección</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      {/* Community Showcase Section */}
      <section className="community-showcase">
        <h2>Community Showcase</h2>
        <p>
          Explore our vibrant community through stunning visuals that capture
          the essence of gameplay and events.
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
            <a href="/about">About us</a>
            <a href="/community">Community</a>
            <a href="/events">Events</a>
            <a href="/contact">Contacto</a>
          </div>
        </div>
        <p className="footer-rights">
          © 2024 Cosmic Crusade. All rights reserved. Join the Cosmic Crusade
          community and experience the thrilling gameplay of this Starcraft II
          inspired creation.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
