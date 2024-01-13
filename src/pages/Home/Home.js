import Video from "../../components/Video/Video";
import Main from "../../components/Main/Main";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

function Home() {
  const getVideos = `${url}/videos`;

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoList, setVideoList] = useState(null);

  let { videoId } = useParams();
  const fetchMainVideo = async () => {
    try {
      const response = await axios.get(`${url}/videos/${videoId}`);
      setSelectedVideo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchVideosSideBar = async () => {
      try {
        const response = await axios.get(getVideos);
        setVideoList(response.data);
        if (!videoId) {
          videoId = response.data[0].id;
        }
        fetchMainVideo();
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideosSideBar();
  }, [videoId]);

  if (!videoList) {
    return <p>Loading video list....</p>;
  }

  // const getDefaultVideo = `${url}/videos/${videoList[0].id}`;

  // useEffect(() => {
  //   if (!videoId) {
  //     const fetchMainVideo = async () => {
  //       try {
  //         const response = await axios.get(getDefaultVideo);
  //         setSelectedVideo(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchMainVideo();
  //   } else {
  //     const fetchMainVideo = async () => {
  //       try {
  //         const response = await axios.get(`${url}/videos/${videoId}`);
  //         setSelectedVideo(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchMainVideo();
  //   }
  // }, [videoId]);

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
