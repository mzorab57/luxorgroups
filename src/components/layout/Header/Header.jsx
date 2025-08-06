import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed w-full z-50  text-white transition-all duration-300 ${
        isSticky ? "bg-[#19160f]/50 backdrop-blur-3xl" : "bg-transparent"
      }`}
    >
      <Navbar />
    </div>
  );
};

export default Header;
