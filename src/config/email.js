import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: "VrXutZaFc19XGiUGu",
  blockHeadless: true,
});

const Env = {
  service_id: import.meta.env.VITE_SERVICE_ID,
  template_id: import.meta.env.VITE_TEMPLATE_ID,
};

export const { service_id, template_id } = Env;

console.log("Email charged");
