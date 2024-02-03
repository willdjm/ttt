export function Footer() {

return (

<footer className="bg-white flex justify-center items-center py-3 px-2">
<div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full'>

    <div className='grid lg:flex lg:items-baseline w-full lg:justify-between gap-3 lg:pt-5'>
        <span className="lg:text-base text-gray-500 text-center">Copyright © - 2024 - SA Corp - Todos os direitos reservados.</span>

        <div className='lg:flex items-baseline justify-center text-gray-500 text-center'>

            <span className="lg:text-base">Criado e desenvolvido por</span>
            <div className='flex items-baseline justify-center'>
                <a className='ml-2' href="https://sacorp.tec.br/?utm_source=www.mayerbastoscostaadv.com.br&utm_medium=banner&utm_campaign=slogan" target='_blank' rel="noreferrer">
                    <picture>
                        <img src="/logo-sacorp.svg" alt="logo Sacorp" width={100} height={100} loading="lazy" className='lg:w-16 w-14' />
                    </picture>
                </a>
            </div>

        </div>
    </div>
</div>
</footer>
);
}