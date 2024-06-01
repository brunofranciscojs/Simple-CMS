import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import '../../index.css';
import useAuth from "../../hooks/useAuth";
import { db } from '../../firebaseConfig';
import Links from './Media';
import Portfolio from './Portfolio';
import Projects from './Projects';
import Icone from './icones';
import Information from './Information'
import Perfil from '../Perfil';
import CloneCollection from './clonar'

export default function Dashboard() {
  const [ativo, setAtivo] = useState('Information')
  const [carregando, setCarregando] = useState(true)
  const {sair} = useAuth()
  const [dados, setDados] = useState([])
  const [data, setData] = useState([])
  const [user, setUser] = useState([])
  const [projects, setProjects] = useState([])
  const [sites, setSites] = useState([])
  const [linqs, setLinqs ] = useState([])
  const [bio, setBio] = useState([])

  useEffect(() => {
    const docData = async () => {
      const projetos = doc(db, "sample", "PkK4lheAJ0LyHhsCJuWx")
      const projetosJson = await getDoc(projetos)

      if (projetosJson.exists()) { 
        setProjects(projetosJson.data()) 
        setTimeout(() =>{ setCarregando(false) },1000)
      }

      const informacoes = doc(db, "sample", "5sOoDCNK2CDnLfT9J2Ml")
      const informacoesJson = await getDoc(informacoes)
      if (informacoesJson.exists()) { 
        setDados(informacoesJson.data()) 
        setTimeout(() =>{ setCarregando(false) },1000)
      }
      
      const ingles = doc(db, "sample2", "nzlxfrZXJJTKc0mV3f2f");
      const inglesjson = await getDoc(ingles);
      if (inglesjson.exists()) { 
        setData(inglesjson.data()) 
        setTimeout(() =>{ setCarregando(false) },1000)
      }

      const dashInfo = doc(db, "sample", "Fmvr6ynDpSEFgZLCINt5")
      const dashInfoJson = await getDoc(dashInfo)
  
      if (dashInfoJson.exists()) {
          const infoData = dashInfoJson.data()
          if (infoData.login) {
              setUser(infoData.login)
          }
      }
    }

    docData()
  }, [])

  const getUserName = () => user.map(item => item.usuario )
  const getSenha = () =>  user.map(item => item.senha )
  const getdataAtualizacao = () => user.map( item => item.dataAtualizacao )

  const mostrarData = new Intl.DateTimeFormat('pt-BR', {day:'2-digit', month:'2-digit', year:'2-digit'}).format(new Date())
  const areas = { Information, Portfolio, Projects, Links, Perfil, CloneCollection }
  const Area = areas[ativo]
  
  return (
      <div className="App w-full relative">
        
        <header className='w-full shadow-xl bg-white fixed top-0 left-0 z-50'>
          <div className='3xl:container px-12 flex justify-between items-center h-20'>
            <h2>Olá <b>{getUserName()} </b>- {mostrarData}</h2> 
            <Icone item={'Preview'} onClick={() =>{window.open('https://brunofrancisco.com.br')}}/>
          </div>
        </header>

        <div className='flex flex-row w-full'>
          <aside className='flex flex-col gap-4 cl:w-[300px] w-[70px] h-[100dvh] bg-gray-700 text-gray-400 pt-20 pb-10 cl:px-10 px-2 duration-75 [&:has(li:hover)_button:hover:before]:opacity-100 justify-between'>
              <ul className='flex flex-col gap-5 py-12 [&:has(li:hover)_li:hover]:text-white [&:has(li)_li]:px-2 [&:has(li)_li]:duration-200 [&:has(li)_li]:cursor-pointer [&:has(li)_li]:flex [&:has(li)_li]:gap-2 [&:has(li)_li]:items-center'>
                
                  <li onClick={() => setAtivo('Information')} >
                    <Icone item={'Information'} />
                    <button className='hidden cl:inline'>Informações</button>
                  </li>

                  <li onClick={() => setAtivo('Portfolio')} >
                    <Icone item={'Portfolio'} />
                    <button className='hidden cl:inline'>Portfolio</button>
                  </li>

                  <li onClick={() => setAtivo('Projects')} >
                    <Icone item={'Projects'} />
                    <button className='hidden cl:inline'>Projetos</button>
                  </li>

                  <li onClick={() => setAtivo('Links')} >
                    <Icone item={'Links'} />
                    <button className='hidden cl:inline'>Links</button>
                  </li>
              </ul>

              <div>
                <span onClick={() => setAtivo('Perfil')} className='flex items-center gap-2'>
                  <Icone item={'Setup'} />
                  <button className='hidden cl:inline'>Configurações</button>
                </span>
                  <br />
                <span className='flex items-center gap-2 translate-x-1' onClick={sair}>
                  <Icone item={'Sair'} />
                  <button className='hidden cl:inline'>Sair</button>
                </span>
              </div>
             
          </aside>

          <section className='bg-gray-100 h-screen px-5 pt-28 pb-10 w-full overflow-y-scroll'>
            <Area content={{
                      dados, data, setDados, setData, projects, linqs, sites, setSites, setLinqs, carregando, setCarregando, bio, setBio, user, setUser, getSenha, getUserName, getdataAtualizacao, mostrarData
              }} />
          </section>
          </div>
        </div>
    )
}

