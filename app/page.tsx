import { FaqItem } from "./components/FaqItem";
import { salesContent } from "./content";

const Check = () => <span className="check" aria-hidden="true">✓</span>;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="nav wrap" aria-label="Navegação principal">
          <a className="brand" href="#top" aria-label="Florescer na Clínica"><span className="brand-tree">♣</span><span><i>Método</i> Jardim</span></a>
          <a className="nav-cta" href="#oferta">Quero florescer</a>
        </nav>
        <div className="hero-grid wrap" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Florescer na Clínica</p>
            <h1>{salesContent.headline}</h1>
            <p className="hero-sub">Um caminho para a psicóloga que já atende, mas ainda vive presa à jornada dupla — e quer estruturar o consultório sem perder o sentido do seu trabalho.</p>
            <a className="button button-primary" href="#oferta">Quero conhecer o Método Jardim <span>→</span></a>
            <p className="microcopy">Uma formação para transformar vocação em uma carreira sustentável.</p>
          </div>
          <div className="hero-portrait" role="img" aria-label="Beatriz, criadora do Método Jardim"><span>Imagem provisória</span></div>
        </div>
        <div className="hero-note">Para psicólogas que querem cuidar da clínica — e também da vida.</div>
      </header>

      <section className="section pain">
        <div className="narrow">
          <p className="eyebrow">Talvez você conheça bem essa rotina</p>
          <h2>A rotina que não cabe mais na vida que você quer</h2>
          <div className="prose">
            <p>A agenda está cheia. De fora, parece que o consultório está funcionando. Mas, quando você olha com cuidado, percebe que trabalha muito e ainda sobra pouco — de dinheiro, de energia e de tempo para você.</p>
            <p>Entre atendimentos, mensagens, prontuários e uma segunda jornada, a clínica começa a depender completamente da sua presença. Parar parece impossível. Crescer parece significar trabalhar ainda mais.</p>
            <p className="pullquote">E existe uma culpa silenciosa em admitir isso, como se uma psicóloga não pudesse desejar prosperidade, descanso e liberdade.</p>
            <p>Você não precisa amar menos a psicologia para querer uma vida que também seja sua.</p>
          </div>
        </div>
      </section>

      <section className="section philosophy" id="metodo">
        <div className="wrap philosophy-grid">
          <div className="garden-art" aria-hidden="true"><span className="stem"></span><span className="leaf leaf-one"></span><span className="leaf leaf-two"></span><span className="sun"></span></div>
          <div>
            <p className="eyebrow light">Uma nova forma de olhar para sua clínica</p>
            <h2>Todo jardim precisa de estrutura para florescer.</h2>
            <p>Seu consultório também. A Filosofia Jardim nasce da compreensão de que vocação, ética e prosperidade não são opostos. Quando existe raiz, direção e cuidado, crescer deixa de ser um esforço desordenado.</p>
            <p>Estruturar a clínica como negócio não é trair a psicologia. É criar as condições para continuar exercendo-a com presença, sentido e liberdade.</p>
            <a href="#conteudo" className="text-link">Descobrir o que sustenta esse jardim <span>↘</span></a>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="wrap about-grid">
          <div className="about-photo"><span>Foto provisória</span></div>
          <div>
            <p className="eyebrow">Por trás do método</p><h2>Conheça Beatriz</h2>
            <p className="lead">Beatriz construiu uma forma de viver da psicologia sem abrir mão de cuidar da família, dos filhos e da vida que existe para além do consultório.</p>
            <p>Sua trajetória completa, formação e tempo de atuação serão adicionados assim que os dados oficiais forem enviados. Nesta primeira versão, preservamos apenas o que já foi confirmado: ela vive, na prática, as escolhas que ensina.</p>
            <div className="pending"><span>✦</span><p><strong>Conteúdo em preparação</strong><br/>Biografia profissional aguardando informações oficiais.</p></div>
          </div>
        </div>
      </section>

      <section className="section curriculum" id="conteudo">
        <div className="wrap">
          <div className="section-heading"><div><p className="eyebrow">Por dentro da formação</p><h2>O que você vai encontrar dentro</h2></div><p>Conteúdo real, apresentado sem inflar: uma jornada da raiz ao florescimento da sua clínica.</p></div>
          <div className="module-list">{salesContent.modules.map((module) => <article className="module" key={module.title}><span className="module-number">{module.number}</span><div><h3>{module.title}</h3><p>{module.description}</p></div><span className="module-arrow" aria-hidden="true">↗</span></article>)}</div>
        </div>
      </section>

      <section className="section proof">
        <div className="wrap">
          <p className="eyebrow center">Histórias que estão começando</p><h2 className="center">Resultados que florescem</h2>
          <p className="proof-intro">Este espaço receberá as experiências reais das alunas. Nenhum resultado foi simulado nesta versão.</p>
          <div className="proof-grid">{[1,2,3].map((item) => <article className="proof-card" key={item}><span className="quote">“</span><div className="proof-lines"><i></i><i></i><i></i></div><div className="proof-person"><span></span><p><strong>Conteúdo em preparação</strong><br/>Depoimento verificado será inserido aqui.</p></div></article>)}</div>
          <div className="video-placeholder"><span className="play">▶</span><div><strong>Depoimento em vídeo</strong><p>Área preparada para o material da aluna.</p></div></div>
        </div>
      </section>

      <section className="section audience">
        <div className="wrap"><p className="eyebrow light center">Um caminho para quem está pronta</p><h2 className="center">Para quem é o Florescer na Clínica?</h2>
          <div className="audience-grid"><article><span className="audience-mark">Sim</span><h3>Este método é para você que...</h3><ul>{salesContent.forYou.map((item) => <li key={item}><Check/>{item}</li>)}</ul></article><article className="muted"><span className="audience-mark">Não</span><h3>Talvez ainda não seja para você se...</h3><ul>{salesContent.notForYou.map((item) => <li key={item}><span className="x" aria-hidden="true">×</span>{item}</li>)}</ul></article></div>
        </div>
      </section>

      <section className="section offer" id="oferta">
        <div className="offer-leaf" aria-hidden="true"></div><div className="wrap offer-grid"><div><p className="eyebrow">Seu próximo ciclo pode começar agora</p><h2>Florescer na Clínica</h2><p className="offer-lead">Uma formação completa para estruturar seu consultório com estratégia, ética e espaço para viver.</p><ul className="included"><li><Check/>4 módulos fundamentais</li><li><Check/>Aplicação prática com coinstrutor</li><li><Check/>Masterclasses complementares</li><li><Check/>Estrutura do Método Jardim</li></ul></div>
          <aside className="price-card"><p className="price-label">Investimento</p><div className="price"><span className="sr-only">R$ 797,00</span><span aria-hidden="true" className="price-visual"><small>R$</small><strong>797</strong><small>,00</small></span></div><p>Condições de pagamento serão informadas após a configuração final da Kiwify.</p><a className="button button-primary full" href={salesContent.checkoutUrl}>Quero florescer na clínica <span>→</span></a><div className="safe-note">⌁ Checkout e condições finais em preparação</div></aside>
        </div>
      </section>

      <section className="section faq" id="faq"><div className="narrow"><p className="eyebrow center">Antes de começar</p><h2 className="center">Perguntas frequentes</h2><div className="faq-list">{salesContent.faqs.map((faq) => <FaqItem key={faq.question} {...faq}/>)}</div></div></section>

      <section className="section final-cta"><div className="final-flower" aria-hidden="true">✦</div><div className="narrow center"><p className="eyebrow light">Dê o próximo passo</p><h2>Você pode construir uma clínica que sustente o seu trabalho — e a vida que você quer viver.</h2><p>Comece a preparar o terreno para uma psicologia com mais estrutura, prosperidade e liberdade.</p><a className="button button-gold" href="#oferta">Quero conhecer o Método Jardim <span>→</span></a></div></section>
      <footer><div className="wrap"><a className="brand footer-brand" href="#top"><span className="brand-tree">♣</span><span><i>Método</i> Jardim</span></a><p>Florescer na Clínica · Todos os direitos reservados.</p><a href="#faq">Dúvidas frequentes</a></div></footer>
    </main>
  );
}
