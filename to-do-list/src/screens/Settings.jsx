import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import '..//App.css'
import ExitImage from '../imagens/logout.png';
import ImagemUser from '../imagens/user.png';
import ImagemCalendario from '../imagens/agendamento.png';
import Imagemseta from '../imagens/seta-para-baixo.png';
import Toastify from 'toastify-js';

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

    // const itslistavisivel = () => {
    //     setListavisivel(!ListaVisivel)
    // }


    useEffect(() => {
        const Storeddata = ({
            nome: localStorage.getItem('nome'),
            username: localStorage.getItem('username'),
            sobrenome: localStorage.getItem('sobrenome'),
            email: localStorage.getItem('email'),
        });

        setUserdata(Storeddata)

    }, []);




    const navigate = useNavigate();

    // const NavegarCriarLembrete = () => {
    //     navigate('/EditarLembretes');
    // };

    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel)
    }


    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setUserdata({
    //         ...userdata,
    //         [name]: value
    //     });
    // };


    const NavigateLogin = () => {
        navigate('/')
    }

    const NavegarMeusLembretes = () => {
        navigate('/Index')
    }

    const NavegarMeuPerfil = () => {
        navigate('Settings')
    }

    const handlechangedata = (e) => {
        const { name, value } = e.target;

        setUserdata((prevData) => ({
            ...prevData,
            [name]: value // Atualiza o campo correspondente (nome, username, sobrenome, email)
        }));
    };

    const  fetcheditarperfil = async (e) => {
        e.preventDefault();

        console.log('dados recebidos', userdata.nome, userdata.sobrenome, userdata.email, userdata.username)


        const response = await fetch('projeto-to-do-list-2.onrender.com/settings/editarlembretes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                nome: userdata.nome,
                sobrenome: userdata.sobrenome,
                email: userdata.email,
                username: userdata.username 
            })

        })

        const data = await response.json();
          
        if (data.sucess) {


            Toastify({
                text: 'Alterações salvas!',
                position: 'center',
                style: {
                    background: '#33ff00',
                    color: '#ffffff',
                    width: '250px',
                    height: '150px'
                }
            }).showToast();

        } else {

            Toastify({
                text: 'Falha ao salvar as alteracões!',
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
        
    

    return (
        <div className="container" >

            <div className='containeruserbar'>
                    
                    <div className='container_imgcalendario'>
                        <h1 onClick={NavegarMeusLembretes} className='h1_userbar'>TO-DO-LIST {<img className='style_imgcalendario' src={ImagemCalendario} alt="" />}</h1>
                    </div>

                    <div className='container_navigatebar'>


                        <div className='containeruserprofile'>
                            <img className='styleImageUser' src={ImagemUser} alt="" />
                        </div>

                        <div className='container_mensagembemvindo' >
                            <p className='mensagem_bemvindo' >Olá,{userdata.username}
                                <br></br>Bem-vindo</p>
                        </div>

                        <div className='containeropenseta'>
                            <button className='buttonsetastyle' type='button' name='butãoseta' onClick={itslistavisivel} >
                                
                            {ListaVisivel ? <img src={Imagemseta}></img> : <img src={Imagemseta} ></img>} </button>
                            {ListaVisivel && (

                                <div className='containerlistaordenada'>
                                    <ul className='listasstyle'>
                                        <li className='lista_style'>
                                            <a onClick={NavegarMeuPerfil}>Configurações</a>
                                        </li>
                                    </ul>
                                    <ul className='listasstyle'>
                                        <li>
                                            <a onClick={NavegarMeusLembretes}>Meus Lembretes</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className='containerimageexit'>
                            <img onClick={NavigateLogin} className='imageexit' src={ExitImage} alt="" />
                        </div>
                    </div>


                </div>

            <div className="container_principal_pagesettings" >

                <div className='container_filho_pagesettings' >

                    <div className='container_changephoto' >

                        <div className='container_foto_pagesettings'>

                            <div className='style_foto_pagesettings'>
                                <img src="" alt="" />
                            </div>

                        </div>

                        <div className='container_inputfoto_pagesettings'>

                            <input style={{cursor: 'pointer'}} type="file" />

                            <button onClick={fetcheditarperfil} className='style_button_pagesettings'>SALVAR</button>

                        </div>

                    </div>

                    <div className='container_inputs_pagesettings' >
                        <h1 style={{ borderBottom: '1px solid white' }}>MEU PERFIL</h1>
                        <ul>
                            <small style={{ color: 'white', marginLeft: '10px' }}>Nome: </small>

                            <li onChange={handlechangedata} style={{ paddingBottom: '60px', listStyleType: 'none' }} ><input className='style_list_inputs_pagesettings' value={userdata.nome + userdata.sobrenome} name='nomecompleto' type="text" /> </li>

                            <small style={{ color: 'white', marginLeft: '10px' }}>Email: </small>

                            <li onChange={handlechangedata} style={{ paddingBottom: '60px', listStyleType: 'none' }} ><input className='style_list_inputs_pagesettings' value={userdata.email} name='email' type="email" /> </li>

                            <small style={{ color: 'white', marginLeft: '10px' }}>Username: </small>

                            <li onChange={handlechangedata} style={{ paddingBottom: '60px', listStyleType: 'none' }} ><input className='style_list_inputs_pagesettings' value={userdata.username} name='username' type="text" /> </li>

                            {/* <small style={{ color: 'white', marginLeft: '10px' }}>Senha: </small>

                            <li onChange={handlechangedata} style={{ paddingBottom: '60px', listStyleType: 'none' }} ><input className='style_list_inputs_pagesettings' value={userdata.senha} name='senha' type="text" /> </li> */}

                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Settings