import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const AllSpots = ({ spot }) => {

    const {_id, photo, time, name, country, season, cost} = spot;

    return (
        <div>
            <div className=" rounded-md shadow-md bg-gray-100 text-black">
                <div className="relative">
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                    <div className="min-w-32 mx-auto text-center absolute top-0">
                        <h3 className="bg-orange-500 rounded-full text-white font-semibold p-2 hover:bg-orange-400 duration-300">$ {cost}/Person</h3>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 font-medium">{time} Days Tour</p>
                            <p className="text-gray-500 font-medium">{season} Vacation</p>
                        </div>
                        <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                        <p className="text-gray-500 font-medium">{country}</p>
                    </div>
                    <Link to={`/viewDetails/${_id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-400 text-white hover:bg-orange-600 duration-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

AllSpots.propTypes = {
    spot: PropTypes.object
}

export default AllSpots;