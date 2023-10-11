import { prisma } from "@/connection/connection";
import { NextResponse } from "next/server";

export async function GET() {
  const tasks = await prisma.tasks.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  try {
    const { title, description, createdBy, assignTo } = await request.json();
    
    const newTask = await prisma.tasks.create({
        data: { title, description, createdBy, assignTo }
    })

    if(newTask) {
        return NextResponse.json({ status: 200, newTask: newTask });
    }
    return NextResponse.json({ status: 500, error: "Unexpected error." });
  } catch (e) {
    return NextResponse.json({ status: 404, error: e.message});
  }
}
