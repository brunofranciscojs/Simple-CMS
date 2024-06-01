import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Logar() {
    const navigate = useNavigate()
    const { cadastro } =  useAuth()
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()
    const [erro, setErro] = useState()

    const cadastrar = async () =>{
        if(!usuario | !senha) {
            setErro('Insira nome de usuário e senha desejados')
            return
        }
        if(await cadastro(usuario, senha)){
            setErro(await cadastro(usuario, senha))
            return
        }
        document.querySelector('em').className = 'text-green-500'
        setErro('Cadastro bem sucedido')
        setTimeout(() =>{
            navigate('/Dashboard')
        },600)
    }
    return (
        <div className="container mx-auto py-10 absolute top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4 px-5 text-green-500">
            <h2 className="text-center text-gray-600">CADASTRO PARA EDITAR PORFOLIO</h2> <br />
            <div className="flex flex-col gap-5 justify-center">
                <input type="text" placeholder="nome de usuário" className="px-5 py-2 rounded-xl" onChange={(e) => [setUsuario(e.target.value), setErro('')]}/>
                <input type="password" placeholder="senha" className="px-5 py-2  rounded-xl" onChange={(e) => [setSenha(e.target.value), setErro('')]}/>

                <em className="text-red-600">{erro}</em>
                <input type="submit" value="cadastrar" onClick={cadastrar}
                    className="bg-gray-600 text-white py-3 rounded-2xl border-2 border-gray-600 border-solid duration-200
                        hover:boder-gray-600 hover:bg-transparent hover:text-gray-600 cursor-pointer"/>
                
                <small className="text-gray-600">já tem cadastro? <span className="text-blue-600 text-center underline"><Link to="/">entrar</Link></span></small>
            </div>
        </div>
    )
}