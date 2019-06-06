import React from "react";
import "./App.css";
import Logo from "./components/logo";
import Contact from "./components/contact";
import Banner from "./components/banner";
import PhotosBanner from "./components/gallery";
import Video from "./components/video";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1 className="logo">台湾</h1>
      </header>
      <Logo />
      <Contact />
      <Banner />
      <PhotosBanner />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
