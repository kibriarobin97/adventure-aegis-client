import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyList = () => {

    const {user} = useContext(AuthContext)

    const [spots, setSpots] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/mySpots/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setSpots(data)
        })
    },[user])


    return (
        <div className="min-h-[calc(100vh-353px)]">
            <h3 className="text-3xl font-bold text-center my-3">My Added Tourists Spots {spots.length}</h3>
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
                            spots.map((spot, idx) => <tbody key={spot._id}>
                            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-100">
                                <td className="p-3">
                                    <p className="font-semibold">{idx+1}</p>
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
                                    <button className="font-semibold">Update</button>
                                </td>
                                <td className="p-3">
                                    <button className="font-semibold">Delete</button>
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