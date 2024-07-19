function Saudacoes ({nome}) {
    
    function GerarSaudacao (algumNome) {
        return `Olá ${algumNome}, Bem-vindo`
    }
    return (
            <p>{GerarSaudacao(nome)}</p>
    );
}

export default Saudacoes