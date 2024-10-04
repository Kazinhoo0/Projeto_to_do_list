import { useState } from 'react'
import ImagemCalendario from './imagens/agendamento.png'
import ImagemGithub from './imagens/icons8-github-30.png'
import ImagemLinkedin from './imagens/Linked_img.png'
import ImagemPortifólio from './imagens/Portifólio_img.png'
import Mensagembemvindo from './scriptsindex/Mesagebemvindo'
import CriarNovaConta from './CriarNovaConta'
import './Login.css'
import InputUsernameLogin from '../functionsfrontend/InputUsernameLogin'
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
      body: JSON.stringify({ email, senha })

    });

    const data = await response.json();

    console.log(data)


    if (data.success) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      localStorage.setItem('email', data.email)

      console.log(data.username)

      Toastify({
        text: 'Login efetuado com sucesso!',
        position: 'center',
        style: {
          background: '#33ff00',
          color: '#ffffff'
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
          color: '#ffffff'
        }
      }).showToast();
    }

  };


  return (

    <html lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div className='container'>
          <div className='cabecalhostyle'>
            <h1>TO-DO-LIST</h1>
            <img className='Imgstyle_criarconta' src={ImagemCalendario} alt="" />
          </div>
          <div>
            <div className='containerinputlogin'>
              <div className='containerfaçalogin'>
                <h3>Faça Login</h3>
              </div>
              <div className='styleborderinput'>
                <form>
                  <div className='containerinputmargin ' >
                    <input
                      type="email"
                      name='email'
                      placeholder='Insira seu email*'
                      className='styleinputs'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className='containerinputmargin '>
                    <input
                      placeholder='Insira sua senha*'
                      type='password'
                      name='senha'
                      className='styleinputs'
                      onChange={(e) => setSenha(e.target.value)}
                      value={senha} />
                  </div>
                  <div className='containerbuttonentrar11'>
                    <button onClick={handleenteraccount} className='buttonentrarstyle' >Entrar</button>
                  </div>

                </form>
              </div>
              <div className='container_esquecisenha_criarconta' >
                <div>
                  <a onClick={navigateesquecisenha} className='style_esquecisenha'>esqueceu sua senha?</a>
                </div>
                <div>
                  <a onClick={handlenavigate} className='style_criarconta'>criar conta</a>
                </div>
              </div>
            </div>
          </div>
          <div className='containerbuttonsstyle' >
            {<button id="popupid" className="buttonstyle" onClick={() => { window.open("https://kaualopesmonteiro.netlify.app/") }} type="button"><img className='popupsstyle' src={ImagemPortifólio} alt="" /></button>}

            {<button className="buttonstyle" onClick={() => { window.open("https://www.linkedin.com/in/kau%C3%A3-lopes-monteiro/") }} type="button"><img className='popupsstyle' src={ImagemLinkedin} alt="" /></button>}

            {<button className="buttonstyle" onClick={() => { window.open("https://github.com/Kazinhoo0") }} type="button" ><img className='popupsstyle' src={ImagemGithub} alt="" /></button>}

          </div>
          <div>
            <p className='containerparagraforedes'>Desenvolvido por Kauã Lopes Monteiro</p>
          </div>

        </div>
      </body>


    </html>
  );
}

export default To_Do_List