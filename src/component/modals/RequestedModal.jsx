"use client"

import { Button, Modal } from "@heroui/react";
import { useEffect, useState } from "react";
const RequestedModal = ({petId}) => {
   const [requestData, setRequest] = useState([])
   useEffect(()=>{
     if (!petId) return;
    fetch(`http://localhost:5000/showRequest/${petId}`)
    .then((res)=>res.json())
    .then((data)=>setRequest(data))
   },[petId])
//    console.log(requestData)
    return (
        <Modal>
            <Button variant="" className={'bg-red-500'}>Request Adopt</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            {/* <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon> */}

                            <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                                {requestData.map(data =>{
                                    console.log(data)
                                    return <div key={data?._id} className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-md">

                                {/* Title */}
                                <div className="mb-6">
                                    <p className="text-end">{data?.status}</p>
                                    <h2 className="text-2xl font-extrabold text-gray-900">
                                       {data?.petName}
                                    </h2>

                                    <p className="mt-1 text-gray-500">
                                        Review and manage this adoption request.
                                    </p>
                                </div>

                                {/* User Info */}
                                <div className="space-y-4">

                                    {/* Requested User Name */}
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Requested User Name
                                        </p>

                                        <h3 className="mt-1 text-lg font-semibold text-gray-900">
                                            John Doe
                                        </h3>
                                    </div>

                                    {/* Requested User Email */}
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Requested User Email
                                        </p>

                                        <h3 className="mt-1 text-lg font-semibold text-gray-900">
                                            johndoe@gmail.com
                                        </h3>
                                    </div>

                                    {/* Pickup Date */}
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Pickup Date
                                        </p>

                                        <h3 className="mt-1 text-lg font-semibold text-gray-900">
                                            25 July 2026
                                        </h3>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="mt-8 grid grid-cols-2 gap-4">

                                    {/* Approve */}
                                    <button className="rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600">
                                        Approve
                                    </button>

                                    {/* Reject */}
                                    <button className="rounded-2xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600">
                                        Reject
                                    </button>
                                </div>
                            </div>
                                })}
                            
                        </Modal.Body>
                       
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default RequestedModal;