import React from "react";
import { Card, CardContent } from "../ui/card";
import { type LucideIcon } from "lucide-react";

type StatsCardProps = {
  title: string;
  icon: LucideIcon;
  currency?: string;
  amount: number;
};

const StatsCard = ({ title, icon: Icon, currency, amount }: StatsCardProps) => {
  return (
    <Card className="w-full rounded-lg shadow-sm border border-gray-200">
      <CardContent className="flex items-center gap-4 p-5">
        <div className="bg-gray-100 p-3 rounded-md">
          <Icon className="text-gray-700" size={20} />
        </div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-xl font-semibold text-gray-900">
            {currency}
            {amount.toLocaleString()} {/* Formats the number with commas */}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
