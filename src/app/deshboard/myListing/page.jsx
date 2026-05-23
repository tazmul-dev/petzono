import MyListCard from "@/component/cards/MyListCard";
import { auth } from "@/lib/auth";
import { email } from "better-auth";
import { headers } from "next/headers";



const myListingPage = async() => {
   
const session= await auth.api.getSession({
    headers: await headers()
})
//  
  const email = session?.user?.email
  console.log(email)

      const res = await fetch(`http://localhost:5000/myListing/${session?.user?.email}`)
    const pets = await res.json()
    console.log(pets)
    // const myPets = pets.filter(pet => pet.ownerEmail === email)
    // console.log(myPets)
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {pets?.map(pet=> <MyListCard pet = {pet} key={pet?._id}></MyListCard>)}
            </div>
        </div>
    );
};

export default myListingPage;