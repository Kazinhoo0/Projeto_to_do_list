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


function To_Do_List() {

  const navigate = useNavigate('')
  const [username, setUsername] = useState('')
  const [senha, setSenha] = useState('')
  // const [email, setEmail] = useState('')

  const handlenavigate = () => {
    navigate('/Criarconta')
  }

  const navigateesquecisenha = () => {
    navigate('/esquecisenha')
  }

  console.log(username)
  console.log(senha)


  const handleenteraccount = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, senha })

    });

    const data = await response.json();
    if (data.success) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', username)
      setTimeout(() => {
        navigate('/index')
      }, 3000);

    } else {
      alert('Login falhou');
    }


  };



  return (
    <div className='container'>
      <div className='cabecalhostyle'>
        <h1>TO-DO-LIST</h1>
        <img className='Imgstyle' src={ImagemCalendario} alt="" />
      </div>
      <div>
        <div className='containerinputlogin'>
          <div className='containerfaçalogin'>
            <h3>Faça Login</h3>
          </div>
          <div className='styleborderinput'>
            <form>
              <InputUsernameLogin setUsername={setUsername} />
              <div className='containerinputmargin ' >
                <input
                  type="text"
                  name='email'
                  placeholder='Insira seu email*'
                  className='styleinputs'
                />
              </div>
              <div className='containerinputmargin '>
                <input
                  placeholder='Insira sua senha*'
                  type='password'
                  name='senha'
                  className='styleinputs'
                  onChange={(e) => setSenha(e.target.value)} />
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
  );
}

export default To_Do_List