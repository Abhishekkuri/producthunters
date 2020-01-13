import React from "react";
import "./App.css";
import { Main } from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Hunters</h1>
      </header>
      <Main />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
