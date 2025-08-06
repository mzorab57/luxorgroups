import { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const VideoCard = ({ number, title, description, videoSrc, poster }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="group relative aspect-[3/4] rounded overflow-hidden">
        {/* Card Image */}
        <div className="absolute inset-0 border-2 border-primary overflow-hidden">
          {/* <img
            src={poster}
            loading="lazy"
            alt={`${title} poster`}
            className="h-full w-full object-cover transform transition duration-700 group-hover:scale-110"
          /> */}
          <video
            poster={poster}
            src={videoSrc}
            loading="lazy"
            className="h-full w-full object-cover transform transition duration-700 group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90">
          {/* Content */}
          <div className="absolute flex justify-between items-center bg-gradient-to-br from-primary/20 to-transparent border-t border-primary/20 bottom-0 w-full p-6 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
            <span className="block text-4xl font-medium text-white mb-2">
              {number}
            </span>
            <h3 className="text-xl sm:text-2xl  text-gray-300 mb-1">{title}</h3>
            {/* <p className="text-sm text-gray-300 rounded px-2 bg-gray-50/30 w-fit"># {description}</p> */}
          </div>

          {/* Play Button */}
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 w-full h-full flex items-center justify-center opacity-100  transition-opacity duration-300"
          >
            <span className="rounded bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 p-4 backdrop-blur-sm hover:bg-primary transition-all duration-300 hover:scale-110">
              <AiOutlinePlayCircle className="size-10 sm:w-10 sm:h-10 text-white" />
            </span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-black  shadow-lg overflow-hidden max-w-3xl w-full">
            {/* Video */}
            <video
              loading="lazy"
              preload="none"
              controls
              autoPlay
              className="w-full max-h-[80vh] "
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-800 rounded-full w-8 h-8 flex items-center justify-center text-lg"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
