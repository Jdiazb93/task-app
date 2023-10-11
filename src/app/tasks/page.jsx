import TaskCard from "@/components/taskCard/taskCard";
export const dynamic = 'force-dynamic'

export default function TasksView() {
  return (
    <section className="container mx-auto mt-5">
      <TaskCard />
    </section>
  );
}
