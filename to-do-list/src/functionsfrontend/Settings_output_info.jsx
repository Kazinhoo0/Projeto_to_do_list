import { useState } from "react"
import Inputs_CriarNovaConta from "./CriarNovaConta_inputs"


function Settings_Output() {


    const [nome, setNome] = useState('a')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [sobrenome, setSobrenome] = useState('')

    return (
        <>
        <Inputs_CriarNovaConta setNome={setNome} setSenha={setSenha} setEmail={setEmail} setSobrenome={setSobrenome} setUsername={setUsername} nome={nome} />

            <div className='container_inputs'>

                <div>
                    <br />
                    <label htmlFor="nome">Nome:</label>
                    <span id="nome">{nome}</span>
                </div>
                <div>
                    <br />
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <span>{sobrenome}</span>
                </div>
                <div>
                    <br />
                    <label htmlFor="username">Username:</label>
                    <span>{username}</span>
                </div>
                <div>
                    <br />
                    <label htmlFor="email">Email:</label>
                    <span>{email}</span>
                </div>
                <div>
                    <br />
                    <label htmlFor="senha">Senha:</label>
                    <span>{senha}</span>
                </div>


            </div>

            

        </>
    )


}

export default Settings_Output