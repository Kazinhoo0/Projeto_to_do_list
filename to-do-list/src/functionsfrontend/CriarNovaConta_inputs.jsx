import './CriarNovaConta_inputs.css'

function Inputs_CriarNovaConta({setNome,setSobrenome,setUsername,setEmail,setSenha}) {


    return (

        <form>
            <div className='containerinputmargin'  >
                <label className='stylelabel' htmlFor="nome">Nome</label>
                <input
                    type="text"
                    placeholder='insira seu nome*'
                    className='styleinputs'
                    name='nome'
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div className='containerinputmargin ' >
                <label className='stylelabel' htmlFor="sobrenome">Sobrenome:</label>
                <input
                    type="text"
                    placeholder='Insira seu sobrenome*'
                    className='styleinputs'
                    name='sobrenome'
                onChange={(e) => setSobrenome(e.target.value)}
                />
            </div>
            <div className='containerinputmargin '>
                <label className='stylelabel' htmlFor="username">Username:</label>
                <input
                    placeholder='insira seu login*'
                    className='styleinputs'
                    type='text'
                    name='username'
                onChange={(e) => setUsername(e.target.value)}
                ></input>
            </div>
            <div className='containerinputmargin ' >
                <label className='stylelabel' htmlFor="email">Email:</label>
                <input
                    type="email"
                    name='email'
                    placeholder='Insira o seu email *'
                    className='styleinputs'
                onChange={(e) => setEmail(e.target.value)}
                />

            </div>
            <div className='containerinputmargin '>
                <label className='stylelabel' htmlFor="senha">Senha:</label>
                <input
                    placeholder='Insira sua senha*'
                    type='password'
                    name='senha'
                    className='styleinputs'
                onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            {}

        </form>
    )
}


export default Inputs_CriarNovaConta