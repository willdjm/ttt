"use client"

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from 'swiper/modules';
import { register } from 'swiper/element/bundle'
import "swiper/css";
import 'swiper/css/grid';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

register();

export function SitesImobiliarias() {

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
<div className="lg:w-1/2 flex flex-col lg:items-start justify-center gap-5">
                <h3 className="text-blue-400 lg:text-left text-center font-light lg:text-5xl text-3xl uppercase">
                sites imobiliários
                </h3>
                <p className="uppercase max-w-xs text-center lg:text-left">Para imobiliária e corretores Juntarem o útil ao agradável. </p>
                <p className="uppercase text-center lg:text-left">
                Ninguém está mais apto a garantir a melhor interface, programação e integração com CRMs, do que uma equipe pioneira no desenvolvimento de sistemas de gestão imobiliária. 
                </p>
                
            </div>
            <div className="lg:w-1/2 flex flex-col items-center justify-center lg:relative">
            <picture>
        <img src="./Component3.png" alt="" className="lg:relative lg:bottom-28" />

      </picture>

            </div>

</div>
<div className="lg:flex items-center grid justify-center lg:justify-between lg:relative lg:bottom-10">
  


</div>

<div className="lg:flex grid items-center lg:justify-between justify-center w-full">
<div className="flex flex-col items-center justify-center lg:items-start  gap-3 mt-5">
                  <picture>
        <img src="./icon-integracao.svg" alt="" className="" />

      </picture>
      <span className="uppercase text-xl text-blue-400">
      Integração
      </span>
      <ul className="list-disc text-blue-400">
      <li>
      Aderênia a CRMs
      </li>
      <li>
      Integração com Portais
      </li>
      <li>
      Login
      </li>
      <li>
      Boleto online
      </li>
      </ul>
      
                  </div>

                  <div className="flex flex-col items-center justify-center lg:items-start  gap-3 mt-5">
                  <picture>
        <img src="./icon-integracao.svg" alt="" className="" />

      </picture>
      <span className="uppercase text-xl text-blue-400">
      Interação
      </span>
      <ul className="list-disc text-blue-400 grid lg:grid-cols-2 grid-cols-1">
      <li className="mr-7">
      Gerenciamento de banner
      </li>
      <li className="mr-7">
      Streaming de vídeo
      </li>
      <li className="mr-7">
      Tour 360º
      </li>
      <li className="mr-7">
      Galerias dinâmicas
      </li>
      <li className="mr-7">
      Vitrines específicas
      </li>
      <li className="mr-7">
      Busca por mapa
      </li>
      <li className="mr-7">
      Central de Downloads
      </li>
      <li className="mr-7">
      Cesta de favoritos
      </li>
      <li className="mr-7">
      Contato corretores 
      </li>
      <li className="mr-7">
      iframe Redes Sociais
      </li>
      </ul>
      
                  </div>

                  <div className="flex flex-col items-center justify-center lg:items-start  gap-3 mt-5">
                  <picture>
        <img src="./icon-conversao.svg" alt="" className="" />

      </picture>
      <span className="uppercase text-xl text-blue-400">
      Conversão
      </span>
      <ul className="list-disc text-blue-400">
      <li>
      API Whatsapp
      </li>
      <li>
      Automação de Chat online
      </li>
      <li>
      Agendamento de visitas
      </li>
      <li>
      Formulários de captação
      </li>
      </ul>
      
                  </div>
            
            
</div>


<div className="flex flex-col items-center justify-between py-10 w-full">

<div className="w-full items-center md:flex hidden ">
<span className="flex flex-1 items-center w-full bg-gray-300 h-0.5"/>
    <span className="text-xl flex items-center justify-center w-max uppercase px-5 text-center lg:text-left">Portfólio de sites imobiliários</span>
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