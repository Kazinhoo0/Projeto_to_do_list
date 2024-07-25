






function InputUsernameLogin ({setUsername}) {

    


    return (
        <div className='containerinputmargin '>
            <label className='stylelabel' htmlFor="nome">Username:</label>
            <input
                placeholder='insira seu login*'
                className='styleinputs'
                type='text'
                name='Username'
                onChange={(e) => setUsername(e.target.value)}
            ></input>
        </div>
    )
}

export default InputUsernameLogin