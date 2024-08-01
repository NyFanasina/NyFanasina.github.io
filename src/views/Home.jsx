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
            <div className="flex items-center justify-around h-[82vh]">
                <div className='bg-indigo-950 border-4 rounded-full w-[430px] h-[430px] overflow-hidden'>
                    <img src={me} className='mt-4 ms' />
                </div>
                <p className='flex flex-col justify-between px-5 space-y-5'>
                    <span className='text-6xl'>
                        Ny Fanasina Jaonasitera
                    </span>
                    <span className='text-4xl'>Développeur WEB et Mobile.</span>
                    <span className='text-xl'>Mon objectif est de développer des solutions innovantes qui résolvent des problèmes réels.</span>
                    <Button onClick={handleClick}>Contacter-moi</Button>
                </p>
            </div>
            <div className='mx-auto border-b w-[300px]'></div>
        </div>
    )
}
