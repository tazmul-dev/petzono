'use client'
import Link from 'next/link';
import { BsEye, BsEyeFill, BsXCircle } from 'react-icons/bs';

const MyRequestCard = ({ data, deletMyRequest }) => {
  
  const handalDeleteMyRequest = async(id)=>{
    await deletMyRequest(id)
  }

  return (
    <div className='mb-4'>
      <div className="w-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Left Side */}
          <div className="grid gap-4 sm:grid-cols-3">

            <div>
              <p className="text-sm text-gray-500">Pet Name</p>
              <h3 className="text-lg font-bold text-gray-900">
                {data?.petName}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">Pickup Date</p>
              <h3 className="font-semibold text-gray-800">
                {data?.pikupDate}
              </h3>
            </div>
          </div>

          {/* Status */}
          <div>
            <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              {data?.status}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link href={`/allPets/${data?.PetId}`} className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600">
              <BsEyeFill size={18} />
              View
            </Link>

            <button onClick={()=>handalDeleteMyRequest(data?._id)} className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-medium text-white transition hover:bg-red-600">
              <BsXCircle size={18} />
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequestCard;