import { POST } from "@/app/api/auth/[...all]/route"
import { Joan } from "next/font/google"

export const addPet = async (formData)=>{
'use server'
const petData = Object.fromEntries(formData.entries())
console.log(petData)

const res = await fetch('http://localhost:5000/pets',{
    method: "POST",
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify(petData)
})
const data = await res.json()

return data
}

