import './Settings.css'
import ExitImage from './imagens/logout.png'
import ImagemCalendario from './/imagens/agendamento.png'
import Imagemseta from './imagens/seta-para-baixo.png'
import { useState, useEffect } from 'react'
import Imagempadraoperfil from './imagens/user.png'
import Settings_Output from '../functionsfrontend/Settings_output_info'
import Inputs_CriarNovaConta from '../functionsfrontend/Inputs_CriarNovaConta'
import { useNavigate } from "react-router-dom";

function Settings() {

    const [ListaVisivel, setListavisivel] = useState(false)
    const [img, setImg] = useState(null)
    const [filename, setFileName] = useState("Nenhum arquivo selecionado")
    const [nome, setNome] = useState('oi')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [sobrenome, setSobrenome] = useState('')
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
                        <p className='mensagem_bemvindo' >Olá,usuário
                            <br></br>Bem-vindo</p>
                    </div>
                    <div className='containeropenseta
                        ' >
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

            <div className="container_settings" >
                <div className='container_fotoperfil' >
                    <div className='style_fotoperfil' >
                        <div className='img_fotoperfil'>
                            <img className='style_imgprofile' src={img} />
                        </div>
                        <div className='style_fotodeperfil'>
                            <p>Alterar foto de perfil: </p>
                        </div>
                        <label className='container_input_arquivofoto' htmlFor="arquivo" >
                            <input
                                className='style_inputfile'
                                type="file"
                                accept='image/*'
                                id='arquivo'
                                onChange={({ target: { files } }) => {
                                    files[0] && setFileName(files[0].name)
                                    if (files) {
                                        setImg(URL.createObjectURL(files[0]))
                                    }
                                }}
                            />
                            <span className='style_span' >Enviar Arquivo </span>
                        </label>
                        <div>
                            <button className='button_salvarconfigs' type='submit'>Salvar</button>
                        </div>
                    </div>
                </div>

                <div className='container_userinf'>

                    <div className='container_tittle' >
                        <h2 className='style_tittle' >Configurações</h2>
                    </div>

                     <div className='container_inputs'>
                            <div>
                                <br />
                                <label htmlFor="nome">Nome:</label>
                                <input onChange={handleInputChange} name='nome' maxLength={50} value={userdata.nome} type="text" />
                            </div>
                            <div>
                                <br />
                                <label htmlFor="sobrenome">Sobrenome:</label>
                                <input onChange={handleInputChange} name='sobrenome' maxLength={50} value={userdata.sobrenome} type="text" />
                            </div>
                            <div>
                                <br />
                                <label htmlFor="username">Username:</label>
                                <input onChange={handleInputChange} name='username' maxLength={50} value={userdata.username} type="text" />
                            </div>
                            <div>
                                <br />
                                <label htmlFor="email">Email:</label>
                                <input onChange={handleInputChange} name='email' maxLength={70} value={userdata.email} type="text" />
                            </div>

                        </div>
                </div>

            </div>

        </div>
    )
}


export default Settings