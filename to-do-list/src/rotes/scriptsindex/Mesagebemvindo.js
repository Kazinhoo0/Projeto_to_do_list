

function Mensagembemvindo ({nome}) {

    function Mensagem (algumnome) {
        return `Olá,  ${algumnome}, bem-vindo`
    }


    return(

            <>
            {nome && <p>{Mensagem(nome)}</p>}
            </>
       
    )
}


export default Mensagembemvindo