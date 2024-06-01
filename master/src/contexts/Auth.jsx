import React, { createContext, useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState()
    const [infos, setInfos] = useState([])

    const [logado, setLogado] = useState(() => {
        const savedLogado = localStorage.getItem('logado');
        return savedLogado ? JSON.parse(savedLogado) : 0;
    })
    
    useEffect(() => {
        const loginInfos = async () => {
            const data = doc(db, "sample", "Fmvr6ynDpSEFgZLCINt5");
            const json = await getDoc(data);

            if (json.exists()) {
                const infoData = json.data();
                if (infoData.login) {
                    setInfos(infoData.login);
                }
            }
        };
        loginInfos();
    }, []);

    useEffect(() =>{
        const token = localStorage.getItem('token')
        const bancoDados = localStorage.getItem('bancoDados')

        if(token && bancoDados){
            const sucesso = JSON.parse(bancoDados)?.filter(
                (user) => user.usuario === JSON.parse(token).usuario)
        
            if(sucesso) setUser(sucesso[0])
        }
    },[])

    const logar = async (usuario, senha) =>{
        const bancoDados = infos
        const sucesso = bancoDados?.filter((user) => user.usuario === usuario)
        if(sucesso?.length){
            if(sucesso[0].usuario === usuario && sucesso[0].senha === senha){
                    const token = Math.random().toString(36).substring(2)
                    localStorage.setItem('token', JSON.stringify({usuario,token}))
                    setUser({ usuario, senha })
                    setLogado(1)
                    localStorage.setItem('logado', JSON.stringify(1))
                    return
                }else{
                    return 'Usuário ou senha errados'
                }
            }else{
                return 'Usuário sem conta'
            }
        }

    const cadastro = async (usuario, senha) =>{
        const bancoDados = infos
        const sucesso = bancoDados?.filter((user) => user.usuario === usuario)

        if(sucesso?.length){
            return 'Usuário já cadastrado'
        }
        let login = []

        if(bancoDados){
            login = [...bancoDados, {usuario, senha}]
        }else{
            login.usuario = [{usuario}]
            login.senha = [{senha}]
        }
        
        const sample = doc(db, "sample", "Fmvr6ynDpSEFgZLCINt5");
        await updateDoc(sample, {login})      
        setInfos(login)
        localStorage.setItem('bancoDados', JSON.stringify(login))  
        return
    }
    const updateInfo = async (usuario, senha, dataAtualizacao) =>{        
        let login = []
        login = [{senha, usuario, dataAtualizacao}]
        
        const sample = doc(db, "sample", "Fmvr6ynDpSEFgZLCINt5");
        await updateDoc(sample, {login})      
        return
        
    }
    const sair = () =>{
        setLogado(0)
        setUser(null)
        localStorage.removeItem('logado')
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{user, logged: !!user, logar, cadastro, sair, updateInfo, logado }}>
            {children}
        </AuthContext.Provider>
    )
  
}


    
        
    
