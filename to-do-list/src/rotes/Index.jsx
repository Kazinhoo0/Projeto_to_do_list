import ExitImage from './imagens/logout.png'
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

                        </div>
                        <div className='containerimageexit'>
                            <img src={ExitImage} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}



export default Index