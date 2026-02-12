import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import News from "./pages/News";
import Calendar from "./pages/Calendar";
import Staff from "./pages/Staff";
import Results from "./pages/Results";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admissions" element={<Admissions />} />
<Route path="/news" element={<News />} />
<Route path="/calendar" element={<Calendar />} />
<Route path="/staff" element={<Staff />} />
<Route path="/results" element={<Results />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
