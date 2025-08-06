import React from "react";
import { Link } from "react-router-dom";

const MobileMenuItem = ({ 
  item, 
  activeSubmenu, 
  toggleSubmenu, 
  onClose 
}) => (
  <li className="relative">
    {item.children ? (
      <div className="border-b border-primary/20">
        <button
          onClick={() => toggleSubmenu(item.title)}
          className="w-full px-4 py-4 flex items-center justify-between text-gray-200 hover:text-primary transition-colors duration-300"
        >
          <span className="font-medium text-base">{item.title}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              activeSubmenu === item.title ? "rotate-180" : ""
            }`}
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
        </button>
        {activeSubmenu === item.title && (
          <ul className="bg-[#19160f]/90 py-2 border-l-2 border-primary/20">
            {item.children.map((child) => (
              <li key={child.title}>
                <Link
                
                  to={child.link}
                  className="block px-8 py-3 text-gray-300 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  onClick={onClose}
                >
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    ) : (
      <Link
        to={item.link}
        className="block px-4 py-4 text-gray-200 hover:text-primary hover:bg-primary/5 border-b border-primary/20 transition-all duration-300"
        onClick={onClose}
      >
        {item.title}
      </Link>
    )}
  </li>
);

export default MobileMenuItem;