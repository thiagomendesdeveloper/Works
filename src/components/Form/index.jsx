import React from 'react'
import { useForm } from 'react-hook-form'
// import { useState } from 'react'
import { Form } from './style'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function Uform(){

    const schema = yup.object().shape({
        name: yup.string().min(2, 'Digite no Mínimo dois caracteres').required(),
        email: yup.string().email('Digite um email válido').required("Campo Obrigatório"),
        telefone: yup.number().typeError('Digite um valores Numéricos').required("Campo Obrigatório").min(5, "Digite no mínimo 5 numeros"),
        mensagem: yup.string().min(2, "Digite no Mínimo 2 Caracteres")
    })

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    // ------------- hook useStarte
    // const [data , setData] = useState({
    //     name:"",
    //     email:"",
    //     telefone:"",
    //     mensagem:""
    // })

    // const Teste = function onChange(e){
    //     setData({ ...data , [e.target.name]: e.target.value })
    //     console.log(e.target.name);
    //     console.log(data);
    // }

    return(
        <Form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit(onSubmit)} >
            <input type="text" placeholder="Nome" name="name" {...register('name')} /> 
            <p>{errors.name?.message}</p>
            <input type="email" placeholder="Email"  name="email" {...register('email')} />
            <p>{errors.email?.message}</p>
            <input type="text" placeholder="Telefone" name="telefone" {...register('telefone')} />
            <p>{errors.telefone?.message}</p>
            <textarea name="mensagem" placeholder="Mensagem" cols="30" rows="10" {...register('mensagem')} ></textarea>
            <input type="hidden" name="form-name" value="contact"></input>
            <p>{errors.mensagem?.message}</p>
            <button type="submit">Enviar</button>
        </Form>
    )
}