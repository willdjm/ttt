"use client"

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from 'swiper/element/bundle'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

register();

export function Clients() {

    const [slidePreview, setSlidePreview] = useState(4)

useEffect(() => {

function handleResize() {
  if (window.innerWidth < 720) {
    setSlidePreview(2);
  }
  else {
    setSlidePreview(5);
  }
}
handleResize();

window.addEventListener("resize", handleResize)

return () => {

  window.removeEventListener("resize", handleResize)
}
}, [])

return (

<section className="bg-gradient-to-b from-gray-300 to-white flex justify-center items-center px-3 lg:px-0 lg:py-32 py-10">
    <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full'>

    <div className="p-6 lg:p-0 mr-2 sm:rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-blue-400 lg:text-left font-light text-center lg:text-5xl text-3xl uppercase">
                Clientes
                </h3>
                <p className="text-blue-400 mt-5 text-center">
                Veja alguns empresas que já transformaram sua presença online com as soluções da SA Corp
                </p>
            </div>

            
<div className="lg:mt-20 mt-5 flex items-center justify-center">
<Swiper className="flex items-center justify-center"
        loop={true}
        slidesPerView={slidePreview}
        grabCursor={true}
        spaceBetween={30}
        autoplay
        pagination
        speed={200}
        >
    <SwiperSlide key='1'>
      <picture>
        <img src="./cliente-aguia.png" alt="" className="" />

      </picture>
    </SwiperSlide>

    <SwiperSlide key='2'>
      <picture>
        <img src="./cliente-idactum.png" alt="" className="" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='3'>
      <picture>
        <img src="./cliente-zimmermann.png" alt="" className="" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='4'>
      <picture>
        <img src="./cliente-MBC-advogados.png" alt="" className="" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='5'>
      <picture>
        <img src="./cliente-esquema.png" alt="" className="" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='6'>
      <picture>
        <img src="./cliente-poli.png" alt="" className="" />

      </picture>
    </SwiperSlide>
      </Swiper>
</div>
    </div>
</section>
);
}