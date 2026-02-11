import { Routes } from "react-router";
import { Route } from "react-router";
import Login from "./pages/login/login";
import ForgotPassword from "./pages/login/forgotPassword";
import NewPassword from "./pages/login/newPassword";
import MainLayout from "./layout/MainLayout";
import Overview from "./pages/home/Overview";
import Bookings from "./pages/home/booking/bookings";
import Settings from "./pages/home/settings";
import Services from "./pages/home/service/services";
import Admins from "./pages/home/admins";
import Staff from "./pages/home/Users/users";
import Profile from "./pages/home/profile";
import ServiceCategory from "./pages/home/service/serviceCategory";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/newPassword" element={<NewPassword />} />
      <Route path="/layout" element={<MainLayout />}>
        <Route index element={<Overview />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="service-category" element={<ServiceCategory />} />
        <Route path="services" element={<Services />} />
        <Route path="staff" element={<Staff />} />
        <Route path="settings" element={<Settings />} />
        <Route path="admins" element={<Admins />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;