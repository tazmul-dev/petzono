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
    const handalAdopt = async(id)=>{
    //   console.log("adopt")
      const res = await fetch(`http://localhost:5000/requestAddopt/${id}`,{
        method:'PATCH'
      })
      const data = await res.json()
    //   console.log(data.success)
    if (data.success) {
  const res = await fetch(
    `http://localhost:5000/showRequest/${petId}`
  );

  const updatedData = await res.json();
  const addoptData = updatedData.filter(data=> data.status ==="approved")
  setRequest(addoptData);
}
    }

    const handaleReject = async(id)=>{

    }

    return (
        <Modal>
            <Button variant="" className={'bg-black text-white'}>Request Adopt</Button>
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
                                    return <div key={data?._id} className="my-4 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-md">

                                {/* Title */}
                                <div className="mb-4 flex justify-between items-center">
                                   
                                    <h2 className="text-2xl font-extrabold text-gray-900">
                                       {data?.petName}
                                    </h2>
                                     <p className="">{data?.status}</p>

                                </div>

                                {/* User Info */}
                                <div className="space-y-2">

                                    {/* Requested User Name */}
                                     <p>user Name: {data?.UserName}</p>

                                    {/* Requested User Email */}
                                    <p><span>Email</span> {data?.email} </p>
                                    {/* Pickup Date */}
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Pickup Date
                                        </p>

                                        <h3 className="mt-1 text-lg font-semibold text-gray-900">
                                            {data?.pikupDate}
                                        </h3>
                                    </div>
                                </div>

                                {/* Buttons */}
                                {data.status === 'Pending'?  <div className="mt-8 grid grid-cols-2 gap-4">

                                    {/* Approve */}
                                    <button onClick={()=>handalAdopt(data?._id)} className="rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600">
                                        Approve
                                    </button>

                                    {/* Reject */}
                                    <button onClick={()=>handaleReject(data?._id)}  className="rounded-2xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600">
                                        Reject
                                    </button>
                                </div> : ""}
                               
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