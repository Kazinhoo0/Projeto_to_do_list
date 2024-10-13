import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import '..//App.css'
import ExitImage from '../imagens/logout.png';
import ImagemUser from '../imagens/user.png';
import ImagemCalendario from '../imagens/agendamento.png';
import Imagemseta from '../imagens/seta-para-baixo.png';
import Toastify from 'toastify-js';

function Settings() {

    const [ListaVisivel, setListavisivel] = useState(false);
    const [img, setImg] = useState(null);
    const [filename, setFileName] = useState("Nenhum arquivo selecionado");
    const [senha, setSenha] = useState('');
    const [newdata, setNewData] = useState({
        nome: '',
        email: '',
        username: ''
    });

    const [userdata, setUserdata] = useState({

        nome: '',
        sobrenome: '',
        email: '',
        username: ''


    }

    );


    useEffect(() => {
        const Storeddata = ({
            nome: localStorage.getItem('nome'),
            username: localStorage.getItem('username'),
            sobrenome: localStorage.getItem('sobrenome'),
            email: localStorage.getItem('email'),
        });

        setUserdata(Storeddata)
        setNewData(Storeddata)

    }, []);



    useEffect(() => {
        const userid = localStorage.getItem('id');

        setNewData({
            userid: userid || ''
        })
    })


    const handleeditarperfil = async (e) => {
        e.preventDefault();

      

        // console.log('Valores:', newlembrete.nomelembrete,newlembrete.categoria,newlembrete.ischecked, userid, newlembrete.horavencimento, newlembrete.vencimento, newlembrete.descricao );
        if(!newdata.userid || !newdata.nome || !newdata.email || !newdata.username) {
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

        const response = await fetch('https://projeto-to-do-list-2.onrender.com/index/settings/editarperfil', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: newdata.userid,
                nome:newdata.nome,
                username: newdata.username,
                email: newdata.email
            })
        })
     


        const data = await response.json();

        if (data.success) {

            Toastify({
                text: 'Alterações feitas com sucesso!',
                position: 'center',
                style: {
                    background: '#33ff00',
                    color: '#ffffff',
                    width: '250px',
                    height: '150px'
                }
            }).showToast();

            setTimeout(() => {
                navigate('/settings')
            }, 3000);

        } else {

            Toastify({
                text: 'Erro ao executar alterações!',
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



    const navigate = useNavigate();

    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel)
    }

    const NavigateLogin = () => {
        navigate('/')
    }

    const NavegarMeusLembretes = () => {
        navigate('/Index')
    }

    const NavegarMeuPerfil = () => {
        navigate('Settings')
    }

    // const handlechangedata = (e) => {
    //     const { name, value } = e.target;

    //     setUserdata((prevData) => ({
    //         ...prevData,
    //         [name]: value // Atualiza o campo correspondente (nome, username, sobrenome, email)
    //     }));
    // };



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

                            <button onClick={handleeditarperfil} className='style_button_pagesettings'>SALVAR</button>

                        </div>

                    </div>

                    <div className='container_inputs_pagesettings' >
                        <h1 style={{ borderBottom: '1px solid white' }}>MEU PERFIL</h1>
                        <ul>
                            <small style={{ color: 'white', marginLeft: '10px' }}>Nome: </small>

                                <li  style={{ paddingBottom: '60px', listStyleType: 'none' }} ><input onChange={(e) => setNewData({...newdata, nome: e.target.value})} className='style_list_inputs_pagesettings' value={newdata.nome} name='nomecompleto' type="text" /> </li>

                            <small style={{ color: 'white', marginLeft: '10px' }}>Email: </small>

                                <li  style={{ paddingBottom: '60px', listStyleType: 'none' }} ><input onChange={(e) => setNewData ({...newdata, email: e.target.value})} className='style_list_inputs_pagesettings' value={newdata.email} name='email' type="email" /> </li>

                            <small style={{ color: 'white', marginLeft: '10px' }}>Username: </small>

                                 <li  style={{ paddingBottom: '60px', listStyleType: 'none' }} ><input onChange={(e) => setNewData ({...newdata, username: e.target.value})} className='style_list_inputs_pagesettings' value={newdata.username} name='username' type="text" /> </li>

                            {/* <small style={{ color: 'white', marginLeft: '10px' }}>Senha: </small>

                            <li  style={{ paddingBottom: '60px', listStyleType: 'none' }} ><input className='style_list_inputs_pagesettings' value={userdata.senha} name='senha' type="text" /> </li> */}

                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Settings