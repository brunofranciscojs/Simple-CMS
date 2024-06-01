import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
import EditButton from "../../editButton";

export default function Perfil({ content:{ user, setUser, mostrarData }}){

    const getUserName = () => user.map( item => item.usuario )
    const getSenha = () => user.map( item => item.senha )
    const getdataAtualizacao = () => user.map( item => item.dataAtualizacao )

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState()
    const {updateInfo} = useAuth()
    const [dataAtualizacao, setDataAtualizacao] = useState(mostrarData)

    const atualizar = async () =>{
        if(await updateInfo(usuario, senha, dataAtualizacao)){
            setErro(await updateInfo(usuario, senha, dataAtualizacao))
            return
        }
        setErro('Alterações salvas!')
        setDataAtualizacao(mostrarData)
    }
    return(
        <>
        <div className="flex flex-col gap-3 max-w-[600px]" id="config">
            <label className="w-full">
                <legend className="text-sm leading-none self-center">Nome de usuario</legend>
                <input type="text"  className="px-5 py-2 rounded-xl border-[2px] border-gray-300 w-full focus:border-blue-400  bg-gray-100 font-normal mr-4" 
                                    value={[usuario == '' ? getUserName() : usuario]} disabled
                                    onChange={(e) => [setUsuario(e.target.value)]}/>
                <EditButton className="pointer-events-none opacity-40"/>
            </label>

            <label className="w-full">
                <legend className="text-sm leading-none self-center">Senha do usuario</legend>
                <input type="password" value={[senha == '' ? getSenha() : senha]} disabled className="px-5 py-2  rounded-xl border-[2px] border-gray-300 w-full focus:border-blue-400  bg-gray-100 font-normal mr-4"
                        onChange={(e) => [setSenha(e.target.value), document.querySelector('input[type=text]').value = setUsuario(document.querySelector('input[type=text]').value)]} />
                <EditButton/>
            </label>
            <br />
            <em className="text-sm self-end text-gray-600"><small>última atualização:{getdataAtualizacao()}</small></em>
            <button onClick={atualizar} className="bg-gray-700 px-5 py-2 text-white rounded-lg self-end">SALVAR</button>
            <em className="self-end">{erro}</em>
        </div>
        </>
    )
}