import MerchCard from "./MerchCard";
import shirt from './assets/shirt.png'
import hoodie from './assets/hoodie.png'
import pants from './assets/pants.png'

function Merch() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <MerchCard productName={"Delta Drivers T-shirt"} numReviews={"3"} price={"$35.00"} image={shirt}/>
            <MerchCard productName={"Delta Drivers Hoodie"} numReviews={"10"} price={"$60.00"} image={hoodie}/>
            <MerchCard productName={"Delta Drivers Sweatpants"} numReviews={"6"} price={"$40.00"} image={pants}/>
        </section>
    )
}

export default Merch;