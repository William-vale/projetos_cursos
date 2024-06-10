import "./style.css";
import Logo from "../../assets/logo-full.svg"

function Header() {
    return (
        <div className="container-header">
            <img src={Logo}/>
            <div className="Header-infos">
                <a>Home</a>
                <a className="button">Entrar</a>
                <a className="button">Cadastrar</a>
            </div>
        </div>
    )
}

export default Header;