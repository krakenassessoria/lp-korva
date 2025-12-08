import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaAccessibleIcon } from 'react-icons/fa';
import { FaRegHourglass, FaPersonCircleExclamation } from "react-icons/fa6";

const schedules = [
  {
    title: "Sessão das 19:00 (Baixa temporada)",
    items: [
      "18:30 - Abertura Recepção",
      "19:00 - Início da Experiência",
      "19:30 - Horário limite para entrada",
      "20:30 - Encerramento parte salgada",
      "21:15 - Encerramento/Saída",
    ],
  },
  {
    title: "Sessão das 12:00 (Altas temporadas e feriadões)",
    items: [
      "11:30 - Abertura Recepção",
      "12:00 - Início da Experiência",
      "13:00 - Horário limite para entrada",
      "14:00 - Encerramento parte salgada",
      "14:30 - Encerramento/Saída",
    ],
  },
  {
    title: "Sessão das 18:30 (Altas temporadas e feriadões)",
    items: [
      "18:00 - Abertura Recepção",
      "18:30 - Início da Experiência",
      "19:00 - Horário limite para entrada",
      "20:00 - Encerramento parte salgada",
      "20:50 - Encerramento/Saída",
    ],
  },
  {
    title: "Sessão das 21:30 (Altas temporadas e feriadões)",
    items: [
      "21:00 - Abertura Recepção",
      "21:30 - Início da Experiência",
      "22:00 - Horário limite para entrada",
      "23:00 - Encerramento parte salgada",
      "23:30 - Encerramento/Saída",
    ],
  },
];

const chocoNote = "O Fondue de Chocolate é servido minutos antes do início do Show para que aprecie o chocolate de Gramado durante o espetáculo.";

const ComoFunciona = () => {
  return (
    <div className="relative w-full min-h-[100vh] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/background2.jpg')" }}>
      <div className="relative z-10 pb-28 flex flex-col pt-28 lg:items-center lg:justify-center w-full min-h-[100vh] text-center text-white bg-black bg-opacity-70">
        <div className='flex flex-col w-full max-w-4xl mx-auto text-left space-y-2 px-5 text-sm'>
          <h1 className='text-2xl font-bold py-3'>Como funciona</h1>
          <p><b className='font-bold'><FaCalendarAlt className="inline mr-2" />Quando acontece:</b></p>
          <p className='ml-6'>Segundas a sábados. Sessão das 19:00 (baixa temporada). Altas temporadas e feriadões: sessões às 12:00, 18:30 e 21:30.</p>
          {schedules.map((schedule) => (
            <div key={schedule.title}>
              <p className='pt-6'><b className='font-bold text-lg'><FaClock className="inline mr-2" />{schedule.title}</b></p>
              <ul className='list-disc ml-5 pl-5 space-y-2'>
                {schedule.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className='pt-6 italic'>{chocoNote}</p>
          <p className='pt-6'><b className='font-bold'><FaRegHourglass className="inline mr-2" />Duração de toda experiência:</b> 2h30min</p>
          <p><b className='font-bold'><FaMapMarkerAlt className="inline mr-2" />Localização:</b> No GATZZ Dinner Show em Gramado - RS</p>
          <p><b className='font-bold'><FaPersonCircleExclamation className='inline mr-2' />Classificação:</b> livre para todas as idades</p>
          <p><b className='font-bold'><FaAccessibleIcon className="inline mr-2" />Acessibilidade:</b> local acessível para cadeirantes</p>
        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;
