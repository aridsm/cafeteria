import "./Styles/App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import BestSeller from "./components/BestSeller";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <BestSeller />
    </div>
  );
}

export default App;
