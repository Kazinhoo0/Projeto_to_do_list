import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"
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
                <Route Component={Index} path='/index'></Route>
                <Route Component={Criarnovaconta} path="/criarconta"></Route>
                <Route Component={CriarLembretes} path="/criarlembrete"></Route>
                <Route Component={Settings} path="/settings" ></Route>
                <Route Component={Confirmaremail} path="/confirmaremail"></Route>
                <Route Component={Esquecisenha} path="/recuperarSenha" > </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Rotas