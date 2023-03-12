import { useState } from 'react'
import './App.css'
import CNav from './components/CNav';
import {Routes , Route } from 'react-router';
import Home from './Pages/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
         <CNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
    
   
  )
}

export default App
