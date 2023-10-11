import { prisma } from "@/connection/connection";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { taskId } = params
        const task = await prisma.tasks.findUnique({ where: { id: Number(taskId) } })
        return NextResponse.json(task);
    } catch(e) {
        console.error(e)
        return NextResponse.json({ status: 500, error: e.message })
    }
  }

export async function PUT(request, { params }) {
    try {
        const { taskId } = params
        const data = await request.json()
        const taskUpdated = await prisma.tasks.update({ where: { id: Number(taskId) }, data: data})
        return NextResponse.json({ status: 200, taskUpdated })
    } catch(e) {
        console.error(e)
        return NextResponse.json({ status: 500, error: e.message })
    }
}

export async function DELETE(request, { params }) {
    try {
        const { taskId } = params
        const taskDeleted = await prisma.tasks.delete({ where: { id: Number(taskId) }})
        return NextResponse.json({ status: 200, taskDeleted })
    } catch(e) {
        console.error(e)
        return NextResponse.json({ status: 500, error: e.message })
    }
}