import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import ViteWelcome from "./components/ViteWelcome";
import NotFound from "./components/NotFound";
import "./App.css";
import SentryTest from "./components/SentryTest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Welcome />} />
          <Route path="about" element={<ViteWelcome />} />
          <Route path="dashboard" element={<ViteWelcome />} />
          <Route path="sentry" element={<SentryTest />} />

          {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
