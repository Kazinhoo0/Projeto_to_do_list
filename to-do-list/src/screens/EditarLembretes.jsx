// import ExitImage from './imagens/logout.png'
// import './EditarLembretes.css'
// import { Route, Routes, BrowserRouter } from "react-router-dom"
// import ImagemCalendario from './/imagens/agendamento.png'
// import Imagemseta from './imagens/seta-para-baixo.png'
// import { useNavigate, useResolvedPath } from 'react-router-dom'
// import ImagemUser from './imagens/user.png';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import '..//App.css'




// function EditarLembretes({ lembretes, setLembretes }) {

//     const [ListaVisivel, setListavisivel] = useState(false)
//     const { id } = useParams();
//     const lembrete = lembretes.find((lembrete) => lembrete.id === parseInt(id));
//     const [nomelembrete, setNomelembrete] = useState(lembrete.nomelembrete);
//     const [categoria, setCategoria] = useState(lembrete.categoria);
//     const [ischecked, setisimportante] = useState(lembrete.importante);
//     const [descricao, setDescricao] = useState(lembrete.descricao);
//     const [Vencimento, setVencimento] = useState(lembrete.vencimento);
//     const [hora, setHora] = useState(lembrete.hora);

//     const itslistavisivel = () => {
//         setListavisivel(!ListaVisivel)
//     }

//     useEffect(() => {
//         const lembrete = lembretes.find((lembrete) => lembrete.id === parseInt(id));
//         if (lembrete) {
//           setNomelembrete(lembrete.nomelembrete);
//           setCategoria(lembrete.categoria);
//           setisimportante(lembrete.importante);
//         }
//       }, [id, lembretes, navigate]);


//     const navigate = useNavigate();

//     const NavegarCriarLembrete = () => {
//         navigate('/EditarLembretes');
//     };

//     const NavegarHome = () => {
//         navigate('/')
//     }

//     const NavegarMeusLembretes = () => {
//         navigate('/Index')
//     }

//     const NavegarMeuPerfil = () => {
//         navigate('/Settings')
//     }

//     const handleSalvar = (e) => {
//         e.preventDefault();
//         const lembretesAtualizados = lembretes.map((item) =>
//             item.id === lembrete.id ? { ...item, nomelembrete, categoria, importante: ischecked, descricao: descricao, vencimento: Vencimento, hora: hora } : item
//         );
//         setLembretes(lembretesAtualizados);
//         navigate('/');
//     };





//     return (
//         <div className='container' >
//             <div className='containeruserbar' >
//                 <div className='Tittle_site_div'>
//                     <h1 className='h1_userbar'>TO-DO-LIST</h1>
//                     {<img className='style_img' src={ImagemCalendario} alt="" />}
//                     {/* <div className='containerlinks' >
//                             <div className='links_style'>
//                                 <a onClick={NavegarHome} href="">Home</a>
//                                 <a onClick={NavegarMeusLembretes} href="">Meus Lembretes</a>
//                             </div>
//                         </div> */}
//                     <div className='containeruserprofile'>
//                         <img className='styleImageUser' src={ImagemUser} alt="" />
//                     </div>
//                     <div className='mensagem_bemvindo' >
//                         <p className='mensagem_bemvindo' >Olá,Username
//                             <br></br>Bem-vindo</p>
//                     </div>
//                     <div className='containeropenseta
//                         ' >
//                         <button className='buttonsetastyle' type='button' name='butãoseta' onClick={itslistavisivel} >{ListaVisivel ? <img src={Imagemseta}></img> : <img src={Imagemseta} ></img>} </button>
//                         {ListaVisivel && (
//                             <div className='containerlistaordenada'  >
//                                 <ul className='listasstyle'>
//                                     <lo className='lista_style' >
//                                         <a onClick={NavegarMeuPerfil}>Meu perfil</a>
//                                     </lo>
//                                 </ul>
//                                 <ul className='listasstyle'>
//                                     <lo>
//                                         <a onClick={NavegarCriarLembrete}>Minhas agendas</a>
//                                     </lo>
//                                 </ul>
//                             </div>
//                         )}

//                     </div>
//                     <div className='containerimageexit'>
//                         <img className='imageexit' src={ExitImage} alt="" />
//                         <div className='Sair'>
//                             <a className='sairbutton' href="">Sair</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='containercriarlembrete' >
//                 <div className='containertittle' >
//                     <h1>Criar lembrete</h1>
//                 </div>
//                 <form onChange={handleSalvar} >
//                     <div className='containernomelembrete' >
//                         <p className='styleparagrafo' >Nome Lembrete</p>
//                         <input
//                             className='styleinput'
//                             type="text"
//                             onChange={(e) => setNomelembrete(e.target.value)} />
//                     </div>
//                     <div className='containernomelembrete2' >
//                         <p className='styleparagrafo' >Descrição</p>
//                         <input
//                             className='styleinput'
//                             type="text"
//                             onChange={(e) => setDescricao(e.target.value)} />
//                     </div>
//                     <div className='containernomelembrete' >
//                         <p
//                             className='styleparagrafo'
//                         >Data de vencimento</p>
//                         <input
//                             placeholder='Data de vencimento'
//                             className='styleinput'
//                             type="date"
//                             onChange={(e) => setVencimento(e.target.value)} />
//                     </div>
//                     <div className='containernomelembrete' >
//                         <p className='styleparagrafo' >Hora de vencimento</p>
//                         <input
//                             className='styleinput'
//                             type="time"
//                             onChange={(e) => setHora(e.target.value)} />
//                     </div>
//                     <div className='containernomelembrete' >
//                         <p className='styleparagrafo' >Categoria</p>
//                         <select value={categoria} name="typelembrete" id="" className='style_typelembrete' onChange={(e) => setCategoria(e.target.value)}>
//                             <option value="">Nenhum</option>
//                             <option value="trabalho">Trabalho</option>
//                             <option value="pessoal">Pessoal</option>
//                             <option value="acordarcedo">Acordar cedo</option>
//                             <option value="entrevistaemprego">Entrevista de emprego</option>
//                             <option value="corrida">Corrida</option>
//                             <option value="academia">Academia</option>
//                             <option value="nataçao">Natação</option>
//                         </select>
//                     </div>
//                     <div className='containerimportante' >
//                         <label htmlFor="importante">Importante: </label>
//                         <input
//                             type="checkbox"
//                             onChange={(e) => setisimportante(e.target.value)}
//                         />
//                     </div>
//                 </form>

//                 <div className='containerenviarlembrete' >
//                     <button type='submit' className='stylebuttonenviar' >Criar</button>

//                 </div>


//             </div>
//         </div>
//     )
// }



// export default EditarLembretes