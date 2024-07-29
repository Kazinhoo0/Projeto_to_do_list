






function InputUsernameLogin ({setUsername}) {

    


    return (
        <div className='containerinputmargin '>
            <input
                placeholder='Insira seu username*'
                className='styleinputs'
                type='text'
                name='Username'
                onChange={(e) => setUsername(e.target.value)}
            ></input>
        </div>
    )
}

export default InputUsernameLogin