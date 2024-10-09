import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Index from "../screens/Index";
import Criarnovaconta from '../screens/CriarNovaConta'
import EditarLembretes from '../screens/EditarLembretes'
import Login from '../screens/Login'
import Settings from "../screens/Settings";
import Confirmaremail from "../PagConfirmarEmail/ConfirmarEmail";
import Esquecisenha from "../components/InputEsqueciSenha";
import RedefinirSenha from "../Inputesquecisenha/RedefinirSenha";
import CriarLembretes from '../screens/CriarLembretes'






const Rotas = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route Component={Login} path='/' exact ></Route>
                <Route Component={Index} path='/index'></Route>
                <Route Component={Criarnovaconta} path="/criarconta"></Route>
                <Route Component={CriarLembretes} path="/index/criarlembretes"></Route>
                <Route Componente={EditarLembretes} path="/editarlembretes  "></Route>
                <Route Component={Settings} path="/settings" ></Route>
                <Route Component={Confirmaremail} path="/confirmaremail"></Route>
                <Route Component={Esquecisenha} path="/esquecisenha" > </Route>
                <Route Component={RedefinirSenha} path='/RedefinirSenha'> </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Rotas