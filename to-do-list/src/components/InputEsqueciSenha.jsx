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
        <div className="container_pageredefinirsenha">
            <div className="container_filho_paginaredefinirsenha">
                <div className="container_tittle_paginaredefinirsenha">
                    <h2>REDEFINIR SENHA</h2>
                </div>
                <div className="container_inputs_pageredefinirsenha">
                    <div style={{ height: '100px', alignContent: "center", justifyContent: 'center', display: 'flex' }}>

                        <small style={{ marginTop: '40px', fontSize: '20px', color: 'grey', marginLeft: '20px' }}>Insira o seu email para recuperar a senha</small>


                    </div>
                    <div style={{ height: '200px', justifyContent: 'center', display: 'flex', alignContent: 'center', marginTop: '40px' }}>


                        <input style={{ color: 'white', backgroundColor: 'rgb(59, 56, 56)', borderRadius: '10px', borderTopRightRadius: '0px', borderBottomRightRadius: '0px', border: 'none', width: '300px', height: '30px' }} placeholder="Insira seu email*" type="email" />

                        <button className="style_buttonenviar_pageredefinirsenha">Enviar</button>
                    </div>


                </div>

            </div>
        </div >
    )
}


export default Inputesquecisenha