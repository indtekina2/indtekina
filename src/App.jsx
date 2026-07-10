import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// All the pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects"
import ErrorPage from "./Pages/ErrorPage"

// All the components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
