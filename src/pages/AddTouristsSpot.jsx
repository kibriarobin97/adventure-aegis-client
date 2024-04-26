import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AddTouristsSpot = () => {

    const { user } = useContext(AuthContext)

    const handleAddSpot = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const photo = form.photo.value;
        const visitors = form.visitors.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const description = form.description.value;
        const userName = user?.displayName;
        const email = user?.email;

        const addSpot = {name, country, photo, visitors, location, cost, season, time, description, userName, email}

        console.log(addSpot)
        fetch('http://localhost:5000/spots',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Successfully added this item',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
            form.reset()
        })
    }

    return (
        <section className="p-6 text-gray-500 min-h-[calc(100vh-353px)]">
            <h3 className="text-3xl text-black underline font-bold text-center mb-5">Add New Tourists Spots</h3>
            <form
                onSubmit={handleAddSpot}
                className="container flex flex-col mx-auto space-y-12">
                <fieldset className="p-5 rounded-md shadow-sm bg-[#EBEEF3]">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm text-black font-semibold">Tourists Spot Name</label>
                            <input id="firstname" name="name" type="text" placeholder="Tourists spot name" className="w-full rounded-md p-1 focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm text-black font-semibold">Country Name</label>
                            <input id="lastname" name="country" type="text" placeholder="Country name" className="w-full rounded-md p-1 focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm text-black font-semibold">Photo URL</label>
                            <input id="email" name="photo" type="text" placeholder="Photo URL" className="w-full rounded-md p-1 focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm text-black font-semibold">Total Visitors Per Year</label>
                            <input id="email" name="visitors" type="text" placeholder="Total visitors per year" className="w-full rounded-md p-1 focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm text-black font-semibold">Location</label>
                            <input id="address" name="location" type="text" placeholder="Location" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm text-black font-semibold">Average Cost</label>
                            <input id="city" name="cost" type="text" placeholder="Average cost" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm text-black font-semibold">Seasonality</label>
                            <input id="state" name="season" type="text" placeholder="Season" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm text-black font-semibold">Travel Time</label>
                            <input id="zip" name="time" type="text" placeholder="Travel Time" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm text-black font-semibold">Description</label>
                            <textarea id="bio" name="description" placeholder="Description" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                        </div>
                        <div className="col-span-full">
                            <input type="submit" className="btn btn-block bg-orange-400 text-white hover:bg-orange-600 duration-500" value="Add" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddTouristsSpot;