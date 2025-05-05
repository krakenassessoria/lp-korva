import Carrousel from './carrousel'

const images = [
  {
    original: '/show/image1.jpg',
    thumbnail: '/show/image1.jpg',
  },
  {
    original: '/show/image2.jpg',
    thumbnail: '/show/image2.jpg',
  },
  {
    original: '/show/image3.jpg',
    thumbnail: '/show/image3.jpg',
  },
  {
    original: '/show/image4.jpg',
    thumbnail: '/show/image4.jpg',
  },
  {
    original: '/show/image5.jpg',
    thumbnail: '/show/image5.jpg',
  },
  {
    original: '/show/image6.jpg',
    thumbnail: '/show/image6.jpg',
  },
  {
    original: '/show/image7.jpg',
    thumbnail: '/show/image7.jpg',
  },
  {
    original: '/show/image8.jpg',
    thumbnail: '/show/image8.jpg',
  },
  {
    original: '/show/image9.jpg',
    thumbnail: '/show/image9.jpg',
  },
  {
    original: '/show/image10.jpg',
    thumbnail: '/show/image10.jpg',
  },
  {
    original: '/show/image11.jpg',
    thumbnail: '/show/image11.jpg',
  },
  {
    original: '/show/image12.jpg',
    thumbnail: '/show/image12.jpg',
  },
];

const GaleriaShow = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/background4.jpg')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-70">
        <Carrousel images={images} titulo={"O ESPETÁCULO"} top={"pt-1 lg:pt-4"} largura={"max-w-[95vw] lg:max-w-[25vw]"} />
      </div>
    </div>
  )
}

export default GaleriaShow;
