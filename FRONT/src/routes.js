import { Route, Routes } from "react-router-dom";
import { ShoppingPage } from "./components/views/ShoppingPage";
import { HomeView } from "./components/views/HomeView";

export default function GetRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/shopCar" element={<ShoppingPage />} />
      {/* <Route path="/userRegistration" element={<ShoppingPage />} /> */}
    </Routes>
  );
}