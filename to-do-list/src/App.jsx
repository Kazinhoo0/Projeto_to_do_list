import logo from './logo.svg';
import './App.css';
import MinhaImagem from './images/agendamento.png'
import ImagemGithub from './images/icons8-github-30.png'
import ImagemLinkedin from './images/Linked_img.png'
import ImagemPortifólio from './images/Portifólio_img.png'

function App() {
  return (
    <div className='container'>
      <div className='cabecalhostyle'>
          <h1>TO-DO-LIST</h1>
          <img className='Imgstyle' src={MinhaImagem} alt="" />
      </div>
        <div>
          <div className='containerinputlogin'>
            <div className='containerfaçalogin'>
              <h3>Faça Login</h3>
            </div>
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
          </div>
        </div>
        <div>
            <button id="popupid" class="popupstyle1" onclick="abrirpop_porti()" type="button"><img src={ImagemPortifólio} alt="" /></button>

            <button class="popupstyle2" onclick="abrirpop_linkd()" type="button"><img src={ImagemLinkedin} alt="" /></button>

            <button class="popupstyle3" onclick="abrirpop_github()" type="button"><img src={ImagemGithub} alt="" /></button>
            <p>Desenvolvido por Kauã Lopes Monteiro</p>
        </div>
    </div>
  );
}

export default App;
