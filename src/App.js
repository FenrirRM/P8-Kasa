import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des différentes pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Housing from "./pages/Housing/Housing";
import NotFound from "./pages/NotFound/404NotFound";

//import des différents composants
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router> {/*gérer la route et la navigation*/}
      <Header />  {/* composant Header affiché sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Housing/:id" element={<Housing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> {/* composant Footer affiché sur toutes les pages */}
    </Router>
  );
}

export default App;
