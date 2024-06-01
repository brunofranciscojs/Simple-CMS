import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Logar() {
    const navigate = useNavigate()
    const {logar} = useAuth()
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()
    const [erro, setErro] = useState()

    const entrar = async () =>{
        if(!usuario | !senha){
            setErro('Insira as credenciais')
            return
        }
        if(await logar(usuario, senha)){
            setErro(await logar(usuario, senha))
            return
        }
        navigate(`/Dashboard`)
    }

    return (
        <div className="container mx-auto py-10 absolute top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4 px-5 ">
            <h2 className="text-center">LOGAR PARA EDITAR PORFOLIO</h2> <br />
            <div className="flex flex-col gap-5 justify-center">
                <input type="name" placeholder="usuário" className="px-5 py-2 rounded-xl" onChange={(e) => [setUsuario(e.target.value), setErro('')]}/>
                <div className='relative w-full'>
                    <input type="password" placeholder="senha" className="px-5 py-2 rounded-xl w-full" onChange={(e) => [setSenha(e.target.value), setErro('')]}/>
                    <i className='absolute right-0 top-1/2 -translate-y-2/4 pr-5 saturate-0 opacity-40 cursor-pointer active:opacity-100' 
                            onMouseDown={(e) =>{ e.target.previousElementSibling.setAttribute('type','text') }} 
                            onMouseUp={(e) =>{ e.target.previousElementSibling.setAttribute('type','password') }}
                            >👁</i>
                </div>
                <small className="text-red-400">{erro}</small>
                <input type="submit" value="entrar" onClick={entrar}
                    className="bg-gray-600 text-white py-3 rounded-2xl  border-2 border-gray-600 border-solid duration-200
                        hover:boder-gray-600 hover:bg-transparent hover:text-gray-600 cursor-pointer"/>
            </div>
        </div>
    )
}