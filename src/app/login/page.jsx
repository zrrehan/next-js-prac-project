"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Login() {
    const router = useRouter();
    async function handleLogin(event) {
        event.preventDefault();
        const [name, password] = [event.target.name.value, event.target.password.value];
        console.log(name, password);

        const res = await signIn("credentials", {
            username: name,   // replace with form input later
            password: password,
            redirect: false,     // 👈 important
        });

        console.log("SignIn result:", res);
        if (res?.ok) {
            localStorage.setItem("username", name); // ✅ save username
        } else {
            localStorage.setItem("username", "?");
        }
        router.push("/");
    }

    return (
        <form onSubmit={handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Login</legend>

            <label className="label">username</label>
            <input type="text" className="input" placeholder="usrename: " name = "name"/>

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name = "password"/>

            <button className="btn btn-neutral mt-4">Login</button>
            <div className="border border-red-400 p-4 rounded-4xl text-red-600 bg-red-100">use any username and password you want! not validating. just passing every username and password via nextJS auth credential</div>
        </form>
    )
}

export default Login;