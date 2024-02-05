export function Apps() {


return (
<>
<section className="bg-gradient-to-b from-purple-500/30 to-white flex justify-center items-center py-10 lg:py-0">
  <div className='lg:justify-between flex flex-col justify-items-center md:max-w-6xl w-full relative px-4'>

    <div className="lg:flex items-center justify-center gap-5 grid">
      <div className="lg:w-1/2 flex flex-col lg:items-start lg:gap-10 gap-5 justify-center">
        <h3 className="text-purple-500 lg:text-left text-center font-light lg:text-5xl text-3xl uppercase">
          aplicativos
        </h3>
        <p className="mt-5 text-center lg:text-left">
          Seja com relação à estética visual ou de programação e linguagens, a SA Corp conta com equipe capacitada e antenada para proposição de aplicativos modernos garantindo que o aplicativo seja eficiente, rápido e escalável.
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center justify-center lg:relative">
        <picture>
          <img src="./Component3.png" alt="" className="lg:relative lg:bottom-20" />
        </picture>
      </div>
    </div>
  </div>
</section>

<section className="flex justify-center items-center lg:pb-20 pb-10">
  <div className='lg:justify-between flex flex-col justify-items-center md:max-w-6xl w-full px-4'>

    <div className="lg:flex items-center lg:justify-between justify-center lg:relative gap-3 grid grid-cols-2 lg:bottom-10 mt-5">
      <div className="border border-gray-400 rounded-full lg:w-44 w-36 lg:h-44 h-36 flex items-center justify-center">
        <span>Embarcado</span>
      </div>
      <div className="border border-gray-400 rounded-full lg:w-44 w-36 lg:h-44 h-36 flex items-center justify-center">
        <span>Web App</span>
      </div>
      <div className="border border-gray-400 rounded-full lg:w-44 w-36 lg:h-44 h-36 flex items-center justify-center">
        <span>Híbrido</span>
      </div>
      <div className="border border-gray-400 rounded-full lg:w-44 w-36 lg:h-44 h-36 flex items-center justify-center">
        <picture>
          <img src="./img-apple-store.png" alt="" className="" />
        </picture>
      </div>
      <div className="border border-gray-400 rounded-full lg:w-44 w-36 lg:h-44 h-36 flex items-center justify-center">
        <picture>
          <img src="./img-app-store.png" alt="" className="" />
        </picture>
      </div>
    </div>

  </div>
</section>
</>
);
}