import "./Styles/App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import BestSeller from "./components/BestSeller";
import News from "./components/News";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <BestSeller />
      <News />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
