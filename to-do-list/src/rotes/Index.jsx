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
    const [lembretes, setLembretes] = useState([])
    const [nomelembrete, setNomelembrete] = useState('')
    const [categoria, setCategoria] = useState('')
    const [importante, setisimportante] = useState(false)
    const [todos, settodo] = useState('')

    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel)
    }

    // const handleClick = () => {
    //     setnovolembrete(true);
    // }

    const handleClick = (e) => {
        e.preventDefault()
        if (!categoria || !nomelembrete) return;
        setCategoria('')
        setLembretes('')

    }

    const handlepressenter = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    const handleSalvar = () => {
        if (nome.trim()) {
            setLembretes([...lembretes, nome]);
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


    const addtodo = (categoria, nomelembrete) => {

        const newtodos = [
            ...todos,

            {
                categoria,
                nomelembrete,
                importante : false,
            }
        ]
        }
    



    return (
        <>
            <div className='container'>
                <div className='containeruserbar' >
                    <div className='Tittle_site_div'>
                        <div>
                            <h1 className='h1_userbar'>TO-DO-LIST {<img className='imgstyle' src={ImagemCalendario} alt="" />}</h1>
                        </div>
                        
                        {/* <div className='containerlinks' >
                            <div className='links_style'>
                                <a onClick={NavegarHome} href="">Home</a>
                                <a onClick={NavegarMeusLembretes} href="">Meus Lembretes</a>
                            </div>
                        </div> */}
                        <div className='containeruserprofile'>
                            <img className='styleImageUser' src={ImagemUser} alt="" />
                        </div>
                        <MensagemBoasVindas />
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
                                <a className='sairbutton' onClick={NavegarHome}>Sair</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container_listaafazeres'>
                    <div className='container_barradepesquisa' >
                        <form onsubmit={handleClick} action="">
                            <input
                                className='styleinput_nomelembrete'
                                type="text"
                                name='nomelembrete'
                                placeholder='Insira o nome do seu lembrete*'
                                value={nomelembrete}
                                onChange={(e) => setNomelembrete(e.target.value)} />
                            <label className='style_textimportante' htmlFor="checkbox">Importante: </label>
                            <input 
                            type="checkbox"
                            id='checkbox'
                            onChange={(e) => setisimportante(e.target.value)}
                            value={importante}
                            className='style_checkbox'
                            nome='checkbox'
                             />

                            <select value={categoria} name="typelembrete" id="" className='style_typelembrete' onChange={(e) => setCategoria(e.target.value)}>
                                <option value="trabalho">Trabalho</option>
                                <option value="pessoal">Pessoal</option>
                                <option value="acordarcedo">Acordar cedo</option>
                                <option value="entrevistaemprego">Entrevista de emprego</option>
                                <option value="corrida">Corrida</option>
                                <option value="academia">Academia</option>
                                <option value="nataçao">Natação</option>
                            </select>
                            <button onClick={handleClick} id='pesquisarlembrete' className='stylebuttonlupa'
                            ><img className='styleimglupa' src={imagemlupa} alt="" />
                            </button>
                        </form>

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

                </div>

            </div>
        </>
    )
}



export default Index