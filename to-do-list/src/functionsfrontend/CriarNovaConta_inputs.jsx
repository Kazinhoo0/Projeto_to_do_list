
import './CriarNovaConta_inputs.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Inputs_CriarNovaConta() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [senha, setSenha] = useState('')
    const [Email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()


    // let numero = Math.floor(Math.random() * 9999);
    // const [number, setNumero] = useState('')
    // number = props



    // function EnviarEmail(e) {
    //     e.preventDefault();
    //     if (nome === "" || Email === "" || sobrenome === "" || username === "" || senha === "") {
    //         alert("Porfavor, preencha todos os campos obrigatórios")
    //         return;
    //     }

    //     const TemplatesParams = {
    //         from_name: nome,
    //         email: Email,
    //         message: ("Seu codigo de verificação é " + numero)

    //     }
    //     console.log(numero)

    //     emailjs.send("Verification_todolistweb", "template_451r7i7", TemplatesParams, '3iY_SH8IRchtTAW2R')
    //         .then((response) => {
    //             console.log('Email enviado', response.status, response.text)
    //             setUsername('')
    //             setNome('')
    //             setEmail('')
    //             setSobrenome('')
    //             setSenha('')
    //             navigate('/Confirmaremail')
    //             setNumero(numero)
    //         },
    //             (error) => {
    //                 console.log("Error" , error)
    //             }
    //         )

    // }
    
    function Transportarpagina () {
        navigate('/Confirmaremail')
    }

    return (

        <form id='criarconta' onSubmit={Transportarpagina} >
            <div className='containerinputmargin'  >
                <label className='stylelabel' htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    placeholder='insira seu nome*'
                    className='styleinputs'
                    name='nome'
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                />
            </div>
            <div className='containerinputmargin ' >
                <label className='stylelabel' htmlFor="sobrenome">Sobrenome:</label>
                <input
                    type="text"
                    placeholder='Insira seu sobrenome*'
                    className='styleinputs'
                    name='sobrenome'
                    onChange={(e) => setSobrenome(e.target.value)}
                    value={sobrenome}
                />
            </div>
            <div className='containerinputmargin '>
                <label className='stylelabel' htmlFor="username">Username:</label>
                <input
                    placeholder='insira seu login*'
                    className='styleinputs'
                    type='text'
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                ></input>
            </div>
            <div className='containerinputmargin ' >
                <label className='stylelabel' htmlFor="email">Email:</label>
                <input
                    type="email"
                    name='email'
                    placeholder='Insira o seu email *'
                    className='styleinputs'
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                />

            </div>
            <div className='containerinputmargin '>
                <label className='stylelabel' htmlFor="senha">Senha:</label>
                <input
                    placeholder='Insira sua senha*'
                    type='password'
                    name='senha'
                    className='styleinputs'
                    onChange={(e) => setSenha(e.target.value)}
                    value={senha}
                />
            </div>

            <div className='containerbuttonentrar'>
                <button onClick={Transportarpagina} className='buttonentrarstyle' >Entrar</button>
            </div>


        </form>
    )
}


export default Inputs_CriarNovaConta