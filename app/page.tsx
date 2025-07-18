import Apresentacao from '@/components/apresentacao';
import Cardapio from '@/components/cardapio';
import ComoFunciona from '@/components/como-funciona';
import Footer from '@/components/footer';
import Galeria from '@/components/galeria';
import GaleriaShow from '@/components/galeria-show';
import Header from '@/components/header';
import Hero from '@/components/hero'
import Show from '@/components/show';
import Venda from '@/components/venda';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Apresentacao />
      <GaleriaShow />
      <Show />
      <Galeria />
      <Cardapio />
      <ComoFunciona />
      <Venda />
      <Footer />
    </main>
  );
}
