import React from "react";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn   } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative z-[0] py-20 bg-[#19160f] overflow-hidden ">
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 bg-cover"
        style={{
          // backgroundImage: "url('/assets/images/shape/shape-footer.webp')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/25 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Luxor Groups
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t("footer.company_description")}
            </p>
            <div className="flex space-x-4">
              <a
              
                href="https://www.facebook.com/share/1AjwB4GNhd/"
                className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-[#19160f] transition-all duration-300"
              >
                <span className="text-sm font-bold">F</span>
              </a>
              <a
                href="https://www.instagram.com/luxor_groups?igsh=MzU0NTU5M25vN3Ex"
                className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-[#19160f] transition-all duration-300"
              >
                <span className="text-sm font-bold">I</span>
              </a>
              <a
                href="https://www.tiktok.com/@luxor_groups?_t=ZS-8yOyAKxxoIB&_r=1"
                className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-[#19160f] transition-all duration-300"
              >
                <span className="text-sm font-bold">T</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("footer.quick_links")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#about-section"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  {t(`nav.${"about"}`)}
                </Link>
              </li>
              <li>
                <Link
                onClick={() => window.scrollTo(0, 0)}
                  to="service"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  {t(`nav.${"service"}`)}
                </Link>
              </li>
             
              <li>
                <Link
                onClick={() => window.scrollTo(0, 0)}
                  to="gallery"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  {t(`nav.${"gallery"}`)}
                </Link>
              </li>
              <li>
                <Link
                onClick={() => window.scrollTo(0, 0)}
                  to="video"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  {t(`nav.${"video"}`)}
                </Link>
              </li>
              <li>
                <Link
                onClick={() => window.scrollTo(0, 0)}
                  to="project"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                   {t(`nav.${"project"}`)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("footer.our_services")}
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-primary/60 rounded-full mr-3"></span>
                {t("footer.services_list.service1")}
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-primary/60 rounded-full mr-3"></span>
                {t("footer.services_list.service2")}
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-primary/60 rounded-full mr-3"></span>
                {t("footer.services_list.service3")}
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-primary/60 rounded-full mr-3"></span>
                {t("footer.services_list.service4")}
              </li>
            </ul>
          </div>

        
        </div>

        {/* Newsletter Section */}
          {/* <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-4">
                Stay Updated
              </h4>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest artwork and exhibitions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/40 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
                <button className="px-6 py-3 bg-primary text-[#19160f] rounded-full font-medium hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div> */}

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Luxor Groups. {t("footer.copyright")} | {t("footer.developed_by")}{' '}
            <a 
              href="https://wa.me/9647701411893" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              Al-Code
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
