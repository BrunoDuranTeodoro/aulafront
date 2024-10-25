import Logo from './img/Logo.png'
import Home from './img/Home.png'
import Contato from './img/Contato.png'
import Pagina from './img/Pagina.png'
import Sobre from './img/Sobre.png'
import Sair from './img/Sair.png'
import './style.css'

export default function Sidebar(){
    return(
        <aside>
            <img src={Logo} alt="Logo do sidebar" />
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src={Home} alt="Home" />
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Contato} alt="Contato" />
                            <span>Contato</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Sobre} alt="Sobre" />
                            <span>Sobre</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Pagina} alt="Pagina" />
                            <span>Pagina</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Sair} alt="Sair" />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

