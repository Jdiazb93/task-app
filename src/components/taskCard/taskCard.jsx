import Link from "next/link";
import { prisma } from "@/connection/connection";

const getTasks = async () => {
  const tasks = await prisma.tasks.findMany();
  return tasks;
};

export default async function TaskCard() {
  const tasks = await getTasks();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
      {tasks.map((task) => (
        <Link href={`/edit/${task.id}`} key={task.id} className="focus:scale-110 hover:scale-110 duration-100">
          <div className="container bg-slate-800 hover:bg-slate-700 hover:cursor-pointer rounded-lg p-5">
            <h3 className="text-2xl font-bold truncate">{task.title}</h3>
            <p className="text-xs text-gray-400">Assign To: {task?.assignTo}</p>
            <p className="mt-2 text-sm font-medium h-20 line-clamp-4 text-ellipsis">{task?.description}</p>
            <p className="mt-2 text-xs text-gray-400">
              Created By: {task?.createdBy}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
