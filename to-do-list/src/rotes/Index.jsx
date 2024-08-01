import ExitImage from './imagens/logout.png';
import ImagemUser from './imagens/user.png';
import './Index.css';
import ImagemCalendario from './imagens/agendamento.png';
import Imagemseta from './imagens/seta-para-baixo.png';
import { useState } from 'react';
import imagemlupa from './imagens/lupa.png';
import Simboloadição from './imagens/Simbolodeadiçao.png';
import Abrirpagcriarlembretes from './functions/AbrirPaginacriarlembretes';
import { useNavigate } from "react-router-dom";
import Componentemensagemboasvindas from '../functionsfrontend/componentemensagemboasvindas';
import MensagemBoasVindas from '../functionsfrontend/MensagemBoasvinda';
import { IoIosCheckbox } from "react-icons/io";
import { MdIndeterminateCheckBox } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";






function Index() {
    const [ListaVisivel, setListavisivel] = useState(false);
    const [mostrarnovolembrete, setnovolembrete] = useState(false);
    const [nome, setNome] = useState('');
    const [lembretes, setLembretes] = useState([]);
    const [nomelembrete, setNomelembrete] = useState('');
    const [categoria, setCategoria] = useState('');
    const [ischecked, setisimportante] = useState(false);
    const [todos, settodos] = useState([]);

    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel);
    }

    const handlchjeckboxchange = () => {
        setisimportante(!ischecked);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (!categoria || !nomelembrete) {
            alert('Por favor! preencha os campos');
            return;
        }

        const novoLembrete = {
            nomelembrete,
            categoria,
            importante: ischecked
        };

        setLembretes([...lembretes, novoLembrete]);

        setCategoria('');
        setNomelembrete('');
        setisimportante(false);
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


    const handleedit = (event) => {
        console.log('edit ativado')
    }

    const handletrash = (event) => {
        console.log('trash ativado')
    }

    const navigate = useNavigate();

    const NavegarHome = () => {
        navigate('/');
    }

    const NavegarCriarLembrete = () => {
        navigate('/Criarlembrete');
    }

    const NavegarMeusLembretes = () => {
        navigate('/Index');
    }

    const NavegarMeuPerfil = () => {
        navigate('Settings');
    }

    return (
        <>
            <div className='container'>
                <div className='containeruserbar'>
                    <div className='Tittle_site_div'>
                        <div>
                            <h1 className='h1_userbar'>TO-DO-LIST {<img className='imgstyle' src={ImagemCalendario} alt="" />}</h1>
                        </div>
                        
                        <div className='containeruserprofile'>
                            <img className='styleImageUser' src={ImagemUser} alt="" />
                        </div>
                        <MensagemBoasVindas />
                        <div className='containeropenseta'>
                            <button className='buttonsetastyle' type='button' name='butãoseta' onClick={itslistavisivel}>
                                {ListaVisivel ? <img src={Imagemseta} alt="" /> : <img className='stylebuttonseta' src={Imagemseta} alt="" />}
                            </button>
                            {ListaVisivel && (
                                <div className='containerlistaordenada'>
                                    <ul className='listasstyle'>
                                        <li className='lista_style'>
                                            <a onClick={NavegarMeuPerfil}>Meu perfil</a>
                                        </li>
                                    </ul>
                                    <ul className='listasstyle'>
                                        <li>
                                            <a onClick={NavegarCriarLembrete}>Minhas agendas</a>
                                        </li>
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
                    <div className='container_barradepesquisa'>
                        <form onSubmit={handleClick} action="">
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
                                onChange={(e) => setisimportante(e.target.checked)}
                                checked={ischecked}
                                className='style_checkbox'
                                name='checkbox'
                            />
                            <select value={categoria} name="typelembrete" id="" className='style_typelembrete' onChange={(e) => setCategoria(e.target.value)}>
                                <option value="">Nenhum</option>
                                <option value="trabalho">Trabalho</option>
                                <option value="pessoal">Pessoal</option>
                                <option value="acordarcedo">Acordar cedo</option>
                                <option value="entrevistaemprego">Entrevista de emprego</option>
                                <option value="corrida">Corrida</option>
                                <option value="academia">Academia</option>
                                <option value="nataçao">Natação</option>
                            </select>
                            <button onClick={handleClick} id='pesquisarlembrete' className='stylebuttonlupa'>
                                <img className='styleimglupa' src={imagemlupa} alt="" />
                            </button>
                        </form>

                        <button onClick={handleClick} id='Criarlembrete' className='stylebuttonadicao'>
                            <img className='styleimgadição' src={Simboloadição} alt="" />
                        </button>
                    </div>
                    <div className='container_limparlembrete'>
                        <div>
                            <button className='buttoncleanlembrete'>Limpar todos os lembretes</button>
                        </div>
                        <div>
                            <button className='buttoncleanlembrete2'>Limpar lembrete</button>
                        </div>
                    </div>

                    {/* Renderizando lembretes */}
                    <div className='lembretes-list'>
                        {lembretes.map((lembrete, index) => (
                            <div key={index} className='lembrete_item'>
                                <h3 className='style_nomelembrete'>Nome:    {lembrete.nomelembrete}</h3>
                                <p className='style_categorialembrete'>Categoria: {lembrete.categoria}</p>
                                <div className='style_importanteornot'>imp:{lembrete.importante ?  <div className='checkedbox'><IoIosCheckbox/></div> : <div className='uncheckedbox'><MdIndeterminateCheckBox/></div> }</div>
                                <div className='container_limpar'>
                                    <div className='container_trash'>
                                        <button className='style_button_trash' ><FaTrash onClick={handleedit}/></button>
                                    </div>
                                    
                                    <div className='container_edit'>
                                        <FaEdit onClick={handleedit} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;
