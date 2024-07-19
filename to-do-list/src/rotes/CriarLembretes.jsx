import ExitImage from './imagens/logout.png'
import ImagemUser from './imagens/Imagem do WhatsApp de 2024-05-15 à(s) 18.51.45_32b25f6e.jpg'
import './Criarlembretes.css'
import ImagemCalendario from './/imagens/agendamento.png'
import Imagemseta from './imagens/seta-para-baixo.png'
import { useState } from 'react'



function CriarLembrete () {

    const [ListaVisivel, setListavisivel] = useState(false)

    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel)
    }

    // const [nome, setNome] = useState()


    return (
        <div className='container' >
            <div className='containeruserbar' >
                    <div className='Tittle_site_div'>
                        <h1 className='h1_userbar'>TO-DO-LIST</h1>
                        {<img className='Imgstyle' src={ImagemCalendario} alt="" />}
                        <div className='containerlinks' >
                            <div className='links_style'>
                                <a href="">home</a>
                                <a href="">adasd</a>
                                <a href="">users</a>
                            </div>
                        </div>
                        <div className='containeruserprofile'>
                            <img className='styleImageUser' src={ImagemUser} alt="" />
                        </div>
                        <div className='mensagem_bemvindo' >
                            <p className='mensagem_bemvindo' >Olá,Username
                                <br></br>Bem-vindo</p>
                        </div>
                        <div className='containeropenseta
                        ' >
                            <button className='buttonsetastyle' type='button' name='butãoseta' onClick={itslistavisivel} >{ListaVisivel ? <img src={Imagemseta}></img> : <img src={Imagemseta} ></img>} </button>
                            {ListaVisivel && (
                                <div className='containerlistaordenada'  >
                                    <ul className='listasstyle'>
                                        <lo className='lista_style' >
                                            <a href="">Meu perfil</a>
                                        </lo>
                                    </ul>
                                    <ul className='listasstyle'>
                                        <lo>
                                            <a href="">Minhas agendas</a>
                                        </lo>
                                    </ul>
                                    <ul className='listasstyle'>
                                        <lo>
                                            <a href="">configurações</a>
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

                <div className='containercriarlembrete' >
                    <div className='containertittle' >
                        <h1>Criar lembrete</h1>
                    </div>
                    <div className='containernomelembrete' >
                        <p className='styleparagrafo' >Nome Lembrete</p>
                        <input className='styleinput' type="text" />
                    </div>   
                    <div className='containernomelembrete2' >
                        <p className='styleparagrafo' >Descrição</p>
                        <input className='styleinput' type="text" />
                    </div> 
                    <div className='containernomelembrete' >
                        <p className='styleparagrafo' >Data de vencimento</p>
                        <input placeholder='Data de vencimento' className='styleinput' type="date" />
                    </div>  
                    <div className='containernomelembrete' >
                        <p className='styleparagrafo' >Hora de vencimento</p>
                        <input className='styleinput' type="time" />
                    </div>  
                    <div className='containernomelembrete' >
                        <p className='styleparagrafo' >Categoria</p>
                        <input className='styleinput' type='text' name='categoria' />
                    </div>  
                    <div className='containerimportante' >
                        <label htmlFor="importante">Importante: </label>
                        <input type="checkbox" />
                    </div>

                    <div className='containerenviarlembrete' >
                        <button className='stylebuttonenviar' >Criar</button>
                    </div>


                </div>
        </div>
    )
}



export default CriarLembrete