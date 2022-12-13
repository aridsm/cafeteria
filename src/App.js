import "./Styles/App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import BestSeller from "./components/BestSeller";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <BestSeller />
      <News />
    </div>
  );
}

export default App;
