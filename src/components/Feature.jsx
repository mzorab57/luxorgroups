import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Example icons as SVGs (replace with your own or use react-icons)
const icons = [
  <svg
    className="w-8 h-8 text-[#DF9E42]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>,
  <svg
    className="w-8 h-8 text-[#DF9E42]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 9h16M9 4v16" />
  </svg>,
  <svg
    className="w-8 h-8 text-[#DF9E42]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
  </svg>,
  <svg
    className="w-8 h-8 text-[#DF9E42]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" />
  </svg>,
];

const getFeatures = (t) => [
  { title: t("features.smart_work"), icon: icons[0], link: "/gallery" },
  { title: t("features.unique_design"), icon: icons[1], link: "/gallery" },
  { title: t("features.skilled_team"), icon: icons[2], link: "/gallery" },
  { title: t("features.best_pricing"), icon: icons[3], link: "/gallery" },
];

const Feature = () => {
  const { t } = useTranslation();
  const features = getFeatures(t);

  return (
  <section className="py-12 px-3 bg-[#19160f] bg-gradient-to-br from-primary/10 to-transparent  border-primary/20 container  w-full max-w-full relative  ">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl"></div>
        {/* <div className="absolute top-40 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div> */}
      </div>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] top-64 -left-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute w-[300px] h-[300px] top-1/2 right-0 bg-secondary/10 rounded-full blur-2xl animate-float-medium" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5  place-self-center max-w-[1200px] w-full mb-8">
        {features.map((feature, idx) => (
          <Link
            onClick={() => window.scrollTo(0, 0)} to={feature.link}
            key={feature.title}
            className="flex items-center justify-center bg-yellow-800/20 group hover:bg-primary lg:max-w-[260px]  rounded-full  lg:py-6 py-4  shadow-sm relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={100 + idx * 200}
            data-aos-duration="1000"
          >
            <img
              src="/assets/images/shape/shape-5.webp"
              alt="bg"
              className="absolute size-full -z-10 opacity-25 rounded-full"
            />
            <span className="flex items-center justify-center lg:size-14 size-10   rounded-full bg-white shadow mr-1   lg:mr-4 group-hover:bg-black/80 group-hover:scale-110   transition-all duration-500 ease-in">
              {feature.icon}
            </span>
            <h5 className="lg:text-lg px-1  whitespace-nowrap font-semibold text-[#2E2A20] group-hover:text-white   transition-all duration-200 ease-in">
             {feature.title}
            </h5>
          </Link>
        ))}
      </div>
      <div
        className="border-t border-[#DF9E42]/30 w-full mx-auto"
        style={{ maxWidth: 1200 }}
      />
    
  </section>
  );
};

export default Feature;
