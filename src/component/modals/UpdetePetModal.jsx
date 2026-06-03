'use client'
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEnvelope } from "react-icons/bi";


const UpdetePetModal = () => {
   
    return (
      <Modal>
      <Button variant="secondary">Updet pet</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
           
             
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="email" type="text" variant="secondary">
                    <Label>Price</Label>
                    <Input placeholder="update price" />
                  </TextField>
                  <TextField className="w-full" name="age" type="number" variant="secondary">
                    <Label>Age</Label>
                    <Input placeholder="updete age" />
                  </TextField>
                  <TextField className="w-full" name="company" variant="secondary">
                    <Label>Company</Label>
                    <Input placeholder="Enter your company name" />
                  </TextField>
                  <TextField className="w-full" name="message" variant="secondary">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdetePetModal;