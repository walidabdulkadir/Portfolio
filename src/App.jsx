import Nav from "./components/Nav";
import Home from "./components/Home";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Project from "./components/projects/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Ticker />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
