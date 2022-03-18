import DriverCard from "./DriverCard"

function DriversPage() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <DriverCard/>
                    <DriverCard/>
                    <DriverCard/>
                </div>
            </div>
        </section>
    )
}

export default DriversPage;