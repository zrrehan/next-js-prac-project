function Hero() {
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://www.startech.com.bd/image/cache/catalog/home/banner/2025/Sony-WH-1000XM6-Noise-Cancelling-Wireless-Headphone-(Official)-982x500.webp"
                    className="max-w-[50%] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Find your desired Tech!</h1>
                    <p className="py-6">
                        Star Tech has the most comprehensive array of Desktop PCs. We offer top-of-the-line Custom PC, Brand PC, All-in-One PC, and Portable Mini PC at Star Tech outlets, the trusted and most popular Desktop PC shop in Bangladesh, which are spread nationwide.
                    </p>
                    <button className="btn btn-neutral">Get Started</button>
                </div>
            </div>
        </div>  
    )
}

export default Hero