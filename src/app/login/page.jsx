'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const loginPage = () => {
    const handelLoginForm = async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())
       const {email, password} = userData
        const {data, error} = await authClient.signIn.email({
            email: email,
            password: password,
            callbackURL:'/'
        })
        // console.log(data, error)
        if(error){
           toast.error('Invalid email or passwor')
        }
        if(data){
            toast.success("Login success")
        }


    }

    const handalGoogleLogin = async()=>{
        const data = await authClient.signIn.social({
              provider: "google",
        })
    }


    return (
        <div>
                    <Card className='border w-96 mx-auto my-30'>
                        <Form onSubmit={handelLoginForm} className="flex w-full flex-col gap-4">
                           
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
                                isRequired
                                minLength={6}
                                name="password"
                                type="password"
        
                            >
                                <Label>Password</Label>
                                <Input placeholder="Enter your password" />
                               
                                <FieldError />
                            </TextField>
                            
        
                            <div className="flex gap-2">
                                <Button className={'w-full'} type="submit">
        
                                    Submit
                                </Button>
        
                            </div>
                        </Form>

                        <button onClick={handalGoogleLogin} className='btn'>Google</button>

                        <p>If you are not registered user pless: <Link className='font-bold'  href={'/register'}>Register</Link></p>
                    </Card>


                </div>
    );
};

export default loginPage;