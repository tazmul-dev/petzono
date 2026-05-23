import AllPetCard from '@/component/cards/AllPetCard';


const allpetsPage = async() => {
    const res = await fetch('http://localhost:5000/pets')
    const pets = await res.json()
    console.log(pets)
  
    return (
        <div>
           
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto py-5'>
                 {pets.map(pet => <AllPetCard key={pet?._id} pet = {pet}></AllPetCard>)}
            </div>
           

        </div>
    );
};

export default allpetsPage;