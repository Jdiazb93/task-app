import TaskForm from "@/components/taskForm/taskForm";

export default function EditTask() {
  return (
    <section className="w-full flex justify-center mt-10">
      <div className="bg-slate-800 p-5 w-1/2 rounded-xl">
        <TaskForm />
      </div>
    </section>
  );
}
