"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllPetCard = ({pet}) => {
    const {image, _id, petName, species,  location, breed , age } =pet
    return (
        <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                <div className="relative overflow-hidden">
                     <Image
                width={300}
                height={300}
                    src={image}
                    alt="Pet"
                    className="w-full h-64 object-cover"
                />
                <div  className="absolute left-5 top-5 rounded-full bg-white/90 p-3 shadow-md">
                    <p>available</p>
                </div>

                </div>
               

                <div className="p-5 space-y-3">

                    <h2 className="text-2xl font-bold">
                        {petName}
                    </h2>

                    <p>
                        <span className="font-semibold">Species:</span> {species}
                    </p>

                    <p>
                        <span className="font-semibold">Breed:</span> {breed}
                    </p>

                    <p>
                        <span className="font-semibold">Age:</span> {age}
                    </p>

                    <p>
                        <span className="font-semibold">Location:</span> {location}
                    </p>

                    
                      <Link className="w-full block text-center bg-black text-white py-3 rounded-lg font-semibold" href={`/allPets/${_id}`}>view details</Link>
                   

                </div>
            </div>

            
           
        </div>
    );
};

export default AllPetCard;