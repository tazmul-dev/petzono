 'use client'
 import Link from 'next/link';
import React from 'react';
import { FaArrowsLeftRight } from 'react-icons/fa6';

const UpdetePetsFrom = ({pet}) => {
    const handalePetUpdete = (e)=>{
        e.preventDefault()
         const formData = new FormData(e.currentTarget);
        // 'use server'
        const petData = Object.fromEntries(formData.entries())
        console.log(petData)
    }
    return (
         <div className='p-5'>
            <Link className='btn' href={'/deshboard/myListing'}> <FaArrowsLeftRight /> Go back</Link>

             <form onSubmit={handalePetUpdete} className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl space-y-6">

                <h2 className="text-3xl font-bold text-center">
                    Add Pet
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Pet Name */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Pet Name
                        </label>
                        <input
                            // value = "pet name"
                            defaultValue={pet?.petName}
                            type="text"
                            name="petName"
                            placeholder="Enter pet name"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Species */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Species
                        </label>
                            <input
                            // value = "pet name"
                            defaultValue={pet?.species}
                            type="text"
                            name="species"
                            placeholder="Enter pet name"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Breed */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Breed
                        </label>

                        <input
                            defaultValue={pet?.breed}
                            type="text"
                            name="breed"
                            placeholder="Enter breed"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Age
                        </label>

                        <input
                        defaultValue={pet?.age}
                            type="number"
                            name="age"
                            placeholder="Enter age"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Gender
                        </label>

                       <input
                        defaultValue={pet?.gender}
                            type="text"
                            name="gender"
                            placeholder="Enter age"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Image URL
                        </label>

                        <input
                        defaultValue={pet?.image}
                            type="text"
                            name="image"
                            placeholder="Enter image url"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Health Status */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Health Status
                        </label>

                        <input
                        defaultValue={pet?.healthStatus}
                            type="text"
                            name="healthStatus"
                            placeholder="Healthy / Injured"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Vaccination Status */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Vaccination Status
                        </label>
                            <input
                     defaultValue={pet?.vaccinationStatus}
                            type="text"
                              name="vaccinationStatus"
                            placeholder="Healthy / Injured"
                            className="w-full border rounded-lg p-3"
                        />
                   
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Location
                        </label>

                        <input
                        defaultValue={pet?.location}
                            type="text"
                            name="location"
                            placeholder="Enter location"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Adoption Fee */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Adoption Fee
                        </label>

                        <input
                        defaultValue={pet?.adoptionFee}
                            type="number"
                            name="adoptionFee"
                            placeholder="Enter fee"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>
                    <div className="hidden">
                        <label className="block mb-2 font-medium">
                            Status
                        </label>

                        <input
                            type="text"
                            name="status"
                            value={pet?.status}
                            readOnly
                            placeholder="Abailable"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Owner Email */}
                   

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 font-medium">
                            Description
                        </label>

                        <textarea
                            rows="5"
                            defaultValue={pet?.description}
                            name="description"
                            placeholder="Write description..."
                            className="w-full border rounded-lg p-3"
                        ></textarea>
                    </div>

                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold"
                >
                    Updete Pet
                </button>

            </form>
        </div>
    );
};

export default UpdetePetsFrom;