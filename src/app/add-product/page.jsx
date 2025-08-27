"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

function AddProdcut() {
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        const localUsername = localStorage.getItem("username");
        setUsername(() => localUsername)
        setLoading(false)
        if (!localUsername) {
            router.push("/login");
        }
    }, [])
    if(loading) {
        return <p>loading...</p>
    }

    function formHandler(event) {
        event.preventDefault();
        const [name, price, imgURL, description] = [
            event.target.productName.value,
            event.target.price.value,
            event.target.productImage.value,
            event.target.description.value,
        ]
        console.log(name, price, imgURL, description);

        fetch("http://localhost:3000/api/products", {
            method: "POST", 
            body: JSON.stringify({name, price, imgURL, description}), 
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => {
            alert("Posted");
        })
    }
    return(
        <form onSubmit={formHandler} className="fieldset mx-auto my-10  border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Product Details</legend>

            <label className="label">Product Name</label>
            <input type="text" className="input" placeholder="ex: Lenovo Laptop" name = "productName" />

            <label className="label">Product Image</label>
            <input type="text" className="input" placeholder="https://lenovo/lenovo.png" name = "productImage" />

            <label className="label">Price</label>
            <input type="number" className="input" placeholder="ex: 1500 BDT" name = "price" />

            <label className="label">Description</label>
            <textarea className="textarea" placeholder="Description here.." name="description"></textarea>

            <button className="btn btn-outline rounded-3xl">Submit Product</button>
        </form>
    )
}

export default AddProdcut