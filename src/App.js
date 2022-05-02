import React from "react";
import Main from './components/Main.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import GoToTopButton from "./components/GoToTopButton.jsx";

function App(){

  return (
    <div className="main-body">
      <Header />
      <Main />
      <Footer />
      <GoToTopButton />
    </div>

  );
  
}

export default App;
