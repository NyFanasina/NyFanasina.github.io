import { Button } from 'flowbite-react'
import me from '../assets/me.png'
export default function Home() {
    return (
        <div className="flex items-center justify-around h-[90vh]" id="home">
            <img src={me} width={380} />
            <p className='flex flex-col justify-between space-y-5'>
                <span className='text-6xl'>
                    Ny Fanasina Jaonasitera
                </span>
                <span className='text-4xl'>Développeur WEB et Mobile.</span>
                <span className='text-xl'>Mon objectif est de développer des solutions innovantes qui résolvent des problèmes réels.</span>
                <Button>Contacter-moi</Button>
            </p>
        </div>
    )
}
