import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {

    const [countries, setCountries] = useState()

    useEffect(() => {
        fetch('https://adventure-aegis-server.vercel.app/countries')
        .then(res => res.json())
        .then(data => {
            setCountries(data)
        })
    },[])

    return (
        <div className="pb-10">
            <h3 className="text-3xl font-bold text-center mb-5 pt-8">Countries</h3>
            <div className="grid grid-cols-1 gap-10">
                {
                    countries?.map((count, idx) => <Country 
                        key={count._id}
                        count={count}
                        idx={idx}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;