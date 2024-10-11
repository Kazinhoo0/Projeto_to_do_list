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
import { IoOpenOutline } from "react-icons/io5";
import Toastify from 'toastify-js';






function Index() {
    const [ListaVisivel, setListavisivel] = useState(false);
    // const [mostrarnovolembrete, setnovolembrete] = useState(false);
    // const [nome, setNome] = useState('');
    const [nomelembrete, setNomelembrete] = useState('');
    const [categoria, setCategoria] = useState('');
    const [ischecked, setisimportante] = useState(false);
    // const [todos, settodos] = useState([]);
    // const [id, setID] = useState('');
    const [lembretes, setDadosLembretes] = useState([]);
    // const [editID, setEditID] = useState(null);
    // const [username, setUsername] = useState('');
    // const [user_id, setUserid] = useState('');
    const [userdata, setUserdata] = useState('');
    const [loading, setLoading] = useState('');
    const [condicaopesquisa, setCondicaoPesquisa] = useState('');

    const [newlembrete, setNewlembrete] = useState({

        nomelembrete: '',
        ichecked: '',
        categoria: '',
        


    })



    const navigate = useNavigate()


    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel);
    }

    // Função para apagar os lembretes criados pelo usuário
    // const handletrash = (id) => {
    //     const updatelembretes = lembretes.filter(lembrete => lembrete.id !== id);
    //     setLembretes(updatelembretes);
    // }

    // Função para navegar a home
    const NavegarHome = () => {
        navigate('/index');
    }

    const NavigateLogin = () => {
        navigate('/')
    }

    const handlenavigateeditarlembrete = () => {
        navigate('/index/editarlembretes')
    }

    const handlenavigateCriarLembrete = () => {
        navigate('/index/criarlembretes')
    }


    // Função para navegar a pagina de settings, que atualmente ainda não foi terminada.
    const NavegarMeuPerfil = () => {
        navigate('/settings');
    }
    //                                                                        //  
    
    (localStorage.setItem(condicaopesquisa,'condicaopesquisa'))
    console.log(condicaopesquisa)


    useEffect(() => {
        const userid = localStorage.getItem('id');
        const username = localStorage.getItem('username');

        setUserdata({
            userid: userid || '',
            username: username || ''
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
                    setDadosLembretes(data.items); // Armazena os itens no estado
                    localStorage.setItem('idlembrete', data.id)
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


    const fetchdeletelembrete = async (idlembrete) => {
        const userid = localStorage.getItem('id')

        if (!idlembrete) {
            console.log("nenhum lembrete selecionado")
            return
        }

        const response = await fetch('https://projeto-to-do-list-2.onrender.com/index/deletelembrete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idlembrete, userid })

        });

        const data = await response.json();
        console.log('Dados excluídos:', data);

        if (data.success) {
            Toastify({
                text: 'Lembrete excluido!',
                position: 'center',
                style: {
                    background: '#db2d0e',
                    color: '#ffffff',
                    width: '250px',
                    height: '150px'
                }
            }).showToast();


            setDadosLembretes((prevLembretes) =>
                prevLembretes.filter(lembrete => lembrete.id !== parseInt(idlembrete))
            )
        } else {
            console.log('Nenhum item encontrado');
        }

    };




    const fetchsearchbar = async () => {
        const userid = localStorage.getItem('id')
        const condicaopesquisa = localStorage.getItem('condicaopesquisa')


        if (!userid) {
            console.log("nenhum lembrete selecionado")
            return
        }

        const response = await fetch('https://projeto-to-do-list-2.onrender.com/index/searchbar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ condicaopesquisa, userid })

        });

        const data = await response.json();

        if (data.success) {

            console.log('pesquisa executada');

            console.log('pesquisa recebida:',data);


        } else {
            console.log('Não foi possivel pesquisar este item');
        }

    };




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
                <div className='container_principal_pageindex'>

                    <div className='container_listaafazeres'>

                        <div className='container_barradepesquisa'>

                            <div>
                                <button id='pesquisarlembrete' className='stylebuttonlupa'>

                                    <img onClick={fetchsearchbar} className='styleimglupa' src={imagemlupa} alt="" />

                                </button>
                            </div>

                            <div style={{ width: '80%' }}>

                                <input 
                                placeholder='Pesquisar lembrete*' 
                                style={{ color: 'white', width: '100%', height: '60%', marginTop: '9px', backgroundColor: '#19191a', border: 'none' }} 
                                type="text"
                                onChange={(e) => setCondicaoPesquisa(e.target.value)}
                                 />

                            </div>

                            <div>

                                <button onClick={handlenavigateCriarLembrete} id='Criarlembrete' className='stylebuttonadicao'>

                                    <img className='styleimgadição' src={Simboloadição} alt="" />

                                </button>

                            </div>

                        </div>

                        <div className='container_limparlembrete'>

                            <div>
                                <button className='buttoncleanlembrete'>Limpar todos os lembretes</button>

                            </div>

                            <div>

                                <button className='buttoncleanlembrete'>Limpar lembrete</button>

                            </div>
                        </div>

                        {/* Renderizar lembretes */}
                        <div className='lembretes-list'>


                            {lembretes.map((lembrete, index) => (
                                <div key={index} className='lembrete_item'>
                                    <h3 className='container_alllembretes'>Nome:{lembrete.nomelembrete} </h3>
                                    <p className='container_alllembretes'>Categoria:{lembrete.categoria}</p>
                                    <div className='container_alllembretes  '>imp:{lembrete.ischecked} <div className='checkedbox'><IoIosCheckbox /></div><div className='uncheckedbox'><MdIndeterminateCheckBox /></div></div>
                                    <div className='container_alllembretes'>
                                        Vencimento:{lembrete.vencimento}
                                    </div>


                                    <div className='container_limpar'>
                                        <div className='container_trash'>
                                            <FaTrash onClick={() => fetchdeletelembrete(lembrete.id)} className='style_button_trash' />
                                        </div>

                                        <div className='container_edit'>
                                            <FaEdit onClick={handlenavigateeditarlembrete} className='style_button_edit' />
                                        </div>
                                    </div>
                                </div>
                            ),)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;
