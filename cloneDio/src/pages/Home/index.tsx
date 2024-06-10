import "./style.css";
import Header from '../../components/Header'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function App() {
    return (
        <div className="container">
            <Header/>
            <div className="info-cad">
                <span>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</span>
                <div className="form">
                    <h2>Comece agora grátis</h2>
                    <span className="criar-conta">Crie sua conta e make the change._</span>
                    <form>
                        <div className="Nome">
                            <div>
                                <FaUser className="FaUser"/>
                                <input placeholder="Nome Completo"/>
                            </div>
                            <hr/>
                        </div>
                        <div className="Email">
                            <div>
                                <MdEmail className="MdEmail"/>
                                <input placeholder="E-mail"/>
                            </div>
                            <hr/>
                        </div>
                        <div className="Password">
                            <div>
                                <RiLockPasswordFill className="RiLockPasswordFill"/>
                                <input placeholder="Password"/>
                            </div>
                            <hr/>
                        </div>
                        <div className="button">
                            <button>Criar minha conta</button>
                        </div>
                    </form>
                    <span className="termoUso">Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</span>
                    <span className="tenhoConta">Já tenho conta. <a>Fazer login</a></span>
                </div>
            </div>
        </div>        
    );
}

export default App;