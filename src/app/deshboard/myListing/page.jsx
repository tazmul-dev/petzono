import MyListCard from "@/component/cards/MyListCard";
import { deletpet, showRequetAdopt } from "@/lib/action";
import { auth } from "@/lib/auth";
import { email } from "better-auth";
import { headers } from "next/headers";
import { BsCheckCircle } from "react-icons/bs";
import { PiPawPrint } from "react-icons/pi";
import { TbHeartHandshake } from "react-icons/tb";



const myListingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    //  
    const email = session?.user?.email
    // console.log(email)

    const res = await fetch(`${process.env.PUBLIC_NEXT_SERVER_URI}/myListing/${session?.user?.email}`)
    const pets = await res.json()
    // console.log(pets)
    const availbale = pets.filter(pet => pet.status === 'Available')
    const adopted = pets.filter(pet => pet.status ==='Addopted')
     
  
    return (
        <div className="constaner mx-auto">
            <section className="mb-10">

                {/* Title */}
                <div className="mb-8 text-center mt-3">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        My Listings
                    </h1>

                    <p className="mt-2 text-lg text-gray-600">
                        Manage your listed pets, adoption requests, and pet status.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {/* Total Listings */}
                    <div className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium text-gray-500">
                                    Total Listings
                                </p>

                                <h2 className="mt-3 text-5xl font-extrabold text-gray-900">
                                  {pets?.length}
                                </h2>
                            </div>

                            <div className="rounded-2xl bg-orange-100 p-4 text-orange-500">
                                <PiPawPrint className="h-10 w-10" />
                            </div>
                        </div>
                    </div>

                    {/* Available */}
                    <div className="rounded-[2rem] border border-green-100 bg-white p-8 shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium text-gray-500">
                                    Available
                                </p>

                                <h2 className="mt-3 text-5xl font-extrabold text-green-600">
                                    {availbale?.length}
                                </h2>
                            </div>

                            <div className="rounded-2xl bg-green-100 p-4 text-green-600">
                                <BsCheckCircle className="h-10 w-10" />
                            </div>
                        </div>
                    </div>

                    {/* Adopted */}
                    <div className="rounded-[2rem] border border-pink-100 bg-white p-8 shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-medium text-gray-500">
                                    Adopted
                                </p>

                                <h2 className="mt-3 text-5xl font-extrabold text-pink-600">
                                    {adopted?.length}
                                </h2>
                            </div>

                            <div className="rounded-2xl bg-pink-100 p-4 text-pink-600">
                                <TbHeartHandshake className="h-10 w-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
                {pets?.map(pet => <MyListCard deleteAction={deletpet} pet={pet} key={pet?._id}></MyListCard>)}
            </div>
        </div>
    );
};

export default myListingPage;