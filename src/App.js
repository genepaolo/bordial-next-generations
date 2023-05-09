import React from "react";
import Main from '@/components/Main';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoToTopButton from "@/components/GoToTopButton";

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
