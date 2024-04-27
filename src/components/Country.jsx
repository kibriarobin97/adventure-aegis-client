import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ count }) => {

    const { country, description, photo } = count;

    return (
        <Link>
            <div className="max-w-sm p-6 rounded-md shadow-md bg-gray-100 space-y-3">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <h3 className='text-2xl font-bold text-center text-gray-900 text-opacity-70'>{country}</h3>
                <p className="text-gray-500 text-center">{description}</p>
            </div>
        </Link>
    );
};

Country.propTypes = {
    count: PropTypes.object
}

export default Country;