import { useState } from "react";
import RidersCard from "./RidersCard";
import RidersModal from "./RidersModal";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function RidersPage() {
    const [user, loading, error] = useAuthState(auth);
    const [isVisible, setIsVisible] = useState(false)
    const [ridersList, setRidersList] = useState([
        {name: "Lavonne Davis", desc: "Need two 2% milks, one carton of organic eggs, and one bag of mixed fruit from Walmart"},
        {name: "Alice Krueger", desc: "Need medicine from Walgreens: 2 bottles of tylenol and one bottle of aspirin"},
        {name: "Roger Armijo", desc: "I ordered food from Olive Garden under the name Armijo, please pick it up ASAP"},
        {name: "James Nieves", desc: "I am having a party soon, so I need someone to pick up my friend from the Gucci store on 5th street"},
        {name: "Joan Fava", desc: "I need someone to get party supplies for me from Party City or Walmart"},
        {name: "Shirley Mendoza", desc: "Need cough syrup prescription and cough drops from Walgreens as soon as possible"},
    ])

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-20 mx-auto text-center">
                <h1 class="text-5xl font-medium title-font mb-4 text-center text-white">Riders</h1>
                {user ? <button onClick={() => setIsVisible(!isVisible)} className="mb-12 border-2 font-bold py-2 px-3 rounded-xl border-gray-400">Request a Ride</button>:<></>}
                <div class="flex flex-wrap justify-center -m-4">
                    {ridersList.map((elem) => <RidersCard name={elem.name} description={elem.desc}/>)}
                </div>
            </div>
            <RidersModal isVisible={isVisible} setIsVisible={setIsVisible} ridersList={ridersList} setRidersList={setRidersList}/>
        </section>
    )
}

export default RidersPage;