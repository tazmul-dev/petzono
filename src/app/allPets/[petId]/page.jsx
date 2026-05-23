import DetailCard from "@/component/cards/DetailCard";


const petDetailsPage = async({params}) => {
    const {petId} = await params
    console.log(petId)
    const res = await fetch(`http://localhost:5000/pets/${petId}`)
    const petData = await res.json()
    console.log(petData)
    return (
        <div>
            <DetailCard petData = {petData}></DetailCard>
        </div>
    );
};

export default petDetailsPage;
