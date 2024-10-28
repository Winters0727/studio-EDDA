import { useLayoutEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Meta from "@components/Meta";

import MainPage from "@pages/MainPage";
import IntroductionPage from "@pages/IntroPage";

import "./App.css";
import "./font.css";

const App = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return (
    <div className="app">
      <Meta />
      <Header />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/intro" Component={IntroductionPage} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
