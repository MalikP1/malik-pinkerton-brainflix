import Video from "../../components/Video/Video";
import Main from "../../components/Main/Main";
import videoFullDetails from "../../data/full-video-details.json";
import videoSideBar from "../../data/sidebar-videos.json";
import { useState } from "react";

function Home() {
  const [selectedVideo, setSelectedVideo] = useState(videoFullDetails[0]);
  const [complexVideoList, setComplexVideoList] = useState(videoFullDetails);
  const [videoList, setVideoList] = useState(videoSideBar);

  const handleVideoClick = (video) => {
    complexVideoList.find((videoMatch) => {
      videoMatch.id === video.id && setSelectedVideo(videoMatch);
    });
  };

  const filteredVideos = videoList.filter((videoNoMatch) => {
    return videoNoMatch.id !== selectedVideo.id;
  });

  return (
    <>
      <Video selectedVideo={selectedVideo} />
      <Main
        selectedVideo={selectedVideo}
        videoList={filteredVideos}
        handleVideoClick={handleVideoClick}
      />
    </>
  );
}

export default Home;
