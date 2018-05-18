import React, { Component } from "react";
import "./App.css";
import News from "./News/News";


// Detta skapar en klass som redan finns, för att senare utöka den med våra egna tillägg.

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Nyheter från Sverige!</h1>
        </header>
        <News />
      </div>
    );
  }
}

export default App;
