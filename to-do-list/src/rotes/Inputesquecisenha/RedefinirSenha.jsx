import { useState } from "react"
import './RedefinirSenha.css'
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

export default function RedefinirSenha() {

    const [senha, setSenha] = useState('')
    const [senharepetida, setSenhaRepetida] = useState('')
    const navigate = useNavigate();


    const handlesalvar = () => {
        if (senha === senharepetida) {

            alert("Senha alterada com sucesso!")
            setTimeout(() => {
                navigate('/')
            }, 5000);
        }
        else {
            alert("Porfavor, as senhas precisam ter mais que 8 caracteres, e precisam ser iguais.")
        }
    }
    return (

        <div className="container">
            <div className="container_inputs">
                <h2>Redefinir Senha</h2>
                <div className="style_containerlinknavigate" >
                </div>
                <div className="container_filho_input">
                    <form onSubmit={handlesalvar} >
                        <div className="container_inputusername" >

                            <input
                                className="style_inputusername"
                                type="text"
                                placeholder="Nova senha"
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <br></br>
                            <input
                                className="style_inputusername"
                                type="text"
                                placeholder="repita a nova senha"
                                onChange={(e) => setSenhaRepetida(e.target.value)}
                            />
                            <button className="style_sendbutton" onClick={handlesalvar} ><IoMdSend /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}
