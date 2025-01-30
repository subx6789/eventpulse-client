import Sidebar from "@/components/Sidebar/Sidebar";
import EventCard from "@/components/Card/EventCard";
import { Event } from "@/types/event";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

const mockData: Event[] = [
  {
    id: "1",
    title: "Annual Tech Conference 2024",
    description:
      "Join us for the biggest tech conference of the year featuring industry leaders.",
    date: "Mar 15, 2024",
    time: "9:00 AM PST",
    location: "San Francisco Convention Center, CA",
    price: 499,
    category: "Technology",
    image: "/Placeholder/event-placeholder.jpg",
  },
  {
    id: "2",
    title: "AI Summit 2024",
    description:
      "Explore the latest in artificial intelligence and machine learning.",
    date: "Apr 20, 2024",
    time: "10:00 AM EST",
    location: "New York Tech Hub, NY",
    price: 599,
    category: "AI",
    image: "/Placeholder/event-placeholder.jpg",
  },
  {
    id: "3",
    title: "Developer Workshop Series",
    description: "Hands-on workshops covering modern development practices.",
    date: "May 5, 2024",
    time: "2:00 PM GMT",
    location: "London Code Center, UK",
    price: 299,
    category: "Development",
    image: "/Placeholder/event-placeholder.jpg",
  },
  {
    id: "4",
    title: "Blockchain Conference",
    description: "Deep dive into blockchain technology and cryptocurrencies.",
    date: "Jun 12, 2024",
    time: "11:00 AM CET",
    location: "Berlin Innovation Hub, DE",
    price: 399,
    category: "Blockchain",
    image: "/Placeholder/event-placeholder.jpg",
  },
  {
    id: "5",
    title: "UX Design Festival",
    description: "Celebrating innovation in user experience and design.",
    date: "Jul 8, 2024",
    time: "1:00 PM JST",
    location: "Tokyo Design Center, JP",
    price: 349,
    category: "Design",
    image: "/Placeholder/event-placeholder.jpg",
  },
  {
    id: "6",
    title: "Cloud Computing Summit",
    description: "Latest trends and best practices in cloud technologies.",
    date: "Aug 15, 2024",
    time: "3:00 PM SGT",
    location: "Singapore Tech Park",
    price: 449,
    category: "Cloud",
    image: "/Placeholder/event-placeholder.jpg",
  },
  {
    id: "7",
    title: "Mobile Dev Conference",
    description: "Mobile development strategies and frameworks.",
    date: "Sep 22, 2024",
    time: "10:00 AM PDT",
    location: "Seattle Convention Center, WA",
    price: 379,
    category: "Mobile",
    image: "/Placeholder/event-placeholder.jpg",
  },
  {
    id: "8",
    title: "Cybersecurity Forum",
    description: "Expert insights on digital security and threat prevention.",
    date: "Oct 5, 2024",
    time: "9:00 AM CEST",
    location: "Amsterdam Security Hub, NL",
    price: 549,
    category: "Security",
    image: "/Placeholder/event-placeholder.jpg",
  },
  {
    id: "9",
    title: "Data Science Symposium",
    description: "Advanced analytics and machine learning applications.",
    date: "Nov 18, 2024",
    time: "2:00 PM EST",
    location: "Toronto Data Center, CA",
    price: 469,
    category: "Data Science",
    image: "/Placeholder/event-placeholder.jpg",
  },
  {
    id: "10",
    title: "Web3 Innovation Summit",
    description: "Exploring the future of decentralized web technologies.",
    date: "Dec 7, 2024",
    time: "11:00 AM GMT",
    location: "Dubai Future Hub, UAE",
    price: 599,
    category: "Web3",
    image: "/Placeholder/event-placeholder.jpg",
  },
];

const Page = () => {
  return (
    <ProtectedRoute requiredRole="admin">
      <Sidebar>
        <div className="p-5">
          <h1 className="mb-5 text-xl font-semibold">Upcoming Events</h1>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mockData.map((event) => (
              <div key={event.id} className="p-1">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </Sidebar>
    </ProtectedRoute>
  );
};

export default Page;
