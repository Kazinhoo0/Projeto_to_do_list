import ExitImage from './imagens/logout.png';
import ImagemUser from './imagens/user.png';
import './Index.css';
import ImagemCalendario from './imagens/agendamento.png';
import Imagemseta from './imagens/seta-para-baixo.png';
import { useState, useEffect } from 'react';
import imagemlupa from './imagens/lupa.png';
import Simboloadição from './imagens/Simbolodeadiçao.png';
import { useNavigate } from "react-router-dom";
import MensagemBoasVindas from '../functionsfrontend/MensagemBoasvinda';
import { IoIosCheckbox } from "react-icons/io";
import { MdIndeterminateCheckBox } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";




function Index() {
    const [ListaVisivel, setListavisivel] = useState(false);
    const [mostrarnovolembrete, setnovolembrete] = useState(false);
    const [nome, setNome] = useState('');
    const [nomelembrete, setNomelembrete] = useState('');
    const [categoria, setCategoria] = useState('');
    const [ischecked, setisimportante] = useState(false);
    const [todos, settodos] = useState([]);
    const [id, setID] = useState('');
    const [lembretes, setLembretes] = useState([]);
    const [editID, setEditID] = useState(null);
    const [username, setUsername] = useState('');
    const [user_id, setUserid] = useState('');



    const navigate = useNavigate()


    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel);
    }


    const handleClick = async (e) => {
        e.preventDefault();

        const user_id = localStorage.getItem('user_id'); // Obtendo o user_id

        if (!categoria || !nomelembrete) {
            alert('Por favor! preencha os campos'); // condicional que verifica se categoria e nomelembrete preenchidas.
            return;
        }

        const novoLembrete = {
            nomelembrete, // inclui categoria no lembrete
            categoria, // inclui categoria no lembrete
            ischecked, // inclui ischecked no lembrete
            user_id  // Incluindo user_id no lembrete
        };

        setLembretes([...lembretes, novoLembrete]);

        setCategoria('');
        setNomelembrete('');
        setisimportante(false);

        const response = await fetch('https://projeto-to-do-list-2.onrender.com//criarlembretes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },       
            body: JSON.stringify(novoLembrete)
        });

        const data = await response.json();
        if (data.success) {
            alert('Lembrete cadastrado com sucesso');
        } else {
            alert('Erro ao cadastrar novo lembrete');
        }
    }

    useEffect(() => {  // esta função pega através da pagina Login, o username de quem está logado no momento.
        const useusername = localStorage.getItem('username')
        if (useusername) {
            setUsername(useusername)  
        }
    }, [])

    const handleedit = () => {
        alert('funcionalidade ainda não disponivel')
    }

    // Função para apagar os lembretes criados pelo usuário
    const handletrash = (id) => {
        const updatelembretes = lembretes.filter(lembrete => lembrete.id !== id); 
        setLembretes(updatelembretes); 
    }

    // Função para navegar a home
    const NavegarHome = () => {
        navigate('/');
    }
    

    // Função para navegar a pagina de settings, que atualmente ainda não foi terminada.
    const NavegarMeuPerfil = () => {
        navigate('/settings');
    }

    return (
        <>
            <div className='container'>
                <div className='containeruserbar'>
                    <div className='Tittle_site_div'>
                        <div className='container_imgcalendario'>
                            <h1 className='h1_userbar'>TO-DO-LIST {<img className='style_imgcalendario' src={ImagemCalendario} alt="" />}</h1>
                        </div>

                        <div className='containeruserprofile'>
                            <img className='styleImageUser' src={ImagemUser} alt="" />
                        </div>
                        <div className='container_mensagembemvindo' >
                            <p className='mensagem_bemvindo' >Olá,{username} 
                                <br></br>Bem-vindo</p>
                        </div>
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
                                            <a onClick={NavegarHome}>Minhas agendas</a>
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

                    {/* Renderizar lembretes */}
                    <div className='lembretes-list'>
                        {lembretes.map((lembrete) => (
                            <div key={lembrete.id} className='lembrete_item'>
                                <h3 className='style_nomelembrete'>Nome:    {lembrete.nomelembrete}</h3>
                                <p className='style_categorialembrete'>Categoria: {lembrete.categoria}</p>
                                <div className='style_importanteornot'>imp:{lembrete.importante ? <div className='checkedbox'><IoIosCheckbox /></div> : <div className='uncheckedbox'><MdIndeterminateCheckBox /></div>}</div>
                                <div className='container_limpar'>
                                    <div className='container_trash'>
                                        <FaTrash className='style_button_trash' onClick={() => handletrash(lembrete.id)} />
                                    </div>

                                    <div className='container_edit'>
                                        <FaEdit className='style_button_edit' onClick={() => handleedit(lembrete.id)} />
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
