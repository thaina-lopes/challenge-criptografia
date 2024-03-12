import "./App.css";
import logo from "./img/logo.svg";
import aviso from "./img/aviso.svg";
import naoencontrado from "./img/nao-encontrado.svg";

export default function App() {
  return (
    <section className="page">
      <div className="secoes-esquerda">
        <header className="cabecalho">
          <img src={logo} alt="Logo" className="logo" />
        </header>
        <section className="texto">
          <textarea
            className="texto-digitar"
            placeholder="Digite seu texto"
          ></textarea>
        </section>
        <section className="texto-aviso">
          <p className="linha-aviso">
            <img src={aviso} alt="aviso" className="aviso" />
            Apenas letras minúsculas e sem acento.
          </p>
        </section>
        <section className="botoes">
          <div className="botoes-container">
            <button className="botao01">Criptografar</button>
            <button className="botao02">Descriptografar</button>
          </div>
        </section>
      </div>
      <section className="texto-criptografado">
        <div className="campo-texto">
          <img
            src={naoencontrado}
            alt="menino segurando uma lupa"
            className="nao-encontrado"
          />
          <p className="primeira-linha">Nenhuma mensagem encontrada</p>
          <p className="segunda-linha">
            Digite um texto que você deseja criptografar ou descriptografar.
          </p>
        </div>
      </section>
    </section>
  );
}
