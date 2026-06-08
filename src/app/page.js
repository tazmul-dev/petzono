import FuturedCard from "@/component/cards/FuteredCard";
import AdoptionPartners from "@/component/homepage/AdoptionPartners";
import AdoptionProcess from "@/component/homepage/AdoptionProcess";
import HeroSection from "@/component/homepage/HeroSection";
import PetCareTips from "@/component/homepage/PetCareTips";
import SuccessStories from "@/component/homepage/SuccessStories";
import WhyAdoptPets from "@/component/homepage/WhyAdoptPets";


export default async function Home() {
  const res = await fetch('http://localhost:5000/futured')
  const pets = await res.json()
  console.log(pets)
  return (
    <div>
    <HeroSection></HeroSection>
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Fututed section</h1>
    <div className="grid grid-cols-3 gap-4 container mx-auto">
      {pets.map(pet =><FuturedCard key={pet?._id} pet={pet}></FuturedCard> )}
     </div>
    </div>
     

    <WhyAdoptPets></WhyAdoptPets>
    <SuccessStories></SuccessStories>
    <PetCareTips></PetCareTips>
    <AdoptionPartners></AdoptionPartners>
    <AdoptionProcess></AdoptionProcess>
    </div>
  );
}
