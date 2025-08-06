import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, User } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Demo credentials - you can change these
  const DEMO_CREDENTIALS = {
    username: "hndren",
    password: "123H321",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Try API login first
      console.log("Attempting login with:", {
        username: formData.username,
        password: "***",
      });

      const response = await fetch(
        "https://luxorgroups.com/api/login/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        }
      );

      console.log("Response status:", response.status);
      console.log(
        "Response headers:",
        Object.fromEntries(response.headers.entries())
      );

      if (response.ok) {
        // Try to parse as JSON, but handle text responses too
        let data;
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          data = await response.json();
        } else {
          const textResponse = await response.text();
          console.log("API Text Response:", textResponse);

          // Check if the text response indicates success
          if (
            textResponse.toLowerCase().includes("success") ||
            textResponse.toLowerCase().includes("login successful") ||
            textResponse.toLowerCase().includes("authenticated")
          ) {
            data = { success: true, message: textResponse };
          } else {
            throw new Error(textResponse);
          }
        }

        console.log("API Response:", data);

        // Save to localStorage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", formData.username);
        localStorage.setItem("loginTime", new Date().toISOString());

        // Save API token if provided
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }

        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        // Handle non-200 responses
        let errorMessage;
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || "Login failed";
        } catch {
          const errorText = await response.text();
          errorMessage = errorText || "Login failed";
        }

        console.log("API Error Response:", errorMessage);
        setError("Invalid username or password");
        return; // Don't fall back to demo credentials if API responded with error
      }
    } catch (error) {
      console.error("API Error:", error);

      // Try alternative approach with FormData (some PHP APIs prefer this)
      try {
        console.log("Trying alternative FormData approach...");

        const formDataPayload = new FormData();
        formDataPayload.append("username", formData.username);
        formDataPayload.append("password", formData.password);

        const alternativeResponse = await fetch(
          "https://luxorgroups.com/api/login/login.php",
          {
            method: "POST",
            body: formDataPayload,
          }
        );

        console.log("Alternative response status:", alternativeResponse.status);

        if (alternativeResponse.ok) {
          const textResponse = await alternativeResponse.text();
          console.log("Alternative API Response:", textResponse);

          // Check if response indicates success
          if (
            textResponse.toLowerCase().includes("success") ||
            textResponse.toLowerCase().includes("login successful") ||
            textResponse.toLowerCase().includes("authenticated") ||
            textResponse.toLowerCase().includes("welcome")
          ) {
            // Save to localStorage
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("username", formData.username);
            localStorage.setItem("loginTime", new Date().toISOString());

            // Redirect to dashboard
            navigate("/dashboard");
            return;
          }
        }
      } catch (altError) {
        console.error("Alternative API Error:", altError);
      }

      // Fall back to demo credentials if API is not available
      if (
        formData.username === DEMO_CREDENTIALS.username &&
        formData.password === DEMO_CREDENTIALS.password
      ) {
        // Save to localStorage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", formData.username);
        localStorage.setItem("loginTime", new Date().toISOString());

        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#19160f] via-[#1a1611] to-[#19160f] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-yellow-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Login</h1>
          <p className="text-gray-400">Access your dashboard</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            autoComplete="off"
          >
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your username"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  autoComplete="new-password"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm text-center">
                {error}
              </div>
            )}

            {/* Demo Credentials Info */}
            {/* <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 text-blue-300 text-sm">
              <p className="font-medium mb-1">زانیاری تاقیکردنەوە:</p>
              <p>
                نێوی بەکارهێنەر: <span className="font-mono">hndren</span>
              </p>
              <p>
                وشەی نهێنی: <span className="font-mono">123H321</span>
              </p>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-yellow-500 to-teal-500 text-white py-3 px-4 rounded-lg font-medium hover:from-yellow-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-400 text-sm">
          <p>© 2024 Luxor Groups Art Gallery</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
