import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const MyReviews = () => {

    const { user } = useContext(AuthContext);


    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Reviewer name <br /> & Image</th>
                        <th>Review</th>
                        <th>Delete</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{user?.displayName}</div>

                                </div>
                            </div>
                        </td>
                        <td>
                            <p>Desktop Support Technician</p>
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs">x</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;