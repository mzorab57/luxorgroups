import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "../components/loading/LoadingScreen";
import PrivateRoute from "../components/auth/PrivateRoute";

// Lazy load components with delay to simulate network
const Hero = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../components/hero/Hero")), 0)
    )
);
const Feature = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../components/Feature")), 5000)
    )
);
const AboutUs = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../components/aboutUs/AboutUs")))
    )
);
const ServiceSection = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(import("../components/service/ServiceSection")),
        1000
      )
    )
);
const Work = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../components/work/Work")), 1000)
    )
);
const Project = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../components/project/Project")), 1000)
    )
);
const Location = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../components/location/Location")), 1000)
    )
);
const VideoSection = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(import("../components/videoSection/VideoSection")),
        2000
      )
    )
);

// routes
const Gallery = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/Gallery")), 5000)
    )
);
const OurProject = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/OurProject")), 5000)
    )
);
const OurVideos = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/OurVideos")), 5000)
    )
);
const Service = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/Service")), 1000)
    )
);

// admin panel pages
const MainDashboard = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(import("../components/mainDashboard/MainDashboard")),
        1000
      )
    )
);

// Auth pages
const Login = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../components/auth/Login")), 1000)
    )
);

const LazyComponent = ({ children }) => (
  <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
);

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <LazyComponent>
                <Hero />
              </LazyComponent>
              <LazyComponent>
                <Feature />
              </LazyComponent>
              <LazyComponent>
                <AboutUs />
              </LazyComponent>
              <LazyComponent>
                <ServiceSection />
              </LazyComponent>
              <LazyComponent>
                <Work />
              </LazyComponent>
              <LazyComponent>
                <Project />
              </LazyComponent>
              <LazyComponent>
                <VideoSection />
              </LazyComponent>
              <LazyComponent>
                <Location />
              </LazyComponent>
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <LazyComponent>
              <Gallery />
            </LazyComponent>
          }
        />
        <Route
          path="/project"
          element={
            <LazyComponent>
              <OurProject />
            </LazyComponent>
          }
        />
        <Route
          path="/video"
          element={
            <LazyComponent>
              <OurVideos />
            </LazyComponent>
          }
        />
        <Route
          path="/service"
          element={
            <LazyComponent>
              <Service />
            </LazyComponent>
          }
        />
        <Route
          path="/contact"
          element={
            <LazyComponent>
              <Location />
            </LazyComponent>
          }
        />
        <Route
          path="/login"
          element={
            <LazyComponent>
              <Login />
            </LazyComponent>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <LazyComponent>
                <MainDashboard />
              </LazyComponent>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
