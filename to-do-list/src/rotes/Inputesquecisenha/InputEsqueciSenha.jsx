import { useState } from "react"
import './InputEsqueciSenha.css'
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import emailjs from 'emailjs-com';



function Inputesquecisenha() {

    const [email, setEmail] = useState('')


    const navigate = useNavigate('')


    const navegar_redefinirsenha = () => {
        navigate('/RedefinirSenha')
    }

    const handsendinf = (e) => {
        e.preventDefault()
        setTimeout(() => {
            if (email === "") {
                alert("Porfavor, Insira o seu email!")
                return;
            }
            
            const TemplatesParams = {
                email: email,
                message: ("Clique no link para redefinir sua senha " + "linkaqui")

            }
            console.log(navegar_redefinirsenha)

            emailjs.send("Verification_todolistweb", "template_m2qws8w", TemplatesParams, '3iY_SH8IRchtTAW2R')
                .then((response) => {
                    console.log('Email enviado', response.status, response.text)
                    setEmail('')



                },
                    (error) => {
                        console.log("Error", error)
                    }
                )


            navigate('/RedefinirSenha')
        }, 5000);


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
                                placeholder="Insira seu email*"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" className="style_sendbutton" ><IoMdSend /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Inputesquecisenha