import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Specialties from "./pages/Specialties";
import News from "./pages/News";
import About from "./pages/About";

function AppShell() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff] font-inter text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <div className="flex-grow pt-16 pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
