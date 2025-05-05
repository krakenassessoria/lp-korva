import Image from "next/image"

const Apresentacao = () => {
  return (
    <div className="relative w-full h-screen items-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/background1.jpg')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-[100vh] text-center text-white bg-black bg-opacity-70">
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
          Inspirado nos grandes musicais da Broadway e de Paris, este show traz a combinação perfeita de canto, dança e números circenses.
          </p>
          <p>
          O glamour dos anos 20 retorna a Gramado com este espetáculo campeão de bilheteria, tornando as noites do Gatzz ainda mais espetaculares!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Apresentacao