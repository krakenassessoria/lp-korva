import Image from "next/image"

const Show = () => {
  return (
    <div className="relative w-full h-screen snap-start overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/ambiente/gatzz1.jpg')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-70">

      <div>
        <h1 className="mx-auto px-8 lg:px-0">
          <Image priority src={"/gatzz.png"} alt="Fondue com show" width={250} height={118} />
        </h1>
      </div>
      <h2 className="text-base font-bold">Onde a arte e a gastronomia se encontram!</h2>
        
        
      <div className="mt-10 px-5 text-[14px] lg:text-base lg:max-w-3xl text-justify space-y-1">
          <p className="font-bold">Todos os dias um show espetacular! </p>
      </div>

      <div className="pt-6 px-2">
        <Image src={"/shows-cartaz.jpg"} alt={"Show temático"} width={800} height={369} />
      </div>
    
      </div>
    </div>
  )
}

export default Show