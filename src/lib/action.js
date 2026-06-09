
import { revalidatePath } from "next/cache"


export const addPet = async (formData)=>{
'use server'
const petData = Object.fromEntries(formData.entries())
console.log(petData)

const res = await fetch('https://petzeno-server.vercel.app/pets',{
    method: "POST",
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify(petData)
})
const data = await res.json()

return data
}

//  export const updetePet = async()=>{

//   const res = await fetch(`https://petzeno-server.vercel.app/petsUpdete/${id}`,{
//             method: 'PATCH',
//             headers:{
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(petData)
//         })
//         const data = await res.json()
//         return data
//  }

export const deletpet = async(petId)=>{
    'use server'
 const res = await fetch(`https://petzeno-server.vercel.app/pets/${petId}`,{
    method: 'DELETE'
   })
   const data = await res.json()
   console.log(data)
   if(data?.deletedCount>0){
    revalidatePath('/deshboard/myListing')

    return data
   }
}


export const showRequetAdopt = async(id)=>{
 'use server'
   const res = await fetch(`https://petzeno-server.vercel.app/showRequest/${id}`)
   const data = await res.json()
   return data
 }

export const deletMyRequest = async(id)=>{
    'use server'
  const res = await fetch(`https://petzeno-server.vercel.app/myRequest/${id}`,{
    method: 'DELETE'
  })
  const data = await res.json()
  if(data?.deletedCount>0){
    revalidatePath('/deshboard/myRequests')

    return data
   }
 
}