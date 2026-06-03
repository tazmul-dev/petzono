'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';

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
        console.log(data, error)


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

                        <button className='btn'>Google</button>
                    </Card>


                </div>
    );
};

export default loginPage;