import Video from "../../components/Video/Video";
import Main from "../../components/Main/Main";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const getVideos =
    "https://project-2-api.herokuapp.com/videos?api_key=8a270747-b9dc-4536-9974-c48c3727adeb";
  const getDefaultVideo =
    "https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=8a270747-b9dc-4536-9974-c48c3727adeb84e96018-4022-434e-80bf-000ce4cd12b8";

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoList, setVideoList] = useState(null);

  const { videoId } = useParams();

  useEffect(() => {
    const fetchVideosSideBar = async () => {
      try {
        const response = await axios.get(getVideos);
        setVideoList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideosSideBar();
  }, []);

  useEffect(() => {
    if (!videoId) {
      const fetchMainVideo = async () => {
        try {
          const response = await axios.get(getDefaultVideo);
          setSelectedVideo(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchMainVideo();
    } else {
      const fetchMainVideo = async () => {
        try {
          const response = await axios.get(
            `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=8a270747-b9dc-4536-9974-c48c3727adeb84e96018-4022-434e-80bf-000ce4cd12b8`
          );
          setSelectedVideo(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchMainVideo();
    }
  }, [videoId]);

  if (!videoList) {
    return <p>Loading video list....</p>;
  }

  if (!selectedVideo) {
    return <p>Loading selected video....</p>;
  }

  const filteredVideos = videoList.filter((videoNoMatch) => {
    return videoNoMatch.id !== selectedVideo.id;
  });

  return (
    <>
      <Video selectedVideo={selectedVideo} />
      <Main selectedVideo={selectedVideo} videoList={filteredVideos} />
    </>
  );
}

export default Home;
