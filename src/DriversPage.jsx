import DriverCard from "./DriverCard"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "./firebase";
import person1 from "./assets/person1.png"
import person2 from "./assets/person2.png"
import person3 from "./assets/person3.png"
import person4 from "./assets/person4.png"
import person5 from "./assets/person5.png"
import person6 from "./assets/person6.png"
import person7 from "./assets/person7.png"

function DriversPage() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            {/* {user 
            ? <div className="flex flex-row items-center justify-center">
                <button className="px-5 py-2 bg-red-500 rounded-md font-bold text-white">Make yourself a rider!</button>
            </div>
            : <></>} */}

            <div class="container px-5 py-12 mx-auto">
                <h1 class="text-5xl font-medium title-font mb-12 text-center text-white">Drivers</h1>
                <div class="flex flex-wrap justify-center -m-4">
                    <DriverCard 
                        name={"Samuel Wiese"}
                        description={"20+ years of experience driving for taxis in New York City and Los Angeles"}
                        taken={false} 
                        image={person1}
                        distance={"8 minutes away"}
                    />
                    <DriverCard 
                        name={"Jennifer King"} 
                        description={"Can deliver groceries, pick up medicine, pick up guests, or just give you a tour around your city"} 
                        taken={true} 
                        image={person2}
                        distance={"20 minutes away"}
                    />
                    <DriverCard 
                        name={"Melissa Horn"} 
                        description={"I have 8 seats and plenty of trunk space, so I can take families to airports for vacations, or I can just simply pick up food and clothes for you"} 
                        taken={false} 
                        image={person3}
                        distance={"1 minute away"}
                    />
                    <DriverCard 
                        name={"Kenneth Stevens"} 
                        description={"I drive a Honda Civic and can fit 4 extra people"} 
                        taken={true} 
                        image={person4}
                        distance={"15 minutes away"}
                    />
                    <DriverCard 
                        name={"Lindsay Giles"} 
                        description={"I can transport people if needed, and I specialize in long drives because I have experience in the trucking industry"} 
                        taken={false} 
                        image={person5}
                        distance={"20 minutes away"}
                    />
                    <DriverCard 
                        name={"Joyce Clark"} 
                        description={"I can do whatever is needed and I should be available most of the day"} 
                        taken={false} 
                        image={person6}
                        distance={"34 minutes away"}
                    />
                    <DriverCard 
                        name={"Kellie Olson"} 
                        description={"I am new to this, so I will just pick up one passenger at a time right now"} 
                        taken={true} 
                        image={person7}
                        distance={"3 minutes away"}
                    />
                </div>
            </div>
        </section>
    )
}

export default DriversPage;