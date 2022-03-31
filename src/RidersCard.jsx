import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "./firebase";

function RidersCard({name, description}) {
    console.log(name.split(" "))
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div class="p-4 lg:w-1/3">
            <div class="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-8 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">RIDER</h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">{name}</h1>
                <p class="leading-relaxed">{description}</p>
                {user ? <button className="bg-gray-800 border-2 border-red-500 rounded-lg px-4 py-1 mt-4 font-bold text-red-500 hover:bg-gray-700">Help {name.split(" ")[0]}</button>: <></>}
            </div>
        </div>
    )
}

export default RidersCard;