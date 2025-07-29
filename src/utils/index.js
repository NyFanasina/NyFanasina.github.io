import cvPdf from "../assets/CV_Ny_Fanasina_Jaonasitera.pdf";

export function handleDownloadCV() {
  const a = document.createElement("a");
  a.href = cvPdf;
  a.download = true;
  a.click();
}
