import TaskCard from "@/components/taskCard/taskCard";
export const dynamic = 'force-dynamic'

export default function TasksView() {
  return (
    <section className="container m-auto mt-5 max-w-[1024px] px-6">
      <TaskCard />
    </section>
  );
}
