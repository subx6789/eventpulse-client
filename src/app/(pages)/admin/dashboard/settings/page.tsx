import Sidebar from "@/components/Sidebar/Sidebar";
import { Construction } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <Sidebar>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        {/* Construction Icon with Animation */}
        <div className="mb-8 relative">
          <div className="absolute -inset-4 bg-gray-100 rounded-full animate-spin-slow"></div>
          <Construction className="h-16 w-16 text-black relative animate-bounce-slow" />
        </div>

        {/* Main Content */}
        <h1 className="text-4xl font-bold text-black mb-4 text-center">
          Page Under Construction
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          We&apos;re working hard to bring you something amazing
        </p>
      </div>
    </Sidebar>
  );
};

export default page;
