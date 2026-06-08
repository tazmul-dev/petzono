'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';


const RegisterPage = () => {
    const [showerror, setError] = useState()
    
    const handelRegisterForm = async(e)=>{
     e.preventDefault()
     const formData = new FormData(e.currentTarget)
     const userData = Object.fromEntries(formData.entries())
     const {name, password, confirmPassword, email,image} = userData
    //  console.log(userData)
    //  console.log(confirmPassword)

     if(password < 7 ){
        return setError('Password must be at least 6 characters')
     }
      if (!/[A-Z]/.test(password)){
        return setError("Password must contain one uppercase letter")
      }
      if(!/[a-z]/.test(password)){
        return setError("Password must contain one lowercase letter")
      }
       if (password !== confirmPassword){
        return setError("Passwords do not match")
       }

       console.log('user rigistered')

       const {data, error} = await authClient.signUp.email({
        name: name,
        email:email, 
        password: confirmPassword,
        image: image,


       })

       console.log(data, error)

       if(data){
        redirect('/login')
       }
      if(error){
           toast.error("This email alrady registerd")
        }
        if(data){
            toast.success('success registar')
        }
      
    }

    
    return (
        <div>
            <Card className='border w-96 mx-auto my-30'>
                <Form className="flex w-full flex-col gap-4" onSubmit={handelRegisterForm}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"

                    >
                        <Label>Name</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"

                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                      
                        name="image"
                        type="url"

                    >
                        <Label>photo</Label>
                        <Input placeholder="send photo" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={6}
                        name="password"
                        type="password"

                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                       
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={6}
                        name="confirmPassword"
                        type="password"

                    >
                        <Label>Confirm Password</Label>
                        <Input placeholder="Enter your password" />
                       
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button className={'w-full'} type="submit">

                            Submit
                        </Button>

                    </div>
                </Form>
                <p>If your are alrady regitered user pless <Link className='font-bold' href={'/login'}>Login</Link> </p>
            </Card>

        </div>
    );
};

export default RegisterPage;