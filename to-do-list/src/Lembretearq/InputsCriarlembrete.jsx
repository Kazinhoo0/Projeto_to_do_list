

function InputsCriarlembrete ({setNomeLembrete,setDescricao,setVencimento,setHora, setCategoria,setImportante}) {


    return (

        <div className='containercriarlembrete' >
        <div className='containertittle' >
            <h1>Criar lembrete</h1>
        </div>
        <div className='containernomelembrete' >
            <p className='styleparagrafo' >Nome Lembrete</p>
            <input 
            className='styleinput'
            type="text"
            onChange={(e) => setNomeLembrete(e.target.value)} />
        </div>   
        <div className='containernomelembrete2' >
            <p className='styleparagrafo' >Descrição</p>
            <input 
            className='styleinput'
            type="text"
            onChange={(e) => setDescricao(e.target.value)} />
        </div> 
        <div className='containernomelembrete' >
            <p 
            className='styleparagrafo'
             >Data de vencimento</p>
            <input 
            placeholder='Data de vencimento'
            className='styleinput'
            type="date"
            onChange={(e) => setVencimento(e.target.value)} />
        </div>  
        <div className='containernomelembrete' >
            <p className='styleparagrafo' >Hora de vencimento</p>
            <input 
            className='styleinput'
            type="time"
            onChange={(e) => setHora(e.target.value)} />
        </div>  
        <div className='containernomelembrete' >
            <p className='styleparagrafo' >Categoria</p>
            <input 
            className='styleinput'
            type='text'
            name='categoria'
            onChange={(e) => setCategoria(e.target.value)}
               />
        </div>  
        <div className='containerimportante' >
            <label htmlFor="importante">Importante: </label>
            <input 
            type="checkbox"
            onChange={(e) => setImportante(e.target.value)}
             />
        </div>

        <div className='containerenviarlembrete' >
            <button  
            className='stylebuttonenviar'
             >Criar</button>

             
        </div>


    </div>
    )

}

export default InputsCriarlembrete