import './Inputs_CriarNovaConta.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Inputs_CriarNovaConta() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [senha, setSenha] = useState('');
    const [Email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    async function cadastrarUsuario(nome, sobrenome, Email, username, senha) {
        const response = await fetch('http://localhost:5000/criarconta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, sobrenome, Email, username, senha })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Usuário cadastrado com ID:', data.id);

        } else {
            console.error('Erro ao cadastrar usuário');
        }

        setTimeout(() => {
             navigate('/')
            // navigate('/Confirmaremail');
        }, 5000);
    }


    const handleSubmit = (e) => {
        e.preventDefault(); 
        cadastrarUsuario(nome, sobrenome, Email, username, senha); 
        localStorage.setItem('nome' , nome);
        localStorage.setItem('sobrenome', sobrenome);
        localStorage.setItem('email' , Email);
        localStorage.setItem('username' , username);
        localStorage.setItem('senha', senha )
    };

    return (
        <div>
            <div className='container_inputs2'>
                <form id='criarconta' onSubmit={handleSubmit}>
                    <div className='containerinputmargin'>
                        <input
                            type="text"
                            placeholder='insira seu nome*'
                            className='styleinputss'
                            name='nome'
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                    </div>
                    <div className='containerinputmargin'>
                        <input
                            type="text"
                            placeholder='Insira seu sobrenome*'
                            className='styleinputss'
                            name='sobrenome'
                            onChange={(e) => setSobrenome(e.target.value)}
                            value={sobrenome}
                        />
                    </div>
                    <div className='containerinputmargin'>
                        <input
                            placeholder='insira seu Username*'
                            className='styleinputss'
                            type='text'
                            name='username'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                    </div>
                    <div className='containerinputmargin'>
                        <input
                            type="text"
                            name='email'
                            placeholder='Insira o seu email *'
                            className='styleinputss'
                            onChange={(e) => setEmail(e.target.value)}
                            value={Email}
                        />
                    </div>
                    <div className='containerinputmargin'>
                        <input
                            placeholder='Insira sua senha*'
                            type='password'
                            name='senha'
                            className='styleinputss'
                            onChange={(e) => setSenha(e.target.value)}
                            value={senha}
                        />
                    </div>
                    <div className='containerbuttoncriarconta'>
                        <button type='submit' className='button_entrarstylee'>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Inputs_CriarNovaConta;
