import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Settings, LogOut } from "lucide-react";
import MenuItem from "./components/MenuItem";
import MobileMenuItem from "./components/MobileMenuItem";
import LanguageSwitcher from "./components/LanguageSwitcher";
import navitemlist from "../../dataJson/navitemlist.json";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated") === "true";
      const user = localStorage.getItem("username");
      setIsAuthenticated(authStatus);
      setUsername(user || "");
    };

    checkAuth();

    // Listen for storage changes (when user logs in/out in another tab)
    window.addEventListener("storage", checkAuth);

    // Check periodically in case localStorage changes in same tab
    const interval = setInterval(checkAuth, 1000);

    return () => {
      window.removeEventListener("storage", checkAuth);
      clearInterval(interval);
    };
  }, []);

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
    window.scrollTo({ top: 0 });
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    localStorage.removeItem("loginTime");
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setUsername("");
    handleMobileMenuClose();
  };

  return (
    <nav className={`${isMobileMenuOpen ? "bg-[#19160f] " : ""}`}>
      <div className="container mx-auto px-4 font-medium">
        <div className="flex items-center justify-between py-4 px-8  ">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <img
              src="/logo-removebg.png"
              alt="Logo"
              className="size-16 scale-125"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:block"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <ul className="flex space-x-4 text-lg items-center">
              {navitemlist.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay={300 + index * 100}
                >
                  <MenuItem item={item} />
                </div>
              ))}

              {/* Dashboard Link - Only show when authenticated */}
              {isAuthenticated && (
                <div
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay={300 + navitemlist.length * 100}
                >
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-teal-500/20 border border-yellow-500/30 hover:from-yellow-500/30 hover:to-teal-500/30 transition-all duration-200"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>
                </div>
              )}
            </ul>
          </nav>

          <div
            className="flex items-center space-x-4"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {/* User Info & Logout - Desktop Only */}
            {isAuthenticated && (
              <div className="hidden md:flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm text-gray-300">Welcome</p>
                  <p className="text-sm font-medium text-yellow-400">
                    {username}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 transition-all duration-200 text-red-400 hover:text-red-300"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Language Info */}
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 transition-transform duration-200 hover:scale-110"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden bg-[#19160f]"
            data-aos="fade-down"
            data-aos-duration="400"
          >
            <ul className="space-y-2">
              {navitemlist.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-duration="400"
                  data-aos-delay={index * 100}
                >
                  <MobileMenuItem
                    item={item}
                    activeSubmenu={activeSubmenu}
                    toggleSubmenu={toggleSubmenu}
                    onClose={handleMobileMenuClose}
                  />
                </div>
              ))}

              {/* Dashboard Link - Mobile */}
              {isAuthenticated && (
                <div
                  data-aos="fade-right"
                  data-aos-duration="400"
                  data-aos-delay={navitemlist.length * 100}
                >
                  <Link
                    to="/dashboard"
                    onClick={handleMobileMenuClose}
                    className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-yellow-500/20 transition-colors duration-200 border-t border-gray-700"
                  >
                    <Settings className="w-5 h-5 text-yellow-400" />
                    <span>Dashboard</span>
                  </Link>
                </div>
              )}

              {/* User Info & Logout - Mobile */}
              {isAuthenticated && (
                <div className="border-t border-gray-700 pt-4 px-4 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-300">Welcome</p>
                      <p className="text-sm font-medium text-yellow-400">
                        {username}
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 transition-all duration-200 text-red-400"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
