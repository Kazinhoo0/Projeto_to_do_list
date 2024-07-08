import ImagemCalendario from './imagens/agendamento.png'
import ImagemGithub from './imagens/icons8-github-30.png'
import ImagemLinkedin from './imagens/Linked_img.png'
import ImagemPortifólio from './imagens/Portifólio_img.png'
import AbrirPopUps from './functions_frontend/AbrirPopUps';
import './To_do_List.css'


function To_Do_List () {

      return (
        <div className='container'>
          <div className='cabecalhostyle'>
            <h1>TO-DO-LIST</h1>
            { <img className='Imgstyle' src={ImagemCalendario} alt="" /> }
          </div>
          <div>
            <div className='containerinputlogin'>
              <div className='containerfaçalogin'>
                <h3>Faça Login</h3>
              </div>
              <div className='styleborderinput'>
                <form>
                  <div className='containerinputmargin '>
                    <label className='stylelabel' htmlFor="nome">Username:</label>
                    <input
                      placeholder='insira seu login*'
                      className='styleinputs'
                      type='text'
                      name='nome'
                    ></input>
                  </div>
                  <div className='containerinputmargin ' >
                    <label className='stylelabel' htmlFor="email">Email:</label>
                    <input
                      type="text"
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
            </div>
          </div>
          <div className='containerbuttonsstyle' >
            {<button id="popupid" className="buttonstyle" type="button"><img className='popupsstyle' src={ImagemPortifólio} alt="" /></button>}
    
            {<button className="buttonstyle" onClick={AbrirPopUps} type="button"><img className='popupsstyle' src={ImagemLinkedin} alt="" /></button>}
    
            {<button className="buttonstyle" onClick={AbrirPopUps} type="button"><img className='popupsstyle' src={ImagemGithub} alt="" /></button>}
          </div>
          <div className='containerparagraforedes'>
            <p>Desenvolvido por Kauã Lopes Monteiro</p>
          </div>
        </div>
      );
    }

export default To_Do_List