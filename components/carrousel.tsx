"use client"
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface Image {
  original: string;
  thumbnail?: string;
}

interface CarrouselProps {
  images: Image[],
  titulo: string,
  top: string,
  largura: string
}

const Carrousel: React.FC<CarrouselProps> = ({ images, titulo, top, largura }) => {
  return (
    <div className={`flex flex-col justify-center items-center bg-[#000000]/50 text-white px-5 h-full md:h-auto ${top}`}>
      <h2 className="text-center text-xl font-bold md:text-2xl mb-6 py-1 mt-10 lg:mt-1">{titulo}</h2>
      <div className={`w-full ${largura}`}>
        <ImageGallery 
          items={images} 
          showNav={true}
          additionalClass="w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default Carrousel;
