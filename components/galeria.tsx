import Carrousel from './carrousel'

const images = [
  {
    original: '/ambiente/gatzz1.jpg',
    thumbnail: '/ambiente/gatzz1.jpg',
  },
  {
    original: '/ambiente/gatzz2.jpg',
    thumbnail: '/ambiente/gatzz2.jpg',
  },
  {
    original: '/ambiente/gatzz3.jpg',
    thumbnail: '/ambiente/gatzz3.jpg',
  },
  {
    original: '/ambiente/gatzz4.jpg',
    thumbnail: '/ambiente/gatzz4.jpg',
  },
  {
    original: '/ambiente/gatzz5.jpg',
    thumbnail: '/ambiente/gatzz5.jpg',
  },
];

const imagesMobile = [
  {
    original: '/ambiente-mobile/1.jpg',
    thumbnail: '/ambiente-mobile/1.jpg',
  },
  {
    original: '/ambiente-mobile/2.jpg',
    thumbnail: '/ambiente-mobile/2.jpg',
  },
  {
    original: '/ambiente-mobile/3.jpg',
    thumbnail: '/ambiente-mobile/3.jpg',
  },
  {
    original: '/ambiente-mobile/4.jpg',
    thumbnail: '/ambiente-mobile/4.jpg',
  },
  {
    original: '/ambiente-mobile/5.jpg',
    thumbnail: '/ambiente-mobile/5.jpg',
  },
  {
    original: '/ambiente-mobile/6.jpg',
    thumbnail: '/ambiente-mobile/6.jpg',
  },
];

const Galeria = () => {
  return (
    <>
    <div className="hidden lg:block relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/background5.jpg')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-70">
        <Carrousel images={images} titulo={"ONDE ACONTECE"} top={"pt-1"} largura={"max-w-[100vw] lg:max-w-[43vw]"} />
      </div>
    </div>
    <div className="lg:hidden relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/background5.jpg')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-70">
        <Carrousel images={imagesMobile} titulo={"ONDE ACONTECE"} top={"pt-1"} largura={"max-w-[90vw] lg:max-w-[43vw]"} />
      </div>
    </div>
    </>
  )
}

export default Galeria;
