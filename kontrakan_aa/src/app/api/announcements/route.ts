import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Announcement from "@/models/announcement";
export async function GET() {
  await connectDB();
  const announcements = await Announcement.find().sort({ date: -1 });
  return NextResponse.json({ announcements });
}