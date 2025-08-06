import  { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PagesHeader from "../components/ui/PagesHeader";
import { AiOutlinePlayCircle } from "react-icons/ai";

const API_URL = "https://luxorgroups.com/api/video/get.php";

const OurVideos = () => {
  const { t } = useTranslation();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log("Videos:", data);
      setVideos(data);
    } catch (err) {
      console.error("Error fetching videos:", err);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  return (
    <div className="bg-[#19160f] relative">
      <PagesHeader
        img={"/assets/images/gallery/gallery16.jpg"}
        title={t("Our_Videos")}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-40">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 max-w-7xl rounded w-full mx-auto py-12 relative z-10">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative aspect-[3/4] h-96 lg:h-full w-full place-self-center rounded overflow-hidden"
            >
              <div className="absolute inset-0 border-2 border-primary/80 overflow-hidden">
                <video
                  src={`https://luxorgroups.com/api/uploads/video/${video.video}`}
                  loading="lazy"
                  className="h-full w-full object-cover transform transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90">
                <div className="absolute flex justify-between items-center bg-gradient-to-br from-primary/20 to-transparent border-t border-primary/20 bottom-0 w-full p-6 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-1">
                    {video.title}
                  <p className="text-sm text-gray-300 rounded px-2 bg-gray-50/30 w-fit">
                    # {video.description}
                  </p>
                  </h3>
                   <span className="block text-4xl font-medium text-white mb-2">
                    {index + 1}
                  </span>
                </div>
                <button
                  onClick={() => openModal(video)}
                 className="absolute inset-0 w-full h-full flex items-center justify-center opacity-100  transition-opacity duration-300"
                >
                 <span className="rounded bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 p-4 backdrop-blur-sm hover:bg-primary transition-all duration-300 hover:scale-110">
              <AiOutlinePlayCircle className="size-10 sm:w-10 sm:h-10 text-white" />
            </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative bg-[#19160f] rounded-lg shadow-2xl overflow-hidden max-w-3xl w-full">
            <video
              loading="lazy"
              preload="none"
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded"
            >
              <source
                src={`https://luxorgroups.com/api/uploads/video/${selectedVideo.video}`}
                type="video/mp4"
              />
            </video>
            <button
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-800 rounded-full w-8 h-8 flex items-center justify-center text-lg"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurVideos;
