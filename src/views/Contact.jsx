import { BiMessageSquareCheck } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import { Alert, Button } from "flowbite-react"; // ajuste si ton Button vient d'ailleurs
import { FaGitlab } from "react-icons/fa";
import AddressCard from "../components/AddressCard";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { service_id, template_id } from "../config/email";
import { HiInformationCircle } from "react-icons/hi";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [isSent, setSent] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [pending, setPending] = useState(false);
  const [form, setForm] = useState(initialForm);

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);

    await emailjs
      .send(service_id, template_id, form)
      .then(({ status }) => {
        if (status === 200) setSent(true);
      })
      .catch(() => {
        setHasError(true);
      });

    setPending(false);
  }

  function handleInput(e) {
    const target = e.target;
    setForm({ ...form, [target.name]: target.value });
  }

  return (
    <section id="contact" className="py-16 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">📬 Me Contacter</h2>

      <form
        onSubmit={handleSubmit}
        encType="text/plain"
        className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">💬 M&apos;envoyer un message</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Nom</label>
          <input
            type="text"
            name="name"
            minLength={2}
            onChange={handleInput}
            value={form.name}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInput}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Message</label>
          <textarea
            name="message"
            value={form.message}
            minLength={20}
            rows="5"
            onChange={handleInput}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          ></textarea>
        </div>
        {hasError && (
          <Alert color="failure" icon={HiInformationCircle} className="py-2.5 mb-3">
            <>Une erreur s&apos;est produite.</> Merci de me contacter à l&apos;adresse email &nbsp;
            <strong>
              <a href="mailto:fjaonasitera@gmail.com">fjaonasitera@gmail.com</a>.
            </strong>
          </Alert>
        )}
        <div className="*:mx-auto">
          {isSent && (
            <Button className="flex items-center" color="success">
              <span className="me-1"> Merci, votre message a bien été envoyé</span>
              <BiMessageSquareCheck size={22} />
            </Button>
          )}
          {!isSent && !hasError && (
            <Button type="submit" className="px-6" isProcessing={pending} disabled={pending}>
              {pending ? "En cours d'envoie" : "Envoyer"}
            </Button>
          )}
        </div>
      </form>

      <div className="flex justify-between items-center flex-wrap gap-y-5 mt-8">
        <div className="*:mt-1.5">
          <AddressCard Icon={MdLocationOn} value="Madagascar" />
          <AddressCard Icon={ImPhone} value="+261 38 51 798 08" />
          <AddressCard Icon={MdEmail} value="nyfanasinajaonasitera@gmail.com" />
        </div>

        <div className="flex space-x-3">
          <a
            href="https://github.com/NyFanasina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            <IoLogoGithub size={50} />
          </a>

          <a
            href="https://gitlab.com/NyFanasina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            <FaGitlab size={50} />
          </a>
        </div>
      </div>
    </section>
  );
}
