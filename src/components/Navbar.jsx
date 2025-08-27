"use client";
import { useEffect, useState } from "react";
import LoginButton from "./Navbar/LoginButton";
import { usePathname } from "next/navigation";

function Navbar() {
    const [username, setUsername] = useState("");
    const pathname = usePathname();

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
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li>
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