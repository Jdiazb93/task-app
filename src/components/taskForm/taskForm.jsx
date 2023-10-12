'use client'
import { useState, useEffect, Suspense } from 'react'
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
    const [isLoading, setIsLoading] = useState(true)

    const getTaskToEdit = async () => {
        const res = await fetch(`/api/task/${params.taskId}`, {
            method: "GET"
        })
        const task = await res.json()
        setFormValues(task)
        setIsLoading(false)
    }

    useEffect(() => {
        if(params?.taskId) {
            getTaskToEdit()
        } else {
            setIsLoading(false)
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
        <>
        {isLoading ? 
        <section>
          <div className='text-center'>
            <p className='text-2xl'>Loading data...</p>
          </div>
        </section> 
        : 
        <form className="grid py-5" onSubmit={handleSubmit}>
          <label className="text-2xl font-semibold mb-2">Title</label>
          <input placeholder='Insert title...' className="mb-5 rounded-lg p-3 text-black focus:scale-105 ease-in-out duration-100" name="title" value={formValues.title} onChange={(e) => setFormValues({ ...formValues, title: e.target.value })} />
          <label className="text-2xl font-semibold mb-2">Description</label>
          <textarea placeholder='Insert description...' className="mb-5 rounded-lg p-3 text-black focus:scale-105 ease-in-out duration-100" name="description" cols="5" value={formValues.description} onChange={(e) => setFormValues({ ...formValues, description: e.target.value })} />
          <label className="text-2xl font-semibold mb-2">Created by</label>
          <input placeholder='Created by...' className="mb-5 rounded-lg p-3 text-black focus:scale-105 ease-in-out duration-100" name="createdBy" value={formValues.createdBy} onChange={(e) => setFormValues({ ...formValues, createdBy: e.target.value })} />
          <label className="text-2xl font-semibold mb-2">Assign to</label>
          <input placeholder='Assign to...' className="mb-5 rounded-lg p-3 text-black focus:scale-105 ease-in-out duration-100" name="assign" value={formValues.assignTo} onChange={(e) => setFormValues({ ...formValues, assignTo: e.target.value })} />
          <div className="w-full flex justify-between">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 focus:scale-105 hover:scale-105 ease-in-out duration-100 w-20 h-10 rounded-md font-bold">
                  {params.taskId ? 'Update': 'Create'}
              </button>
              {params?.taskId && <button type="button" className="bg-red-500 hover:bg-red-600 focus:scale-105 hover:scale-105 ease-in-out duration-100 w-20 h-10 rounded-md font-bold" onClick={onDeleteHandle}>
                  Delete
              </button>}
          </div>
        </form>}
        </>
    )
}