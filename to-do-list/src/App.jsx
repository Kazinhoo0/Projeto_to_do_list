import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className='container'>
      <div className='cabecalhostyle'>
        <h1>TO-DO-LIST</h1>
      </div>
      <div>

        <div className='containerinputlogin'>
          <div className='containerfaçalogin'>
            <h3>Faça Login</h3>
          </div>
          <div className='containerlogin'>
            <label className='stylelabel' htmlFor="nome">Login</label>
            <input
              placeholder='insira seu login*'
              className='styleinputs'
              type='text'
              name='nome'
            ></input>
          </div>
          <div className='containersenha'>
            <label className='stylelabel' htmlFor="senha">Senha</label>
            <input
              placeholder='Insira sua senha*'
              type='password'
              name='senha'
              className='styleinputs' />
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
