import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import BookingConfirmationPage from "../pages/BookingConfirmationPage";
import BookingPage from "../pages/BookingPage";
import CustomerDashboardPage from "../pages/CustomerDashboardPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProviderDashboardPage from "../pages/ProviderDashboardPage";
import ProviderDetailsPage from "../pages/ProviderDetailsPage";
import ServicesPage from "../pages/ServicesPage";
import SignupPage from "../pages/SignupPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import ProfilePage from "../pages/ProfilePage";
import NotificationsPage from "../pages/NotificationsPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/providers/:id" element={<ProviderDetailsPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
            <Route path="/providers/:id/booking" element={<BookingPage />} />
            <Route
              path="/booking/confirmation"
              element={<BookingConfirmationPage />}
            />
            <Route
              path="/customer/dashboard"
              element={<CustomerDashboardPage />}
            />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["provider"]} />}>
            <Route
              path="/provider/dashboard"
              element={<ProviderDashboardPage />}
            />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        <Route
          element={
            <ProtectedRoute allowedRoles={["customer", "provider", "admin"]} />
          }
        >
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
