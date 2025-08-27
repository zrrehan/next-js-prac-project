"use client";
import { useRouter } from "next/navigation";

function Products() {
    const router = useRouter();
    const {id} = router.query();

    return(
        <div>
            {id}
        </div>
    )
}

export default Products;