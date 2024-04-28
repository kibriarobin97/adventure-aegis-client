import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";



const ViewDetails = () => {

    const spots = useLoaderData()
    const { name, country, photo, visitors, location, cost, season, time, description } = spots

    return (
        <div className="min-h-[calc(100vh-353px)] px-5 mb-5">
            <div className="w-full mx-auto p-4 shadow-md">
                <div className="space-y-5">
                    <div className="space-y-2">
                        <div className="relative">
                            <img src={photo} alt="" className="block object-cover object-bottom w-full rounded-md h-60 md:h-[450px] bg-gray-500" />
                            <div className="min-w-32 mx-auto text-center absolute bottom-0 right-0">
                                <h3 className="bg-orange-500 rounded-full text-white md:text-xl font-semibold p-5 hover:bg-orange-400 duration-300">$ {cost}/Person</h3>
                            </div>
                        </div>
                        <div className="flex justify-around items-center text-gray-700 font-semibold pt-5">
                            <span className="bg-orange-500 bg-opacity-60 px-3 py-1 rounded-full">{country}</span>
                            <span className="bg-orange-500 bg-opacity-60 px-3 py-1 rounded-full">{time} Days Tour</span>
                            <span className="bg-orange-500 bg-opacity-60 px-3 py-1 rounded-full">{season} Season</span>
                        </div>
                    </div>
                    <div className="space-y-4 py-4 lg:px-10">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-2xl font-bold text-black">{name}</h3>
                        </a>
                        <p className="font-semibold"><span className="font-bold">Location:</span> {location}</p>
                        <div className="max-w-60">
                            <p className="font-bold bg-orange-400 mx-auto px-3 py-2 rounded-lg text-white hover:bg-orange-300 duration-500">{visitors} Visitors Per Year</p>
                        </div>
                        <p className="leading-snug text-gray-600">{description}</p>
                        <Link to='/'><button className="mt-10 btn bg-orange-400 hover:bg-orange-500 duration-500 rounded-lg text-white font-semibold">
                            <FaArrowLeft />
                            Back to Home</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ViewDetails;