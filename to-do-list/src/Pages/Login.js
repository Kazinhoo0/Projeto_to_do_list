import './App.css';

function Login () {


    return (

        <div className='containerlogin'>
      <div className='cabecalhostyle'>
        <h1>TO-DO-LIST</h1>
      </div>
      <div>
        <div className='containerfaçalogin'>
          <h3>Faça Login</h3>
        </div>
        <div className='containerinputlogin'>
          <div>
            <label htmlFor="nome">Login:</label>
            <input 
            type='text'
            name='nome'
            
            ></input>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login