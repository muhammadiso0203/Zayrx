import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarLayout } from "./sidebarLayout";
import { Navigate, Outlet, useNavigate } from "react-router";
import Cookies from 'js-cookie'
import { getUserFromToken } from "@/utils/userUtils";
import { User } from "lucide-react";


const MainLayout = () => {
  const token = Cookies.get('token')
  const navigate = useNavigate();
  
  if (!token) {
    return <Navigate to="/" />;
  }
  return (
    <SidebarProvider className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <SidebarLayout />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="mb-4 flex justify-between items-center">
            <SidebarTrigger className="bg-white shadow-sm border border-gray-200 hover:bg-gray-50 rounded-[10px]" />

            <div className="flex items-center gap-4">
              <div
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                onClick={() => navigate("/layout/profile")}
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center border-2 border-white shadow-sm">
                  <User className="w-5 h-5 text-amber-600" />
                </div>
                <div className="hidden md:block">
                  <h3 className="text-sm font-bold text-gray-800 leading-tight">
                    {getUserFromToken()?.phoneNumber || "Admin User"}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium capitalize">
                    {getUserFromToken()?.role || "Admin"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
