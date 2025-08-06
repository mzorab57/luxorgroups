import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import GalleryDashboard from "./GalleryDashboard";
import ProjectDashboard from "./ProjectDashboard";
import VideoDashboard from "./VideoDashboard";

export default function MainDashboard() {
  const [activeTab, setActiveTab] = useState("gallery");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    localStorage.removeItem("loginTime");

    // Redirect to login
    navigate("/login");
  };

  const renderActive = () => {
    switch (activeTab) {
      case "gallery":
        return <GalleryDashboard />;
      case "project":
        return <ProjectDashboard />;
      case "video":
        return <VideoDashboard />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        maxWidth: 1500,
        margin: "0 auto",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {/* Dashboard Header */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 15,
          mb: 3,
          p: 2,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: 2,
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <User className="w-8 h-8 text-yellow-500" />
          <Box>
            <h1 className="text-2xl font-bold text-white">{t("nav.dashboard")}</h1>
            <p className="text-gray-400">{t("dashboard.welcome")}, {username}</p>
          </Box>
        </Box>

        <Button
          variant="outlined"
          onClick={handleLogout}
          sx={{
            color: "#ef4444",
            borderColor: "#ef4444",
            "&:hover": {
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              borderColor: "#ef4444",
            },
          }}
          startIcon={<LogOut className="w-4 h-4" />}
        >
          {t("dashboard.logout")}
        </Button>
      </Box>

      <Stack
        direction="row"
        spacing={2}
        sx={{ width: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant={activeTab === "gallery" ? "contained" : "outlined"}
          onClick={() => setActiveTab("gallery")}
        >
          {t("dashboard.gallery")}
        </Button>
        <Button
          variant={activeTab === "project" ? "contained" : "outlined"}
          onClick={() => setActiveTab("project")}
        >
          {t("dashboard.project")}
        </Button>
        <Button
          variant={activeTab === "video" ? "contained" : "outlined"}
          onClick={() => setActiveTab("video")}
        >
          {t("dashboard.video")}
        </Button>
      </Stack>

      <Box sx={{ width: "100%" }}>{renderActive()}</Box>
    </Box>
  );
}
