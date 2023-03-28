import "./App.css";
import CNav from "./components/CNav";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";
import MyLikes from './Pages/MyLikes';
import CreatePlayList from './Pages/createPlayList';
import Playlist from "./Pages/Playlist";
function App() {
  return (
    <div className="App">
      <CNav />
      <div className="Home">
        <div className="container-fluid">
          <div className="row">
            <div className="aside col-3">
              <Sidebar />
            </div>
            <main className="music-main-section col-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Likes" element={<MyLikes />} />
              <Route path="/createPlayList" element={<CreatePlayList />} />
              <Route path="/createPlayList/:id" element={<CreatePlayList />}/>
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
