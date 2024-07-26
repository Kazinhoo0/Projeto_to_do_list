import React from "react";
import {Route,Routes, BrowserRouter} from "react-router-dom"
import Index from "./Index";
import Criarnovaconta from './CriarNovaConta'
import CriarLembretes from './CriarLembretes'
import Login from './Login'
import Settings from "./Settings";
import Confirmaremail from "./PagConfirmarEmail/ConfirmarEmail";
import Esquecisenha from "./Esquecisenha";




const Rotas = () => {

    return (

        <BrowserRouter>
        <Routes>
            <Route Component={Login} path='/' exact ></Route>
            <Route Component={Index} path='/Index'></Route>
            <Route Component={Criarnovaconta} path="/Criarconta"></Route>
            <Route Component={CriarLembretes} path="/Criarlembrete"></Route>
            <Route Component={Settings} path="/Settings" ></Route>
            <Route Component={Confirmaremail} path="/Confirmaremail"></Route>
            <Route Component={Esquecisenha} path="/Inputesquecisenha" > </Route>
        </Routes>
        </BrowserRouter>

    )
}

export default Rotas