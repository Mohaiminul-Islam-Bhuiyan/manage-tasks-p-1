import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const AddTask = () => {
    const { user } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = user?.email || 'unregistered'
        const task = form.task.value

        const addedtask = {
            email,
            task
        }
        console.log(addedtask);
    }

    return (
        <div className=' mb-40 mt-14'>
            <form onSubmit={handleSubmit}>
                <textarea className="textarea textarea-bordered w-1/2 p-2 mb-10" placeholder="write your task" name='task'></textarea>

                <input className='btn btn-primary mb-3' type="submit" value="Add Task" />
            </form>

        </div>
    );
};

export default AddTask;