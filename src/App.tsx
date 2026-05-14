import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Specialties from "./pages/Specialties";
import News from "./pages/News";
import About from "./pages/About";

function AppShell() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main className="flex min-h-screen flex-col bg-white font-inter selection:bg-brand-navy selection:text-white">
      {!isHome && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      {!isHome && <Footer />}
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
