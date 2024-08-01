import { Button } from 'flowbite-react'
import me from '../assets/me.png'
export default function Home() {
    function handleClick() {
        const a = document.createElement('a');
        a.href = "#contact";
        a.click();
    }
    return (
        <div id="home">
            <div className="flex items-center flex-wrap justify-around h-[90vh]">
                <div className='bg-indigo-950 border-4 rounded-full md:w-[400px] md:h-[400px] h-[280px] w-[280px] overflow-hidden'>
                    <img src={me} className='mt-4 ms' />
                </div>
                <p className='flex flex-col justify-between px-5 space-y-5 max-[1534px]:text-center'>
                    <span className='text-5xl md:text-6xl'>
                        Ny Fanasina Jaonasitera
                    </span>
                    <span className='text-3xl md:text-4xl'>Développeur WEB et Mobile.</span>
                    <span className='text-xl'>Mon objectif est de développer des solutions innovantes qui résolvent des problèmes réels.</span>
                    <Button onClick={handleClick}>Contacter-moi</Button>
                </p>
            </div>
            <div className='mx-auto border-b sm:w-[300px] w-[200px]'></div>
        </div>
    )
}
