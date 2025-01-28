import StatsCard from "@/components/Card/StatsCard";
import EngagementChart from "@/components/EngagementChart/EngagementChart";
import Sidebar from "@/components/Sidebar/Sidebar";
import EventsTable from "@/components/Table/EventsTable";
import TicketSalesChart from "@/components/TicketSalesChart/TicketSalesChart";
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
          <EventsTable />
        </div>
      </div>

      <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <EngagementChart />
        </div>
        <div>
          <TicketSalesChart />
        </div>
      </div>
    </Sidebar>
  );
}
