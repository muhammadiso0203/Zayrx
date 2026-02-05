import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarLayout } from "./sidebarLayout";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <SidebarProvider className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <SidebarLayout />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="mb-4">
            <SidebarTrigger className="bg-white shadow-sm border border-gray-200 hover:bg-gray-50 rounded-[10px]" />
          </div>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
