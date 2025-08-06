import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedComponent from "../animation/AnimatedComponent";
import { useTranslation } from "react-i18next";

const getProjectData = (t) => [
  {
    id: 1,
    title: t("projects.modern_interior.title"),
    category: t("projects.modern_interior.category"),
    image: "/assets/images/gallery/gallery6.jpg",
    description: t("projects.modern_interior.description"),
  },
  {
    id: 2,
    title: t("projects.classic_wallpaper.title"),
    category: t("projects.classic_wallpaper.category"),
    image: "/assets/images/gallery/gallery12.jpg",
    description: t("projects.classic_wallpaper.description"),
  },
  {
    id: 3,
    title: t("projects.modern_wall_art.title"),
    category: t("projects.modern_wall_art.category"),
    image: "/assets/images/gallery/gallery13.jpg",
    description: t("projects.modern_wall_art.description"),
  },
  {
    id: 4,
    title: t("projects.modern_wall_art.title"),
    category: t("projects.modern_wall_art.category"),
    image: "/assets/images/gallery/gallery10.jpg",
    description: t("projects.modern_wall_art.description"),
  },
  {
    id: 5,
    title: t("projects.modern_wall_art.title"),
    category: t("projects.modern_wall_art.category"),
    image: "/assets/images/gallery/gallery7.jpg",
    description: t("projects.modern_wall_art.description"),
  },
  {
    id: 6,
    title: t("projects.modern_wall_art.title"),
    category: t("projects.modern_wall_art.category"),
    image: "/assets/images/gallery/gallery8.jpg",
    description: t("projects.modern_wall_art.description"),
  },
  {
    id: 7,
    title: t("projects.modern_wall_art.title"),
    category: t("projects.modern_wall_art.category"),
    image: "/assets/images/gallery/gallery9.jpg",
    description: t("projects.modern_wall_art.description"),
  },
  {
    id: 8,
    title: t("projects.modern_wall_art.title"),
    category: t("projects.modern_wall_art.category"),
    image: "/assets/images/gallery/gallery11.jpg",
    description: t("projects.modern_wall_art.description"),
  },
  {
    id: 9,
    title: t("projects.modern_wall_art.title"),
    category: t("projects.modern_wall_art.category"),
    image: "/assets/images/gallery/gallery12.jpg",
    description: t("projects.modern_wall_art.description"),
  },
  {
    id: 10,
    title: t("projects.modern_wall_art.title"),
    category: t("projects.modern_wall_art.category"),
    image: "/assets/images/gallery/gallery13.jpg",
    description: t("projects.modern_wall_art.description"),
  },
];

const Project = () => {
  const { t } = useTranslation();
  const projects = getProjectData(t);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-[#19160f] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
      </div>
      {/* Decorative Elements */}
      <AnimatedComponent
        animationType="fade-up"
        dataAosDuration={1000}
        delay={200}
      >
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/20 via-amber-500/10 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-primary/5 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-primary/20 via-teal-500/5 to-cyan-500/5 rounded-full blur-2xl animate-float-medium"></div>

          {/* chwar goshakan Geometric Patterns */}
          <div className="absolute top-32 right-1/4 w-32 h-32 border border-primary/10 rotate-45 animate-spin-slow"></div>
          {/* <div className="absolute bottom-40 left-1/4 w-24 h-24 border-2 border-purple-500/10 rounded-full animate-bounce-slow"></div> */}
          {/* <div className="absolute top-10 left-1/3 w-32 h-32 border border-primary/10 rotate-45 animate-spin-slow"></div> */}
          <div className="absolute top-5 left-1/4 w-10 h-10 border-2 border-purple-300/15 animate-spin-slow  "></div>
        </div>
      </AnimatedComponent>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-7xl  w-full place-self-center">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-center font-medium tracking-wider uppercase mb-3"
          >
           {t("Our_Latest_Projects")}
          </motion.h4>
          {/* Header */}
          <div className="relative mb-12 sm:mb-16 lg:mb-20 text-center">
            <AnimatedComponent animationType="fade-right">
              <div className="relative">
                <h1 className="lg:text-5xl text-4xl leading-relaxed font-jost font-medium uppercase text-gray-200">
                  {t("Completed_Works")}
                </h1>
                <div className="lg:text-6xl text-5xl absolute lg:-top-8 -top-10 left-1/2 transform -translate-x-1/2 leading-relaxed font-bold uppercase text-gray-500 opacity-10">
                  {t("Completed_Works")}
                </div>
              </div>
            </AnimatedComponent>
          </div>
          {/* <div className=" w-full text-center pt-5">
            <Link
              to="/project"
              className="border w-full border-primary hover:text-black hover:bg-primary font-medium text-primary px-4 py-2 rounded-full hover:bg-primary-dark transition-colors text-sm md:text-base"
            >
              View All Projects
            </Link>
          </div> */}
        </div>

        {/* Project Carousel */}
        <div className="relative     mx-auto">
          <div className="flex items-center justify-center lg:gap-6">
            {/* Previous Project */}
            <motion.div
              className="relative w-0 lg:w-96  h-80 rounded overflow-hidden opacity-50 scale-90"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={
                  projects[
                    (currentIndex - 1 + projects.length) % projects.length
                  ].image
                }
                alt="Previous project"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Current Project */}

            <motion.div
              className="relative  w-full max-w-2xl lg:h-[500px] h-[400px] rounded overflow-hidden shadow-xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Link onClick={()=>window.scrollTo({ top: 0 })} to={`/project`}>
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
              />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-sm opacity-80">
                  {projects[currentIndex].description}
                </p>
              </div>
            </motion.div>

            {/* Next Project */}
            <motion.div
              className="relative w-0  lg:w-96 h-80 rounded overflow-hidden opacity-50 scale-90"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={projects[(currentIndex + 1) % projects.length].image}
                alt="Next project"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full hover:scale-105 bg-transparent border border-primary shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full hover:scale-105 bg-transparent border border-primary shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-primary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80  flex items-center justify-center z-50 px-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="b rounded p-4 max-w-2xl w-full"
          >
            <div className="flex justify-end mb-4">
              {/* <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <p className="text-gray-600">{selectedProject.description}</p>
                <p className="text-primary">{selectedProject.category}</p>
              </div> */}
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500  hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className=" object-cover  mb-4"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Project;
