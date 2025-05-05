import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaAccessibleIcon } from 'react-icons/fa';
import { FaRegHourglass, FaPersonCircleExclamation } from "react-icons/fa6";

const ComoFunciona = () => {
  return (
    <div className="relative w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/background2.jpg')" }}>
      <div className="relative z-10 pb-28 flex flex-col min-h-[100vh] pt-28 lg:items-center lg:justify-center w-full text-center text-white bg-black bg-opacity-70">
        <div className='flex flex-col w-full max-w-4xl mx-auto text-left space-y-2 px-5 text-sm'>
          <h1 className='text-2xl font-bold py-3'>Como funciona</h1>
          <p><b className='font-bold'><FaCalendarAlt className="inline mr-2"/>Quando Acontece o show Korvatunturi:</b></p>
          <p className='ml-6'>Todos os sábados com sessões às 12:00</p>
          <div>
            <p className='pt-6'><b className='font-bold text-lg'><FaClock className="inline mr-2"/>{"Programação das 12:00"}</b></p>
            <ul className='list-disc ml-5 pl-5 space-y-2'>
              <li>Início do check-in: 11:30</li>
              <li>{"Almoço inicia às 12:00 (Sequência de Fondue Premium: Fondue de Queijo, Fondue de Carnes Nobres, Fondue de Chocolates de Gramado);"}</li>
              <li>{"Horário limite de chegada para o almoço completo é até às 12:15, o serviço do Fondue das Carnes encerra às 13:45 (para não atrapalhar o seu espetáculo);"}</li>
              <li>O Fondue de Chocolate é servido minutos antes do início do Show para que aprecie o chocolate de Gramado durante o espetáculo.</li>
              <li>Encerramento/saídas: 14:30</li>
            </ul>
          </div>
          <p className='pt-6'><b className='font-bold'><FaRegHourglass className="inline mr-2"/>Duração de toda experiência:</b> 2h30min</p>
          <p><b className='font-bold'><FaMapMarkerAlt className="inline mr-2"/>Localização:</b> No GATZZ Dinner Show em Gramado - RS</p>
          <p><b className='font-bold'><FaPersonCircleExclamation className='inline mr-2' />Classificação:</b> livre para todas as idades</p>
          <p><b className='font-bold'><FaAccessibleIcon className="inline mr-2"/>Acessibilidade:</b> local acessível para cadeirantes</p>
        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;
