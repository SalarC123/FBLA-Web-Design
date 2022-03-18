import { Link } from "react-router-dom";

function Navbar() {
    return (
        // <div>
        //     <Link className="m-4" to="/">Home Page</Link>
        //     <Link className="m-4" to="/contact">Contact Us</Link>
        //     <Link className="m-4" to="/drivers">Drivers</Link>
        //     <Link className="m-4" to="/riders">Riders</Link>
        // </div>
        <header class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl xl:block lg:hidden">Tailblocks</span>
                </a>
                
                <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link className="m-2" to="/">Home Page</Link>
                    <Link className="m-2" to="/drivers">Drivers</Link>
                    <Link className="m-2" to="/riders">Riders</Link>
                    <Link className="m-2" to="/contact">Contact Us</Link>
                </nav>
                
                <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
        
    )
}

export default Navbar;