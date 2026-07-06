import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'

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
    </>
  );
}

export default App
