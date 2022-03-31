import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import DashboardCard from "./DashboardCard";
import person1 from "./assets/person1.png"
import person3 from "./assets/person3.png"

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [userType, setUserType] = useState("Rider")
    const [currentRiders, setCurrentRiders] = useState([
        {name:"Lavonne Davis", desc:"Need two 2% milks, one carton of organic eggs, and one bag of mixed fruit from Walmart", time:"1:00 PM - 4/2/22"},
        {name:"Roger Armijo", desc:"I ordered food from Olive Garden under the name Armijo, please pick it up ASAP", time:"3:00 PM - 4/2/22"},
        {name:"Alice Krueger", desc:"Need medicine from Walgreens: 2 bottles of tylenol and one bottle of aspirin", time:"9:00 AM - 4/3/22"}
    ])
    const [currentDrivers, setCurrentDrivers] = useState([
        {name:"Samuel Wiese", desc:"20+ years of experience driving for taxis in New York City and Los Angeles", image:person1, time:"5:00 PM - 4/2/22"}, 
        {name:"Melissa Horn", desc:"I have 8 seats and plenty of trunk space, so I can take families to airports for vacations, or I can just simply pick up food and clothes for you", image:person3, time:"7:30 AM - 4/3/22"}
    ])

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
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-16 mx-auto">
                <div class="flex flex-col text-center items-center justify-center mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Dashboard</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Current Status: {userType}</p>
                    <button onClick={() => setUserType(userType == "Rider" ? "Driver" : "Rider")} className="my-2 py-2 px-3 border-2 border-red-500 text-red-500 font-bold rounded-xl">Switch View</button>
                </div>
                <div class="flex flex-wrap -m-4">
                    {userType == "Rider"
                        ? currentDrivers.map((elem) => <DashboardCard name={elem.name} desc={elem.desc} image={elem.image} time={elem.time} />)
                        : currentRiders.map((elem) => <DashboardCard name={elem.name} desc={elem.desc} time={elem.time} />)
                    }
                </div>
            </div>
        </section>
    );
}
export default Dashboard;