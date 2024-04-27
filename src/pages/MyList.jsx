import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyList = () => {

    const { user } = useContext(AuthContext)

    const [spots, setSpots] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/mySpots/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSpots(data)
            })
    }, [user])

    const handleDelete = _id => {
        console.log(_id)
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

                fetch(`http://localhost:5000/spots/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = spots.filter(spot => spot._id !== _id)
                            setSpots(remaining)
                        }
                    })


            }
        });

    }



    return (
        <div className="min-h-[calc(100vh-353px)]">
            <h3 className="text-3xl font-bold text-center my-3">My Added Tourists Spots</h3>
            <div className="container p-2 mx-auto sm:p-4 text-gray-700">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-orange-400">
                            <tr className="text-left">
                                <th className="p-3 text-white">Serial</th>
                                <th className="p-3 text-white">Spots Name</th>
                                <th className="p-3 text-white">Country</th>
                                <th className="p-3 text-white">Days</th>
                                <th className="p-3 text-white">Update</th>
                                <th className="p-3 text-white">Delete</th>
                            </tr>
                        </thead>
                        {
                            spots?.map((spot, idx) => <tbody key={spot._id}>
                                <tr className="border-b border-opacity-20 border-gray-700 bg-gray-100">
                                    <td className="p-3">
                                        <p className="font-semibold">{idx + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="font-semibold">{spot?.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="font-semibold">{spot?.country}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="font-semibold">{spot?.time}</p>
                                    </td>
                                    <td className="p-3">
                                        <Link to={`/updateSpots/${spot?._id}`}>
                                            <button className="font-semibold btn btn-sm bg-orange-400 text-white hover:bg-orange-600 duration-500">Update</button>
                                        </Link>
                                    </td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => handleDelete(spot?._id)}
                                            className="font-semibold btn btn-sm bg-red-400 text-white hover:bg-red-600 duration-500">Delete</button>
                                    </td>
                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;