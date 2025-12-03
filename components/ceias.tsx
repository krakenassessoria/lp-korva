import Image from "next/image"

const Ceias = () => {
  return (
    <div className="relative w-full min-h-[100vh] overflow-hidden bg-cover bg-center bg-black">
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[100vh] py-10 text-center text-white">
        <div>
            <Image priority src={"/gatzz.png"} alt="Gatzz" width={150} height={75} />
        </div>

      <div className="mt-5">
        <h2 className="font-bold text-2xl px-6">Ceias de Final de Ano</h2>
      </div>
        
        
        <div className="flex flex-col px-6 lg:flex-row mt-10 lg:text-lg lg:max-w-5xl text-justify space-y-10 lg:space-y-0 lg:space-x-6">
            <div className="flex flex-col justify-center items-center">
                <Image src="/natal.jpg" alt="alt" width={500} height={283} />
                <h2 className="w-full mt-2 mb-3 text-center font-bold">Ceia de Natal</h2>
                <div className="w-[300px] rounded-xl border border-white/10 bg-white/5 p-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-white/70">Show</span>
                    <span className="text-sm font-semibold">Simplesmente Natal</span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="rounded-full bg-green-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-green-300">Lote 4</span>
                    <span className="text-white/60 line-through">R$ 1.298</span>
                    <span className="text-2xl font-bold text-white">R$ 1.198,00</span>
                  </div>
                  <div className="mt-1 text-[11px] text-white/60">Por tempo limitado</div>
                  <div className="mt-3 border-t border-white/10 pt-3 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Cardápio</span>
                      <span className="font-medium">Especial</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Horário</span>
                      <span className="font-medium">20h às 0h</span>
                    </div>
                  </div>
                </div>
                <span className="py-2 w-[300px]">
                    <div className="planne-widget planne-widget-product-adder"
                        data-widget-product-id={1041}
                        data-widget-checkout-page="/pagamento"
                        data-widget-business-name="Gatzz Dinner Show"
                        data-widget-product-cta-text="Reservar"
                        data-cy="productAdderModal"
                        data-widget-enable-modal="true">
                    </div>
                </span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src="/reveillon.jpg" alt="alt" width={500} height={283} />
                <h2 className="w-full mt-2 mb-3 text-center font-bold">Ceia de Réveillon</h2>
                <div className="w-[300px] rounded-xl border border-white/10 bg-white/5 p-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-white/70">Show</span>
                    <span className="text-sm font-semibold">Espetáculo Especial</span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="rounded-full bg-green-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-green-300">Lote 4</span>
                    <span className="text-white/60 line-through">R$ 1.298</span>
                    <span className="text-2xl font-bold text-white">R$ 1.098,00</span>
                  </div>
                  <div className="mt-1 text-[11px] text-white/60">Por tempo limitado</div>
                  <div className="mt-3 border-t border-white/10 pt-3 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Cardápio</span>
                      <span className="font-medium">Especial</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Horário</span>
                      <span className="font-medium">20h30 às 1h</span>
                    </div>
                  </div>
                </div>
                <span className="py-2 w-[300px]">
                    <div className="planne-widget planne-widget-product-adder"
                        data-widget-product-id={1042}
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
    </div>
  )
}

export default Ceias
