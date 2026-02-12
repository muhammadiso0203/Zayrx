import { Routes } from "react-router";
import { Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import Overview from "./pages/barber/home/Overview";
import Bookings from "./pages/barber/home/booking/bookings";
import Settings from "./pages/barber/home/settings";
import Services from "./pages/barber/home/service/services";
import Admins from "./pages/barber/home/admins";
import Staff from "./pages/barber/home/Users/users";
import Profile from "./pages/barber/home/profile";
import ServiceCategory from "./pages/barber/home/service/serviceCategory";
import ForgotPassword from "./pages/barber/login/forgotPassword";
import NewPassword from "./pages/barber/login/newPassword";
import Login from "./pages/barber/login/login";
import BarberBron from "./pages/client/barberBron.tsx";
import Client from "./pages/client/client.tsx";
import ClientPhone from "./pages/client/clientPhone.tsx";
import BarberService from "./pages/client/barberService.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/newPassword" element={<NewPassword />} />
      <Route path="/barbers" element={<BarberBron />} />
      <Route path="/client" element={<Client />} />
      <Route path="/client-phone" element={<ClientPhone />} />
      <Route path="/barber-service" element={<BarberService />} />

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