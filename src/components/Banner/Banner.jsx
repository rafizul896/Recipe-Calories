const Banner = () => {
    return (
        <div className="my-3 md:my-8">
            <div className="h-[600px] px-1 rounded-2xl flex  flex-col justify-center text-start items-center gap-3 md:text-center text-white bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/xDsd1DG/Rectangle-1.png)' }}>
                <h1 className="mb-5 pl-4 text-[26px] lg:text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className="mb-5 pl-4 text-">Recipe calories denote the energy content of a dish derived from its ingredients. Understanding the calorie <br />  count aids in maintaining a balanced diet and healthy lifestyle.</p>
                <div className="flex gap-3 md:gap-5 text-sm font-semibold">
                    <button className="py-3 px-5 bg-[#0BE58A] hover:bg-black text-black hover:text-[#0BE58A] border-0 rounded-full">Explore Now</button>
                    <button className="border py-3 px-4 rounded-full">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;