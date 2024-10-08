import ExitImage from '../imagens/logout.png'
import '../App.css'
import ImagemCalendario from '../imagens/agendamento.png'
import Imagemseta from '../imagens/seta-para-baixo.png'
import { useNavigate } from 'react-router-dom'
import ImagemUser from '../imagens/user.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Toastify from 'toastify-js';




function EditarLembretes() {

    const [ListaVisivel, setListavisivel] = useState(false);
    // const { id } = useParams();
    // const [nomelembrete, setNomelembrete] = useState('');
    // const [categoria, setCategoria] = useState('');
    // const [ischecked, setisimportante] = useState('');
    // const [descricao, setDescricao] = useState('');
    // const [Vencimento, setVencimento] = useState('');
    // const [horavencimento, setHora] = useState('');
    const [userdata, setUserData] = useState('')

    const [newlembrete, setNewLembrete] = useState({
        nomelembrete: '',
        categoria: '',
        ischecked: '',
        descricao: '',
        vencimento: '',
        horavencimento: ''
    });

    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel)
    }


    const navigate = useNavigate();

    const NavegarCriarLembrete = () => {
        navigate('/EditarLembretes');
    };

    const NavegarMeusLembretes = () => {
        navigate('/Index')
    }

    const NavegarMeuPerfil = () => {
        navigate('/Settings')
    }

    const NavigateLogin = () => {
        navigate('/')
    }

    //  const handleSalvar = (e) => {
    //      e = preventDefault()
    //  };

    useEffect(() => {
        const username = localStorage.getItem('username')

        setUserData({
            username: username || "",
        })
    })

    const handlecriarlembrete = async (e) => {
        e.preventDefault();

        const userid = localStorage.getItem('id');

        console.log('Valores:', newlembrete.nomelembrete,newlembrete.categoria,newlembrete.ischecked, userid );


        const response = await fetch('https://projeto-to-do-list-2.onrender.com/index/criarlembretes', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nomelembrete: newlembrete.nomelembrete,
                categoria: newlembrete.categoria,
                ischecked: newlembrete.ischecked,
                user_id: userid

            })

        });

        const data = await response.json();
        if (data.success) {

            Toastify({
                text: 'Lembrete cadastrado com sucesso!',
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
                text: 'Não foi possivel cadastrar este lembrete!',
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
        <div className='container' >
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

            <div className='container_criarlembrete' >
                <div className='container_filhocriarlembretes'>
                    <form>
                        <div className='containernomelembrete' >
                            <p className='styleparagrafo' >Nome Lembrete</p>
                            <input
                                className='style_inputpageeditarlembretes'
                                type="text"
                                value={newlembrete.nomelembrete}
                                onChange={(e) => setNewLembrete({ ...newlembrete, nomelembrete: e.target.value })} />
                        </div>
                        <div className='containernomelembrete' >
                            <p className='styleparagrafo' >Descrição</p>
                            <input
                                className='style_inputpageeditarlembretes'
                                type="text"
                                value={newlembrete.descricao}
                                onChange={(e) => setNewLembrete({ ...newlembrete, descricao: e.target.value })} />
                        </div>
                        <div className='containernomelembrete' >
                            <p
                                className='styleparagrafo'
                            >Data de vencimento</p>
                            <input
                                placeholder='Data de vencimento'
                                className='style_inputpageeditarlembretes'
                                type="date"
                                value={newlembrete.vencimento}
                                onChange={(e) => setNewLembrete({ ...newlembrete, vencimento: e.target.value })} />
                        </div>
                        <div className='containernomelembrete' >
                            <p className='styleparagrafo' >Hora de vencimento</p>
                            <input
                                className='style_inputpageeditarlembretes'
                                type="time"
                                value={newlembrete.horavencimento}
                                onChange={(e) => setNewLembrete({ ...newlembrete, horavencimento: e.target.value })} />
                        </div>
                        <div className='containernomelembrete' >
                            <p className='styleparagrafo' >Categoria</p>
                            <select value={newlembrete.categoria} name="typelembrete" id="" className='style_typelembrete' onChange={(e) => setNewLembrete({ ...newlembrete, categoria: e.target.value })}>
                                <option value="">Nenhum</option>
                                <option value="trabalho">Trabalho</option>
                                <option value="pessoal">Pessoal</option>
                                <option value="acordarcedo">Acordar cedo</option>
                                <option value="entrevistaemprego">Entrevista de emprego</option>
                                <option value="corrida">Corrida</option>
                                <option value="academia">Academia</option>
                                <option value="nataçao">Natação</option>
                            </select>
                        </div>
                        <div className='containerimportante' >
                            <p className='styleparagrafo' htmlFor="importante">Importante: </p>
                            <input
                                className='stylecheckbox_pagecriarlembrete'
                                type="checkbox"
                                value={newlembrete.ischecked}
                                onChange={(e) => setNewLembrete({ ...newlembrete, ischecked: e.target.value })}
                            />
                        </div>
                        <div style={{ justifyContent: 'center', alignContent: 'center', display: 'flex' }}>
                            <button style={{ cursor: 'pointer', backgroundColor: 'yellow', color: 'black', width: '200px', height: '25px', borderRadius: '5px', border: 'none' }} onClick={handlecriarlembrete} >Cria Lembrete</button>
                        </div>
                    </form>
                </div>


            </div >
        </div >
    )
}



export default EditarLembretes