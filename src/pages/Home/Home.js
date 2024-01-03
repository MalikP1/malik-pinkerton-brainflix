import Video from "../../components/Video/Video";
import Main from "../../components/Main/Main";
import videoFullDetails from "../../data/full-video-details.json";
import videoSideBar from "../../data/sidebar-videos.json";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const getVideos =
    "https://project-2-api.herokuapp.com/videos?api_key=8a270747-b9dc-4536-9974-c48c3727adeb";
  const getDefaultVideo =
    "https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=8a270747-b9dc-4536-9974-c48c3727adeb84e96018-4022-434e-80bf-000ce4cd12b8";

  // const [selectedVideo, setSelectedVideo] = useState(videoFullDetails[0]);
  // const [complexVideoList, setComplexVideoList] = useState(videoFullDetails);
  // const [videoList, setVideoList] = useState(videoSideBar);

  const [selectedVideo, setSelectedVideo] = useState(null);
  // const [complexVideoList, setComplexVideoList] = useState(null);
  const [videoList, setVideoList] = useState(null);

  const { videoId } = useParams();

  useEffect(() => {
    const fetchVideosSideBar = async () => {
      try {
        const response = await axios.get(
          "https://project-2-api.herokuapp.com/videos?api_key=8a270747-b9dc-4536-9974-c48c3727adeb"
        );
        console.log(response.data);
        setVideoList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideosSideBar();
  }, []);

  useEffect(() => {
    const fetchDefaultVideo = async () => {
      try {
        const response = await axios.get(
          "https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=8a270747-b9dc-4536-9974-c48c3727adeb84e96018-4022-434e-80bf-000ce4cd12b8"
        );
        console.log(response.data);
        setSelectedVideo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDefaultVideo();
  }, []);

  if (!videoList) {
    return <p>Loading video list....</p>;
  }

  if (!selectedVideo) {
    return <p>Loading selected video....</p>;
  }
  // const handleVideoClick = (video) => {
  //   complexVideoList.find((videoMatch) => {
  //     videoMatch.id === video.id && setSelectedVideo(videoMatch);
  //   });
  // };

  const filteredVideos = videoList.filter((videoNoMatch) => {
    return videoNoMatch.id !== selectedVideo.id;
  });

  return (
    <>
      <Video selectedVideo={selectedVideo} />
      <Main
        selectedVideo={selectedVideo}
        videoList={filteredVideos}
        // handleVideoClick={handleVideoClick}
      />
    </>
  );
}

export default Home;
