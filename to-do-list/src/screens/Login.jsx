import { useState } from 'react'
import ImagemCalendario from '../imagens/agendamento.png'
import ImagemGithub from '../imagens/icons8-github-30.png'
import ImagemLinkedin from '../imagens/Linked_img.png'
import ImagemPortifólio from '../imagens/Portifólio_img.png'
import CriarNovaConta from './CriarNovaConta'
import '..//App.css'
// import InputUsernameLogin from '../functionsfrontend/InputUsernameLogin'
import { useNavigate } from "react-router-dom";
import Toastify from 'toastify-js';




function To_Do_List() {

  const navigate = useNavigate('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')



  // Esta variável navega para a página criarconta
  const handlenavigate = () => {
    navigate('/Criarconta')
  }

  // Esta variável navega para a página esquecisenha
  const navigateesquecisenha = () => {
    navigate('/esquecisenha')
  }


  // Esta função faz a validação do login do usuário,verificando o username e senha, no browser ele pede o input do email também, mas não está incluso na validação.
  // esta requisição faz o uso de um metedo 'post' com o servidor express, no arquivo 'server.js'.

  const handleenteraccount = async (event) => {
    event.preventDefault();

    const response = await fetch('https://projeto-to-do-list-2.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })

    });

    const data = await response.json();

    if (!email || !senha) {
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
    }

    console.log(data)


    if (data.success) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      localStorage.setItem('id_usuario', data.id);

      console.log(data.username)

      Toastify({
        text: 'Login efetuado com sucesso!',
        position: 'center',
        style: {
          background: '#33ff00',
          color: '#ffffff',
          width: '250px',
          height: '150px'
        }
      }).showToast();

      setTimeout(() => {
        navigate('/index')
      }, 2000);

    } else {
      Toastify({
        text: 'Usuário não cadastrado, porfavor crie uma conta!',
        position: 'center',
        style: {
          background: '#db2d0e',
          color: '#ffffff',
          width: '250px',
          height: '150px'
        }
      }).showToast();
    }

  };


  return (
    <div className='container'>

      <div className='cabecalhostyle'>
        <h1>TO-DO-LIST</h1>
        <img className='Imgstyle_criarconta' src={ImagemCalendario} alt="" />
      </div>

      <div className='container_principallogin' >

        <div className='container_inputsforlogin'>

          <div className='container_tittlefacalogin'>
            <h3>Faça Login</h3>
          </div>

          <div className='container_princinputslogin'>
            <form>
              <div className='containerinputmargin'>
                <input
                  type="email"
                  name='email'
                  placeholder='Insira seu email*'
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
                  value={senha} />

                <button onClick={handleenteraccount} className='style_buttonentrarpaglogin' >Entrar</button>

              </div>

            </form>

            <div className='container_esquecisenha_criarconta_paglogin' >

              <a onClick={navigateesquecisenha} className='style_esquecisenhaandcriarconta'>esqueceu sua senha?</a>

              <a onClick={handlenavigate} className='style_esquecisenhaandcriarconta'>criar conta</a>

            </div>

          </div>

        </div>

      </div>


      <div className='container_sitesbuttons_style' >
        {<button id="popupid" className="buttonstyle" onClick={() => { window.open("https://kaualopesmonteiro.netlify.app/") }} type="button"><img className='popupsstyle' src={ImagemPortifólio} alt="" /></button>}

        {<button className="buttonstyle" onClick={() => { window.open("https://www.linkedin.com/in/kau%C3%A3-lopes-monteiro/") }} type="button"><img className='popupsstyle' src={ImagemLinkedin} alt="" /></button>}

        {<button className="buttonstyle" onClick={() => { window.open("https://github.com/Kazinhoo0") }} type="button" ><img className='popupsstyle' src={ImagemGithub} alt="" /></button>}
      </div>


      <div className='container_devfor'>
        <p style={{ color: 'yellow', marginLeft: '20px', marginBottom: '20px' }}>Desenvolvido por Kauã Lopes Monteiro</p>
      </div>

    </div>
  );
}

export default To_Do_List