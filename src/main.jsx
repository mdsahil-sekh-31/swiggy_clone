import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router";
import App from "./App";
import Restaurants from "./Restaurants";
import RestaurantMenu from "./RestaurantMenu";
createRoot(document.getElementById("root")).render(
  
      <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/restaurant" element={<Restaurants />} />
      <Route path="/city/kolkata/:id" element={<RestaurantMenu/>}/>
    </Routes>
  </HashRouter>,
);
