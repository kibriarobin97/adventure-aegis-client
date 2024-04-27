

const NewsLetter = () => {
    return (
        <div className="hero min-h-80 my-10" style={{ backgroundImage: 'url(https://i.ibb.co/yFLFsSk/felfin-felfin-5-MV818tzxeo-unsplash.jpg)' }}>
            <div className="hero-overlay object-cover bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-3 text-3xl font-bold">Sign Up for a Newsletter</h1>
                    <p className="mb-5">Sign up for our mailing list to get latest updates and offers.</p>
                    <div className="flex justify-center items-center gap-0">
                    <input type="text" placeholder="Enter Email" className="input rounded-l-full input-ghost w-full max-w-xs" />
                    <button className="btn bg-orange-400 text-white border-none hover:bg-orange-600 duration-500 rounded-r-full">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;