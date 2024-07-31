import { Button, Flowbite, TextInput, Textarea } from "flowbite-react";
import { IoMail, IoCall } from "react-icons/io5";

export default function Contact() {
    return (
        <div id="contact">
            <h1 className="text-center text-3xl">Mes Contactes </h1>
            <div>
                <div className="flex justify-around *:flex *:items-center py-12">
                    <div>
                        <IoMail size={22} />
                        <span>Email: Fjaonasitera@gmail.com</span>
                    </div>
                    <div>
                        <IoCall size={22} />
                        <span>Tel: +261 32 35 786 19</span>
                    </div>
                </div>
                <Button className="mx-auto">m'envoyer un email</Button>
            </div>
        </div>
    )
}
