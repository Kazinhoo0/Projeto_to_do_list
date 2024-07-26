import ImagemCalendario from './imagens/agendamento.png';
import ImagemGithub from './imagens/icons8-github-30.png';
import ImagemLinkedin from './imagens/Linked_img.png';
import ImagemPortifólio from './imagens/Portifólio_img.png';
import Mensagembemvindo from './scriptsindex/Mesagebemvindo';
import Inputs_CriarNovaConta from '../functionsfrontend/CriarNovaConta_inputs';
import { useState } from 'react';
import './CriarNovaConta.css';
import { useNavigate } from "react-router-dom";


function CriarNovaConta() {
    
    const [nome, setNome] = useState('oi');
    const [sobrenome, setSobrenome] = useState('oi');
    const [senha, setSenha] = useState('oi');
    const [email, setEmail] = useState('oi');
    const [username, setUsername] = useState('oi');
    const navigate = useNavigate();


    const jatemconta = () => {
        navigate('/')
    }


    function EnviarEmail () {

    }

    return (

        <div className='container'>
            <div className='cabecalhostyle'>
                <h1>TO-DO-LIST</h1>
                {<img className='imgstyle' src={ImagemCalendario} alt="" />}
            </div>
            <div>
                
                <div className='containerinputlogin'>
                    <div className='containerfaçalogin'>
                        <h3>Criar conta</h3>
                    </div>
                    <div className='styleborderinput'>
                        <Inputs_CriarNovaConta setNome={setNome} setSenha={setSenha} setEmail={setEmail} setSobrenome={setSobrenome} setUsername={setUsername} nome={nome}/>

                    </div>
                    <div className='container_esquecisenha_criarconta'>
                        <div>
                            <a onClick={jatemconta} className='style_esquecisenha'>Já tem uma conta ?</a>
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
    )

}


export default CriarNovaConta


