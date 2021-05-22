import React, { Component} from "react";
import './App.css';
import Main from './components/Main.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import TopInfo from './components/TopInfo.jsx';
class App extends Component {

  render() {

    return (
      <div className="main-body">
        <TopInfo />
        <NavBar />
        <Main />
        <Footer />
      </div>

    );
  }
}

export default App;
