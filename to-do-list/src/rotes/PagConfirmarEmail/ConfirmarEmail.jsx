// import Inputs_CriarNovaConta from '../../functionsfrontend/CriarNovaConta_inputs'
import './ConfirmarEmail.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useNavigate } from "react-router-dom";



function Confirmaremail() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    // const [senha, setSenha] = useState('')
    const [Email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [numbercode, setnumber] = useState('')
    const [codigoenviardo, setCodigoenviado] = useState(null)
    const navigate = useNavigate()
    
    


    function EnviarEmail(e) {
        e.preventDefault();
        //  if (nome === "" || Email === "" || sobrenome === "" || username === "" || senha === "") {
        //     alert("Email enviado com sucesso")
        //     return;
        //  }

        let numero = Math.floor(Math.random() * 9999);
        setCodigoenviado(numero);

        const TemplatesParams = {
            from_name: (nome, sobrenome),
            username: (username),
            email: Email,
            message: ("Seu codigo de verificação é " + numero)
        }

        emailjs.send("Verification_todolistweb", "template_451r7i7", TemplatesParams, '3iY_SH8IRchtTAW2R')
            .then((response) => {
                console.log('Email enviado', response.status, response.text)
                setUsername('')
                setNome('')
                setEmail('')
                setSobrenome('')
            },
                (error) => {
                    console.log("Error", error)
                }
            )

        console.log("Codigo enviado com sucesso!")
    }



    function EnviarCodigo (e) {
        e.preventDefault()
    if ((codigoenviardo) === parseInt(numbercode)) {
        console.log('Email confirmado com sucesso!');

        
        setTimeout(() => {
            navigate('/')
        }, 3000);
       
    }
    else {
        console.log('O Codigo inserido é inválido')
    }
    
    }

    


    return (
        <>
            <div className="container" >

                <div className="container_form" >
                    <form onSubmit={EnviarEmail} >
                        <h2>Confirmação de email</h2>
                        <h4>Insira o número enviado para o seu email</h4>
                        <h4 className='tittle_enviarcodigo' >Clique para enviar o código de confirmar</h4>
                        <div className='button_enviarcodigo' >
                            <button className='style_buttonenviarcodigo' onClick={EnviarEmail} >Solicitar Código</button>
                        </div>
                    </form>
                    <form onSubmit={EnviarCodigo}  >
                        <div className='containerinput'>
                            <input
                                type="text"
                                className='inputstyle'
                                placeholder='Insira o código aqui*'
                                onChange={(e) => setnumber(e.target.value)}
                            />


                            <div className='container_buttonenviar'>
                                <button
                                    onClick={EnviarCodigo} className='style_buttonenviar'
                                >Enviar</button>

                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Confirmaremail