import { useState } from "react"

function Inputesquecisenha () {

    const [username, setUsername] = useState('')


    const handsendinf = (e) => {
        e.preventDefault()
        console.log(username)

    }


    return (    
        <div className="container_inputs">
            <form  onSubmit={handsendinf} >
                <div className="container_inputusername" >
                    <input 
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                     />

                    <button onClick={handsendinf} >Enviar</button>
                </div>

            </form>
        </div>      
    )   
}


export default Inputesquecisenha