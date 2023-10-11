'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function TaskForm() {
    const router = useRouter()
    const params = useParams()
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        createdBy: '',
        assignTo: ''
    })

    const getTaskToEdit = async () => {
        const res = await fetch(`/api/task/${params.taskId}`, {
            method: "GET"
        })
        const task = await res.json()
        setFormValues(task)
    }

    useEffect(() => {
        if(params?.taskId) {
            getTaskToEdit()
        }
    }, [params?.taskId])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(params?.taskId) {
            await fetch(`/api/task/${params.taskId}`, {
                method: 'PUT',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(formValues)
            })
            router.refresh()
            router.push("/tasks")
        } else {
            await fetch('/api/task', {
                method: 'POST',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(formValues)
            })
            router.refresh()
            router.push("/tasks")
        }
    }

    const onDeleteHandle = async () => {
        await fetch(`/api/task/${params.taskId}`, {
                method: 'DELETE',
                headers: {
                    'content-type': "application/json"
                }
            })
            router.refresh()
            router.push("/tasks")
    }
    
    return (
        <form className="grid py-5" onSubmit={handleSubmit}>
            <label className="text-2xl font-semibold mb-2">Title</label>
            <input className="mb-5 rounded-lg p-3 text-black" name="title" value={formValues.title} onChange={(e) => setFormValues({ ...formValues, title: e.target.value })} />
            <label className="text-2xl font-semibold mb-2">Description</label>
            <textarea className="mb-5 rounded-lg p-3 text-black" name="description" cols="5" value={formValues.description} onChange={(e) => setFormValues({ ...formValues, description: e.target.value })} />
            <label className="text-2xl font-semibold mb-2">Created by</label>
            <input className="mb-5 rounded-lg p-3 text-black" name="createdBy" value={formValues.createdBy} onChange={(e) => setFormValues({ ...formValues, createdBy: e.target.value })} />
            <label className="text-2xl font-semibold mb-2">Assign to</label>
            <input className="mb-5 rounded-lg p-3 text-black" name="assign" value={formValues.assignTo} onChange={(e) => setFormValues({ ...formValues, assignTo: e.target.value })} />
            <div className="w-full flex justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 w-20 h-10 rounded-md font-bold">
                    {params.taskId ? 'Update': 'Create'}
                </button>
                {params?.taskId && <button type="button" className="bg-red-500 hover:bg-red-600 w-20 h-10 rounded-md font-bold" onClick={onDeleteHandle}>
                    Delete
                </button>}
            </div>
        </form>
    )
}