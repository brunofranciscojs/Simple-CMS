import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logar from "../pages/Login/index.jsx";
import Cadastro from "../pages/Cadastro";
import useAuth from "../hooks/useAuth";
import Dashboard from "../pages/Dashboard";

const Private = ({ Item }) =>{
    const { logado } = useAuth();
    return logado > 0 ? <Item /> : <Logar/>;
}

export default function Rotas(){
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/Dashboard" element={<Private Item={Dashboard}/>}/>
                    <Route path="/" element={<Logar/>}/>
                    <Route exact path="/Cadastro" element={<Cadastro/>}/>
                    <Route path="*" element={<Logar/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}