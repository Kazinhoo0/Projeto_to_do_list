import Inputs_CriarNovaConta from '../../functionsfrontend/CriarNovaConta_inputs'
import './ConfirmarEmail.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

    


function Confirmaremail() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [senha, setSenha] = useState('')
    const [Email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [numbercode, setnumber] = useState('')

    let numero = Math.floor(Math.random() * 9999);


    function EnviarEmail(e) {
        e.preventDefault();
        // if (nome === "" || Email === "" || sobrenome === "" || username === "" || senha === "") {
        //     alert("Porfavor, preencha todos os campos obrigatórios")
        //     return;
        // }

        const TemplatesParams = {
            from_name: (nome, sobrenome),
            email: Email,
            message: ("Seu codigo de verificação é " + numero)

        }
        console.log(numero)

        emailjs.send("Verification_todolistweb", "template_451r7i7", TemplatesParams, '3iY_SH8IRchtTAW2R')
            .then((response) => {
                console.log('Email enviado', response.status, response.text)
                setUsername('')
                setNome('')
                setEmail('')
                setSobrenome('')
                setSenha('')
            },
                (error) => {
                    console.log("Error", error)
                }
            )

         console.log("Codigo enviado com sucesso!")   
    }






    return (
        <>
            <div className="container" >

                <div className="container_form" >
                    <form>
                        <h2>Confirmação de email</h2>
                        <h4>Insira o número enviado para o seu email:</h4>

                        <div className='button_enviarcodigo' >
                            <button onClick={EnviarEmail} >Enviar Código</button>
                        </div>
                    </form>
                    <form>     
                        <div className='containerinput'>
                            <input
                                type="text"
                                className='inputstyle'
                                id='inputnumero'
                                onChange={(e) => setnumber(e.target.value)} 
                                />

                        </div>
                        <div className='button_enviarcodigo'>
                            <button className='style_buttonenviarcodigo' >Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Confirmaremail