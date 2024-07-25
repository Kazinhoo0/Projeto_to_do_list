import ExitImage from './imagens/logout.png'
import './Criarlembretes.css'
import ImagemCalendario from './/imagens/agendamento.png'
import Imagemseta from './imagens/seta-para-baixo.png'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import ImagemUser from './imagens/user.png';
import InputsCriarlembrete from '../Lembretearq/InputsCriarlembrete'



function CriarLembrete () {

    const [ListaVisivel, setListavisivel] = useState(false)
    const [img, setImg] = useState(null)
    const [nomelembrete, setNomelembrete] = useState('')
    const [descricao, setdescricao] = useState('')
    const [datavencimento, setdatavencimento] = useState('')
    const [horavencimento, sethoravencimento] = useState('')
    const [categoria, setcategoria] = useState('')
    const [importante, setimportante] = useState('')


    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel)
    }

    
    const navigate = useNavigate();

    const NavegarCriarLembrete = () => {
        navigate('/Criarlembrete');
    };

    const NavegarHome =  () => {
        navigate('/')
    }

    const NavegarMeusLembretes = () => {
        navigate('/Index')
    }

    const NavegarMeuPerfil = () => {
        navigate('/Settings')
    }


  

    return (
        <div className='container' >
            <div className='containeruserbar' >
                    <div className='Tittle_site_div'>
                        <h1 className='h1_userbar'>TO-DO-LIST</h1>
                        {<img className='style_img' src={ImagemCalendario} alt="" />}
                        {/* <div className='containerlinks' >
                            <div className='links_style'>
                                <a onClick={NavegarHome} href="">Home</a>
                                <a onClick={NavegarMeusLembretes} href="">Meus Lembretes</a>
                            </div>
                        </div> */}
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
                                            <a onClick={NavegarMeuPerfil}>Meu perfil</a>
                                        </lo>
                                    </ul>
                                    <ul className='listasstyle'>
                                        <lo>
                                            <a onClick={NavegarCriarLembrete}>Minhas agendas</a>
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

               <InputsCriarlembrete/>
        </div>
    )
}



export default CriarLembrete