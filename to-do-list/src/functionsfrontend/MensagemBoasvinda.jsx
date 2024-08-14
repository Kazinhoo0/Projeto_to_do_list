import { useState } from "react"
import InputUsernameLogin from "./InputUsernameLogin";



function MensagemBoasVindas() {

    const [username, setUsername] = useState('');

    return (

        <>
            <div className='mensagem_bemvindo' >
                <InputUsernameLogin setUsername={setUsername} />
                <p className='mensagem_bemvindo' >Olá,{username}
                    <br></br>Bem-vindo</p>
            </div>

        </>
    )
}

export default MensagemBoasVindas