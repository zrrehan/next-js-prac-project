"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

function LoginButton() {
    

    return (
        <div>
            <Link href = "/login">
                <button className="btn btn-neutral">
                    Login
                </button>
            </Link>
        </div>
    );
}

export default LoginButton;
