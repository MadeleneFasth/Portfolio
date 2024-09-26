import "./App.css";
import About from "./components/About";
import Cursor from "./components/Cursor";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import ScrollingText from "./components/ScrollingText";

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Home />
      <Quote />
      <About />
      <ScrollingText />
    </>
  );
}

export default App;
