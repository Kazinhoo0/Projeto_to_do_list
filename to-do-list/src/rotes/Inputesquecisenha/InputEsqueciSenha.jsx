import { useState } from "react"
import './InputEsqueciSenha.css'
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { IoMdSend } from "react-icons/io";


function Inputesquecisenha() {

    const [username, setUsername] = useState('')


    const navigate = useNavigate('')


    const handsendinf = (e) => {
        e.preventDefault()
        navigate('/RedefinirSenha')

    }

    function backpaglogin() {
        navigate('/')
    }


    return (
        <div className="container">
            <div className="container_inputs">
                <h2>Redefinir Senha</h2>
                <div className="style_containerlinknavigate" >
                    <a className="style_linknavigate" onClick={backpaglogin}><GoArrowLeft /></a>
                </div>
                <div className="container_filho_input">
                    <form onSubmit={handsendinf} >
                        <div className="container_inputusername" >
                            <p className="style_paragraforedefinirsenha" >Insira seu email abaixo, e você receberá um código de verificação.</p>
                            <input
                                className="style_inputusername"
                                type="text"
                                placeholder="Insira seu Username para recuperação"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <button className="style_sendbutton" onClick={handsendinf} ><IoMdSend /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Inputesquecisenha