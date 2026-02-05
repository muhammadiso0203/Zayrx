import {
  Calendar,
  Home,
  ServerIcon,
  Settings,
  User,
} from "lucide-react";

export const menuGroups = [
  {
    title: "Home",
    links: [
      { label: "Overview", path: "/layout/overview", icon: Home },
      { label: "Bookings", path: "/layout/bookings", icon: Calendar },
    ],
  },
  {
    title: "Management",
    links: [
      { label: "Services", path: "/layout/services", icon: ServerIcon },
      { label: "Admins", path: "/layout/admins", icon: User },
    ],
  },
  {
    title: "User",
    links: [
      { label: "Users", path: "/layout/users", icon: User },
      { label: "Settings", path: "/layout/settings", icon: Settings },
    ],
  },
];
