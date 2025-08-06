import { useEffect, useRef, useState } from "react";
import AnimatedComponent from "../components/animation/AnimatedComponent";
import { useTranslation } from "react-i18next";

const Service = () => {
  const cursorRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);
  const { t } = useTranslation();
  const services = [
    {
      id: "01",
      title: t("services.service_01.title"),
      description: t("services.service_01.description"),
      points: t("services.service_01.points", { returnObjects: true }),
      image: "/assets/images/gallery/gallery6.jpg",
      color: "from-amber-500/20 to-orange-600/20",
      accentColor: "amber-400",
    },
    {
      id: "02",
      title: "Frame Selection & Custom Framing",
      description: "Perfect frames that complement your artwork",
      points: [
        "Wide variety of frame styles and materials",
        "Custom framing solutions to match artwork and décor",
        "Frame design consultations",
      ],
      image: "/assets/images/gallery/gallery11.jpg",
      color: "from-purple-500/20 to-pink-600/20",
      accentColor: "purple-400",
    },
    {
      id: "03",
      title: "Bulk Painting Production",
      description: "Large-scale production with artistic excellence",
      points: [
        "Rapid manufacturing of hundreds of paintings for large projects",
        "Streamlined production processes for quick turnaround",
        "Volume discounts for large orders",
      ],
      image: "/assets/images/gallery/gallery7.jpg",
      color: "from-emerald-500/20 to-teal-600/20",
      accentColor: "emerald-400",
    },
    {
      id: "04",
      title: "Art Installation & Setup",
      description: "Professional installation with precision care",
      points: [
        "On-site installation of large paintings",
        "Professional handling and safety measures",
        "Post-installation support",
      ],
      image: "/assets/images/gallery/gallery15.jpg",
      color: "from-blue-500/20 to-cyan-600/20",
      accentColor: "blue-400",
    },
    {
      id: "05",
      title: "Worldwide Shipping & Logistics",
      points: [
        "Secure packaging for large and fragile artworks",
        "International shipping services",
        "Customs clearance and delivery coordination globally",
      ],
      image: "/assets/images/gallery/gallery8.jpg",
      color: "from-amber-500/20 to-orange-600/20",
      accentColor: "amber-400",
    },
    {
      id: "06",
      title: "Art Consultation & Design Services",
      points: [
        "Concept development for large-scale murals and artworks",
        "Design visualization and mock-ups",
        "Site-specific artwork planning",
      ],
      image: "/assets/images/gallery/gallery9.jpg",
      color: "from-purple-500/20 to-pink-600/20",
      accentColor: "purple-400",
    },
    {
      id: "07",
      title: "Art Leasing & Corporate Decor Solutions",
      points: [
        "Rental of large artworks for events, offices, and public spaces",
        "Custom art installations for corporate branding",
      ],
      image: "/assets/images/gallery/gallery10.jpg",
      color: "from-emerald-500/20 to-teal-600/20",
      accentColor: "emerald-400",
    },
    {
      id: "08",
      title: "Restoration & Preservation Services",
      points: [
        "Artwork conservation and restoration",
        "Maintenance of large-scale paintings",
      ],
      image: "/assets/images/gallery/gallery12.jpg",
      color: "from-blue-500/20 to-cyan-600/20",
      accentColor: "blue-400",
    },
    {
      id: "09",
      title: "Event & Exhibition Services",
      points: [
        "Providing large artworks for exhibitions and displays",
        "Support in organizing art-related events",
      ],
      image: "/assets/images/gallery/gallery13.jpg",
      color: "from-amber-500/20 to-orange-600/20",
      accentColor: "amber-400",
    },
  ];
  // Enhanced cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // nwqta wrdakan ka aswrenawa
    const enlargeCursor = () => {
      cursor.classList.add("scale-150", "bg-primary/30");
      cursor.style.borderColor = "#eab308";
    };

    // nwqta wrdakan ka aswrenawa
    const shrinkCursor = () => {
      cursor.classList.remove("scale-150", "bg-primary/30");
      cursor.style.borderColor = "#eab308";
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll(".hover-target").forEach((el) => {
      el.addEventListener("mouseenter", enlargeCursor);
      el.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll(".hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", enlargeCursor);
        el.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  // Auto-close modal on scroll
  useEffect(() => {
    if (!selectedService) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setSelectedService(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedService]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-[#0a0a0a] via-[#19160f] to-[#1a1a1a] overflow-hidden"
    >
      <AnimatedComponent
        animationType="fade-up"
        dataAosDuration={1000}
        delay={200}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/20 via-amber-500/10 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-rose-500/15 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-cyan-500/15 rounded-full blur-2xl animate-float-medium"></div>

          {/* chwar goshakan Geometric Patterns */}
          <div className="absolute top-40 right-1/4 w-32 h-32 border border-primary/10 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-40 left-1/4 w-24 h-24 border-2 border-purple-500/10 rounded-full animate-bounce-slow"></div>
        </div>
      </AnimatedComponent>
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Custom Cursor */}
      <div
        // ref={cursorRef}
        className="fixed z-50 pointer-events-none mix-blend-difference"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "2px solid #eab308",
          background: "rgba(234, 179, 8, 0.1)",
          transform: "translate(-50%, -50%)",
          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        {/* Enhanced Header */}
        <div className="relative mb-20 text-center">
          {/* Header */}
          <div className="relative mb-12 sm:mb-16 lg:mb-20 text-center">
            <AnimatedComponent animationType="fade-up">
              <h4 className="text-primary text-center font-medium tracking-wider uppercase mb-3">
                {" "}
                {t("Our_Bst_Services")}
              </h4>
            </AnimatedComponent>
            <AnimatedComponent animationType="fade-up">
              <div className="relative">
                <h1 className="lg:text-5xl text-4xl leading-relaxed font-jost font-medium uppercase text-gray-200">
                  {t("Services_We_Are_Offering")}
                </h1>
                <div className="lg:text-6xl whitespace-nowrap text-5xl absolute lg:-top-8 -top-10 left-1/2 transform -translate-x-1/2 leading-relaxed font-bold uppercase text-gray-500 opacity-10">
                  {t("Services_We_Are_Offering")}
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary/30 rotate-45"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/40 rounded-full animate-pulse"></div>
              </div>
            </AnimatedComponent>
          </div>

          {/* <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of artistic services designed to bring your creative vision to life with unmatched quality and precision.
          </p> */}
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative overflow-hidden  rounded cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Card Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color}  transition-all duration-200`}
              ></div>

              {/* Service Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top transition-all duration-700 scale-75 rotate-3 group-hover:scale-100 group-hover:rotate-1"
                />

                {/* Dynamic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60"></div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <span className="text-2xl">{service.icon}</span>
                </div>
              </div>

              {/* Enhanced Service Badge */}
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <span
                  className={`bg-primary/20 text-gray-200 font-bold px-3 py-5  rounded-full text-sm backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110`}
                >
                  {/* {service.id} */}
                </span>
              </div>

              {/* Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-200 group-hover:translate-y-0">
                <div className="space-y-1">
                  <h3 className="text-white font-bold text-xl leading-tight group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300  text-sm  transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 delay-100">
                    {service.description}
                  </p>

                  <button
                    className="hover-target bg-gradient-to-r from-primary/20 to-amber-500/20 border border-primary/40 text-primary px-4 py-1 rounded-full font-medium backdrop-blur-sm transform transition-all duration-300 hover:from-primary hover:to-amber-500 hover:text-black hover:scale-105  translate-y-4 group-hover:translate-y-0 delay-200"
                    onClick={() => setSelectedService(service)}
                  >
                    
                    {t("Explore_More")}
                  </button>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded transition-opacity duration-200 pointer-events-none">
                <div
                  className={`absolute inset-0 rounded border-2 border-primary/0 animate-pulse`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-fadeIn"
        >
          <div
            className="relative bg-gradient-to-br from-[#23201a] via-[#2a2620] to-transparent max-w-xl w-full rounded overflow-hidden border border-primary/20 shadow-2xl shadow-black/50 transform animate-modal-enter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 lg:h-96 overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 "></div>

              {/* Close Button */}
              <button
                className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-90"
                onClick={() => setSelectedService(null)}
              >
                <span className="text-2xl font-light">×</span>
              </button>

              {/* Service Badge in Modal */}
              <div className="absolute bottom-6 left-6">
                <span
                  className={`bg-primary/30 text-black font-bold px-4 py-2 rounded-full text-lg backdrop-blur-sm`}
                >
                  {selectedService.id}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-1">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-2">
                  <h2 className="lg:text-3xl text-xl font-medium text-primary">
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-400 ">
                    {selectedService.description}
                  </p>
                </div>
                <div className="text-4xl ml-4">{selectedService.icon}</div>
              </div>

              <div className="grid md:grid-cols-2 gap-2">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    Key Features
                  </h3>
                  <div className="space-y-1">
                    {selectedService.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 group"
                      >
                        <div
                          className={`w-3 h-3 bg-gradient-to-r from-${selectedService.accentColor} to-primary rounded-full mt-1.5 flex-shrink-0 transform transition-transform duration-300 group-hover:scale-125`}
                        ></div>
                        <p className="text-gray-300 text-sm  group-hover:text-white transition-colors duration-300">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

           
              </div>

              {/* Action Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-primary/20">
                <button className="flex-1 bg-gradient-to-r from-primary via-amber-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25">
                  Get Free Quote
                </button>
                <button className="flex-1 border-2 border-primary/30 text-primary px-8 py-4 rounded-full font-bold text-lg transform transition-all duration-300 hover:bg-primary hover:text-black hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full font-medium transform transition-all duration-300 hover:from-gray-700 hover:to-gray-600 hover:scale-105">
                  Learn More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Custom Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modal-enter {
          from {
            transform: scale(0.8) translateY(50px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-5deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) translateX(-10px) rotate(180deg);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(270deg);
            opacity: 0.8;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        .animate-modal-enter {
          animation: modal-enter 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 12s ease-in-out infinite;
        }

        /* Enhanced Scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #eab308, #f59e0b);
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f59e0b, #eab308);
        }

        /* Glass morphism effect */
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
        }

        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }
      `}</style>
    </section>
  );
};
export default Service;
