import { Link } from "react-router-dom";
import AnimatedComponent from "../animation/AnimatedComponent";
import { useTranslation } from "react-i18next";
import ImageWithFallback from "../common/ImageWithFallback";


// Service data
const getCollectionData = (t) => ({
  projects: [
    {
      id: 1,
      title: t("work.projects.city_star_caffe.title"),
      category: t("work.projects.city_star_caffe.category"),
      image: "/assets/images/gallery/gallery6.jpg",
      link: "gallery",
      size: "2x",
    },
    {
      id: 7,
      title: t("work.projects.stylish_apartment.title"),
      category: t("work.projects.stylish_apartment.category"),
      image: "/assets/images/gallery/gallery11.jpg",
      link: "gallery",
      size: "2x",
    },
    {
      id: 2,
      title: t("work.projects.minimal_house.title"),
      category: t("work.projects.minimal_house.category", { returnObjects: true }),
      image: "/assets/images/gallery/gallery10.jpg",
      link: "gallery",
    },
    {
      id: 3,
      title: t("work.projects.art_family.title"),
      category: t("work.projects.art_family.category", { returnObjects: true }),
      image: "/assets/images/gallery/gallery7.jpg",
      link: "gallery",
    },
    {
      id: 4,
      title: t("work.projects.spain_house.title"),
      category: t("work.projects.spain_house.category", { returnObjects: true }),
      image: "/assets/images/gallery/gallery8.jpg",
      link: "gallery",
    },
    {
      id: 5,
      title: t("work.projects.sitak_villa.title"),
      category: t("work.projects.sitak_villa.category"),
      image: "/assets/images/gallery/gallery9.jpg",
      link: "gallery",
    },
  ],
});

const Work = () => {
  const { t } = useTranslation();
  const collectionData = getCollectionData(t);
  return (
    <section className="pt-10 bg-[#0f0d08] bg-gradient-to-br from-primary/10 to-transparent  border-primary/20 relative  overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl"></div>
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
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/5 via-teal-500/10 to-cyan-500/5 rounded-full blur-2xl animate-float-medium"></div>

          {/* chwar goshakan Geometric Patterns */}
          <div className="absolute top-32 right-1/4 w-32 h-32 border border-primary/10 rotate-45 animate-spin-slow"></div>
          {/* <div className="absolute bottom-40 left-1/4 w-24 h-24 border-2 border-purple-500/10 rounded-full animate-bounce-slow"></div> */}
          {/* <div className="absolute top-10 left-1/3 w-32 h-32 border border-primary/10 rotate-45 animate-spin-slow"></div> */}
          <div className="absolute top-20 left-0 lg:left-1/4 w-40 h-2 border border-primary/15 animate-spin-slow  "></div>
          <div className="absolute top-20 left-5 border-2 w-10 h-10  border-primary/30 rotate-45  "></div>
        </div>
      </AnimatedComponent>
      {/* Header */}
      <div className="relative mb-12 sm:mb-16 lg:mb-20 text-center">
        <AnimatedComponent animationType="fade-up">
          <h4 className="text-primary text-center font-medium tracking-wider uppercase mb-3">
            {t(`nav.${"gallery"}`)}
          </h4>
        </AnimatedComponent>
        <AnimatedComponent animationType="fade-right">
          <div className="relative">
            <h1 className="text-4xl lg:text-5xl leading-relaxed font-jost font-medium uppercase text-gray-200">
              {t("Visual_Showcasee")}
            </h1>
            <div className="lg:text-6xl text-5xl whitespace-nowrap absolute lg:-top-8 -top-10 left-1/2 transform -translate-x-1/2 leading-relaxed font-bold uppercase text-gray-500 opacity-10">
              {t("Visual_Showcasee")}
            </div>
          </div>
        </AnimatedComponent>
        {/* <div className=" w-full text-center pt-5">
            <Link
              to="/gallery"
              className=" w-full  hover:text-black hover:bg-primary font-medium text-primary px-4 py-2 rounded-full hover:bg-primary-dark transition-colors text-sm md:text-base"
            >
              View All Projects
            </Link>
          </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
        {collectionData.projects.map((project) => (
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to={project.link}
            key={project.id}
            className={`relative group overflow-hidden ${
              project.size === "2x"
                ? "sm:col-span-2 sm:row-span-2  h-[40rem]"
                : ""
            }`}
          >
            <div className="relative">
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  fallbackSrc="/assets/images/gallery/gallery1.webp"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h5 className="text-white text-xl font-semibold">
                    {project.title}
                  </h5>
                  <i className="text-white text-2xl ml-2">+</i>
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#19160f] p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div>
                  <h5 className="text-xl text-gray-200 font-semibold hover:text-primary">
                    {project.title}
                  </h5>
                  <p className="mt-2 text-gray-300">
                    {Array.isArray(project.category) ? (
                      project.category.map((cat, index) => (
                        <span
                          key={index}
                          className="hover:text-primary cursor-pointer"
                        >
                          {cat}
                          {index < project.category.length - 1 ? ", " : ""}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-600 hover:text-primary cursor-pointer">
                        {project.category}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;
