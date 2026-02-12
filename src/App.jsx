import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Nursery from "./pages/departments/Nursery";
import Primary from "./pages/departments/Primary";
import JHS from "./pages/departments/JHS";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import News from "./pages/News";
import Calendar from "./pages/Calendar";
import Staff from "./pages/Staff";
import Results from "./pages/Results";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/departments" element={<PageWrapper><Departments /></PageWrapper>} />
        <Route path="/departments/nursery" element={<PageWrapper><Nursery /></PageWrapper>} />
        <Route path="/departments/primary" element={<PageWrapper><Primary /></PageWrapper>} />
        <Route path="/departments/jhs" element={<PageWrapper><JHS /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/admissions" element={<PageWrapper><Admissions /></PageWrapper>} />
        <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
        <Route path="/calendar" element={<PageWrapper><Calendar /></PageWrapper>} />
        <Route path="/staff" element={<PageWrapper><Staff /></PageWrapper>} />
        <Route path="/results" element={<PageWrapper><Results /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
