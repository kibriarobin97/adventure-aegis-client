import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {

    const [countries, setCountries] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/countries')
        .then(res => res.json())
        .then(data => {
            setCountries(data)
        })
    },[])

    return (
        <div className="pb-10">
            <h3 className="text-3xl font-bold text-center mb-5 pt-8">Countries</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    countries?.map(count => <Country 
                        key={count._id}
                        count={count}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;