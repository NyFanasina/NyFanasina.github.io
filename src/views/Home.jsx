import { Button } from "flowbite-react";
import me from "../assets/me.png";
import { FaDownload } from "react-icons/fa";
import { handleDownloadCV } from "../utils";

export default function Home() {
  function handleClick() {
    const a = document.createElement("a");
    a.href = "#contact";
    a.click();
  }

  return (
    <div id="home">
      <div className="flex items-center flex-wrap justify-around h-[90vh] min-h-min">
        <div className="bg-[#607d8b] border-[8px] max-sm:my-6 my-4 rounded-full md:w-[380px] md:h-[380px] h-[280px] w-[280px] overflow-hidden">
          <img src={me} />
        </div>
        <div className="flex flex-col justify-between space-y-5 max-[1534px]:text-center">
          <span className="text-4xl md:text-6xl">Ny Fanasina Jaonasitera</span>
          <span className="text-2xl md:text-4xl">
            Développeur WEB et Mobile.
          </span>
          <span className="text-lg">
            Mon objectif est de développer des solutions innovantes qui
            résolvent des problèmes réels.
          </span>
          <p className="flex *:flex-1 gap-1.5 flex-wrap *:min-w-52">
            <Button onClick={handleClick}>Contacter-moi</Button>
            <Button onClick={handleDownloadCV}>
              <span className="me-1">Télecharger mon CV</span>{" "}
              <FaDownload className="animate-bounce" />
            </Button>
          </p>
        </div>
      </div>
      <div className="mx-auto border-b sm:w-[300px] w-[200px] mt-2"></div>
    </div>
  );
}
