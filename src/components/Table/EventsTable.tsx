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
import { EventTable } from "@/types/eventTable";

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

type TableProps = {
  currentEvents: EventTable[];
  pastEvents: EventTable[];
  upcomingEvents: EventTable[];
};

const EventsTable = ({
  currentEvents,
  pastEvents,
  upcomingEvents,
}: TableProps) => {
  const [activeTab, setActiveTab] = useState("current");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  const EventTable = ({ events }: { events: EventTable[] }) => (
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
                  <div className="bg-gray-200 rounded-lg overflow-hidden w-10 h-10">
                    <Image
                      src={event.image}
                      width={40}
                      height={40}
                      alt={event.name}
                      className="aspect-square object-cover"
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
