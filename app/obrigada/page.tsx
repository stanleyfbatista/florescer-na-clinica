import type { Metadata } from "next";
import "./obrigada.css";

export const metadata: Metadata = {
  title: "Matrícula confirmada | Florescer na Clínica",
  description: "Orientações para o primeiro acesso ao Florescer na Clínica.",
  robots: { index: false, follow: false },
};

const courseArea = "https://dashboard.kiwify.com.br/courses";

export default function ObrigadaPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-leaf thanks-leaf-one" aria-hidden="true" />
      <div className="thanks-leaf thanks-leaf-two" aria-hidden="true" />

      <section className="thanks-shell" aria-labelledby="thanks-title">
        <header className="thanks-brand">
          <img
            src="/florescer-logo-centralizado.svg"
            alt="Florescer na Clínica"
            width="1462"
            height="550"
          />
        </header>

        <div className="thanks-confirmation" aria-hidden="true">
          <span>✓</span>
        </div>

        <p className="thanks-kicker">Matrícula confirmada</p>
        <h1 id="thanks-title">Bem-vinda ao Florescer na Clínica</h1>
        <p className="thanks-intro">
          Sua decisão abre espaço para uma clínica mais organizada, próspera e
          coerente com a vida que você deseja viver.
        </p>

        <div className="thanks-divider" aria-hidden="true">
          <span />
        </div>

        <section className="thanks-next" aria-labelledby="next-title">
          <p className="thanks-kicker">Seus próximos passos</p>
          <h2 id="next-title">Comece por aqui</h2>

          <ol className="thanks-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Confira seu e-mail</h3>
                <p>
                  A Kiwify enviará as instruções de acesso para o mesmo e-mail
                  informado na compra. Confira também as pastas Spam e Promoções.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Entre na área de cursos</h3>
                <p>
                  Use o link recebido para criar sua senha. Se você já tem uma
                  conta Kiwify, entre com o mesmo e-mail usado no pagamento.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Inicie pela Filosofia Jardim</h3>
                <p>
                  Comece pelo primeiro módulo e siga as aulas na ordem. Esse
                  caminho foi organizado para que cada decisão faça sentido.
                </p>
              </div>
            </li>
          </ol>

          <a className="thanks-button" href={courseArea} rel="noreferrer">
            Acessar minha área de cursos <b aria-hidden="true">↗</b>
          </a>
          <p className="thanks-help">
            O acesso pode levar alguns minutos para chegar. Se necessário, use
            “Esqueci minha senha” na Kiwify com o e-mail informado na compra.
          </p>
        </section>
      </section>

      <footer className="thanks-footer">
        <p>Florescer na Clínica · Método Jardim</p>
        <p>Seu acesso é pessoal e protegido.</p>
      </footer>
    </main>
  );
}
