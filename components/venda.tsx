"use client"
import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link';

const Venda = () => {
  return (
    <div id="venda" className="relative w-full snap-start overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/background7.jpg')" }}>
      <div className="relative z-10 flex flex-col min-h-[100vh] items-center justify-center w-full h-full pt-10 px-4 text-center text-white bg-black bg-opacity-70">
        <h1 className="text-xl lg:text-3xl font-bold mb-4 mt-30">GARANTA AGORA A SUA RESERVA</h1>
        <h2 className='text-md lg:text-xl font-bold mb-4'>Show Korvatunturi + Fondue Premium</h2>
        <h3 className='text-xs lg:text-base italic mb-1'>Sextas com jantar e sábados com almoço</h3>
        <h4 className='text-xs lg:text-base italic mb-1 mt-4'>Classificação livre</h4>
        <div className='flex flex-col w-full items-center justify-center max-w-3xl mx-auto space-y-3'>
          <div className='text-left lg:w-[28vw] h-auto pt-4 ml-10 lg:ml-0'>
            <h1 className='text-xl font-bold py-5'>Almoço</h1>
            <p className='text-sm lg:text-base'><b className='font-bold'>De</b> <span className='line-through'>R$ 449,90</span></p>
            <p><b className='font-bold'>Por:</b> </p>
            <p><b className='font-bold text-xs'>A partir de</b>
              <span className='text-2xl lg:text-4xl font-bold'>R$ 298,00</span>
              <span className='text-sm lg:text-base italic'>por pessoa</span>
            </p>
            <p className='text-xs lg:text-sm italic text-right mt-3'>em até 3x no cartão de crédito</p>
          </div>
          <div className='text-left lg:w-[28vw] h-auto pt-4 ml-10 lg:ml-0'>
            <h1 className='text-xl font-bold py-5'>Jantar</h1>
            <p className='text-sm lg:text-base'><b className='font-bold'>De</b> <span className='line-through'>R$ 449,90</span></p>
            <p><b className='font-bold'>Por:</b> </p>
            <p><b className='font-bold text-xs'>A partir de</b>
              <span className='text-2xl lg:text-4xl font-bold'>R$ 348,00</span>
              <span className='text-sm lg:text-base italic'>por pessoa</span>
            </p>
            <p className='text-xs lg:text-sm italic text-right mt-3'>em até 3x no cartão de crédito</p>
          </div>
          <div className='text-sm lg:text-base space-y-4'>
            <p>Atendimento somente com reserva de mesa</p>
            <p>* Mesas de 2 pessoas precisam de no mínimo 1 adulto, enquanto mesas de 4 pessoas precisam de no mínimo 2 adultos</p>
            <p>Bebidas e taxa de serviço não inclusas</p>
          </div>
          <span className="py-4 pb-6 w-[300px]">
            <div className="planne-widget planne-widget-product-adder"
              data-widget-product-id={4332}
              data-widget-checkout-page="/pagamento"
              data-widget-business-name="Gatzz Dinner Show"
              data-widget-product-cta-text="Reservar"
              data-cy="productAdderModal"
              data-widget-enable-modal="true">
          </div>
        </span>
        </div>
      </div>
    </div>
  );
};

export default Venda;

