import ExitImage from './imagens/logout.png'
import ImagemCalendario from './/imagens/agendamento.png'
import Imagemseta from './imagens/seta-para-baixo.png'
import { useState, useEffect } from 'react'
import Imagempadraoperfil from './imagens/user.png'
import Settings_Output from '../functionsfrontend/Settings_output_info'
import Inputs_CriarNovaConta from '../functionsfrontend/Inputs_CriarNovaConta'
import { useNavigate } from "react-router-dom";
import '..//App.css'

function Settings() {

    const [ListaVisivel, setListavisivel] = useState(false)
    const [img, setImg] = useState(null)
    const [filename, setFileName] = useState("Nenhum arquivo selecionado")
    const [senha, setSenha] = useState('')
    const [userdata, setUserdata] = useState({

        nome: '',
        sobrenome: '',
        email: '',
        username: ''


    }

    )

    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel)
    }


    useEffect(() => {
        const nome = localStorage.getItem('nome');
        const username = localStorage.getItem('username');
        const sobrenome = localStorage.getItem('sobrenome');
        const Email = localStorage.getItem('email');

        if (nome || username || sobrenome || senha || Email) {
            setUserdata({
                nome: nome || '',
                username: username || '',
                sobrenome:sobrenome || '',
                email: Email || ''

            });
        }
    }, []);
        

    const navigate = useNavigate();

    const NavegarCriarLembrete = () => {
        navigate('/EditarLembretes');
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserdata({
            ...userdata,
            [name]: value 
        });
    };

    const handlelogoof = () => {
        navigate('/')
    }

    const NavegarMeusLembretes = () => {
        navigate('/Index')
    }

    const NavegarMeuPerfil = () => {
        navigate('Settings')
    }

    return (
        <div className="container" >

            <div className='containeruserbar' >

                <div className='Tittle_site_div'>

                    <h1 className='h1_userbar'>TO-DO-LIST</h1>

                    {/* {<img className='Imgstyle' src={ImagemCalendario} alt="" />} */}

                    <div className='containerlinks' >

                        {/* <div className='links_style'>
                            <a onClick={NavegarHome} href="">Home</a>
                            <a onClick={NavegarCriarLembrete} href="">Meus Lembretes</a> */}
                        {/* </div> */}
                    </div>

                    <div className='containeruserprofile'>

                        <img
                            className='styleImageUser'
                            alt=""
                            id='Fotoperfil'
                            src={img}
                        />

                    </div>

                    {/* <button onClick={LimparFotoPerfil} >limpar</button> */}
                    <div className='container_mensagem_bemvindo' >

                        <p className='mensagem_bemvindo' >Olá,{userdata.username}
                        <br></br>Bem-vindo</p>

                    </div>

                    <div className='containeropenseta'>

                        <button className='buttonsetastyle' type='button' name='butãoseta' onClick={itslistavisivel} >{ListaVisivel ? <img src={Imagemseta}></img> : <img src={Imagemseta} ></img>} </button>
                        {ListaVisivel && (

                            <div className='containerlistaordenada'  >

                                <ul className='listasstyle'>

                                    <lo className='lista_style' >

                                        <a onClick={NavegarMeuPerfil}>Meu perfil</a>

                                    </lo>

                                </ul>

                                <ul className='listasstyle'>

                                    <lo>

                                        <a onClick={NavegarCriarLembrete} >Minhas agendas</a>

                                    </lo>

                                </ul>

                            </div>

                        )}

                    </div>

                    <div className='containerimageexit'>

                        <img className='imageexit' src={ExitImage} alt="" />

                        <div className='Sair'>

                            <a onClick={handlelogoof} className='sairbutton' href="">Sair</a>

                        </div>

                    </div>

                </div>

            </div>

            <div className="container_principal_pagesettings" >

                <div className='container_filho_pagesettings' >

                        <div className='container_changephoto' >

                            <div></div>

                            <div></div>

                        </div>

                        <div className='container_inputs' >

                        </div>  

                </div>

            </div>

        </div>
    )
}


export default Settings