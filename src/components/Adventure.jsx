import activities from "../assets/Activities.png"
import arrangement from "../assets/Travel Arrangements.png"
import guide from "../assets/tour-guide.png"
import location from "../assets/Location Manager.png"

const Adventure = () => {
    return (
        <div className="md:grid grid-cols-2 my-5 gap-8">
            <div className="grid grid-cols-2 gap-5 p-5">
                <div data-aos="fade-up-right" data-aos-delay="200" className="space-y-2">
                    <img src={activities} className="w-20 h-20" alt="Activities" />
                    <h3 className="text-xl font-bold text-gray-600">Activities</h3>
                    <p className="font-medium text-gray-500">Adventure Aegis offers a diverse range of exhilarating activities that cater to adventure of all ages and interests.</p>
                </div>
                <div data-aos="fade-up-right"  className="space-y-2">
                    <img src={arrangement} className="w-20 h-20" alt="Arrangements" />
                    <h3 className="text-xl font-bold text-gray-600">Travel Arrangements</h3>
                    <p className="font-medium text-gray-500">Adventure Aegis takes care of all your travel arrangements, ensuring a seamless and stress-free experience.</p>
                </div>
                <div data-aos="fade-up-right" data-aos-delay="600" className="space-y-2">
                    <img src={guide} className="w-20 h-20" alt="Private Guide" />
                    <h3 className="text-xl font-bold text-gray-600">Private Guide</h3>
                    <p className="font-medium text-gray-500">Experience the ultimate personalized adventure with Adventure Aegis's Private Guide service.</p>
                </div>
                <div data-aos="fade-up-right" data-aos-delay="400" className="space-y-2">
                    <img src={location} className="w-20 h-20" alt="Location Manager" />
                    <h3 className="text-xl font-bold text-gray-600">Location Manager</h3>
                    <p className="font-medium text-gray-500">At Adventure Aegis, our Location Managers are the backbone of our operations.</p>
                </div>
            </div>
            <div className="space-y-4 p-5">
                <h2 data-aos="fade-up" className="text-3xl font-bold md:w-2/3">It's time to start your adventure</h2>
                <p data-aos="fade-up" data-aos-delay="300" className="font-medium text-gray-500">It's time to start your adventure with Adventure Aegis. Whether you're craving an adrenaline-fueled escapade, a cultural immersion, or a serene journey through nature's wonders, we're here to turn your dreams into reality. With our expert team of guides, seamless travel arrangements, and unparalleled access to some of the world's most breathtaking destinations, your adventure awaits. So pack your bags, leave your worries behind, and get ready to embark on the journey of a lifetime. It's time to discover new horizons, forge unforgettable memories, and experience the thrill of adventure like never before. Let's make every moment count – it's time to start your adventure with Adventure Aegis. As you stand on the precipice of your next great adventure, anticipation fills the air like electricity. With Adventure Aegis by your side, every moment becomes a possibility waiting to unfold. Whether you're yearning to summit towering peaks, dive into the depths of the ocean, or lose yourself in the rhythm of a bustling metropolis, we're here to guide you every step of the way. Our passion for exploration, commitment to safety, and dedication to creating unforgettable experiences ensure that your journey is not just a destination, but a transformational odyssey.</p>
            </div>
        </div>
    );
};

export default Adventure;