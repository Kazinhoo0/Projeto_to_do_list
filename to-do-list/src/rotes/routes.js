import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Index from "./Index";
import Criarnovaconta from './CriarNovaConta'
import EditarLembretes from './EditarLembretes'
import Login from './Login'
import Settings from "./Settings";
import Confirmaremail from "./PagConfirmarEmail/ConfirmarEmail";
import Esquecisenha from "./Inputesquecisenha/InputEsqueciSenha";
import RedefinirSenha from "./Inputesquecisenha/RedefinirSenha";




const Rotas = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route Component={Login} path='/' exact ></Route>
                <Route Component={Index} path='/index'></Route>
                <Route Component={Criarnovaconta} path="/criarconta"></Route>
                <Route Component={EditarLembretes} path="/EditarLembretes"></Route>
                <Route Component={Settings} path="/settings" ></Route>
                <Route Component={Confirmaremail} path="/confirmaremail"></Route>
                <Route Component={Esquecisenha} path="/esquecisenha" > </Route>
                <Route Component={RedefinirSenha} path='/RedefinirSenha'> </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Rotas