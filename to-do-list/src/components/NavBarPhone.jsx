import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Navigate } from "react-router-dom";
import '../App.css'



export default function NavBarSmartPhones() {

    const navigate = () => {
        navigate(Navigate)
    }
    
    // Função para navegar a home
    const NavegarHome = () => {
        navigate('/index');
    }

    const NavigateLogin = () => {
        navigate('/')
    }

    const NavegarMeuPerfil = () => {
        navigate('/settings');
    }


     




    const [isMenuActive, setIsbuttonActive] = useState(false)

    const handlebutton = () => {
        setIsbuttonActive(!isMenuActive)
    }

    return ( 
    <div>
        <div>
            <FaBars onClick={handlebutton} className='style_buttonbar' color='white' />
        </div>
        
        {isMenuActive && (
            
            <div className='navbar_smarthphone'>

                <div className='style_closebutton'>
                    <IoMdClose onClick={handlebutton} className='styleteste' color='white' />
                </div>

                <div className='style_links'>
                    <ul style={{ marginLeft: '40px' }}>
                        <li onClick={NavegarMeuPerfil} className='style_navbar_smarthphone'>Configurações</li>
                        <li onClick={NavegarHome} className='style_navbar_smarthphone'>Meus lembretes</li>
                        <li onClick={NavigateLogin} className='style_navbar_smarthphone'>Sair</li>
                    </ul>
                </div>

            </div>
        )}
     </div>


)
}