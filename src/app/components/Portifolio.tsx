"use client"

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from 'swiper/element/bundle'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

register();

export function Portifolio() {

  const [slidePreview, setSlidePreview] = useState(4)

  useEffect(() => {
  
  function handleResize() {
    if (window.innerWidth < 720) {
      setSlidePreview(2);
    }
    else {
      setSlidePreview(3);
    }
  }
  handleResize();
  
  window.addEventListener("resize", handleResize)
  
  return () => {
  
    window.removeEventListener("resize", handleResize)
  }
  }, [])

return (

<section className="bg-gradient-to-b from-gray-300/50 to-white flex justify-center items-center lg:pb-36 py-10 lg:py-0 px-4">
    <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full relative'>

<div className="lg:flex grid items-center justify-center gap-5">
<div className="lg:w-1/2 flex flex-col items-center justify-center lg:relative">
            <picture>
        <img src="./Component3.png" alt="" className="lg:relative lg:bottom-28" />

      </picture>

            </div>
<div className="lg:w-1/2 flex flex-col lg:items-start justify-center">
                <h3 className="text-blue-400 lg:text-left text-center font-light lg:text-5xl text-3xl uppercase">
                Sites para diversos segmentos
                </h3>
                <p className=" mt-5">
                A SAcorp cria interface e desenvolve para todos os perfis de clientes e necessidades. 
                </p>
                
                <div className="flex items-center justify-center gap-5 mt-5">
                  <div className="flex items-center justify-center gap-5">
                  <picture>
        <img src="./icon-normas.svg" alt="" className="" />

      </picture>
      <span>Normas padrão e boas práticas </span>
                  </div>
                  <div className="flex items-center justify-center gap-5">
                  <picture>
        <img src="./icon-planos.svg" alt="" className="" />

      </picture>
      <span>Planos de manutenção mensal </span>
                  </div>
                </div>
            </div>

</div>
<div className="lg:flex items-center grid justify-center lg:justify-between lg:relative lg:bottom-10">
  


</div>
<div className="flex items-center justify-center gap-3 mt-5">
                  <picture>
        <img src="./icon-processo.svg" alt="" className="" />

      </picture>
      <span>Processo de desenvolvimento de ponta a ponta ou etapa específica </span>
                  </div>
            
<div className="lg:flex grid grid-cols-2 mt-5 gap-5 items-center lg:justify-between justify-center py-5">

<div className="relative flex items-center justify-center">
<picture>
        <img src="./img-rectangle.png" alt="" className="" />

      </picture>

    <span className="text-center absolute flex items-center justify-center">
    Briefing
    </span>
</div>

<div className="relative flex items-center justify-center">
<picture>
        <img src="./img-rectangle.png" alt="" className="" />

      </picture>

    <span className="text-center absolute flex items-center justify-center">
    Estratégia online
    </span>
</div>

<div className="relative flex items-center justify-center">
<picture>
        <img src="./img-rectangle.png" alt="" className="" />

      </picture>

    <span className="text-center absolute flex items-center justify-center">
    Criação Protótipo
    </span>
</div>

<div className="relative flex items-center justify-center">
<picture>
        <img src="./img-rectangle.png" alt="" className="" />

      </picture>

    <span className="text-center absolute flex items-center justify-center">
    Programação
    </span>
</div>

<div className="relative flex items-center justify-center">
<picture>
        <img src="./img-rectangle.png" alt="" className="" />

      </picture>

    <span className="text-center absolute flex items-center justify-center">
    Hospedagem
    </span>
</div>

<div className="relative flex items-center justify-center">
<picture>
        <img src="./img-rectangle.png" alt="" className="" />

      </picture>

    <span className="text-center absolute flex items-center justify-center">
    Período teste
    </span>
</div>

</div>

<div className="flex flex-col items-center justify-between py-5">

<div className="w-full items-center md:flex hidden ">
<span className="flex flex-1 items-center w-full bg-gray-300 h-0.5"/>
    <span className="text-xl flex items-center justify-center w-max uppercase px-5">Portfólio de sites</span>
    <span className="flex flex-1 items-center w-full bg-gray-300 h-0.5"/>
      </div> 

</div>


<div className="flex items-center justify-center lg:py-8 py-5">
<Swiper 
        loop={true}
        slidesPerView={slidePreview}
        grabCursor={true}
        spaceBetween={30}
        autoplay
        
        speed={200}
        >
    <SwiperSlide key='1'>
      <picture>
        <img src="./img-site-idactum.png" alt="" className=""  />

      </picture>
    </SwiperSlide>

    <SwiperSlide key='2'>
      <picture>
        <img src="./img-site-mayer-bastos-costa.png" alt="" className="" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='3'>
      <picture>
        <img src="./img-site-cantina-donna-pinna.png" alt="" className="" />

      </picture>
    </SwiperSlide>

      </Swiper>
</div>

<div className="flex items-center justify-center py-8">
<button className="border border-blue-400 text-blue-400 py-1 lg:px-10 px-4 rounded-full text-sm lg:text-lg hover:bg-white hover:text-indigo-700 hover:border-indigo-700 hover:border">
  <Link href="#contact">
  Ver portfólio completo
    </Link>
</button>
</div>

    </div>
</section>
);
}