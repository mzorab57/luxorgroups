import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuItem = ({ item }) => {
  const { t } = useTranslation();

  const handleScrollToTop = (e) => {
    if (item.link === "/#about-section") {
      window.scrollTo({ top: 750, behavior: "smooth" });
    } else if (item.link === "/#hero-section") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <li className="relative  group  px-1 hover:scale-110">
      {item.children ? (
        <>
          <span className="cursor-pointer  flex items-center px-4 hover:text-primary">
            {t(`nav.${item.title.toLowerCase()}`)}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <ul className="hidden  group-hover:block absolute left-0 w-48 bg-white shadow-lg rounded-md py-2">
            {item.children.map((child) => (
              <li key={child.key}>
                <Link
                  to={child.link}
                  className="block px-4 py-2  text-sm hover:text-primary hover:bg-gray-50"
                  onClick={handleScrollToTop}
                >
                  {t(`nav.${child.title}`)}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          to={item.link}
          className="block px-4 hover:text-primary"
          onClick={handleScrollToTop}
        >
          {t(`nav.${item.title.toLowerCase()}`)}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
