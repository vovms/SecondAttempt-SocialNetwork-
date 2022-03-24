import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./Footer";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header text = "testProps" /> 
      <NavBar />
      <Content />
    </div>
  );
};

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 123
        </a>
      </header>
    </div>
  );
}*/

export default App;
