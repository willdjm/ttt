import Link from "next/link";

export function CreationAndDevelopment() {

return (
<>
<section className="bg-gradient-to-b from-blue-200/50 to-white flex justify-center items-center py-10 lg:py-0 px-4">
<div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full relative lg:mt-20'>

    <div className="flex flex-col items-center justify-center lg:gap-14 gap-10">
        <h3 className="text-blue-400 text-center font-light lg:text-5xl text-3xl uppercase">
            Criação e desenvolvimento de sites
        </h3>
        <p className="uppercase text-center max-w-4xl">
            Experiência de mais de mais 25 anos dos membros de equipe técnica e criativa, tanto na criação de interfaces quanto na programação nas principais linguagens.
        </p>
    </div>
</div>
</section>

<section className="flex justify-center items-center lg:pb-28 py-10 lg:py-0 px-4">
<div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full'>

    <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center lg:mt-16 mt-5">

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-desktop.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="lg:max-w-24 text-center text-blue-400">Desktop e Mobile</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-gerenciamentocms.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="lg:max-w-32 text-center text-blue-400">Gerenciamento CMS</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 lg:col-auto col-span-2 py-10">
        <video
    className=""
    src="./devices.mp4"
    autoPlay
    muted
    loop
  />
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-sitespersonalizados.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="lg:max-w-32 text-center text-blue-400">Sites personalizados</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-templates.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="lg:max-w-24 text-center text-blue-400">Templates white label</span>
        </div>

    </div>

    <span className="flex items-center w-full bg-gray-300 h-0.5 mt-16" />

    <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-5 lg:gap-16 lg:mt-16 mt-5">

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-imobiliaria.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="text-center text-blue-400">Imobiliários</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-paginaconversao.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="text-center text-blue-400">Páginas de conversão</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-institucionais.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="text-center text-blue-400">Institucionais</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-mercadologias.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="text-center text-blue-400">Mercadológicos</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-landpages.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="text-center text-blue-400">Landpages</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-hotsites.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="text-center text-blue-400">Hotsites</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-promocionais.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="text-center text-blue-400">Promocionais</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-lojas.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="text-center text-blue-400">Lojas virtuais</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-blogs.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="text-center text-blue-400">Blogs</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
            <picture>
                <img src="./icon-sitespessoais.svg" alt="" className="flex items-center justify-center" />
            </picture>
            <span className="text-center text-blue-400">Sites pessoais</span>
        </div>
    </div>

    <div className="flex items-center justify-center py-8 lg:mt-10 mt-5">
        <button className="border border-blue-400 text-blue-400 py-1.5 lg:px-10 px-6 rounded-full text-base lg:text-lg hover:bg-white hover:text-indigo-700 hover:border-indigo-700 hover:border">
            <Link href="#contact">
                Fale com a SAcorp
            </Link>
        </button>
    </div>

</div>
</section>
</>
);
}