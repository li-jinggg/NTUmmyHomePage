import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodPage from "../FoodPage";
import StallPage from "../StallPage";
import Navbar from "../components/navigation-menu"; // Adjust path if navigation-menu is in a different location

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home / Default Page */}
        <Route path="/" element={<FoodPage />} />

        {/* Discover Page linked from your Navbar */}
        <Route path="/discover" element={<FoodPage />} />

        {/* Individual Stall Details Page */}
        <Route path="/stall/:id" element={<StallPage />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<FoodPage />} />
      </Routes>
    </BrowserRouter>
  );
}
