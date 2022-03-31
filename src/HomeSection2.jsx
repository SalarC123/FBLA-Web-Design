import { Link } from "react-router-dom";

function HomeSection2() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Make <div className="inline-block text-green-500">Money</div> Just For Driving</h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Pick up resources for people or drive them around and make money based on the quality of your service!</p>
                </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium text-white">Get Paid Per Trip</span>
                    </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium text-white">Receive Tips For Good Service</span>
                    </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium text-white">Get Rated By Riders</span>
                    </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium text-white">Provided Health Insurance</span>
                    </div>
                </div>
            </div>
            <button class="flex mx-auto mt-16 text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"><Link to="/riders">Find Riders</Link></button>
            </div>
        </section>
    )
}

export default HomeSection2;