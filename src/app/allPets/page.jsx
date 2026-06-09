'use client'
import AllPetCard from '@/component/cards/AllPetCard';
import { SearchField } from '@heroui/react';
import { useEffect, useState } from 'react';


const AllpetsPage = () => {
    // const res = await fetch('https://petzeno-server.vercel.app/pets')
    // const pets = await res.json()
    // console.log(pets)
    const [pets, setPets] = useState([])
    const [search, setSearch] = useState('')
    const [species, setSpecies] = useState('')
    const [dataSpecies, setDataSpecies] = useState([])
    // console.log(process.env.BETTER_AUTH_URL)

   
    useEffect(() => {
        fetch(`https://petzeno-server.vercel.app/pets?search=${search}&species=${species}`)
            .then(res => res.json())
            .then((data) => setPets(data));

            fetch('https://petzeno-server.vercel.app/pets').then(res=>res.json())
            .then((data) =>setDataSpecies(data))
            




    }, [search, species])
    // console.log(dataSpecies)
    const speciesList = [...new Set(dataSpecies.map(pet => pet.species))];
    // console.log(species)
    return (



        <div>

            <header>
                <div className="mb-10 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">

                    {/* Title */}
                    <div className="mb-6">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            All Pets
                        </h1>

                        <p className="mt-2 text-gray-600">
                            Browse, search, and find your perfect furry friend.
                        </p>
                    </div>

                    {/* Search & Filter */}
                    <div className="flex flex-col gap-4 lg:flex-row">

                        {/* Search Field */}
                        <fieldset className="relative flex-1">
                            

                            <input
                                onChange={(e)=> setSearch(e.target.value)}
                                type="text"
                                placeholder="Search by pet name..."
                                className="w-full rounded-2xl border border-gray-200 py-4 pl-12 pr-4 outline-none transition focus:border-orange-400"
                            />
                        </fieldset>

                        {/* Species Filter */}
                        <fieldset className="lg:w-64">
                            <select
                             onChange={(e)=>setSpecies(e.target.value)}
                             className="w-full rounded-2xl border border-gray-200 px-4 py-4 outline-none transition focus:border-orange-400">
                                <option value="">All Species</option>
                                { speciesList.map((species)=>(
                                    <option key={species} value={species}>{species}</option>
                                ))}
                                
                               
                            </select>
                        </fieldset>
                    </div>
                </div>
            </header>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto py-5'>
                {pets.map(pet => <AllPetCard key={pet?._id} pet={pet}></AllPetCard>)}
            </div>


        </div>
    );
};

export default AllpetsPage;