import { Button } from "flowbite-react";
import cv from "../assets/cv.jpg"
import cvPdf from "../assets/CV_Ny_Fanasina.pdf"

export default function Cv() {
    function handleDownload() {
        const a = document.createElement('a');
        a.href = cvPdf;
        a.download = true;
        a.click();
    }
    return (
        <div className="py-5 px-2" id="cv">
            <h1 className="text-center text-3xl p-5">Mon Curriculum Vitae - (CV)</h1>
            <div className="flex flex-col items-center gap-5">
                <a href={cv}><img src={cv} alt="capture du cv" width={480} className="rounded-sm" /></a>
                <Button onClick={handleDownload}>Télécharger le CV (.pdf)</Button>
            </div>
        </div>
    )
}
