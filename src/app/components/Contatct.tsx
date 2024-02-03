"use client"

import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
import axios from 'axios';

export function Contact() {

// BOTÃO LOADER
const [formLoader, setFormLoader] = useState(false);

// VALIDAÇÃO yup
const schema = yup
    .object({
        name: yup.string().required('Campo obrigatório').min(3, 'O campo nome deve ter no mínimo 3 caracteres'),
        email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
        celular: yup.string(),
    })
    .required()

// REACT-HOOK-FORM
const {
    setValue,
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
} = useForm({
    mode: 'onBlur',

    resolver: yupResolver(schema),
})

// MASK WHATSAPP
const PhoneNumber = (value: String | undefined) => {
    if (!value) return ''
    
    return value.replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})(\d+?)/, '$1')
}

const phoneValue = watch("celular")
    useEffect(() => {
    setValue("celular", PhoneNumber(phoneValue))
}, [phoneValue, setValue])

// API
const onSubmit = (data: any) => {
    setFormLoader(true)
const whatsappFormated = data.whatsapp.replace(/[^0-9]/g, '');

const FormatedData = {
    name: data.name,
    email: data.email,
    whatsapp: whatsappFormated,
    }

    axios.post('/', FormatedData)
    .then(() => {
        toast.success('Enviado com sucesso!');
        // alert(JSON.stringify(FormatedData, null, 2));
        reset();
        setFormLoader(false);
    })
    .catch(() => {
        toast.error('Houve um erro em sua tentativa, tente novamente mais tarde!');
        reset();
        setFormLoader(false);
    });
}

return (

<div id="contact" className="flex flex-col justify-center items-center lg:py-20 py-10">
<div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full gap-10'>

    <div className='flex items-center justify-center'>
        <div className="flex flex-col items-center justify-center">
            <div className="p-6 lg:p-0 mr-2 sm:rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-blue-400 lg:text-left font-light text-center lg:text-5xl text-3xl uppercase">
                Entre em contato
                </h3>
                <p className="text-blue-400 mt-5 text-center">
                Preencha este pequeno formulário, que nossos profissionais entrarão em contato.
                </p>
            </div>

            <div className="px-6 lg:px-0 flex flex-col w-full justify-center gap-3 lg:mt-10">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className='flex mb-4'>
                        <li className='w-full'>
                            <div>
                                <input
                                    className='peer border border-blue-400 text-inborder-indigo-700 placeholder:text-inborder-blue-400 focus:border-blue-400 block min-h-[auto] w-full rounded-md py-2 px-3 outline-none shadow-md placeholder:text-blue-400/50 text-blue-400'
                                    type="text"
                                    {...register("name")}
                                    placeholder='Nome'
                                />
                                {errors.name && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>{errors?.name?.message}</p>}
                            </div>
                        </li>
                    </ul>
                    <ul className='flex mb-4'>
                        <li className='w-full'>
                            <div>
                                <input
                                    className='peer border border-blue-400 text-inborder-indigo-700 placeholder:text-inborder-blue-400 focus:border-blue-400 block min-h-[auto] w-full rounded-md py-2 px-3 outline-none shadow-md placeholder:text-blue-400/50 text-blue-400'
                                    type="email"
                                    {...register("email")}
                                    placeholder='E-mail'
                                />
                            </div>
                            {errors.email && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>{errors?.email?.message}</p>}
                        </li>
                    </ul>
                    <ul className='flex mb-4'>
                        <li className='w-full'>
                            <div>
                                <input
                                    className='peer border border-blue-400 text-inborder-indigo-700 placeholder:text-inborder-blue-400 focus:border-blue-400 block min-h-[auto] w-full rounded-md py-2 px-3 outline-none shadow-md placeholder:text-blue-400/50 text-blue-400'
                                    type="text"
                                    {...register("celular")}
                                    placeholder='Celular'
                                />
                            </div>
                        </li>
                    </ul>
                    <ul className='flex pb-20'>
                        <li className='flex w-full justify-end'>
                            <button
                                className='text-white flex items-center justify-center bg-blue-400 focus:ring-4 focus:outline-none rounded-md text-lg p-3 px-6 w-full lg:w-32 text-center disabled:cursor-not-allowed disabled:opacity-50'
                                type='submit'
                                disabled={!isValid}
                            >
                                {formLoader && <img src="/loader.svg" alt="Carregando" width={30} height={20} />}
                                <span>ENVIAR</span>
                                
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
</div>
<ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
    theme="colored"
/>
</div>
);
}