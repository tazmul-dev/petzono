import UpdetePetsFrom from "@/component/cards/UpdetePetsFrom";
import { a } from "framer-motion/client";




const updetePage = async({params}) => {
   const {updetePet} = await params
   console.log(updetePet)
   const res = await fetch(`${process.env.PUBLIC_NEXT_SERVER_URI}/myListingUpdete/${updetePet}`)
   const pet = await res.json()
   console.log(pet)
    return (
        <div>
            <UpdetePetsFrom pet={pet}></UpdetePetsFrom>
        </div>
    );
};

export default updetePage;
