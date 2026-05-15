import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Specialties from "./pages/Specialties";
import Featured from "./pages/News";
import About from "./pages/About";

function AppShell() {
  return (
    <main className="min-h-screen bg-white font-inter selection:bg-brand-accent selection:text-brand-navy flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16 pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/news" element={<Featured />} />
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
