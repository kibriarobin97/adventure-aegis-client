import { useLoaderData } from "react-router-dom";


const TouristSpots = () => {

    const loadSpot = useLoaderData()

    return (
        <div>
            <h3 className="text-3xl font-bold text-center mt-16">Tourists Spots</h3>
            <h3>total items: {loadSpot.length}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
                {
                    loadSpot.map(spot => <div key={spot._id}>
                        <div className=" rounded-md shadow-md bg-gray-100 text-black">
                            <div className="relative">
                                <img src={spot.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                                <div className="min-w-32 mx-auto text-center absolute top-0">
                                    <h3 className="bg-orange-500 rounded-full text-white font-semibold p-2 hover:bg-orange-400 duration-300">$ {spot.cost}/Person</h3>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500 font-medium">{spot.time} Days Tour</p>
                                        <p className="text-gray-500 font-medium">{spot.season} Vacation</p>
                                    </div>
                                    <h2 className="text-2xl font-semibold tracking-wide">{spot.name}</h2>
                                    <p className="text-gray-500 font-medium">{spot.country}</p>
                                </div>
                                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-400 text-white hover:bg-orange-600 duration-400">View Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;