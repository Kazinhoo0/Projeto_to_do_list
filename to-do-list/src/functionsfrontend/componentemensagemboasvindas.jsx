import { useState } from "react"
import InputUsernameLogin from "./Loginusernameinput"
import MensagemBoasVindas from './MensagemBoasvinda'



function Componentemensagemboasvindas () {

        const [username, setUsuario] = useState('')
    return (
        <>
            <InputUsernameLogin setUsername = {setUsuario} />
            <MensagemBoasVindas usuario = {username} />

        </>
    )
}

export default Componentemensagemboasvindas