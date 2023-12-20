import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Main from "./components/Main/Main";
import videoFullDetails from "./data/full-video-details.json";
import videoSideBar from "./data/sidebar-videos.json";
import { useState } from "react";
function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoFullDetails[0]);
  const [videoList, setVideoList] = useState(videoSideBar[1]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <Header />
      <Video selectedVideo={selectedVideo} />
      <Main
        selectedVideo={selectedVideo}
        videoList={videoList}
        handleVideoClick={handleVideoClick}
      />
    </>
  );
}

export default App;
