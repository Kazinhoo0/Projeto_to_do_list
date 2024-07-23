import './ConfirmarEmail.css'

function Confirmaremail() {

    return (
        <>
            <div className="container" >
                <div className="container_form" >
                    <form>
                        <h2>Confirmação de email</h2>
                        <h4>Insira o número enviado para o seu email:</h4>
                        <div className='containerinput'>
                            <input
                                type="text"
                                className='inputstyle'
                                id='inputnumero' />
                        </div>


                    </form>
                </div>
            </div>

        </>
    )
}

export default Confirmaremail