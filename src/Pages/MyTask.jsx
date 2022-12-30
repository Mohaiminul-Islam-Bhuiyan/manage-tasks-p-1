import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import MyTaskRows from './MyTaskRows';

const MyTask = () => {
    const { user, logout } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/alltask?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log('received', data);
                setReviews(data)
            })
    }, [user?.email, logout])

    const handleDelete = id => {
        const proceed = window.confirm('are you sure to delete this review ? ')
        if (proceed) {
            fetch(`https://assignment-eleven-server-fawn.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = reviews.filter(rv => rv._id !== id)
                        setReviews(remaining)
                    }
                })
        }
    }


    return (
        <div>
            <h2 className='text-5xl'>You have: {reviews.length} Tasks</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Email</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(rv =>
                                <MyTaskRows
                                    key={rv._id}
                                    rv={rv}
                                    handleDelete={handleDelete}></MyTaskRows>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyTask;