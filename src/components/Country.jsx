import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ count, idx }) => {

    const { country, description, photo } = count;

    return (
        <Link to={`/countries/${country}`}>
            <div data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-duration="1000"
            className="md:flex justify-center items-center gap-5 max-w-5xl mx-auto p-6 rounded-md shadow-md space-y-3">
                <div className='md:w-1/2'>
                <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                </div>
                <div className='md:w-1/2'>
                <h3 className='text-2xl font-bold text-center md:text-start black'>{country}</h3>
                <p className="text-gray-500 text-center md:text-start">{description}</p>
                </div>
            </div>
        </Link>
    );
};

Country.propTypes = {
    count: PropTypes.object,
    idx: PropTypes.number
}

export default Country;