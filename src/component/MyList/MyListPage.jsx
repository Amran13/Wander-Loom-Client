import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiFillDelete } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import img from '../../assets/Image/undraw_Add_tasks_re_s5yj.png'


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
                <div className='my-12'>
                    {
                        addedData.length ? <div className='text-center font-bold text-3xl'>You have selected <span className='text-4xl text-violet-500'>{addedData.length}</span> spot </div>
                            : <div>
                                <img className='w-4/5 mx-auto' src={img} alt="" />
                                <div className='text-center font-bold text-3xl'>Please Select Some Spot  </div>
                                <div className='text-lg text-violet-800 text-center hover:font-medium hover:underline '><Link to="/add-tourist-spot">Add Tourist Spot</Link></div>
                            </div>
                    }
                </div>
                <table className="table md:w-2/3 mx-auto">
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
                                <td>  {data.avarageCost}$ </td>
                                <th className='lg:space-x-2 space-y-2'>
                                    <button onClick={() => handleDelete(data._id)} className="btn">
                                        <AiFillDelete />
                                    </button>
                                    <Link to={`/update/${data._id}`}><button className="btn">
                                        <IoIosCreate />
                                    </button></Link>
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