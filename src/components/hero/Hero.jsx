import { useTranslation } from "react-i18next";
import videoWebm from "/assets/videos/bgLuxor5.webm";
import videoMp4 from "/assets/videos/bgLuxor3.mp4";

import AnimatedComponent from "../../components/animation/AnimatedComponent";
// import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  {
    name: <RiInstagramFill />,
    url: "https://www.instagram.com/luxor_groups?igsh=MzU0NTU5M25vN3Ex",
  },
  {
    name: <FaFacebookF />,
    url: "https://www.facebook.com/share/1AjwB4GNhd/",
  },
  {
    name: <FaTiktok />,
    url: "https://www.tiktok.com/@luxor_groups?_t=ZS-8yOyAKxxoIB&_r=1",
  },
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section name="hero" className="section text-white h-screen">
      <div className="relative overflow-hidden bg-transparent flex h-screen">
        {/* Social Media Links */}

        <aside className="w-full h-20 absolute bottom-0 z-10">
          <ul className="flex justify-center items-center gap-8 py-4">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className="transition-all duration-300 hover:transform hover:scale-150 hover:text-primary"
              >
                <Link
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full text-white text-xl hover:bg-white/20"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover brightness-50"
          style={{ aspectRatio: "16/9" }}
          preload="metadata"
          loading="eager"
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-4">
          {/* <AnimatedComponent animationType="fade-up" dataAosDuration="500">
            <h2 className="text-sm md:text-lg font-light font-jost uppercase tracking-widest text-primary">
              &#9866; {t("welcome")} &#9866;
            </h2>
          </AnimatedComponent> */}

          <AnimatedComponent animationType="fade-up" dataAosDuration="700">
            <h1
             style={{
                    margin: '10px 0 20px',
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#fff',
                    marginBottom: '20px',
                    // fontSize: '40px',
                    lineHeight: '55px',
                    color: '#0d0845',
                    // fontFamily: 'Jost, sans-serif'
                  }}
             className="text-4xl md:text-6xl xl:text-8xl font-medium font-raleway leading-tight">
              {t("hero.high_quality_paintings")}
            </h1>
          </AnimatedComponent>

          <AnimatedComponent animationType="fade-up" dataAosDuration="1000">
            <div dir="ltr" className="flex space-x-4   cursor-pointer">
              <Link
                to="/gallery"
                // smooth={true}
                duration={500}
                className="bg-primary hover:bg-primary/90  hover:border-primary border border-primary rounded-full text-white lg:px-6 px-2 lg:py-3 py-1.5 whitespace-nowrap text-md font-jost text-lg flex items-center space-x-2"
              >
                {t("hero.view_gallery")} <span className="px-2"> → </span>
              </Link>
              <Link
                to="/video"
                // smooth={true}
                duration={500}
                className="bg-white/10 backdrop-blur-sm text-white border border-gray-500 hover:border-white/40 transition-colors duration-300 rounded-full lg:px-6 px-2 lg:py-3 py-1.5 whitespace-nowrap font-jost text-lg flex items-center space-x-2"
              >
                {t("hero.view_video")} <span className="px-2">→</span>
              </Link>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
};

export default Hero;
