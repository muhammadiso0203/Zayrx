import { Routes } from "react-router";
import { Route } from "react-router";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import ForgotPassword from "./pages/login/forgotPassword";
import NewPassword from "./pages/login/newPassword";
import MainLayout from "./layout/MainLayout";
import Overview from "./pages/home/Overview";
import Customer from "./pages/home/customer";
import Bookings from "./pages/home/booking/bookings";
import Payments from "./pages/home/payments";
import Staff from "./pages/home/staff";
import Products from "./pages/home/products";
import Schedules from "./pages/home/schedules";
import Promotion from "./pages/home/promotion";
import Reviews from "./pages/home/reviews";
import Users from "./pages/home/Users/users";
import Roles from "./pages/home/roles";
import Permissions from "./pages/home/permissions";
import Settings from "./pages/home/settings";
import Services from "./pages/home/service/services";
import HelpCenter from "./pages/home/help-center";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/newPassword" element={<NewPassword />} />
      <Route path="/layout" element={<MainLayout />}>
        <Route path="overview" element={<Overview />} />
        <Route path="customer" element={<Customer />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="payments" element={<Payments />} />
        <Route path="staff" element={<Staff />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="schedules" element={<Schedules />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="users" element={<Users />} />
        <Route path="roles" element={<Roles />} />
        <Route path="permissions" element={<Permissions />} />
        <Route path="settings" element={<Settings />} />
        <Route path="help" element={<HelpCenter />} />
      </Route>
    </Routes>
  );
};

export default App;