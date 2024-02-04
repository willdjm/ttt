import Link from "next/link";

export function CreationAndDevelopment() {

return (

<section className="bg-gradient-to-b from-blue-200/50 to-white flex justify-center items-center lg:pb-36 py-10 lg:py-0 px-4">
    <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full relative lg:mt-20'>

<div className="flex flex-col items-center justify-center gap-14">
                <h3 className="text-blue-400 text-center font-light lg:text-5xl text-3xl uppercase">
                Criação e desenvolvimento de sites
                </h3>
                <p className="uppercase text-center max-w-4xl">Experiência de mais de mais 25 anos dos membros de equipe técnica e criativa, tanto na criação de interfaces quanto na programação nas principais linguagens.</p>
                
    


</div>



<div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center lg:mt-20 mt-5">
<div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-desktop.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="lg:max-w-24 text-center">Desktop e Mobile</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-gerenciamentocms.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="lg:max-w-24 text-center">Gerenciamento CMS</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5 lg:col-auto col-span-2">
                  <picture>
        <img src="./img-criacao.png" alt="" className="flex items-center justify-center" />

      </picture>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-sitespersonalizados.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="lg:max-w-24 text-center">Sites personalizados</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-templates.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="lg:max-w-24 text-center">Templates white label</span>
                  </div>
            
</div>



<span className="flex items-center w-full bg-gray-300 h-0.5 mt-20"/>

<div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-5 lg:gap-16 lg:mt-20 mt-5">
<div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-imobiliaria.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="text-center">Imobiliários</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-paginaconversao.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="text-center">Páginas de conversão</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-institucionais.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="text-center">Institucionais</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-mercadologias.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="text-center">Mercadológicos</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-landpages.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="text-center">Landpages</span>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-hotsites.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="text-center">Hotsites</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-promocionais.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="text-center">Promocionais</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-lojas.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="text-center">Lojas virtuais</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-blogs.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="text-center">Blogs</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5">
                  <picture>
        <img src="./icon-sitespessoais.svg" alt="" className="flex items-center justify-center" />

      </picture>
      <span className="text-center">Sites pessoais</span>
                  </div>
</div>





<div className="flex items-center justify-center py-8 lg:mt-10 mt-5">
<button className="border border-blue-400 text-blue-400 py-1 lg:px-10 px-6 rounded-full text-base lg:text-lg hover:bg-white hover:text-indigo-700 hover:border-indigo-700 hover:border">
  <Link href="#contact">
  Fale com a SAcorp
    </Link>
</button>
</div>

    </div>
</section>
);
}