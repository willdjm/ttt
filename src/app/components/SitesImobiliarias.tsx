"use client"

import Link from "next/link";

export function SitesImobiliarias() {

return (
<>
<section className="bg-gradient-to-b from-gray-300 to-white flex justify-center items-center py-10 lg:py-0 px-4">
<div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full relative'>

<div className="lg:flex grid items-center justify-center gap-5">
<div className="lg:w-1/2 flex flex-col lg:items-start justify-center gap-5">
<h3 className="text-blue-400 lg:text-left text-center font-light lg:text-5xl text-3xl uppercase lg:py-10 py-0">
sites imobiliários
</h3>
<p className="uppercase max-w-xs text-center lg:text-left">Para imobiliária e corretores Juntarem o útil ao agradável. </p>
<p className="text-center max-w-lg lg:text-left">
Ninguém está mais apto a garantir a melhor interface, programação e integração com CRMs, do que uma equipe pioneira no desenvolvimento de sistemas de gestão imobiliária. 
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

<section className="flex justify-center items-center lg:pb-28 px-4">
<div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full'>

<div className="lg:flex grid items-center lg:justify-between justify-center w-full lg:relative lg:bottom-16">
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

<div className="flex flex-col items-center justify-center lg:items-start gap-3 mt-5">
<picture>
<img src="./icon-interacao.svg" alt="" className="" />
</picture>
<span className="uppercase text-xl text-blue-400">
Interação
</span>
<ul className="list-disc text-blue-400 grid items-center justify-between lg:grid-cols-2 grid-cols-1">
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

<div className="flex flex-col items-center justify-between py-5 w-full">
<div className="w-full items-center flex ">
<span className="flex flex-1 items-center w-full bg-gray-300 h-0.5"/>
<span className="text-xl flex items-center justify-center w-max uppercase px-5 text-center lg:text-left">Portfólio de sites imobiliários</span>
<span className="flex flex-1 items-center w-full bg-gray-300 h-0.5"/>
</div> 
</div>

<div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center lg:py-8 py-5 gap-5">


      <picture>
<img src="./img-site-imoveispro.png" alt="" className="" />
</picture>

      <picture>
<img src="./img-site-esquema.png" alt="" className="" />
</picture>

      <picture>
<img src="./img-site-novasp.png" alt="" className="" />
</picture>

      <picture>
<img src="./img-site-imoveisnavila.png" alt="" className="" />
</picture>

      <picture>
<img src="./img-site-imoveis-para-expatriados.png" alt="" className="" />
</picture>

      <picture>
<img src="./img-site-marc.png" alt="" className="" />
</picture>

</div>

<div className="flex items-center justify-center py-8">
<button className="border border-blue-400 text-blue-400 py-1.5 lg:px-10 px-4 rounded-full text-sm lg:text-lg hover:bg-white hover:text-indigo-700 hover:border-indigo-700 hover:border">
<Link href="#contact">
Ver portfólio completo
</Link>
</button>
</div>

</div>
</section>
</>
);
}