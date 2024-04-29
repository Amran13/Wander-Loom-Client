import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiFillDelete } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";



const MyListPage = () => {
    const loadedData = useLoaderData()
    const [addedData, setAddedData] = useState(loadedData)
    // console.log(loadedData.length, addedData.length)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/add-tourist-spot/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = addedData.filter(item => item._id !== id)
                            setAddedData(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-2/3 mx-auto">
                    <tbody>
                        {
                            addedData.map(data => <tr key={data._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold"> {data.userName} </div>
                                            <div className="text-sm opacity-50"> {data.userEmail} </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                {data.touristSpot}
                                    <br />
                                    <span className="badge badge-ghost badge-sm"> {data.location}  </span>
                                </td>
                                <td> {data.avarageCost} </td>
                                <th>
                                    <button onClick={() => handleDelete(data._id)} className="btn">
                                        <AiFillDelete />
                                    </button>
                                    <button className="btn">
                                        <IoIosCreate />
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListPage;