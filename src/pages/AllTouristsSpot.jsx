
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import AllSpots from "../components/AllSpots";
import { useState } from "react";


const AllTouristsSpot = () => {

    const loadSpot = useLoaderData()
    const [sortBy, setSortBy] = useState(null)

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedData = [...loadSpot].sort((a, b) => {
        if (!sortBy) {
            return 0;
          }

        const costA = parseFloat(a.cost);
        const costB = parseFloat(b.cost);

        if (sortBy === 'ascending') {
            return costA - costB;
        } else {
            return costB - costA;
        }
    });


    const navigation = useNavigation()

    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="min-h-[calc(100vh-353px)]">
            <div className="flex flex-col justify-center items-center">
                <select value={sortBy} onChange={handleSortChange} className="bg-orange-400 p-2 font-bold rounded-lg">
                    <option className="font-medium" value="">Show All</option>
                    <option className="font-medium" value="ascending">Average Cost (Low to High)</option>
                    <option className="font-medium" value="descending">Average Cost (High to Low)</option>
                </select>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {
                    sortedData.map(spot => <AllSpots
                        key={spot._id}
                        spot={spot}
                    ></AllSpots>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;