import { TbCoinTaka } from "react-icons/tb";
export const dynamic = "force-dynamic";
async function Products({params}) {
    const id = params.id;
    // const data = await fetch(`http://localhost:3000/api/products/${id}`)
    //     .then(res => res.json());
    let data = [] 
    try {
        const res = await fetch(`https://scic-nextjs-assignment.vercel.app/api/products/${id}`);
        if(!res.ok) {
            console.log(error);
        } else {
            data = await res.json();
        }
    } catch(err) {
        console.log("error");
    }
    return (
        <div className="w-[90vw] max-w-[1150px] mx-auto flex flex-col items-center gap-8 py-10">
            <h1 className="text-3xl font-semibold">Details of {data.name}</h1>
            <div className="w-[90%] max-w-[400px]">
                <img src={data.imgURL} className="w-full rounded-2xl shadow-2xl" alt={`image of ${data.name}`} />
            </div>
            <div className="divider">Description</div>
            <div className="flex items-center gap-2 text-3xl">
                                        <TbCoinTaka size = {33}/>
                                        {data.price} BDT
                                    </div>
            <p>{data.description}</p>
        </div>
    )
}

export default Products;