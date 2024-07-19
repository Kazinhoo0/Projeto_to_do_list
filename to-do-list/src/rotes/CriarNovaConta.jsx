import { useState } from 'react'
import ImagemCalendario from './imagens/agendamento.png'
import ImagemGithub from './imagens/icons8-github-30.png'
import ImagemLinkedin from './imagens/Linked_img.png'
import ImagemPortifólio from './imagens/Portifólio_img.png'
import Mensagembemvindo from './scriptsindex/Mesagebemvindo'
import './CriarNovaConta.css'

function CriarNovaConta({setNome}) {



    return (

        <div className='container'>
            <div className='cabecalhostyle'>
                <h1>TO-DO-LIST</h1>
                {<img className='Imgstyle' src={ImagemCalendario} alt="" />}
            </div>
            <div>
                <div className='containerinputlogin'>
                    <div className='containerfaçalogin'>
                        <h3>Criar conta</h3>
                    </div>
                    <div className='styleborderinput'>
                        <form>
                            <div className='containerinputmargin'  >
                                <label className='stylelabel' htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    placeholder='insira seu nome*'
                                    className='styleinputs'
                                    name='nome'
                                />
                            </div>
                            <div className='containerinputmargin ' >
                                <label className='stylelabel' htmlFor="sobrenome">Sobrenome:</label>
                                <input
                                    type="text"
                                    placeholder='Insira seu sobrenome*'
                                    className='styleinputs'
                                    name='sobrenome'
                                />
                            </div>
                            <div className='containerinputmargin '>
                                <label className='stylelabel' htmlFor="username">Username:</label>
                                <input
                                    placeholder='insira seu login*'
                                    className='styleinputs'
                                    type='text'
                                    name='username'
                                    // onChange={(e) => setNome(e.target.value)}
                                ></input>
                            </div>
                            <div className='containerinputmargin ' >
                                <label className='stylelabel' htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Insira o seu email *'
                                    className='styleinputs' />
                            </div>
                            <div className='containerinputmargin '>
                                <label className='stylelabel' htmlFor="senha">Senha:</label>
                                <input
                                    placeholder='Insira sua senha*'
                                    type='password'
                                    name='senha'
                                    className='styleinputs' />
                            </div>

                        </form>
                        <div className='containerbuttonentrar'>
                            <button className='buttonentrarstyle' >Entrar</button>
                        </div>
                    </div>
                    <div className='container_esquecisenha_criarconta' >
                        <div>
                            <a className='style_esquecisenha' href="">Já tem uma conta ?</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerbuttonsstyle' >
                {<button id="popupid" className="buttonstyle" onClick={() => { window.open("https://kaualopesmonteiro.netlify.app/") }} type="button"><img className='popupsstyle' src={ImagemPortifólio} alt="" /></button>}

                {<button className="buttonstyle" onClick={() => { window.open("https://www.linkedin.com/in/kau%C3%A3-lopes-monteiro/") }} type="button"><img className='popupsstyle' src={ImagemLinkedin} alt="" /></button>}

                {<button className="buttonstyle" onClick={() => { window.open("https://github.com/Kazinhoo0") }} type="button" ><img className='popupsstyle' src={ImagemGithub} alt="" /></button>}

            </div>
            <div>
                <p className='containerparagraforedes'>Desenvolvido por Kauã Lopes Monteiro</p>
            </div>

            {/* <Mensagembemvindo nome={nome}></Mensagembemvindo> */}
        </div>
    )

}


export default CriarNovaConta


