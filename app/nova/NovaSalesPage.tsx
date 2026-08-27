"use client";

import { useEffect } from "react";

const checkout = "https://pay.kiwify.com.br/iXQjQT1";

const modules = [
  ["I", "A Filosofia Jardim", "Os princípios que transformam o consultório em uma carreira sustentável. Você vai compreender como intenção, estrutura e espaço para crescer coexistem. Tratar a clínica como negócio é um ato de cuidado com a sua vocação."],
  ["II", "Da Porta Para Dentro", "Mentalidade e gestão interna para tomar decisões mais conscientes sobre a sua clínica. Aqui você olha para dentro: processos, organização, autoconhecimento profissional e a forma como cada escolha impacta a sustentabilidade do seu trabalho."],
  ["III", "Da Porta Para Fora", "Aplicação prática e experiência profissional. Aqui o trabalho sai do consultório e encontra o mundo: como a sua clínica se relaciona, se posiciona e se sustenta no mercado."],
  ["IV", "Posicionamento e Marketing Ético", "Comunicação clara, posicionamento e atração das pessoas certas sem perder a ética. Você vai aprender a se comunicar de forma autêntica e construir uma presença profissional que sustenta a clínica a longo prazo."],
];

const masterclasses = [
  ["01", "IA para conteúdo", "Como usar inteligência artificial a favor da sua comunicação, com ética."],
  ["02", "Instagram profissional", "Presença digital que gera conexão real, não apenas números."],
  ["03", "Nicho com sentido", "Como escolher um nicho que tenha significado e sustente a clínica."],
  ["04", "Finanças para psicólogos", "Organização financeira prática, sem jargão e sem medo."],
  ["05", "Bastidores da clínica", "O que acontece atrás de um consultório que funciona de verdade."],
];

const included = [
  ["Módulo I: A Filosofia Jardim", "Princípios para transformar o consultório em carreira sustentável"],
  ["Módulo II: Da Porta Para Dentro", "Mentalidade e gestão interna para decisões conscientes"],
  ["Módulo III: Da Porta Para Fora", "Aplicação prática e experiência profissional"],
  ["Módulo IV: Posicionamento e Marketing Ético", "Comunicação clara e atração das pessoas certas"],
  ["Masterclass: IA para conteúdo", "Inteligência artificial a favor da sua comunicação"],
  ["Masterclass: Instagram profissional", "Presença digital que gera conexão real"],
  ["Masterclass: Nicho com sentido", "Como escolher um nicho com significado"],
  ["Masterclass: Finanças para psicólogos", "Organização financeira prática e sem medo"],
  ["Masterclass: Bastidores da clínica", "O que acontece atrás de um consultório que funciona"],
];

const faqs = [
  ["Eu atendo por convênio. Esse curso serve para mim?", "Sim. O Florescer na Clínica não depende do modelo de atendimento que você utiliza. A Filosofia Jardim trabalha a estrutura do consultório como um todo: organização, mentalidade, posicionamento e gestão. Os princípios se aplicam à sua clínica, seja no atendimento particular, por convênio ou em ambos."],
  ["Eu tenho pouco tempo. Dá para fazer no meu ritmo?", "Sim. Você tem 1 ano de acesso a todo o conteúdo. A formação foi pensada para ser consumida no seu ritmo, sem pressão. Cada módulo é prático e direto. Você pode aplicar as decisões conforme avança e começar a perceber mudanças antes mesmo de concluir a formação."],
  ["Isso é um curso de marketing ou de psicologia?", "É uma formação para estruturar a clínica como negócio sustentável. O marketing é um dos temas, mas o foco é mais amplo: mentalidade, gestão interna, aplicação prática e posicionamento ético. O objetivo é reconciliar vocação e prosperidade, não transformar você em uma profissional de marketing."],
  ["Por quanto tempo terei acesso?", "Você terá 1 ano de acesso a todos os módulos, masterclasses bônus e atualizações do conteúdo durante esse período."],
];

function Button({ children, href, secondary = false, checkoutLink = false }: { children: React.ReactNode; href: string; secondary?: boolean; checkoutLink?: boolean }) {
  return <a className={`nova-button ${secondary ? "secondary" : ""}`} href={href} {...(checkoutLink ? { target: "_blank", rel: "noreferrer" } : {})}><span>{children}</span><b aria-hidden="true">{checkoutLink ? "↗" : "↓"}</b></a>;
}

function Marquee() {
  const phrase = ["vocação", "estrutura", "prosperidade", "liberdade", "presença", "crescimento"];
  return <div className="nova-marquee" aria-label="Vocação, estrutura, prosperidade, liberdade, presença e crescimento"><div>{[...phrase, ...phrase].map((word, index) => <span key={`${word}-${index}`}>{word}<i>✦</i></span>)}</div></div>;
}

export function NovaSalesPage() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12, rootMargin: "0px 0px -40px" });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <main className="nova-page">
    <header className="nova-hero" id="inicio">
      <div className="hero-orbit orbit-one" aria-hidden="true"></div><div className="hero-orbit orbit-two" aria-hidden="true"></div>
      <div className="nova-container nova-hero-grid">
        <div className="nova-hero-copy" data-reveal="left">
          <h1>Você não precisa escolher entre <em>viver bem</em> e ganhar bem da psicologia.</h1>
          <p className="nova-lead">Um caminho para a psicóloga que já atende, mas ainda vive presa à jornada dupla. A agenda está cheia, a margem continua apertada e o consultório parece incapaz de funcionar sem a sua presença constante.</p>
          <Button href="#dor">Quero conhecer o Método Jardim</Button>
          <p className="nova-support">Uma formação para transformar vocação em uma carreira sustentável.</p>
        </div>
        <div className="nova-portrait-wrap" data-reveal="right">
          <img className="nova-portrait" src="/beatriz-jardim-hero.png" alt="Beatriz na identidade visual do Florescer na Clínica" />
        </div>
      </div>
    </header>

    <Marquee />

    <section className="nova-section nova-pain" id="dor">
      <div className="nova-reading" data-reveal="up">
        <p className="nova-kicker">A raiz do problema</p>
        <h2>A verdade que ninguém te conta sobre ter a agenda cheia.</h2>
        <div className="nova-copy">
          <p>A sua agenda pode estar lotada. E mesmo assim, você se pergunta: <strong>por que eu trabalho tanto e sinto que não avanço?</strong></p>
          <p>Você atende o dia inteiro. Entre as sessões, responde mensagens. Depois do último paciente, ainda há prontuários para atualizar, planilhas para organizar e questões administrativas que ninguém te ensinou a resolver. Se você tem outra jornada, como um emprego, um estágio ou um segundo consultório, o dia só termina quando o corpo não aguenta mais.</p>
          <p>E mesmo assim, a margem é estreita. O que entra cobre as contas, mas não cria respiro. Não cria liberdade. Não cria a sensação de que a clínica trabalha para você. Na prática, você trabalha para ela.</p>
          <p>Existe culpa em querer mais. Culpa em desejar prosperidade, como se ganhar bem da psicologia fosse uma contradição com a vocação que você escolheu. Você já se perguntou se crescer significa necessariamente trabalhar ainda mais. Enquanto isso, férias, tempo com a família e um consultório que funcione sem a sua presença em cada detalhe parecem cenários distantes.</p>
          <blockquote>O que você sente não é falta de capacidade. É falta de estrutura.</blockquote>
          <p>Estrutura que ninguém te entregou na graduação. Estrutura que os cursos de formação clínica não incluem. Estrutura que separa as psicólogas que vivem da psicologia com sustentabilidade daquelas que, mesmo atendendo muito, seguem exaustas e sem respiro.</p>
          <p className="nova-closing-line">Todo jardim precisa de estrutura para florescer. E o seu consultório também.</p>
        </div>
      </div>
    </section>

    <section className="nova-section nova-philosophy">
      <div className="botanical-lines" aria-hidden="true"><i></i><i></i><i></i></div>
      <div className="nova-container philosophy-grid">
        <div className="philosophy-mark" data-reveal="left"><span>✦</span><p>Filosofia<br/>Jardim</p></div>
        <div data-reveal="right"><p className="nova-kicker light">Uma nova forma de cultivar</p><h2>Estruturar a clínica como negócio não é trair a psicologia. <em>É honrar a vocação.</em></h2>
          <div className="nova-dark-copy"><p>Existe uma crença silenciosa que paraliza psicólogas em todo o Brasil: tratar o consultório como negócio seria uma traição à ética profissional. Como se organizar financeiramente, pensar em posicionamento e criar sistemas fosse incompatível com o cuidado clínico.</p><p><strong>Isso é falso. E essa crença custa caro.</strong></p><p>A Filosofia Jardim parte de um princípio simples: um consultório é como um jardim. Ele não floresce sozinho. Não basta ter boas sementes. É preciso raiz, cuidado, intenção, estrutura e decisões consistentes. Um jardim abandonado até pode sobreviver por um tempo. Mas nunca vai florescer.</p><p>Vocação sem estrutura gera exaustão. Estrutura sem vocação gera um consultório sem alma. A Filosofia Jardim reconcilia os dois. Organizar a clínica permite exercer a psicologia com mais presença, continuidade e liberdade.</p><p>Você não precisa escolher entre ser uma boa psicóloga e ser uma profissional próspera. As duas coisas coexistem. E quando você entende isso, a forma como você toma decisões sobre a sua clínica muda para sempre.</p></div>
          <Button href="#mentora" secondary>Quero aplicar a Filosofia Jardim</Button>
        </div>
      </div>
    </section>

    <section className="nova-section nova-about" id="mentora">
      <div className="nova-container nova-about-grid">
        <div className="about-image" data-reveal="left"><img src="/beatriz-jardim-mentora.jpeg" alt="Beatriz, mentora do Florescer na Clínica" /></div>
        <div data-reveal="right"><p className="nova-kicker">Sua guia nessa jornada</p><h2>Quem vai te guiar por essa transformação.</h2><div className="placeholder-note"><b>Biografia em preparação</b><p>Formação, tempo de atuação e trajetória profissional serão adicionados após confirmação.</p></div><p className="about-copy">O que você pode saber desde já: Beatriz vive o que ensina. Ela tomou decisões que permitiram cuidar da família, dos filhos e viver da psicologia. Não em teoria, mas no dia a dia. O Método Jardim nasceu da experiência real de construir um consultório sustentável. Não veio de uma fórmula teórica desconectada da realidade clínica.</p></div>
      </div>
    </section>

    <Marquee />

    <section className="nova-section nova-curriculum" id="conteudo">
      <div className="nova-container">
        <div className="nova-section-head" data-reveal="up"><div><p className="nova-kicker">Da identificação à estrutura real</p><h2>O que você vai encontrar dentro do Florescer na Clínica.</h2></div><p>Quatro módulos fundamentais + masterclasses bônus, organizados para levar você da identificação à estruturação real da sua clínica.</p></div>
        <div className="modules-grid">{modules.map(([number,title,text], index) => <article className="module-card" data-reveal={index % 2 ? "right" : "left"} key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p>{number === "III" && <small>Coinstrutor: nome e credenciais em confirmação.</small>}</article>)}</div>
        <div className="masterclass-head" data-reveal="up"><p className="nova-kicker">Conteúdo complementar</p><h3>Masterclasses bônus</h3></div>
        <div className="master-grid">{masterclasses.map(([number,title,text], index) => <article data-reveal={index % 2 ? "up" : "left"} key={title}><span>{number}</span><div><h4>{title}</h4><p>{text}</p></div></article>)}</div>
        <div className="center-button" data-reveal="up"><Button href="#provas">Quero acessar a formação completa</Button></div>
      </div>
    </section>

    <section className="nova-section nova-proof" id="provas">
      <div className="nova-container">
        <div className="proof-heading" data-reveal="up"><p className="nova-kicker">Transformações reais</p><h2>Quem já aplicou o Método Jardim na própria clínica.</h2><p>Nenhum resultado foi simulado. Os depoimentos reais e autorizados serão inseridos neste espaço.</p></div>
        <div className="proof-grid">{[1,2,3].map((item,index) => <article data-reveal={index === 0 ? "left" : index === 2 ? "right" : "up"} key={item}><span className="quote-mark">“</span><div className="skeleton-lines"><i></i><i></i><i></i></div><footer><b>Depoimento {item}</b><small>Conteúdo autorizado em preparação</small></footer></article>)}</div>
        <div className="video-proof" data-reveal="up"><button aria-label="Espaço reservado para depoimento em vídeo">▶</button><div><b>Depoimento em vídeo</b><p>Espaço preparado para uma transformação concreta, com contexto.</p></div></div>
      </div>
    </section>

    <section className="nova-section nova-audience">
      <div className="nova-container"><div className="audience-title" data-reveal="up"><p className="nova-kicker">Uma escolha honesta</p><h2>O Florescer na Clínica é para você? Seja honesta com a sua resposta.</h2></div>
        <div className="audience-grid"><article data-reveal="left"><span className="decision-label">É para você se</span><ul>{["Você já atende clinicamente e quer estruturar o consultório como negócio","Vive a jornada dupla ou sente que precisa sair dela","Trabalha muito, mas percebe pouca margem financeira real","Sente que o consultório depende 100% da sua presença","Quer estruturar a clínica sem perder o sentido do trabalho","Busca clareza, autonomia, sustentabilidade e espaço para a vida pessoal"].map(item => <li key={item}><b>✓</b>{item}</li>)}</ul></article><article className="not-for" data-reveal="right"><span className="decision-label">Não é para você se</span><ul>{["Você ainda não concluiu a formação em psicologia","Nunca atendeu e procura formação clínica inicial","Busca uma fórmula mágica sem colocar decisões em prática","Não está disposta a repensar a forma como enxerga o próprio consultório"].map(item => <li key={item}><b>×</b>{item}</li>)}</ul></article></div>
      </div>
    </section>

    <section className="nova-section nova-offer" id="oferta">
      <div className="offer-rings" aria-hidden="true"></div>
      <div className="nova-container"><div className="offer-heading" data-reveal="up"><p className="nova-kicker light">Tudo o que você recebe hoje</p><h2>Sua clínica pode sustentar o seu trabalho e a vida que você quer viver.</h2></div>
        <div className="offer-grid"><div className="offer-stack" data-reveal="left">{included.map(([item,description]) => <article key={item}><span>✓</span><div><h3>{item}</h3><p>{description}</p></div></article>)}</div>
          <aside className="checkout-card" data-reveal="right"><p>Florescer na Clínica</p><div className="installment-label">12x de</div><div className="installment-price"><small>R$</small><strong>82</strong><sup>,43</sup></div><div className="cash-price">ou R$ 797,00 à vista</div><ul><li><span>✓</span>4 módulos fundamentais</li><li><span>✓</span>5 masterclasses bônus</li><li><span>✓</span>1 ano de acesso</li></ul><Button href={checkout} checkoutLink>Quero estruturar minha clínica agora</Button><small>Compra segura pela Kiwify</small><div className="payment-methods" role="img" aria-label="Meios de pagamento aceitos"></div></aside>
        </div>
      </div>
    </section>

    <section className="nova-section nova-guarantee-section"><div className="guarantee-art" aria-hidden="true"><i></i><i></i><i></i></div><div className="nova-container guarantee-grid"><div className="guarantee-seal" data-reveal="left"><div><span>7</span><p>dias de<br/>garantia</p></div></div><div data-reveal="right"><p className="nova-kicker">Sua decisão protegida</p><h2>Você tem 7 dias para conhecer a formação com tranquilidade.</h2><p>Acesse o Florescer na Clínica e veja se este caminho faz sentido para o seu momento. Se você sentir que a formação não é para você, solicite o reembolso integral dentro de 7 dias. Sem perguntas e sem burocracia.</p><a className="guarantee-next" href="#faq">Ainda tem dúvidas? Veja as respostas <span>↓</span></a></div></div></section>

    <section className="nova-section nova-faq" id="faq"><div className="nova-reading"><div className="faq-title" data-reveal="up"><p className="nova-kicker">Antes de começar</p><h2>Perguntas frequentes.</h2></div><div className="nova-faq-list">{faqs.map(([question,answer],index) => <details data-reveal={index % 2 ? "right" : "left"} key={question}><summary><span>{question}</span><b aria-hidden="true">+</b></summary><div><p>{answer}</p></div></details>)}</div></div></section>

    <section className="nova-section nova-final"><div className="final-leaf" aria-hidden="true"></div><div className="nova-reading" data-reveal="up"><img className="final-logo" src="/florescer-logo-centralizado.svg" alt="Florescer na Clínica" /><p className="nova-kicker light">A decisão é sua</p><h2>Uma clínica que sustente o seu trabalho e a vida que você quer viver.</h2><div className="final-copy"><p>Você chegou até aqui por uma razão. Algo na sua rotina clínica disse que pode ser diferente.</p><p>E pode. Não com uma fórmula mágica. Não com uma promessa de faturamento impossível. Mas com estrutura, decisões consistentes e uma nova forma de enxergar o consultório.</p><p>O Florescer na Clínica é o caminho. A Filosofia Jardim é o método. E a decisão de começar é sua.</p></div><p className="final-price">12x de R$ 82,43 <span>ou R$ 797,00 à vista</span></p><Button href={checkout} checkoutLink>Quero florescer na minha clínica agora</Button><p className="final-guarantee">🔒 Garantia de 7 dias. Se não for para você, devolvemos 100% do valor. Sem perguntas.</p></div></section>

    <footer className="nova-footer"><div className="nova-container"><a className="nova-logo footer-logo" href="#inicio" aria-label="Florescer na Clínica"><img src="/florescer-logo-centralizado.svg" alt="Florescer na Clínica" /></a><p>Florescer na Clínica · Formação para psicólogas</p><a href="#inicio">Voltar ao topo ↑</a></div></footer>
  </main>;
}
