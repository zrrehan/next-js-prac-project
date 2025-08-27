export const dynamic = "force-dynamic";
async function Featured() {
    // const products = await fetch(`http://localhost:3000/api/products/`)
    //     .then(res => res.json());
    let products = [];
    try {
        const res = await fetch(`https://scic-nextjs-assignment.vercel.app/api/products/`);
        if(!res.ok) {
            console.log("error");
        } else {
            products = await res.json();
        }
    } catch(err) {
        console.log("error");
    }
    return(
        <div className="space-y-8 flex flex-col items-center">
            <h1 className="text-6xl font-bold">Product Highlight</h1>
            <div className="flex flex-wrap justify-center gap-3">
                {
                    products.slice(0, 3).map((singleData) => {
                        return <div key={singleData._id} className="card bg-base-100 image-full w-96 shadow-sm">
                            <figure className="w-full h-[300px]">
                                <img
                                    className="w-full bg-cover"
                                    src={singleData.imgURL}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body items-center justify-center">
                                <div>
                                    <h2 className="card-title text-2xl">{singleData.name}</h2>
                                    <p>{singleData.description.slice(0, 200)}</p>
                                    <div className="card-actions justify-end">
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Featured;