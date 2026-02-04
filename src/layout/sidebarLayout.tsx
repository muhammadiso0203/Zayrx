import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Headset, LogOut } from "lucide-react";
import { menuGroups } from "./layoutdata";
import { ActiveLink } from "@/components/activLink";
import { useState } from "react";
import LogoutPopup from "@/pages/home/logout";

export function SidebarLayout() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const [logout, setLogout] = useState(false);

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-slate-800 bg-[#0f1115]"
    >
      <SidebarContent className="bg-[#0f1115] pt-4 scrollbar-hide">
        {menuGroups.map((group) => (
          <SidebarGroup key={group.title} className="py-2">
            {!isCollapsed && (
              <SidebarGroupLabel className="text-slate-500 text-xs font-bold px-4 uppercase tracking-wider mb-2">
                {group.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent className="px-3">
              <SidebarMenu>
                {group.links.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      tooltip={isCollapsed ? item.label : undefined}
                      className="relative w-full h-11 flex items-center rounded-lg font-normal transition-all duration-200 group text-slate-400 hover:text-white hover:bg-[#1a1d23] data-[active=true]:bg-amber-500 data-[active=true]:text-white shadow-sm"
                    >
                      <ActiveLink
                        href={item.path}
                        className="w-full h-full flex items-center gap-3"
                      >
                        <item.icon className="h-5 w-5 min-w-5 stroke-[1.8] transition-colors duration-200" />
                        {!isCollapsed && (
                          <span className="text-sm font-semibold whitespace-nowrap">
                            {item.label}
                          </span>
                        )}
                      </ActiveLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="bg-[#0f1115] pb-8 px-3 border-t border-slate-800/50 pt-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip={isCollapsed ? "Help Center" : undefined}
              className="w-full h-11 flex items-center rounded-lg font-normal transition-all duration-200 text-slate-400 hover:text-white hover:bg-[#1a1d23]"
            >
              <ActiveLink href="/layout/help" className="w-full h-full flex items-center gap-3">
                <Headset className="h-5 w-5 min-w-5 stroke-[1.8]" />
                {!isCollapsed && (
                  <span className="text-sm font-semibold">Help Center</span>
                )}
              </ActiveLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setLogout(true)}
              tooltip={isCollapsed ? "Logout" : undefined}
              className="w-full h-11 flex items-center rounded-lg font-normal transition-all duration-200 text-red-500 hover:text-red-400 hover:bg-red-500/10 cursor-pointer"
            >
              <div className="w-full h-full flex items-center gap-3">
                <LogOut className="h-5 w-5 min-w-5 stroke-[1.8]" />
                {!isCollapsed && (
                  <span className="text-sm font-semibold">Logout</span>
                )}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <LogoutPopup open={logout} setOpen={setLogout} />
    </Sidebar>
  );
}
