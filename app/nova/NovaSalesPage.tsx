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

const testimonials = [
  ["/depoimento-florescer-01.jpeg", "Depoimento de aluna sobre como o curso ajudou no desenvolvimento profissional"],
  ["/depoimento-florescer-02.jpeg", "Depoimento de aluna sobre os módulos e a continuidade da mentoria"],
  ["/depoimento-florescer-03.jpeg", "Depoimento de aluna sobre carreira, escolhas e posicionamento"],
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
          <h1>Você pode <em>viver bem da clínica</em> e ser dona do seu próprio tempo.</h1>
          <p className="nova-lead">Um caminho para construir uma clínica próspera, sustentável e que trabalhe a favor da vida que você deseja viver.</p>
          <Button href="#provas">Quero conhecer o Método Jardim</Button>
          <p className="nova-support">Uma formação para transformar vocação em uma carreira sustentável.</p>
        </div>
        <div className="nova-portrait-wrap" data-reveal="right">
          <img className="nova-portrait" src="/beatriz-jardim-hero.png" alt="Beatriz na identidade visual do Florescer na Clínica" />
        </div>
      </div>
    </header>

    <Marquee />

    <section className="nova-section nova-proof" id="provas">
      <div className="nova-container">
        <div className="proof-heading" data-reveal="up"><p className="nova-kicker">Transformações reais</p><h2>Quem já está florescendo na própria trajetória profissional.</h2><p>Relatos reais de psicólogas que estão vivendo a experiência do Florescer na Clínica.</p></div>
        <div className="proof-grid">{testimonials.map(([src,alt],index) => <figure data-reveal={index === 0 ? "left" : index === 2 ? "right" : "up"} key={src}><img src={src} alt={alt} loading="lazy"/><figcaption>Depoimento real de aluna do Florescer na Clínica</figcaption></figure>)}</div>
      </div>
    </section>

    <section className="nova-section nova-pain" id="dor">
      <div className="nova-reading" data-reveal="up">
        <p className="nova-kicker">A raiz do problema</p>
        <h2>A raiz do problema não é a sua agenda. É a forma como você aprendeu a crescer na clínica.</h2>
        <div className="nova-copy">
          <p>Na graduação, você aprendeu a ser psicóloga.</p>
          <p>Aprendeu sobre técnica, ética, teoria e atendimento. Mas ninguém te ensinou a construir uma clínica que fosse, além de uma vocação, uma carreira próspera e sustentável.</p>
          <p>E quando ninguém ensina outro caminho, crescer parece significar uma coisa: atender mais.</p>
          <blockquote>Mais pacientes. Mais horários. Mais dias ocupados.</blockquote>
          <p>O faturamento pode até aumentar, mas o seu tempo diminui. E, em algum momento, você percebe que criou uma carreira que depende inteiramente da sua presença para continuar funcionando.</p>
          <p>É por isso que uma agenda cheia nem sempre significa uma clínica próspera.</p>
          <p><strong>Prosperidade exige estrutura.</strong></p>
          <p>Estrutura para entender seus números, precificar seu trabalho, organizar sua rotina, criar processos, tomar decisões estratégicas e fazer a clínica crescer sem precisar ocupar cada vez mais horas da sua vida.</p>
          <p>Não falta capacidade.<br/>Não falta dedicação.<br/>E provavelmente não falta trabalho.</p>
          <p>Falta aprender aquilo que ninguém te ensinou sobre viver bem da clínica.</p>
          <p className="nova-closing-line">Todo jardim precisa de estrutura para florescer. E a sua clínica também.</p>
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
        <div data-reveal="right">
          <p className="nova-kicker">Sua guia nessa jornada</p>
          <h2>Quem é Beatriz Jardim.</h2>
          <div className="about-copy">
            <p><strong>Beatriz é psicóloga e fundadora da Clínica Jardim, hoje com três unidades e mais de 100 profissionais atendendo.</strong></p>
            <p>Ela começou como a maioria das psicólogas começa: atendendo, aprendendo na prática e sem ninguém pra explicar como a clínica vira carreira. Ninguém ensina isso na graduação.</p>
            <p>O que ela sabe hoje veio de duas cadeiras. A de psicóloga clínica e a de gestora, acompanhando de perto a carreira de <strong>muitos</strong> psicólogos dentro da própria clínica. Ver tanta gente de perto mostrou um padrão. As decisões que separam quem cresce de quem só trabalha muito são quase sempre as mesmas.</p>
            <p>Ela construiu tudo isso enquanto criava dois filhos. Aprendeu a organizar processo, delegar, olhar os números e parar de depender só das próprias horas de atendimento. Foi assim que conquistou o que hoje considera tão valioso quanto faturar bem: mandar na própria agenda.</p>
            <p className="about-closing"><strong>O Método Jardim é isso organizado em passos. É o caminho que ela gostaria de ter recebido pronto quando abriu a primeira sala.</strong></p>
          </div>
        </div>
      </div>
    </section>

    <Marquee />

    <section className="nova-section nova-curriculum" id="conteudo">
      <div className="nova-container">
        <div className="nova-section-head" data-reveal="up"><div><p className="nova-kicker">Da identificação à estrutura real</p><h2>O que você vai encontrar dentro do Florescer na Clínica.</h2></div><p>Quatro módulos fundamentais + masterclasses bônus, organizados para levar você da identificação à estruturação real da sua clínica.</p></div>
        <div className="modules-grid">{modules.map(([number,title,text], index) => <article className="module-card" data-reveal={index % 2 ? "right" : "left"} key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p>{number === "III" && <small>Coinstrutor: nome e credenciais em confirmação.</small>}</article>)}</div>
        <div className="masterclass-head" data-reveal="up"><p className="nova-kicker">Conteúdo complementar</p><h3>Masterclasses bônus</h3></div>
        <div className="master-grid">{masterclasses.map(([number,title,text], index) => <article data-reveal={index % 2 ? "up" : "left"} key={title}><span>{number}</span><div><h4>{title}</h4><p>{text}</p></div></article>)}</div>
        <div className="center-button" data-reveal="up"><Button href="#publico">Quero acessar a formação completa</Button></div>
      </div>
    </section>

    <section className="nova-section nova-audience" id="publico">
      <div className="nova-container"><div className="audience-title" data-reveal="up"><p className="nova-kicker">Uma escolha honesta</p><h2>O Florescer na Clínica é para você? Seja honesta com a sua resposta.</h2></div>
        <div className="audience-grid"><article data-reveal="left"><span className="decision-label">É para você se</span><ul>{["Você já atende clinicamente e quer estruturar o consultório como negócio","Vive a jornada dupla ou sente que precisa sair dela","Trabalha muito, mas percebe pouca margem financeira real","Sente que o consultório depende 100% da sua presença","Quer estruturar a clínica sem perder o sentido do trabalho","Busca clareza, autonomia, sustentabilidade e espaço para a vida pessoal"].map(item => <li key={item}><b>✓</b>{item}</li>)}</ul></article><article className="not-for" data-reveal="right"><span className="decision-label">Não é para você se</span><ul>{["Você ainda não concluiu a formação em psicologia","Nunca atendeu e procura formação clínica inicial","Busca uma fórmula mágica sem colocar decisões em prática","Não está disposta a repensar a forma como enxerga o próprio consultório"].map(item => <li key={item}><b>×</b>{item}</li>)}</ul></article></div>
      </div>
    </section>

    <section className="nova-section nova-offer" id="oferta">
      <div className="offer-rings" aria-hidden="true"></div>
      <div className="nova-container"><div className="offer-heading" data-reveal="up"><p className="nova-kicker light">Tudo o que você recebe hoje</p><h2>Sua clínica pode sustentar o seu trabalho e a vida que você quer viver.</h2></div>
        <div className="offer-content-grid">
          <div className="offer-stack" data-reveal="left">{included.map(([item,description]) => <article key={item}><span>✓</span><div><h3>{item}</h3><p>{description}</p></div></article>)}</div>
          <figure className="offer-mockup" data-reveal="right"><img src="/mockup-florescer-transparente.png" alt="Formação Florescer na Clínica disponível no computador, tablet e celular" loading="lazy"/></figure>
        </div>
        <aside className="checkout-card offer-checkout" data-reveal="up"><p>Florescer na Clínica</p><div className="offer-anchor"><span>Valor completo <s>R$ 797,00</s></span><strong>Condição especial de abertura</strong></div><div className="installment-label">12x de</div><div className="installment-price"><small>R$</small><strong>61</strong><sup>,74</sup></div><div className="cash-price">ou R$ 597,00 à vista</div><ul><li><span>✓</span>4 módulos fundamentais</li><li><span>✓</span>5 masterclasses bônus</li><li><span>✓</span>1 ano de acesso</li></ul><Button href={checkout} checkoutLink>Quero estruturar minha clínica agora</Button><small>Compra segura pela Kiwify</small><div className="payment-methods" role="img" aria-label="Meios de pagamento aceitos"></div></aside>
      </div>
    </section>

    <section className="nova-section nova-guarantee-section"><div className="guarantee-art" aria-hidden="true"><i></i><i></i><i></i></div><div className="nova-container guarantee-grid"><div className="guarantee-seal" data-reveal="left"><div><span>7</span><p>dias de<br/>garantia</p></div></div><div data-reveal="right"><p className="nova-kicker">Sua decisão protegida</p><h2>Você tem 7 dias para conhecer a formação com tranquilidade.</h2><p>Acesse o Florescer na Clínica e veja se este caminho faz sentido para o seu momento. Se você sentir que a formação não é para você, solicite o reembolso integral dentro de 7 dias. Sem perguntas e sem burocracia.</p><a className="guarantee-next" href="#faq">Ainda tem dúvidas? Veja as respostas <span>↓</span></a></div></div></section>

    <section className="nova-section nova-faq" id="faq"><div className="nova-reading"><div className="faq-title" data-reveal="up"><p className="nova-kicker">Antes de começar</p><h2>Perguntas frequentes.</h2></div><div className="nova-faq-list">{faqs.map(([question,answer],index) => <details data-reveal={index % 2 ? "right" : "left"} key={question}><summary><span>{question}</span><b aria-hidden="true">+</b></summary><div><p>{answer}</p></div></details>)}</div></div></section>

    <section className="nova-section nova-final"><div className="final-leaf" aria-hidden="true"></div><div className="nova-reading" data-reveal="up"><img className="final-logo" src="/florescer-logo-centralizado.svg" alt="Florescer na Clínica" /><p className="nova-kicker light">A decisão é sua</p><h2>Uma clínica que sustente o seu trabalho e a vida que você quer viver.</h2><div className="final-copy"><p>Você chegou até aqui por uma razão. Algo na sua rotina clínica disse que pode ser diferente.</p><p>E pode. Não com uma fórmula mágica. Não com uma promessa de faturamento impossível. Mas com estrutura, decisões consistentes e uma nova forma de enxergar o consultório.</p><p>O Florescer na Clínica é o caminho. A Filosofia Jardim é o método. E a decisão de começar é sua.</p></div><p className="final-anchor">De <s>R$ 797,00</s> por</p><p className="final-price">12x de R$ 61,74 <span>ou R$ 597,00 à vista</span></p><Button href={checkout} checkoutLink>Quero florescer na minha clínica agora</Button><p className="final-guarantee">🔒 Garantia de 7 dias. Se não for para você, devolvemos 100% do valor. Sem perguntas.</p></div></section>

    <footer className="nova-footer"><div className="nova-container"><a className="nova-logo footer-logo" href="#inicio" aria-label="Florescer na Clínica"><img src="/florescer-logo-centralizado.svg" alt="Florescer na Clínica" /></a><p>Florescer na Clínica · Formação para psicólogas</p><a href="#inicio">Voltar ao topo ↑</a></div></footer>
  </main>;
}
