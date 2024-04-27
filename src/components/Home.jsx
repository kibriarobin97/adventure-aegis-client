import Adventure from "./Adventure";
import NewsLetter from "./NewsLetter";
import Slider from "./Slider";
import TouristSpots from "./TouristSpots";


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-353px)]">
            <Slider></Slider>
            <TouristSpots></TouristSpots>
            <Adventure></Adventure>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;