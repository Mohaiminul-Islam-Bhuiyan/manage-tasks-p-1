import React, { useEffect, useState } from 'react';

const MyTaskRows = ({ rv, handleDelete }) => {
    const { _id, email, task } = rv
    const [rvew, setrvew] = useState({})



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{email}</div>

                    </div>
                </div>
            </td>

            <td>{task}</td>

        </tr>

    );
};

export default MyTaskRows;