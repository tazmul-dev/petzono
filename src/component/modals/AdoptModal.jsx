'use client'

import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
const AdoptModal = ({petData, session}) => {
    const handelAopt = async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const adoptData = Object.fromEntries(formData.entries())
        console.log(adoptData)

        const res = await fetch('http://localhost:5000/adoptRequest',{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
             body: JSON.stringify(adoptData)

        })
        const data = await res.json()


    }
    return (
        <Modal>
            <Button className={'w-full text-xl'} variant="black">Adopt now</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            
                            <Modal.Heading>Adopt now</Modal.Heading>
                          
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handelAopt} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="petName" type="text" variant="secondary">
                                        <Label>Pet Name</Label>
                                        <Input value={petData?.petName} readOnly  placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="UserEmail" variant="secondary">
                                        <Label>User Email</Label>
                                        <Input value={session?.user?.email} placeholder="Enter your email" />
                                    </TextField>
                                    <TextField className="w-full" name="UserName" type="text" variant="secondary">
                                        <Label>User Name</Label>
                                        <Input value={session?.user?.name} readOnly placeholder="Enter your phone number" />
                                    </TextField>
                                    <TextField className="w-full"  name="pikupDate" variant="secondary">
                                        <Label>pikup date</Label>
                                        <Input type="date" placeholder="Enter your company name" />
                                    </TextField>
                                    <TextField className="w-full" name="message" variant="secondary">
                                        <Label>Message</Label>
                                        <Input placeholder="Enter your message" />
                                    </TextField>
                                    <TextField className="w-full hidden " type="id" name="PetId" variant="secondary">
                                        <Label>Message</Label>
                                        <Input value={petData?._id} placeholder="Enter your message" />
                                    </TextField>

                                    <TextField className="w-full hidden " type="text" name="status" variant="secondary">
                                        <Label>Message</Label>
                                        <Input value='Pending' placeholder="Enter your message" />
                                    </TextField>

                                    <Button type="submit" slot="close">Adopt</Button>
                                </form>
                            </Surface>
                        </Modal.Body>
                       
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AdoptModal;