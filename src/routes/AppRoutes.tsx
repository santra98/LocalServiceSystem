import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ProviderDetailsPage from "../pages/ProviderDetailsPage";
import MainLayout from "../components/layout/MainLayout";
import BookingConfirmationPage from "../pages/BookingConfirmationPage";
import BookingPage from "../pages/BookingPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/providers/:id" element={<ProviderDetailsPage />} />
          <Route path="/providers/:id/booking" element={<BookingPage />} />
          <Route
            path="/booking/confirmation"
            element={<BookingConfirmationPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
