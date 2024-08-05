
import './Inputs_CriarNovaConta.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com'


function Inputs_CriarNovaConta() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [senha, setSenha] = useState('')
    const [Email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()



    function Transportarpagina(e) {

        e.preventDefault();
        setTimeout(() => {
            navigate('/Confirmaremail')
        }, 5000);
    }



    return (
        <div>
            <div className='container_inputs2'>
                <form id='criarconta' onSubmit={Transportarpagina} >
                    <div className='containerinputmargin'  >
                        <input
                            type="text"
                            placeholder='insira seu nome*'
                            className='styleinputss'
                            name='nome'
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                    </div>
                    <div className='containerinputmargin ' >
                        <input
                            type="text"
                            placeholder='Insira seu sobrenome*'
                            className='styleinputss'
                            name='sobrenome'
                            onChange={(e) => setSobrenome(e.target.value)}
                            value={sobrenome}
                        />
                    </div>
                    <div className='containerinputmargin '>
                        <input
                            placeholder='insira seu Username*'
                            className='styleinputss'
                            type='text'
                            name='username'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        ></input>
                    </div>
                    <div className='containerinputmargin ' >
                        <input
                            type="email"
                            name='email'
                            placeholder='Insira o seu email *'
                            className='styleinputss'
                            onChange={(e) => setEmail(e.target.value)}
                            value={Email}
                        />

                    </div>
                    <div className='containerinputmargin '>
                        <input
                            placeholder='Insira sua senha*'
                            type='password'
                            name='senha'
                            className='styleinputss'
                            onChange={(e) => setSenha(e.target.value)}
                            value={senha}
                        />
                    </div>


                </form>
            </div>
            <div className='containerbuttoncriarconta'>
                <button onClick={Transportarpagina} className='button_entrarstylee' >Cadastrar</button>
            </div>
        </div>

    )
}


export default Inputs_CriarNovaConta