import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Platforms from "./components/Platforms";
import FutureEnhancements from "./components/FutureEnhancements";
import Roadmap from "./components/Roadmap";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import Privacy from "./pages/Privacy";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Platforms />
      <FutureEnhancements />
      <Roadmap />
      <CTA />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}