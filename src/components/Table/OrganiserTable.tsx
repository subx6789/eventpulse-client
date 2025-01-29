// components/OrganizerTable.tsx
"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export interface Organizer {
  id: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
  eventCount: number;
}

interface OrganizerTableProps {
  organizers: Organizer[];
}

export default function OrganizerTable({ organizers }: OrganizerTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="w-full">
          <TableHead className="w-[200px]">Organizer</TableHead>
          <TableHead className="w-[250px]">Contact</TableHead>
          <TableHead className="w-[100px]">Events</TableHead>
          <TableHead className="w-[100px] text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {organizers.map((organizer) => (
          <TableRow key={organizer.id}>
            <TableCell className="w-[200px]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                    {organizer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium">{organizer.name}</div>
                    <div className="text-sm text-gray-500">
                      {organizer.organization}
                    </div>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="w-[250px]">
              <div>
                <div className="text-sm">{organizer.email}</div>
                <div className="text-sm text-gray-500">{organizer.phone}</div>
              </div>
            </TableCell>
            <TableCell className="w-[100px]">{organizer.eventCount}</TableCell>
            <TableCell className="w-[100px] text-right">
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => console.log("Delete:", organizer.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
