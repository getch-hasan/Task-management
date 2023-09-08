
import { useState } from 'react';
import useAddTask from '../Hooks/useAddTask';


const CreateProjects = () => {
    const { isAddTaskOpen, setIsAddTaskOpen,refetch } = useAddTask()
    const [projectName, setProjectName] = useState('')
    const [date, setDate] = useState('')
    const [details, setDetails] = useState('')


    const cancelModal = () => {
        setIsAddTaskOpen(false)
    }
    const handleProjrctName = (e) => {
        setProjectName(e.target.value)

    }
    const handleDetails = (e) => {
        setDetails(e.target.value)
    }
    const handleDate = (e) => {
        setDate(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const project = { name: projectName, date: date, details: details,status:'Pending' }
        console.log(project)
        fetch('http://localhost:8000/allTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
            

        setIsAddTaskOpen(false)
        


    }
    return (
        <div className=" inset-0 flex items-center justify-center z-50">
            {
                isAddTaskOpen && <div id="popup-modal" tabindex="-1" class="fixed overflow top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div class="fixed inset-0 z-10 overflow-y-auto">
                            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <h1 className='text-center font-semibold text-xl'>Add New Project</h1>
                                    <div className='grid p-4 gap-1 '>
                                        <p>Project Name:</p>
                                        <input onChange={handleProjrctName} required className='p-1 border rounded-lg' type="text" name='projectName' />
                                        <p>Project Details</p>
                                        <textarea onChange={handleDetails} required className='p-1 border rounded-lg' name='details'></textarea>
                                        <p>Due Date:</p>
                                        <input onChange={handleDate} required className='p-1 border rounded-lg' type="datetime-local" name="lastDate" id="" />

                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button onClick={handleSubmit}  type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Submit</button>
                                        <button onClick={cancelModal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }

        </div>

    );
};

export default CreateProjects;