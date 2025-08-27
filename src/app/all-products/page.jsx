import Link from "next/link";
import { TbCoinTaka } from "react-icons/tb";

async function AllProducts() {
    const products = await fetch("http://localhost:3000/api/products")
                        .then(res => res.json());
    
    return(
        <div className="w-[90%] max-w-[1150px] mx-auto space-y-15 py-15">
            {
                products.map(singleProduct => <div key = {singleProduct._id} className="flex justify-center items-center py-8 rounded-3xl px-16 gap-14 bg-base-100 shadow-sm">
                    <figure className="lg:w-[300px]">
                        
                        <img
                            className="w-full h-full rounded-3xl shadow-2xl"
                            src={singleProduct.imgURL}
                            alt="Movie" />
                        
                    </figure>
                    <div className="w-[50%] flex flex-col gap-2 justify-center">
                        <h2 className="text-4xl font-bold">{singleProduct.name} </h2>
                        <div className="flex items-center gap-2">
                            <TbCoinTaka size = {23}/>
                            {singleProduct.price} BDT
                        </div>
                        <div className="divider">Details</div>
                        <p>{singleProduct.description.slice(0, 200)}<span className="">...</span></p>
                        <div className="card-actions justify-end mt-8">
                            <Link href = {`/all-products/${singleProduct._id}`}>
                                <button className="btn  rounded-3xl btn-outline">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default AllProducts;