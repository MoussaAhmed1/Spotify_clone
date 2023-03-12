import './App.css'
import CNav from './components/CNav';
import {Routes , Route } from 'react-router';
import Home from './Pages/Home';
import MusicPlayer from './components/MusicPlayer';
function App() {
  

  return (
    <div className="App">
         <CNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <MusicPlayer/>
    </div>
    
   
  )
}

export default App
