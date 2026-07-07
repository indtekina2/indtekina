import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// All the pages
import Home from './Pages/Home'

// All the components
import NavBar from "./Components/NavBar";
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App
