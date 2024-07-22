import './Settings.css'
import ExitImage from './imagens/logout.png'
import './Criarlembretes.css'
import ImagemCalendario from './/imagens/agendamento.png'
import Imagemseta from './imagens/seta-para-baixo.png'
import { useState, useTransition } from 'react'
import Imagempadraoperfil from './imagens/user.png'
import CriarNovaConta from './CriarNovaConta'
import Settings_Output from '../functionsfrontend/Settings_output_info'


function Settings() {

    const [ListaVisivel, setListavisivel] = useState(false)
    const [img, setImg] = useState(null)
    const [filename, setFileName] = useState("Nenhum arquivo selecionado")
    const [nome, setNome] = useState('oi')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [sobrenome, setSobrenome] = useState('')

    const itslistavisivel = () => {
        setListavisivel(!ListaVisivel)
    }

    return (
        <div className="container" >
            <Inputs_CriarNovaConta setNome={setNome} setSenha={setSenha} setEmail={setEmail} setSobrenome={setSobrenome} setUsername={setUsername} nome={nome} />
            <div className='containeruserbar' >
                <div className='Tittle_site_div'>
                    <h1 className='h1_userbar'>TO-DO-LIST</h1>
                    {<img className='Imgstyle' src={ImagemCalendario} alt="" />}
                    <div className='containerlinks' >
                        <div className='links_style'>
                            <a href="">Home</a>
                            <a href="">Meus Lembretes</a>
                            <a href="">Users</a>
                        </div>
                    </div>
                    <div className='containeruserprofile'>
                        <img
                            className='styleImageUser'
                            alt=""
                            id='Fotoperfil'
                            src={img}
                        />
                    </div>
                    {/* <button onClick={LimparFotoPerfil} >limpar</button> */}
                    <div className='mensagem_bemvindo' >
                        <p className='mensagem_bemvindo' >Olá,usuário
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

            <div className="container_settings" >
                <div className='container_fotoperfil' >
                    <div className='style_fotoperfil' >
                        <div className='img_fotoperfil'>
                            <img className='style_imgprofile' src={img} />
                        </div>
                        <div className='style_fotodeperfil'>
                            <p>Alterar foto de perfil: </p>
                        </div>
                        <label className='container_input_arquivofoto' htmlFor="arquivo" >
                            <input
                                className='style_inputfile'
                                type="file"
                                accept='image/*'
                                id='arquivo'
                                onChange={({ target: { files } }) => {
                                    files[0] && setFileName(files[0].name)
                                    if (files) {
                                        setImg(URL.createObjectURL(files[0]))
                                    }
                                }}
                            />
                            <span className='style_span' >Enviar Arquivo </span>
                        </label>
                        <div>
                            <button className='button_salvarconfigs' type='submit'>Salvar</button>
                        </div>
                    </div>
                </div>

                <div className='container_userinf'>
                    <div className='container_tittle' >
                        <h2 className='style_tittle' >Configurações</h2>
                    </div>
                        <div className='container_inputs'>

                    <div>
                        <br />
                        <label htmlFor="nome">Nome:</label>
                        <span id="nome">{nome}</span>
                    </div>
                    <div>
                        <br />
                        <label htmlFor="sobrenome">Sobrenome:</label>
                        <span>{sobrenome}</span>
                    </div>
                    <div>
                        <br />
                        <label htmlFor="username">Username:</label>
                        <span>{username}</span>
                    </div>
                    <div>
                        <br />
                        <label htmlFor="email">Email:</label>
                        <span>{email}</span>
                    </div>
                    <div>
                        <br />
                        <label htmlFor="senha">Senha:</label>
                        <span>{senha}</span>
                    </div>


                    </div>


                </div>

            </div>
            
        </div>
    )
}


export default Settings