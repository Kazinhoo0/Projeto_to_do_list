import ExitImage from './imagens/logout.png';
import ImagemUser from './imagens/user.png';
import './Index.css';
import ImagemCalendario from './/imagens/agendamento.png';
import Imagemseta from './imagens/seta-para-baixo.png';
import { useState } from 'react';
import imagemlupa from './imagens/lupa.png';
import Simboloadição from './imagens/Simbolodeadiçao.png';
import Abrirpagcriarlembretes from './functions/AbrirPaginacriarlembretes';
import { useNavigate } from "react-router-dom";
import Componentemensagemboasvindas from '../functionsfrontend/componentemensagemboasvindas';
import MensagemBoasVindas from '../functionsfrontend/MensagemBoasvinda';


function Index() {

    const [ListaVisivel, setListavisivel] = useState(false);
    const [mostrarnovolembrete, setnovolembrete] = useState(false);
    const [nome, setNome] = useState('')
    const [lembretes,setLembretes] = useState([])


    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel)
    }

    const handleClick = () => {
        setnovolembrete(true);
    }

    const handNomeMudar = (e) => {
        setNome(e.target.value);
    }

    const handpressenter = (e) => {
        if (e.key === 'Enter') {
            handleSalvar();
        }
    }

    const handleSalvar = () => {
        if (nome.trim()) {
            setLembretes([...lembretes,nome]);
            setNome('');
            setnovolembrete(true);
        }
    }
    


    const navigate = useNavigate();

    

    const NavegarHome = () => {
        navigate('/')
    }

    const NavegarCriarLembrete = () => {
        navigate('/Criarlembrete')
    }

    const NavegarMeusLembretes = () => {
        navigate('/Index')
    }

    const NavegarMeuPerfil = () => {
        navigate('Settings')
    }


    const [username, setUsername] = useState()




    return (
        <>
            <div className='container'>
                <div className='containeruserbar' >
                    <div className='Tittle_site_div'>
                        <h1 className='h1_userbar'>TO-DO-LIST</h1>
                        {<img className='imgstyle' src={ImagemCalendario} alt="" />}
                        {/* <div className='containerlinks' >
                            <div className='links_style'>
                                <a onClick={NavegarHome} href="">Home</a>
                                <a onClick={NavegarMeusLembretes} href="">Meus Lembretes</a>
                            </div>
                        </div> */}
                        <div className='containeruserprofile'>
                            <img className='styleImageUser' src={ImagemUser} alt="" />
                        </div>
                        <MensagemBoasVindas/>
                        {/* <Componentemensagemboasvindas/> */}
                        <div className='containeropenseta
                        ' >
                            <button className='buttonsetastyle' type='button' name='butãoseta' onClick={itslistavisivel} >{ListaVisivel ? <img src={Imagemseta}></img> : <img className='stylebuttonseta' src={Imagemseta} ></img>} </button>
                            {ListaVisivel && (
                                <div className='containerlistaordenada'  >
                                    <ul className='listasstyle'>
                                        <lo className='lista_style' >
                                            <a onClick={NavegarMeuPerfil} >Meu perfil</a>
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
                                <a className='sairbutton' href="">Sair</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container_listaafazeres'>
                    <div className='container_barradepesquisa' >

                        <input
                            className='styleinput_barradepesquisa'
                            type="text"
                            name='barrapesquisa'
                            placeholder='Pesquise seu lembrete aqui*' />
                        <button id='pesquisarlembrete' className='stylebuttonlupa'
                          ><img className='styleimglupa' src={imagemlupa} alt="" />
                        </button>

                        <button onClick={handleClick} id='Criarlembrete' className='stylebuttonadicao' >
                            <img className='styleimgadição' src={Simboloadição} alt="" />
                        </button>

                    </div>
                    <div className='container_limparlembrete'>
                        <div>
                            <button className='buttoncleanlembrete' >Limpar todos os lembretes</button>
                        </div>

                        <div>
                            <button className='buttoncleanlembrete2' >Limpar lembrete</button>
                        </div>
                    </div>

                
                    {mostrarnovolembrete && (
                        <div className='containernovolembrete'>
                        <input
                            type="text"
                            value={nome}
                            onChange={handNomeMudar}
                            onKeyDown={handpressenter}
                            placeholder='Digite o nome do lembrete'
                        />
                        <button onClick={handleSalvar}>Salvar</button>
                    </div>
                    )}
                    


                </div>

            </div>
        </>
    )
}



export default Index