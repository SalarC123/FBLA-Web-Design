import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useState, useEffect } from "react";

function Navbar() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);

    return (
        // <header class="text-gray-400 bg-gray-900 body-font">
        //     <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        //         <Link to="/dashboard" class="flex order-first lg:order-none title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
        //             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 bg-red-500 rounded-full" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
        //                 <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        //                 <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        //             </svg>
        //             <span class="ml-3 text-xl xl:block">Delta Drivers</span>
        //         </Link>

        //         <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        //             <Link className="m-2 hover:text-red-300" to="/dashboard">Dashboard</Link>
        //             <Link className="m-2 hover:text-red-300" to="/drivers">Drivers</Link>
        //             <Link className="m-2 hover:text-red-300" to="/riders">Riders</Link>
        //             <Link className="m-2 hover:text-red-300" to="/merch">Merch</Link>
        //             <Link className="m-2 hover:text-red-300" to="/mission">Mission</Link>
        //             <Link className="m-2 hover:text-red-300" to="/contact">Contact Us</Link>
        //         </nav>


        //         {!user
        //             ? <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-5">
        //                 <button class="m-1 inline-flex items-center bg-red-500 text-gray-800 font-extrabold border-0 px-3 focus:outline-none hover:bg-red-400 rounded text-base md:mt-0">
        //                     <Link className="m-1" to="/">Login</Link>
        //                 </button>
        //                 <button class="m-1 inline-flex items-center border-red-500 bg-transparent text-red-500 font-extrabold border-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0">
        //                     <Link className="m-1" to="/register">Register</Link>
        //                 </button>
        //             </div>
        //             : <div onClick={logout} class="cursor-pointer lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        //                 {name + ", Logout"}
        //             </div>
        //         }
        //     </div>
        // </header>
        <header class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/dashboard" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 bg-red-500 rounded-full" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    <span class="ml-3 text-xl">Delta Drivers</span>
                </Link>

                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-red-300" to="/dashboard">Dashboard</Link>
                    <Link className="mr-5 hover:text-red-300" to="/drivers">Drivers</Link>
                    <Link className="mr-5 hover:text-red-300" to="/riders">Riders</Link>
                    <Link className="mr-5 hover:text-red-300" to="/merch">Merch</Link>
                    <Link className="mr-5 hover:text-red-300" to="/contact">Contact Us</Link>
                </nav>

                {!user
                    ? <div class="inline-flex ml-5 mt-4 lg:mt-0">
                        <button class="m-1 inline-flex items-center bg-red-500 text-gray-800 font-extrabold border-0 px-3 focus:outline-none hover:bg-red-400 rounded text-base md:mt-0">
                            <Link className="m-1" to="/">Login</Link>
                        </button>
                        <button class="m-1 inline-flex items-center border-red-500 bg-transparent text-red-500 font-extrabold border-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0">
                            <Link className="m-1" to="/register">Register</Link>
                        </button>
                    </div>
                    : <div onClick={logout} class="cursor-pointer nline-flexa ml-5">
                        {name + ", Logout"}
                    </div>
                }
            </div>
        </header>

    )
}

export default Navbar;