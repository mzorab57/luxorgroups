import  { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
    document.body.dir = lng === "ar" || lng === "ku" ? "rtl" : "ltr";
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLanguage);
  }, []);

  return (
    <div className=" relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer py-2 px-4  rounded-lg text-center ${
          isOpen ? "text-yellow-500" : ""
        } hover:text-primary`}
      >
        <GrLanguage size={25} />
      </div>

      <div
        className={`absolute text-center -right-5 mt-2 w-24 py-2 bg-[#19160f] border border-primary rounded-lg shadow-xl text-white  z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? " translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {["English", "عربي", "کوردی"].map((lang, index) => (
          <div
            key={index}
            className="block px-4 py-2 text-white text-sm hover:bg-primary/30 cursor-pointer"
            onClick={() => changeLanguage(["en", "ar", "ku"][index])}
          >
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;