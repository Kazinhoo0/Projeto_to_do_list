import ExitImage from './imagens/logout.png'
import ImagemUser from './imagens/Imagem do WhatsApp de 2024-05-15 à(s) 18.51.45_32b25f6e.jpg'
import './Index.css'
import ImagemCalendario from './/imagens/agendamento.png'
function Index() {


    return (
        <>
            <div className='container'>
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
                            <p className='mensagem_bemvindo' >Olá,usuário 
                            <br></br>Bem vindo</p>
                        </div>
                        <div>
                            <ul>
                                <li className='lista_style' >
                                    daw

                                </li>
                            </ul>
                        </div>
                        <div className='containerimageexit'>
                            <img className='imageexit' src={ExitImage} alt="" />
                            <div className='Sair'>
                            <a className='sairbutton' href="">Sair</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}



export default Index