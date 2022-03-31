function DashboardCard({name,desc,image,time}) {
    return (
        <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
                {image!=undefined ? <img alt="Rider" class="absolute inset-0 w-full h-full object-cover object-center" src={image} /> : <></>}
                <div class={`px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-100 ${image!=undefined?"hover:opacity-0":""}`}>
                    <h2 class="tracking-widest text-sm title-font font-medium text-red-400 mb-1">Scheduled: {time}</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">{name}</h1>
                    <p class="leading-relaxed">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard;