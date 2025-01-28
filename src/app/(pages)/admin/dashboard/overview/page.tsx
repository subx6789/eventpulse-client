import StatsCard from "@/components/Card/StatsCard";
import Sidebar from "@/components/Sidebar/Sidebar";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {statCardData.map((data, index) => (
          <StatsCard
            key={index}
            title={data.title}
            amount={data.amount}
            icon={data.icon}
            currency={data.currency}
          />
        ))}
      </div>
    </Sidebar>
  );
}
