import StatsCard from "@/components/Card/StatsCard";
import EngagementChart from "@/components/EngagementChart/EngagementChart";
import Sidebar from "@/components/Sidebar/Sidebar";
import EventsTable from "@/components/Table/EventsTable";
import TicketSalesChart from "@/components/TicketSalesChart/TicketSalesChart";
import { CategoryData } from "@/types/categoryData";
import { DataPoint } from "@/types/dataPoint";
import { EventTable } from "@/types/eventTable";
import { CalendarDays, DollarSign, Ticket, Users } from "lucide-react";

export default function Overview() {
  const statCardData = [
    {
      title: "Total Revenue",
      icon: DollarSign,
      currency: "$",
      amount: 124563,
    },
    {
      title: "Active Events",
      icon: CalendarDays,
      amount: 45,
    },
    {
      title: "Total Bookings",
      icon: Ticket,
      amount: 1234,
    },
    {
      title: "Total Organisers",
      icon: Users,
      amount: 69,
    },
  ];

  const currentEvents: EventTable[] = [
    {
      id: "1",
      name: "Tech Summit 2024",
      organizer: "GDSC",
      date: "Mar 15, 2024",
      category: "Educational",
      ticketsSold: "450/500",
      revenue: 22500,
      status: "Active",
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
    },
  ];

  const upcomingEvents: EventTable[] = [
    {
      id: "1",
      name: "Startup Pitch",
      organizer: "VentureX",
      date: "Apr 15, 2024",
      category: "Business",
      ticketsSold: "80/200",
      revenue: 4000,
      status: "Scheduled",
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
    },
  ];

  const pastEvents: EventTable[] = [
    {
      id: "1",
      name: "Winter Festival",
      organizer: "CityEvents",
      date: "Jan 15, 2024",
      category: "Fun",
      ticketsSold: "4800/5000",
      revenue: 240000,
      status: "Completed",
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
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
      image: "/Placeholder/event-placeholder.jpg",
    },
  ];

  const engagementdata: DataPoint[] = [
    { month: "Jan", value: 15000 },
    { month: "Feb", value: 25000 },
    { month: "Mar", value: 35000 },
    { month: "Apr", value: 45000 },
    { month: "May", value: 55000 },
    { month: "Jun", value: 65000 },
    { month: "Jul", value: 75000 },
  ];

  const ticketsalesdata: CategoryData[] = [
    { name: "Conference", value: 15, color: "#818cf8" },
    { name: "Music", value: 45, color: "#4ade80" },
    { name: "Workshop", value: 10, color: "#fbbf24" },
    { name: "Sports", value: 20, color: "#f87171" },
    { name: "Exhibition", value: 10, color: "#60a5fa" },
  ];

  return (
    <Sidebar>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-5">
        {statCardData.map((data, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-all duration-150 cursor-pointer"
          >
            <StatsCard
              title={data.title}
              amount={data.amount}
              icon={data.icon}
              currency={data.currency}
            />
          </div>
        ))}
      </div>

      <div className="my-5">
        <h1 className="text-xl font-semibold">Event Insights</h1>
        <div className="mt-5">
          <EventsTable
            currentEvents={currentEvents}
            upcomingEvents={upcomingEvents}
            pastEvents={pastEvents}
          />
        </div>
      </div>

      <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <EngagementChart data={engagementdata} />
        </div>
        <div>
          <TicketSalesChart data={ticketsalesdata} />
        </div>
      </div>
    </Sidebar>
  );
}
