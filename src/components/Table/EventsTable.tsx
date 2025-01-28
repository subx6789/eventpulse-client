"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

interface Event {
  id: string;
  name: string;
  organizer: string;
  date: string;
  category: string;
  ticketsSold: string;
  revenue: number;
  status: string;
  image: string;
}

interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-5 font-medium relative text-sm w-full 
      ${active ? "text-black" : "text-gray-500 hover:text-gray-700"}`}
  >
    {label}
    {active && (
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
    )}
  </button>
);

const EventsTable = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const currentEvents: Event[] = [
    {
      id: "1",
      name: "Tech Summit 2024",
      organizer: "GDSC",
      date: "Mar 15, 2024",
      category: "Educational",
      ticketsSold: "450/500",
      revenue: 22500,
      status: "Active",
      image: "/tech-summit.jpg",
    },
    {
      id: "2",
      name: "Music Festival",
      organizer: "Sanskaran",
      date: "Mar 20, 2024",
      category: "Fun",
      ticketsSold: "2800/3000",
      revenue: 84000,
      status: "Active",
      image: "/music-fest.jpg",
    },
    {
      id: "3",
      name: "Gaming Workshop",
      organizer: "GamersHub",
      date: "Mar 25, 2024",
      category: "Gaming",
      ticketsSold: "180/200",
      revenue: 9000,
      status: "Active",
      image: "/gaming.jpg",
    },
    {
      id: "4",
      name: "AI Conference",
      organizer: "TechCorp",
      date: "Mar 28, 2024",
      category: "Educational",
      ticketsSold: "290/300",
      revenue: 29000,
      status: "Active",
      image: "/ai-conf.jpg",
    },
    {
      id: "5",
      name: "Art Exhibition",
      organizer: "ArtSpace",
      date: "Mar 30, 2024",
      category: "Fun",
      ticketsSold: "150/200",
      revenue: 7500,
      status: "Active",
      image: "/art-expo.jpg",
    },
  ];

  const upcomingEvents: Event[] = [
    {
      id: "1",
      name: "Startup Pitch",
      organizer: "VentureX",
      date: "Apr 15, 2024",
      category: "Business",
      ticketsSold: "80/200",
      revenue: 4000,
      status: "Scheduled",
      image: "/pitch.jpg",
    },
    {
      id: "2",
      name: "Summer Concert",
      organizer: "MusicLife",
      date: "Apr 20, 2024",
      category: "Fun",
      ticketsSold: "1500/2000",
      revenue: 75000,
      status: "Scheduled",
      image: "/concert.jpg",
    },
    {
      id: "3",
      name: "Code Camp",
      organizer: "DevHub",
      date: "Apr 25, 2024",
      category: "Educational",
      ticketsSold: "220/300",
      revenue: 11000,
      status: "Scheduled",
      image: "/code-camp.jpg",
    },
    {
      id: "4",
      name: "Food Festival",
      organizer: "FoodieClub",
      date: "May 1, 2024",
      category: "Fun",
      ticketsSold: "400/500",
      revenue: 20000,
      status: "Scheduled",
      image: "/food-fest.jpg",
    },
    {
      id: "5",
      name: "Design Workshop",
      organizer: "CreativeMinds",
      date: "May 5, 2024",
      category: "Educational",
      ticketsSold: "90/100",
      revenue: 9000,
      status: "Scheduled",
      image: "/design.jpg",
    },
  ];

  const pastEvents: Event[] = [
    {
      id: "1",
      name: "Winter Festival",
      organizer: "CityEvents",
      date: "Jan 15, 2024",
      category: "Fun",
      ticketsSold: "4800/5000",
      revenue: 240000,
      status: "Completed",
      image: "/winter-fest.jpg",
    },
    {
      id: "2",
      name: "Data Science Summit",
      organizer: "DataCorp",
      date: "Feb 1, 2024",
      category: "Educational",
      ticketsSold: "280/300",
      revenue: 14000,
      status: "Completed",
      image: "/data-science.jpg",
    },
    {
      id: "3",
      name: "Esports Tournament",
      organizer: "GameLeague",
      date: "Feb 15, 2024",
      category: "Gaming",
      ticketsSold: "950/1000",
      revenue: 47500,
      status: "Completed",
      image: "/esports.jpg",
    },
    {
      id: "4",
      name: "Business Conference",
      organizer: "BizNetwork",
      date: "Feb 28, 2024",
      category: "Business",
      ticketsSold: "480/500",
      revenue: 96000,
      status: "Completed",
      image: "/biz-conf.jpg",
    },
    {
      id: "5",
      name: "Photography Workshop",
      organizer: "PhotoArt",
      date: "Mar 1, 2024",
      category: "Educational",
      ticketsSold: "75/80",
      revenue: 7500,
      status: "Completed",
      image: "/photo.jpg",
    },
  ];

  const getEventsForTab = () => {
    switch (activeTab) {
      case "current":
        return currentEvents;
      case "upcoming":
        return upcomingEvents;
      case "past":
        return pastEvents;
      default:
        return currentEvents;
    }
  };

  const events = getEventsForTab();
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageEvents = events.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Educational: "bg-blue-100 text-blue-800",
      Fun: "bg-purple-100 text-purple-800",
      Gaming: "bg-yellow-100 text-yellow-800",
      Business: "bg-green-100 text-green-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  const getStatusColor = (status: string) => {
    const colors = {
      Active: "bg-green-50 text-green-700 border-green-200",
      Scheduled: "bg-blue-50 text-blue-700 border-blue-200",
      Completed: "bg-gray-50 text-gray-700 border-gray-200",
    };
    return colors[status as keyof typeof colors] || "";
  };

  const EventTable = ({ events }: { events: Event[] }) => (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left pb-5 px-5 text-sm font-medium text-gray-600">
              Event
            </th>
            <th className="text-left pb-5 px-5 text-sm font-medium text-gray-600">
              Date
            </th>
            <th className="text-left pb-5 px-5 text-sm font-medium text-gray-600">
              Category
            </th>
            <th className="text-left pb-5 px-5 text-sm font-medium text-gray-600">
              Tickets Sold
            </th>
            <th className="text-left pb-5 px-5 text-sm font-medium text-gray-600">
              Revenue
            </th>
            <th className="text-left pb-5 px-5 text-sm font-medium text-gray-600">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border-b hover:bg-gray-50 text-sm">
              <td className="p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/api/placeholder/40/40"
                      width={40}
                      height={40}
                      alt={event.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-[120px]">
                    <div className="font-medium md:text-md text-sm">
                      {event.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {event.organizer}
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-3 md:text-md text-sm">{event.date}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(
                    event.category
                  )}`}
                >
                  {event.category}
                </span>
              </td>
              <td className="p-3 md:text-md text-sm">{event.ticketsSold}</td>
              <td className="p-3 md:text-md text-sm">
                ${event.revenue.toLocaleString()}
              </td>
              <td className="p-3">
                <Badge
                  variant="outline"
                  className={`text-xs ${getStatusColor(event.status)}`}
                >
                  {event.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <Card className="w-full">
      <div className="border-b">
        <div className="flex space-x-4 px-6">
          <Tab
            label="Current Events"
            active={activeTab === "current"}
            onClick={() => {
              setActiveTab("current");
              setCurrentPage(1);
            }}
          />
          <Tab
            label="Upcoming Events"
            active={activeTab === "upcoming"}
            onClick={() => {
              setActiveTab("upcoming");
              setCurrentPage(1);
            }}
          />
          <Tab
            label="Past Events"
            active={activeTab === "past"}
            onClick={() => {
              setActiveTab("past");
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="p-5">
        <EventTable events={currentPageEvents} />
      </div>

      {totalPages > 1 && (
        <div className="pb-5 flex place-items-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className={`cursor-pointer ${
                    currentPage === 1 ? "opacity-50" : ""
                  }`}
                />
              </PaginationItem>

              {getPageNumbers().map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className={`cursor-pointer ${
                    currentPage === totalPages ? "opacity-50" : ""
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </Card>
  );
};

export default EventsTable;
