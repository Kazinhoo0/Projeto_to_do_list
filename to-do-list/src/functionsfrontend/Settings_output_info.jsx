import { useState } from "react"
import Inputs_CriarNovaConta from "./Inputs_CriarNovaConta"
import { useEffect } from "react";


function Settings_Output() {


    const[userdata, setUserData] = useState('');


    useEffect(() => {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        const sobrenome = localStorage.getItem('sobrenome');
        const nome = localStorage.getItem('nome');
        const senha = localStorage.getItem('senha')

        setUserData({
            username: username || '',
            email: email || '',
            sobrenome : sobrenome || '',
            senha : senha || '',
            nome: nome || ''
        })
    })




    return (
        <>

            <div className='container_inputs'>

                <div>
                    <br />
                    <label htmlFor="nome">Nome:</label>
                    <span id="nome">{userdata.nome}</span>
                </div>
                <div>
                    <br />
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <span>{userdata.sobrenome}</span>
                </div>
                <div>
                    <br />
                    <label htmlFor="username">Username:</label>
                    <span>{userdata.username}</span>
                </div>
                <div>
                    <br />
                    <label htmlFor="email">Email:</label>
                    <span>{userdata.email}</span>
                </div>
                <div>
                    <br />
                    <label htmlFor="senha">Senha:</label>
                    <span>{userdata.senha}</span>
                </div>


            </div>



        </>
    )


}

export default Settings_Output