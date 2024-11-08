import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<Home />} />
        <Route path="/videoUpload" element={<VideoUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
