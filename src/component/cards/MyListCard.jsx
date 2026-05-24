'use client'



import Image from "next/image";
import Link from "next/link";
import { BiMessageSquareEdit, BiPencil } from "react-icons/bi";
import { BsEye, BsTrash2 } from "react-icons/bs";


const MyListCard = ({pet, deleteAction}) => {
  const handalDelet = async(petId)=>{
   await deleteAction(petId)
  
  }
    return (
        <div className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-md transition hover:-translate-y-2 hover:shadow-2xl">

            {/* Pet Image */}
            <div className="relative">
                <Image
                width={300}
                height={300}

                    src={pet?.image}
                    alt="Pet"
                    className="h-72 w-full object-cover"
                />

                <div className="absolute right-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    {pet?.status}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6">

                {/* Name + Price */}
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {pet?.petName}
                    </h2>

                    <p className="text-lg font-semibold text-orange-500">
                        ${pet?.adoptionFee}
                    </p>
                </div>

                {/* Small Info */}
                <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-500">
                       {pet?.species}
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                      {pet?.gender}
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                        {pet?.age} Years
                    </span>
                </div>

                {/* Buttons */}
                <div className="mt-8 grid grid-cols-2 gap-4">

                    {/* Requests */}
                    <button className="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600">
                        <BiMessageSquareEdit className="h-5 w-5" />
                        Requests
                    </button>

                    {/* View */}
                    <Link href={`/allPets/${pet?._id}`} className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
                        <BsEye className="h-5 w-5" />
                        View
                    </Link>

                    {/* Edit */}
                    <button className="flex items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-100">
                        <BiPencil className="h-5 w-5" />
                        Edit
                    </button>

                    {/* Delete */}
                    <button onClick={()=>handalDelet(pet?._id)} className="flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 font-semibold text-red-600 transition hover:bg-red-100">
                        <BsTrash2 className="h-5 w-5" />
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyListCard;