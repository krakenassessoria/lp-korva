import Image from "next/image"

const Apresentacao = () => {
  return (
    <div className="relative w-full h-screen items-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/background1.jpg')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[100vh] text-center text-white bg-black bg-opacity-70">
        <div>
            <Image priority src={"/gatzz.png"} alt="Gatzz" width={200} height={95} />
            <h2 className="text-lg font-bold">APRESENTA</h2>
        </div>

      <div className="mt-5">
        <h1 className="mx-auto px-8 lg:px-0">
          <Image priority src={"/bellepoque.png"} alt="Fondue com show" width={400} height={123} />
        </h1>
      </div>
        
        
        <div className="my-10 px-5 lg:text-lg lg:max-w-3xl text-justify space-y-4">
          <p>
            A magia que nasce da bondade.
          </p>
          <p>
          Em um reino escondido pela neve, onde boas ações dão vida a tudo, um povo encantado luta para manter acesa a luz que sustenta seu mundo.
          </p>
          <p>
          Com música ao vivo, teatro, dança e acrobacias, este espetáculo desperta o que há de mais puro em cada um de nós.
          </p>
          <p>
          No GATZZ o impossível ganha forma — e pequenos gestos podem mudar tudo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Apresentacao