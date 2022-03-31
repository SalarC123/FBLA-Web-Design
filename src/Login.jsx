import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import loginPic from "./assets/login.svg"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 md:py-24 mx-auto flex flex-row-reverse flex-wrap items-center">
                <div class="hidden md:block lg:w-3/5 md:w-1/2 md:pl-16 lg:pl-0 pl-0">
                    <img src={loginPic} alt="" />
                </div>
                <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 lg:mr-10">
                    <h2 class="text-white text-lg font-medium title-font mb-5">Sign In</h2>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div class="relative mb-4">
                        <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <button
                        class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                        onClick={() => logInWithEmailAndPassword(email, password)}
                    >
                        Login
                    </button>
                    <button
                        class="mt-3 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                        onClick={signInWithGoogle}
                    >
                        Login with Google
                    </button>
                    <div className="text-xs mt-3">
                        <Link to="/reset" className="underline text-red-300">Forgot Password</Link>?
                    </div>
                    <div className="text-xs mt-3">
                        Don't have an account? <Link to="/register" className="underline text-red-300">Register</Link> now.
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Login;