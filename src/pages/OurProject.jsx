import React, { useState, useEffect } from "react";
import PagesHeader from "../components/ui/PagesHeader";

const API_URL = "https://luxorgroups.com/api/project/get.php";

const OurProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      const fixed = data.map((item) => ({
        ...item,
        images: Array.isArray(item.images)
          ? item.images
          : JSON.parse(item.images || "[]"),
      }));

      setProjects(fixed);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (images, idx) => {
    setModalImages(images);
    setCurrentImgIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const showPrev = () => {
    setCurrentImgIdx((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentImgIdx((prev) =>
      prev === modalImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-[#19160f] relative overflow-hidden">
      <PagesHeader
          img={"/assets/images/gallery/gallery17.jpg"}
        title={"Projects"}
      />

      {/* Background decoration */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto py-12 relative z-10 lg:px-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br place-self-center w-[25rem]  lg:size-full from-primary/10 to-transparent border border-primary/20 rounded shadow-lg overflow-hidden flex flex-col lg:flex-row hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={`https://luxorgroups.com/api/uploads/project/${project.images[0]}`}
                alt={project.title}
                className="w-full lg:h-full h-[18rem] lg:w-1/2 cursor-pointer"
                onClick={() =>
                  openModal(
                    project.images.map(
                      (img) =>
                        `https://luxorgroups.com/api/uploads/project/${img}`
                    ),
                    0
                  )
                }
              />
              <div className="p-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-lg mb-2">
                    {project.description}
                  </p>
                </div>
                <div className="lg:mt-4 flex gap-2 overflow-x-auto rounded-lg bg-[#23201a]/70 p-2 scrollbar-hide">
                  {project.images.slice(1).map((img, idx) => (
                    <img
                      key={idx}
                      src={`https://luxorgroups.com/api/uploads/project/${img}`}
                      alt={project.title + " preview " + (idx + 2)}
                      className="w-12 h-12 object-cover rounded border border-primary/30 cursor-pointer transition-transform hover:scale-110"
                      onClick={() =>
                        openModal(
                          project.images.map(
                            (i) =>
                              `https://luxorgroups.com/api/uploads/project/${i}`
                          ),
                          idx + 1
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-[#19160f] max-w-2xl rounded-lg shadow-2xl p-6 w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-white text-2xl"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={modalImages[currentImgIdx]}
              alt="Project Large"
              className="w-full max-h-[500px] object-contain rounded mb-4"
            />
            <div className="flex justify-between max-w-md w-full mb-4">
              <button
                className="px-4 py-2 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 text-gray-200 rounded hover:bg-primary/50"
                onClick={showPrev}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 text-gray-200 rounded hover:bg-primary/50"
                onClick={showNext}
              >
                Next
              </button>
            </div>
            <div className="flex gap-2 justify-center overflow-x-auto">
              {modalImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={"Thumbnail " + (idx + 1)}
                  className={`size-12 object-cover rounded border cursor-pointer ${
                    idx === currentImgIdx ? "border-primary border-2" : ""
                  }`}
                  onClick={() => setCurrentImgIdx(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProject;
