import React, { Component} from "react";
import './App.css';
import Main from './components/Main.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import TopInfo from './components/TopInfo.jsx';
class App extends Component {

  scrollFunction(){
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.scrollFunction());
  }
  

  topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

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
