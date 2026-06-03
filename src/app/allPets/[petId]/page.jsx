import DetailCard from "@/component/cards/DetailCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const petDetailsPage = async({params}) => {
    const {petId} = await params
    // console.log(petId)
    const {token}= await auth.api.getToken({
        headers: await headers()
    })
    console.log(token)
    const res = await fetch(`http://localhost:5000/pets/${petId}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    })
    const petData = await res.json()
    console.log(petData)
    return (
        <div>
            <DetailCard petData = {petData}></DetailCard>
        </div>
    );
};

export default petDetailsPage;
