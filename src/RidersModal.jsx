import { useState } from "react"

function RidersModal({ isVisible, setIsVisible, ridersList, setRidersList }) {
    const [nameInput, setNameInput] = useState("")
    const [descInput, setDescInput] = useState("")

    return (
        <div className={`${isVisible ? "block" : "hidden"} fixed bg-gray-900 border-2 border-white rounded-lg inset-0 mx-12 md:mx-52 my-36`}>
            <svg onClick={() => setIsVisible(false)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer right-0 m-2 absolute" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <form className="text-white font-bold flex flex-col m-8 justify-center items-center" onSubmit={(e) => {
                e.preventDefault()
                setRidersList([...ridersList, {name: nameInput, desc: descInput}])
                setIsVisible(false)
            }}>
                <label className="mb-2 mt-2" htmlFor="name">Name</label>
                <input onChange={(e) => setNameInput(e.target.value)} value={nameInput} className="text-black px-2 py-1 w-full max-w-md" type="text" id="name"/>
                <label className="mb-2 mt-2" htmlFor="desc">Describe what you need</label>
                <input onChange={(e) => setDescInput(e.target.value)} value={descInput} className="text-black px-2 py-1  w-full max-w-md" type="text" id="desc"/>
                <input className="px-4 py-1 rounded-lg border-2 font-bold absolute bottom-5" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default RidersModal;