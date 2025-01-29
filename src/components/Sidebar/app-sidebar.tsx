"use client";

import * as React from "react";
import {
  CalendarDays,
  LayoutDashboard,
  Settings2,
  TicketCheck,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/Sidebar/nav-main";
import { NavUser } from "@/components/Sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "Techno India University",
    email: "tiu@technoindiauniversity.com",
    role: "Admin",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "/admin/dashboard/overview",
      icon: LayoutDashboard,
    },
    {
      title: "Event Requests",
      url: "/admin/dashboard/event-requests",
      icon: CalendarDays,
    },
    {
      title: "Organisers",
      url: "/admin/dashboard/organisers",
      icon: Users,
    },
    {
      title: "Settings",
      url: "/admin/dashboard/settings",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:scale-105 transition-all duration-150"
            >
              <Link href="/admin/dashboard/overview">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <TicketCheck className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Eventpulse</span>
                  <span className="truncate text-xs">{data.user.role}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
