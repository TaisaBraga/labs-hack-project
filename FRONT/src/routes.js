import { Route, Routes } from "react-router-dom";
import { ShoppingPage } from "./components/views/ShoppingPage";
import { HomeView } from "./components/views/HomeView";
import { ProductsPage } from "./components/views/ProductsPage";
import UserRegistration from "./components/organisms/UserRegistration";

export default function GetRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/shopCar" element={<ShoppingPage />} />
      <Route path="/userRegistration" element={<UserRegistration />} />
      <Route path="/productsPage" element={<ProductsPage />} />
    </Routes>
  );
}