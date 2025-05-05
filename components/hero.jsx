"use client"
import { sendGTMEvent } from '@next/third-parties/google';
import Image from 'next/image';

const Hero = () => {

  const evento1 = ()=> {
    document.getElementById('venda').scrollIntoView({ behavior: 'smooth' })
    sendGTMEvent({
      event: 'buttonClicked',
      category: 'Button',
      label: 'reserva',
      value: "reserva"
    })
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={(e) => e.currentTarget.play()}
      >
        <source src="/bellepoque.mp4" type="video/mp4" />
        Seu navegador não suporta este elemento de vídeo.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold">
            <Image priority src="/bellepoque.png" alt="bellepoque" width={500} height={154} />
        </h1>
        <div className='flex flex-col mt-10'>
            <p className="text-xl lg:text-3xl font-bold px-10">SINTA A MAGIA</p>
        </div>
        <div className="py-10">
            <button onClick={evento1} target="_blank"  className="mt-6 bg-[#a68b39] text-white font-bold py-3 px-6 text-lg rounded hover:bg-[#8b6e2d] transition duration-300">
              Reserve Agora
            </button>
        </div>
        <span className='relative z-10 text-sm mt-5 px-20'>Sábados ao meio-dia no Gatzz Dinner Show</span>
      </div>
    </div>
  );
};

export default Hero;
