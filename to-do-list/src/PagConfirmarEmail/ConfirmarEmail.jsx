// import Inputs_CriarNovaConta from '../../functionsfrontend/CriarNovaConta_inputs'
import './ConfirmarEmail.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { IoIosExit } from "react-icons/io";




function Confirmaremail() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    // const [senha, setSenha] = useState('')
    const [Email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [numbercode, setnumber] = useState('')
    const [codigoenviardo, setCodigoenviado] = useState(null)
    const navigate = useNavigate()

    


    const EnviarEmail = async (e) => {
        e.preventDefault();



        let numero = Math.floor(Math.random() * 9999);
        setCodigoenviado(numero);



        const to = 'testesemailtestes61@gmail.com'
        const subject = 'Email teste recebeu ?'
        const text = 'Seu código de verificação é ${numero}'






        setCodigoenviado(numero);

        const response = await fetch('http://localhost:5000/Confirmaremail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ to, subject, text })

        });

        const data = await response.json();
        if (data.success) {
            console.log('Email enviado com sucesso:', data.info);
        } else {
            console.error('Erro ao enviar email:', data.error);
        }


    }

    const enviarCodigo = (e) => {
        e.preventDefault();
        if (codigoenviardo === parseInt(numbercode)) {
            console.log('Email confirmado com sucesso!');
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } else {
            console.log('O Código inserido é inválido');
        }
    }


    function handlenavigatelogin () {
        navigate('/')
    }


    return (
        <>
            <div className="container" >

                <div className="container_form" >
                    <a onClick={handlenavigatelogin}><IoIosExit/></a>
                    <form onSubmit={EnviarEmail} >
                        <h2>Confirmação de email</h2>
                        <h4>Insira o número enviado para o seu email</h4>
                        <h4 className='tittle_enviarcodigo' >Clique para enviar o código de confirmar</h4>
                        <div className='button_enviarcodigo' >
                            <button className='style_buttonenviarcodigo' onClick={EnviarEmail} >Solicitar Código</button>
                        </div>
                    </form>
                    <form onSubmit={enviarCodigo}  >
                        <div className='containerinput'>
                            <input
                                type="text"
                                className='inputstyle'
                                placeholder='Insira o código aqui*'
                                onChange={(e) => setnumber(e.target.value)}
                            />


                            <div className='container_buttonenviar'>
                                <button
                                    onClick={enviarCodigo} className='style_buttonenviar'
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