import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Restaurants from "./Restaurants";
import RestaurantMenu from "./RestaurantMenu";
createRoot(document.getElementById("root")).render(
  
      <BrowserRouter  basename="/swiggy_clone">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/restaurant" element={<Restaurants />} />
      <Route path="/city/kolkata/:id" element={<RestaurantMenu/>}/>
    </Routes>
  </BrowserRouter>,
);
