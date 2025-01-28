"use client";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  // Extract the title from the pathname
  const getTitleFromPathname = (path: string) => {
    const segments = path.split("/").filter(Boolean); // Filter out empty segments
    const lastSegment = segments[segments.length - 1] || "Dashboard"; // Default to "Dashboard" if no segment

    // Capitalize each word and replace "-" or "_" with a space
    return lastSegment
      .replace(/[-_]/g, " ") // Replace dashes/underscores with spaces
      .split(" ") // Split words for capitalization
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join words with spaces
  };

  const title = getTitleFromPathname(pathname);

  return (
    <header className="flex h-16 items-center justify-between">
      <SidebarTrigger className="-ml-1" />
      <h1 className="text-lg font-semibold">{title}</h1>
      <Button>
        <Plus />
        Add Organiser
      </Button>
    </header>
  );
};

export default Header;
