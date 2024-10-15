import '..//App.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Toastify from 'toastify-js';

function Inputs_CriarNovaConta() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    async function cadastrarUsuario() {

        const response = await fetch('https://projeto-to-do-list-2.onrender.com/criarconta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, sobrenome, email, username, senha })
        });


        if (!nome || !sobrenome || !email || !senha || !username) {
            Toastify({
                text: 'Porfavor preencha todos os campos!',
                position: 'center',
                style: {
                    background: '#db2d0e',
                    color: '#ffffff',
                    width: '250px',
                    height: '150px'
                }
            }).showToast();
            return
        }


        if (response.ok) {

            const data = await response.json();
            console.log('Usuário cadastrado com ID:', data.id);
            Toastify({
                text: 'Bem vindo ao to-do-list!',
                position: 'center',
                style: {
                    background: '#33ff00',
                    color: '#ffffff',
                    width: '250px',
                    height: '150px'
                }
            }).showToast();

            setTimeout(() => {
                navigate('/')
            }, 2000)

        } else {

            console.error('Erro ao cadastrar usuário');
            Toastify({
                text: 'Erro ao criar sua conta!',
                position: 'center',
                style: {
                    background: '#db2d0e',
                    color: '#ffffff',
                    width: '250px',
                    height: '150px'
                }
            }).showToast();
        }

    }

    const NavigateLogin = () => {
        navigate('/')
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        cadastrarUsuario(nome, sobrenome, email, username, senha);
        localStorage.setItem('nome', nome);
        localStorage.setItem('sobrenome', sobrenome);
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha)
    };

    return (

        <div className='container_inputs_pagcriarconta'>
            <form className='formu_style' id='criarconta' onSubmit={handleSubmit}>
                <div className='containerinputmargin_pagcriarnovaconta'>

                    <input
                        type="text"
                        placeholder='insira seu nome*'
                        className='styleinputs'
                        name='nome'
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                    />

                    <input
                        type="text"
                        placeholder='Insira seu sobrenome*'
                        className='styleinputs'
                        name='sobrenome'
                        onChange={(e) => setSobrenome(e.target.value)}
                        value={sobrenome}
                    />

                    <input
                        placeholder='insira seu Username*'
                        className='styleinputs'
                        type='text'
                        name='username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />

                    <input
                        type="email"
                        name='email'
                        placeholder='Insira o seu email *'
                        className='styleinputs'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <input
                        placeholder='Insira sua senha*'
                        type='password'
                        name='senha'
                        className='styleinputs'
                        onChange={(e) => setSenha(e.target.value)}
                        value={senha}
                    />


                    <button className='style_buttonentrarpaglogin' >Criar conta</button>

                    <div className='container_esquecisenha_criarconta'>
                        <div>
                            <a onClick={NavigateLogin} className='style_esquecisenha'>Já tem uma conta ?</a>
                        </div>
                    </div>
                </div>


            </form>
        </div>

    );
}

export default Inputs_CriarNovaConta;
