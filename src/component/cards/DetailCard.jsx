import Image from "next/image";
import AdoptModal from "../modals/AdoptModal";



const DetailCard = ({ petData }) => {
    return (
        <div className="max-w-5xl mx-auto p-6">

  <div className="bg-white shadow-xl rounded-3xl overflow-hidden">

    {/* Pet Image */}
    <div>
      <Image
      width={300}
      height={300}

        src={petData?.image}
        alt="Pet"
        className="w-full h-100 object-cover "
      />
    </div>

    {/* Pet Details */}
    <div className="p-8">

      {/* Title */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">
          {petData?.petName}
        </h2>

        <p className="text-gray-500 text-lg">
          Friendly Golden Retriever looking for a loving home
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">Species</p>
          <h3 className="font-semibold text-lg">{petData?.species}</h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">Breed</p>
          <h3 className="font-semibold text-lg">
            {petData?.breed}
          </h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">Age</p>
          <h3 className="font-semibold text-lg">{petData?.age}</h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">Gender</p>
          <h3 className="font-semibold text-lg">{petData?.gender}</h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">Health Status</p>
          <h3 className="font-semibold text-lg">{petData?.healthStatus}</h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">Vaccination</p>
          <h3 className="font-semibold text-lg">
            {petData?.vaccinationStatus}
          </h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">Location</p>
          <h3 className="font-semibold text-lg">
          {petData?.location}
          </h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">Adoption Fee</p>
          <h3 className="font-semibold text-lg">${petData?.adoptionFee}</h3>
        </div>

      </div>

      {/* Owner */}
      <div className="mb-8 bg-black text-white p-5 rounded-2xl">
        <p className="text-gray-300 mb-1">
          Owner Email
        </p>

        <h3 className="text-lg font-semibold">
         {petData?.ownerEmail}
        </h3>
      </div>

      {/* Description */}
      <div className="mb-8">

        <h3 className="text-2xl font-bold mb-4">
          Description
        </h3>

        <p className="text-gray-600 leading-8">
         {petData?.description}
        </p>

      </div>

      {/* Button */}
      <button className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 duration-300">
        <AdoptModal></AdoptModal>
      </button>
      

    </div>
  </div>

</div>
    );
};

export default DetailCard;