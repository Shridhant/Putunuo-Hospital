import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Specialties from "./pages/Specialties";
import News from "./pages/News";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white font-inter selection:bg-brand-navy selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
