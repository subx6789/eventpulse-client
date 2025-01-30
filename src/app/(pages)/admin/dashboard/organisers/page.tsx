import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Sidebar from "@/components/Sidebar/Sidebar";
import OrganizerTable from "@/components/Table/OrganiserTable";

export default async function OrganizersPage() {
  // In a real application, this would fetch from your API or database
  const organizers = [
    {
      id: "1",
      name: "Sarah Anderson",
      organization: "GDSC",
      email: "sarah@premierevents.com",
      phone: "+1 (555) 123-4567",
      eventCount: 42,
      avatarUrl: "/path/to/sarah-avatar.jpg",
    },
    {
      id: "2",
      name: "Michael Chen",
      organization: "Sanskaran",
      email: "michael@globalevents.com",
      phone: "+1 (555) 987-6543",
      eventCount: 35,
      avatarUrl: "/path/to/michael-avatar.jpg",
    },
  ];

  return (
    <ProtectedRoute requiredRole="admin">
      <Sidebar>
        <div className="p-6">
          <OrganizerTable organizers={organizers} />
        </div>
      </Sidebar>
    </ProtectedRoute>
  );
}
