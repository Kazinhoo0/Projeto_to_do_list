import ImagemCalendario from '../imagens/agendamento.png';
import ImagemGithub from '../imagens/icons8-github-30.png';
import ImagemLinkedin from '../imagens/Linked_img.png';
import ImagemPortifólio from '../imagens/Portifólio_img.png';
import Inputs_CriarNovaConta from '../components/Inputs_CriarNovaConta';
import { useState } from 'react';
import '..//App.css'
import { useNavigate } from "react-router-dom";


function CriarNovaConta() {


    const navigate = useNavigate();


    const NavigateLogin = () => {
        navigate('/')
    }



    return (

        <div className='container'>

            <div className='cabecalhostyle'>
                
                <h1>TO-DO-LIST</h1>

                <img className='imgstyle_criarconta' src={ImagemCalendario} alt="" />

            </div>

            <div className='container_principalcriarnovaconta'>

                <div className='containerinputs_pagcriarconta'>
                    <div className='containerfaçalogin'>
                        <h3>Criar conta</h3>
                    </div>
                    <div className='styleborderinput'>

                        <Inputs_CriarNovaConta />

                    </div>
                
                </div>
            </div>
                <div className='container_sitesbuttons_style' >
                    {<button id="popupid" className="buttonstyle" onClick={() => { window.open("https://kaualopesmonteiro.netlify.app/") }} type="button"><img className='popupsstyle' src={ImagemPortifólio} alt="" /></button>}

                    {<button className="buttonstyle" onClick={() => { window.open("https://www.linkedin.com/in/kau%C3%A3-lopes-monteiro/") }} type="button"><img className='popupsstyle' src={ImagemLinkedin} alt="" /></button>}

                    {<button className="buttonstyle" onClick={() => { window.open("https://github.com/Kazinhoo0") }} type="button" ><img className='popupsstyle' src={ImagemGithub} alt="" /></button>}
                </div>


                <div className='container_devfor'>
                    <p style={{ color: 'yellow', marginLeft: '20px', marginBottom: '20px' }}>Desenvolvido por Kauã Lopes Monteiro</p>
                </div>
        </div>
    )

}


export default CriarNovaConta


