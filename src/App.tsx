import { Routes } from "react-router";
import { Route } from "react-router";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import ForgotPassword from "./pages/login/forgotPassword";
import NewPassword from "./pages/login/newPassword";
import MainLayout from "./layout/MainLayout";
import Overview from "./pages/home/Overview";
import Bookings from "./pages/home/booking/bookings";
import Users from "./pages/home/Users/users";
import Settings from "./pages/home/settings";
import Services from "./pages/home/service/services";
import Admins from "./pages/home/admins";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/newPassword" element={<NewPassword />} />
      <Route path="/layout" element={<MainLayout />}>
        <Route path="overview" element={<Overview />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="services" element={<Services />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="admins" element={<Admins />} />
      </Route>
    </Routes>
  );
};

export default App;