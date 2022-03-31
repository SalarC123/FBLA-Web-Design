import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "./firebase";

function DriverCard({name, description, taken, image, distance}) {
	const [user, loading, error] = useAuthState(auth);

	return (
		<div class="p-4 md:w-1/3">
			<div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
				<img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="person" />
				<div class="p-6">
					<h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">DRIVER</h2>
					<h1 class="title-font text-lg font-medium text-white mb-3">{name}</h1>
					<p class="leading-relaxed mb-3">{description}</p>
					<div class="flex items-center flex-wrap">
						{user 
						? <a class="text-gray-200 inline-flex items-center md:mb-2 lg:mb-0">
							{distance}
						</a>
						: <></>}
						<span className={`${taken ? "text-red-700": "text-green-500"} mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-800`}>
							{taken ? "UNAVAILABLE": "AVAILABLE"}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DriverCard;