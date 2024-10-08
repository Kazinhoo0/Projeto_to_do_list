import '..//App.css'
import { useState, useEffect } from 'react';
import imagemlupa from '../imagens/lupa.png';
import Simboloadição from '../imagens/Simbolodeadiçao.png';
import { useNavigate } from "react-router-dom";
import { IoIosCheckbox } from "react-icons/io";
import { MdIndeterminateCheckBox } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import ImagemUser from '../imagens/user.png';
import ImagemCalendario from '../imagens/agendamento.png';
import Imagemseta from '../imagens/seta-para-baixo.png';
import ExitImage from '../imagens/logout.png';





function Index() {
    const [ListaVisivel, setListavisivel] = useState(false);
    // const [mostrarnovolembrete, setnovolembrete] = useState(false);
    // const [nome, setNome] = useState('');
    const [nomelembrete, setNomelembrete] = useState('');
    const [categoria, setCategoria] = useState('');
    const [ischecked, setisimportante] = useState(false);
    // const [todos, settodos] = useState([]);
    // const [id, setID] = useState('');
    const [lembretes, setLembretes] = useState([]);
    // const [editID, setEditID] = useState(null);
    // const [username, setUsername] = useState('');
    // const [user_id, setUserid] = useState('');
    const [userdata, setUserdata] = useState('');
    const [dadoslembrete, setDadosLembrete] = useState('');

    const [newlembrete, setNewlembrete] = useState({

        nomelembrete: '',
        ichecked: '',
        categoria: '',


    })



    const navigate = useNavigate()


    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel);
    }



    useEffect(() => {  // este useEffect executa um get do username,vindo da pagina login.
        const username = localStorage.getItem('username');
        setUserdata({
            username: username || ""
        })
    }, [])


    const handleedit = () => {
        navigate('/Editarlembretes')
    }

    // Função para apagar os lembretes criados pelo usuário
    const handletrash = (id) => {
        const updatelembretes = lembretes.filter(lembrete => lembrete.id !== id);
        setLembretes(updatelembretes);
    }

    // Função para navegar a home
    const NavegarHome = () => {
        navigate('/index');
    }

    const NavigateLogin = () => {
        navigate('/')
    }


    // Função para navegar a pagina de settings, que atualmente ainda não foi terminada.
    const NavegarMeuPerfil = () => {
        navigate('/settings');
    }



    useEffect(() => {
        const userid = localStorage.getItem('id')

        setUserdata({
            userid: userid || '',
        })


        const fetchLembretes = async () => {
            try {


                const response = await fetch('https://projeto-to-do-list-2.onrender.com/gerenciarlembretes', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userid })

                });



                const data = await response.json();
                console.log('Dados recebidos:', data);

                if (data.success) {
                    setDadosLembrete(data.items); // Armazena os itens no estado
                } else {
                    console.log('Nenhum item encontrado');
                }
            } catch (error) {
                console.error('Erro ao buscar os pratos:', error);
            } finally {
                setLoading(false); // Remove o loading após a requisição
            }
        };

        fetchLembretes(); // Executa a função ao montar o componente
    }, []);

    if (loading) {
        return <div>Carregando...</div>; // Exibe um loading enquanto carrega
    }

    return (
        <>
            <div className='container'>

                <div className='containeruserbar'>

                    <div className='container_imgcalendario'>
                        <h1 className='h1_userbar'>TO-DO-LIST {<img className='style_imgcalendario' src={ImagemCalendario} alt="" />}</h1>
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
                                            <a onClick={NavegarHome}>Meus Lembretes</a>
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

                <div className='container_listaafazeres'>
                    <div className='container_barradepesquisa'>
                        <form action="">
                            <input
                                className='styleinput_nomelembrete'
                                type="text"
                                name='nomelembrete'
                                placeholder='Insira o nome do seu lembrete*'
                                value={nomelembrete}
                                onChange={(e) => setNewlembrete({ ...newlembrete, nomelembrete: e.target.value })} />
                            <label className='style_textimportante' htmlFor="checkbox">Importante: </label>
                            <input
                                type="checkbox"
                                id='checkbox'
                                onChange={(e) => setNewlembrete({ ...newlembrete, ischecked: e.target.value })}
                                checked={ischecked}
                                className='style_checkbox'
                                name='checkbox'
                            />
                            <select value={categoria} name="typelembrete" id="" className='style_typelembrete' onChange={(e) => setNewlembrete({ ...newlembrete, categoria: e.target.value })}>
                                <option value="">Nenhum</option>
                                <option value="trabalho">Trabalho</option>
                                <option value="pessoal">Pessoal</option>
                                <option value="acordarcedo">Acordar cedo</option>
                                <option value="entrevistaemprego">Entrevista de emprego</option>
                                <option value="corrida">Corrida</option>
                                <option value="academia">Academia</option>
                                <option value="nataçao">Natação</option>
                            </select>
                            <button id='pesquisarlembrete' className='stylebuttonlupa'>
                                <img className='styleimglupa' src={imagemlupa} alt="" />
                            </button>
                        </form>

                        <button id='Criarlembrete' className='stylebuttonadicao'>
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
