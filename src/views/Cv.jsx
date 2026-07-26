import { Button } from "flowbite-react";
import cv from "../assets/CV.jpg";
import { handleDownloadCV } from "../utils";

export default function Cv() {
  return (
    <div className="py-5" id="cv">
      <h1 className="text-center text-3xl p-5">Mon Curriculum Vitae - (CV)</h1>
      <div className="flex flex-col items-center gap-5">
        <a href={cv}>
          <img src={cv} alt="capture du cv" width={600} className="rounded-sm" />
        </a>
        <Button onClick={handleDownloadCV}>Télécharger le CV (.pdf)</Button>
      </div>
    </div>
  );
}
