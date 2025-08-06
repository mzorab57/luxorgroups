import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status on app load
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated");
      const username = localStorage.getItem("username");
      const loginTime = localStorage.getItem("loginTime");

      if (authStatus === "true" && username && loginTime) {
        // Check if login is still valid (optional: add expiration logic here)
        setIsAuthenticated(true);
        setUser({
          username,
          loginTime: new Date(loginTime),
        });
      } else {
        // Clear any invalid auth data
        logout();
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (username, password) => {
    // Demo credentials - you can change these
    const DEMO_CREDENTIALS = {
      username: "hndren",
      password: "123H321",
    };

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          username === DEMO_CREDENTIALS.username &&
          password === DEMO_CREDENTIALS.password
        ) {
          const loginTime = new Date().toISOString();

          // Save to localStorage
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("username", username);
          localStorage.setItem("loginTime", loginTime);

          // Update state
          setIsAuthenticated(true);
          setUser({
            username,
            loginTime: new Date(loginTime),
          });

          resolve({ success: true });
        } else {
          reject({ error: "نێوی بەکارهێنەر یان وشەی نهێنی هەڵەیە" });
        }
      }, 1000); // Simulate API delay
    });
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    localStorage.removeItem("loginTime");

    // Update state
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
