import {
  Calendar,
  Home,
  IceCream2Icon,
  ServerIcon,
  Settings,
  User,
} from "lucide-react";

export const menuGroups = [
  {
    title: "Home",
    links: [
      { label: "Overview", path: "/layout", icon: Home, exact: true },
      { label: "Bookings", path: "/layout/bookings", icon: Calendar },
    ],
  },
  {
    title: "Management",
    links: [
      {label: "Service Category", path: "/layout/service-category", icon: IceCream2Icon},
      { label: "Services", path: "/layout/services", icon: ServerIcon },
      { label: "Staff", path: "/layout/staff", icon: User },
    ],
  },
  {
    title: "User",
    links: [
      { label: "Settings", path: "/layout/settings", icon: Settings },
    ],
  },
];
