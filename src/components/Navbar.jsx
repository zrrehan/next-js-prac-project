"use client";
import { useEffect, useState } from "react";
import LoginButton from "./Navbar/LoginButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
    const [username, setUsername] = useState("");
    const pathname = usePathname();
    console.log(pathname)
    useEffect(() => {
        const name = localStorage.getItem("username");
        console.log(name); 
        setUsername(name);
    }, [pathname]);

    return(
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-xl flex items-center">
                    <Link href = "/" className={pathname === "/" ? "active":""}><li>Home</li></Link>
                    <Link href="/all-products" className={pathname === "/all-products" ? "active":""}><li>All Products</li></Link>
                    <Link href="/add-product" className={pathname === "/add-product" ? "active":""}><li>Add Product</li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !username ? <LoginButton /> : <div className="avatar avatar-placeholder">
                        <div className="btn bg-gray-200 rounded-full w-9">
                            <span>{username[0]}</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar;