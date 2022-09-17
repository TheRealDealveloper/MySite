import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
