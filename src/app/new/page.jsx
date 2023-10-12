import NewTaskForm from '@/components/taskForm/taskForm'

export default function NewTask() {
    return (
        <section className="w-full flex justify-center py-5">
            <div className="bg-slate-800 p-5 w-1/2 rounded-xl">
                <NewTaskForm />
            </div>
        </section>
    )
}