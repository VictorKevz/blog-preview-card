import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <Header/>
          <Contents/>
        </div>
            <Footer/>
  
      </div>        

    </>
  );
}

export default App;
