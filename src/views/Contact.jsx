import { Button, Flowbite, TextInput, Textarea } from "flowbite-react";
import { IoMail, IoCall, IoLogoGithub } from "react-icons/io5";

export default function Contact() {
    return (
        <div id="contact" className="py-8">
            <h1 className="text-center text-3xl">Mes Contactes </h1>
            <div>
                <div className="flex justify-around space-x-2 *:flex *:items-center *:*:mx-1 py-12">
                    <div>
                        <IoMail size={22} />
                        <span>Email: Fjaonasitera@gmail.com</span>
                    </div>
                    <div>
                        <IoCall size={22} />
                        <span>Tel: +261 32 35 786 19</span>
                    </div>
                    <div>
                        <IoLogoGithub size={22} />
                        <a href="https://github.com/NyFanasina">Github: https://github.com/NyFanasina</a>
                    </div>
                </div>
                <Button href="mailto:Fjaonasitera@gmail.com" className="mx-auto my-7 w-[200px] ">
                    M'envoyer un email
                </Button>
            </div>
        </div>
    )
}
