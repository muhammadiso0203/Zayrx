import {
  Calendar,
  DollarSign,
  Home,
  Lock,
  Package,
  ServerIcon,
  Settings,
  Shield,
  Star,
  Tag,
  User,
  Users,
} from "lucide-react";

export const menuGroups = [
  {
    title: "Home",
    links: [
      { label: "Overview", path: "/layout/overview", icon: Home },
      { label: "Customers", path: "/layout/customer", icon: Users },
      { label: "Bookings", path: "/layout/bookings", icon: Calendar },
      { label: "Payments", path: "/layout/payments", icon: DollarSign },
    ],
  },
  {
    title: "Management",
    links: [
      { label: "Staff", path: "/layout/staff", icon: Users },
      { label: "Services", path: "/layout/services", icon: ServerIcon },
      { label: "Products", path: "/layout/products", icon: Package },
      { label: "Schedules", path: "/layout/schedules", icon: Calendar },
      { label: "Promotions", path: "/layout/promotion", icon: Tag },
      { label: "Reviews", path: "/layout/reviews", icon: Star },
    ],
  },
  {
    title: "User",
    links: [
      { label: "Users", path: "/layout/users", icon: User },
      { label: "Roles", path: "/layout/roles", icon: Shield },
      { label: "Permissions", path: "/layout/permissions", icon: Lock },
      { label: "Settings", path: "/layout/settings", icon: Settings },
    ],
  },
];
