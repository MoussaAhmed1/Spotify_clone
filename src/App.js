import "./App.css";
import CNav from "./components/CNav";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";
import MyLikes from './Pages/MyLikes';
function App() {
  return (
    <div className="App">
      <CNav />
      <div className="Home">
        <div className="container-fluid">
          <div className="row">
            <div className="aside col-4">
              <Sidebar />
            </div>
            <main className="music-main-section col-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Likes" element={<MyLikes />} />
            </Routes>
            </main>
          </div>
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
