'use client'

import { authClient } from "@/lib/auth-client";

const addpet = () => {
    
    const {data:session} = authClient.useSession()
      const user = session?.user
    //   console.log(user?.email)
     
    const handalAddPet = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // 'use server'
        const petData = Object.fromEntries(formData.entries())
        console.log(petData)
        
        const res = await fetch('http://localhost:5000/pets', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(petData)
        })
        const data = await res.json()
        // console.log(data)

        // const petData = Object.fromEntries(formData.entries())
        // console.log(petData)
    }

    return (
        <div className='p-5'>
            <form onSubmit={handalAddPet} className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl space-y-6">

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

                        <select
                            name="species"
                            className="w-full border rounded-lg p-3"
                        >
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Bird</option>
                            <option>Rabbit</option>
                        </select>
                    </div>

                    {/* Breed */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Breed
                        </label>

                        <input
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

                        <select
                            name="gender"
                            className="w-full border rounded-lg p-3"
                        >
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Image URL
                        </label>

                        <input
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

                        <select
                            name="vaccinationStatus"
                            className="w-full border rounded-lg p-3"
                        >
                            <option>Vaccinated</option>
                            <option>Not Vaccinated</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Location
                        </label>

                        <input
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
                            value={'Available'}
                            readOnly
                            placeholder="Abailable"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Owner Email */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 font-medium">
                            Owner Email
                        </label>

                        <input
                            value={user?.email}
                            readOnly
                            type="email"
                            name="ownerEmail"
                            placeholder="Enter owner email"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 font-medium">
                            Description
                        </label>

                        <textarea
                            rows="5"
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
                    Add Pet
                </button>

            </form>
        </div>
    );
};

export default addpet;