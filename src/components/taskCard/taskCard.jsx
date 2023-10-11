import Link from "next/link";
import { prisma } from "@/connection/connection";

const getTasks = async () => {
  const tasks = await prisma.tasks.findMany();
  return tasks;
};

export default async function TaskCard() {
  const tasks = await getTasks();

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <Link href={`/edit/${task.id}`} key={task.id}>
          <div className="container bg-slate-800 hover:bg-slate-700 hover:cursor-pointer rounded-lg p-5">
            <h3 className="text-3xl font-bold">{task.title}</h3>
            <p className="text-xs text-gray-400">Assign To: {task?.assignTo}</p>
            <p className="text-lg font-medium">{task?.description}</p>
            <p className="text-xs text-gray-400">
              Created By: {task?.createdBy}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
