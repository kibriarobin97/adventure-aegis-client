import Adventure from "./Adventure";
import Countries from "./Countries";
import NewsLetter from "./NewsLetter";
import Slider from "./Slider";
import TouristSpots from "./TouristSpots";


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-353px)]">
            <Slider></Slider>
            <TouristSpots></TouristSpots>
            <Countries></Countries>
            <Adventure></Adventure>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;