import {
  Calendar,
  Home,
  IceCream2Icon,
  ServerIcon,
  Settings,
  User,
} from "lucide-react";
import { useTranslation } from "react-i18next";
export const useMenuGroups = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("home"),
      links: [
        { label: t("overview"), path: "/layout", icon: Home, exact: true },
        { label: t("bookings"), path: "/layout/bookings", icon: Calendar },
      ],
    },
    {
      title:t("management"),
      links: [
        { label: t("serviceCategories"), path: "/layout/service-category", icon: IceCream2Icon },
        { label: t("servicies"), path: "/layout/services", icon: ServerIcon },
        { label: t("staffies"), path: "/layout/staff", icon: User },
      ],
    },
    {
      title: t("user"),
      links: [
        { label: t("settings"), path: "/layout/settings", icon: Settings },
      ],
    },
  ];
};
