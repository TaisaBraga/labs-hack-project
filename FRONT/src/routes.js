import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ShoppingPage } from "./components/views/ShoppingPage";
import { HomeView } from "./components/views/HomeView";

export default function GetRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/shopCar" element={<ShoppingPage />} />
      </Routes>
    </Router>
  );
}