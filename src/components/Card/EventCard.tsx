import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { Event } from "@/types/event";
import { Button } from "../ui/button";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative h-48 w-full md:h-56">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow-sm">
            {event.category}
          </span>
        </div>
      </div>

      {/* Card Header */}
      <CardHeader className="p-5">
        <h3 className="text-lg font-bold md:text-xl">{event.title}</h3>
        <p className="mt-1 text-sm text-gray-600 md:text-base">
          {event.description}
        </p>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="p-4 md:p-5">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm md:text-base">
            {event.date} • {event.time}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <MapPinIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm md:text-base">{event.location}</span>
        </div>
      </CardContent>

      <div className="flex w-full items-center justify-between px-5">
        <span className="font-bold text-lg md:text-xl">Rs. {event.price}</span>
      </div>

      {/* Card Footer */}
      <CardFooter className="p-4 md:p-6 flex flex-col gap-5 w-full">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-between">
          <Button className="bg-green-500 text-white px-5 py-2 text-sm md:text-base hover:scale-105 transition-all duration-150 w-full sm:w-auto">
            Approve
          </Button>
          <Button className="bg-red-500 text-white px-5 py-2 text-sm md:text-base hover:scale-105 transition-all duration-150 w-full sm:w-auto">
            Deny
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
