import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';

// From types.ts
const SCENARIOS = [
  {
    id: 1,
    title: "Cenário 1",
    subtitle: "Parceria Estratégica de Leads e Prospecção Conjunta",
    description: "Neste primeiro cenário, LABirintar e IDB estabelecem uma colaboração básica com foco em compartilhamento de leads e inteligência comercial conjunta. O objetivo é ativar um canal de aprendizado mútuo e validação inicial de mercado, em linha com as fases atuais das duas startups: Customer Validation (LABirintar) e Customer Discovery (IDB).",
    objectives: [
      "Oferecer acesso mútuo a bases de potenciais clientes qualificados.",
      "Reduzir o Custo de Aquisição de Clientes (CAC) por meio de recomendações qualificadas.",
      "Observar a receptividade do mercado à inteligência de dados no contraturno escolar.",
      "Testar sinergia entre linguagem comercial, tom institucional e perfis de decisão."
    ],
    benefits: {
      labirintar: [
        "Acesso a um novo perfil de leads interessados em dados e indicadores educacionais.",
        "Teste da aderência do discurso de gestão automatizada com tom mais analítico.",
        "Possibilidade de antecipar objeções comerciais relacionadas à análise de impacto."
      ],
      idb: [
        "Acesso a uma rede viva de escolas em busca de soluções inovadoras no contraturno.",
        "Oportunidade de observar a dor real do campo e testar sua proposta de valor.",
        "Construção de pipeline com base em relações de confiança já estabelecidas pela LABirintar."
      ]
    },
    remuneration: [
      "Troca mútua de leads qualificados, com breve briefing de perfil e contexto.",
      "Sem remuneração fixa: foco em aprendizado e confiança.",
      "Comissão simbólica sobre conversões efetivas para incentivar o cuidado com a indicação."
    ],
  },
  {
    id: 2,
    title: "Cenário 2",
    subtitle: "Integração de Valor: Solução IDB na Plataforma LABirintar",
    description: "Neste segundo cenário, a parceria evolui para um nível de integração sistêmica, com a incorporação das funcionalidades de inteligência preditiva e análise de dados do IDB na plataforma da LABirintar, transformando-a em uma fonte viva de dados e elevando sua proposta de valor. A solução passa a oferecer, além da gestão automatizada do contraturno, insights orientados por dados reais, fortalecendo seu posicionamento como uma EdTech inteligente.",
    objectives: [
      "Transformar a plataforma da LABirintar em uma ferramenta analítica viva, com dashboards, indicadores de engajamento e mapas de habilidades.",
      "Oferecer às escolas dados tangíveis sobre o impacto das atividades extracurriculares no desenvolvimento das crianças.",
      "Validar a tecnologia do IDB em contexto real e crescente, com feedback imediato.",
    ],
    benefits: {
      labirintar: [
        "Aumento expressivo de valor percebido da plataforma, com narrativa de impacto educacional baseado em evidência (oferta de insights sobre retenção, engajamento e desempenho curricular)",
        "Diferenciação competitiva radical: nenhuma outra solução no contraturno oferece inteligência analítica real.",
        "Atração de investidores interessados em EdTech com camada preditiva validada."
      ],
      idb: [
        "Ganho de escala e tração de mercado com embarque em um produto em expansão.",
        "Validação em campo de sua solução analítica, com dados reais e em uso cotidiano.",
        "Geração de credibilidade institucional ao ser reconhecido como parceiro tecnológico de uma EdTech inovadora."
      ]
    },
    remuneration: [
      "Integração técnica: funcionalidades do IDB embarcadas via API ou componente nativo na plataforma LABirintar.",
      "Remuneração híbrida: Fee fixo ou por usuário ativo, referente ao serviço técnico e participação percentual sobre receita incremental gerada por planos premium ou funcionalidades de inteligência.",
      "Equity opcional: A LABirintar pode ceder um percentual minoritário de equity ao IDB em reconhecimento pelo aporte tecnológico e estratégico. A participação pode ser vinculada a métricas de performance ou rodadas de funding.",
    ],
    equity: undefined,
  },
  {
    id: 3,
    title: "Cenário 3",
    subtitle: "Spin-off Estratégica e Fusão Operacional",
    description: `Neste cenário partimos para uma ideia de validação simultânea das soluções e do potencial que a parceria apresenta ao gerar dados estratégicos sobre engajamento, inadimplência e desenvolvimento, aumentando o valor percebido, a escalabilidade e o potencial de atração para investidores e/ou grupos educacionais no futuro.`,
    objectives: [
      "Possibilitar uma integração inteligente e progressiva, que respeita a identidade de cada iniciativa, ao mesmo tempo em que soma competências e multiplica possibilidades.",
      "Criar uma operação ágil e escalável, que una excelência técnica, gestão pedagógica e inteligência de dados em soluções completas para o contraturno escolar.",
      "Posicionar a LABirintar como um hub nacional de inovação em Educação Integral, com capacidade de gerar, interpretar e aplicar dados próprios para apoiar escolas, famílias e políticas públicas.",
      "Oferecer ao IDB suporte estratégico, estrutura operacional e canais comerciais para acelerar sua atuação e aprofundar seu impacto no ecossistema educacional.",
      " Atrair investidores e articulações públicas com um projeto sólido, ético e visionário, que demonstra consistência institucional e alinhamento de longo prazo."
    ],
    benefits: {
      labirintar: [
      "Tecnologia e inteligência de dados embarcada: acesso direto à capacidade técnica do IDB para embutir inteligência preditiva e geração de dados na plataforma e operação da LABirintar./ Diferencial competitivo frente a outras soluções educacionais focadas apenas em conteúdo ou operação.",
      "Elevação do valor percebido: passa a oferecer às escolas não apenas uma rede de educadores e gestão automatizada, mas dados sobre engajamento, desenvolvimento infantil, frequência, inadimplência e impacto pedagógico, fortalecendo a proposta de valor.",
      "Atratividade para investimento e políticas públicas: com dados próprios, a LABirintar se aproxima do perfil de instituição de pesquisa aplicada e não apenas de operação, o que abre portas para investidores, parcerias governamentais e instituições de fomento.",
      "Economia de tempo e recursos: ao apoiar e embarcar o IDB como parceiro técnico, evita desenvolver do zero capacidades complexas em data science e dashboards educacionais, ganhando velocidade de execução.",
      "Fortalecimento institucional: a presença do IDB como spin-off e parceiro técnico amplia a densidade institucional da LABirintar, mostrando ao mercado que ela opera dentro de um ecossistema com visão de futuro e soluções integradas."  
      ],
      idb: [
        "Validação rápida e aplicada: a LABirintar oferece um ambiente real de testes com escolas, educadores e famílias, encurtando o ciclo de descoberta de cliente e facilitando a validação de produto (Customer Discovery e Problem-Solution Fit).",
        "Apoio comercial e estratégico: ganha acesso à base relacional, narrativas de venda e canais da LABirintar, além de apoio estratégico e visibilidade institucional como parte de um hub em expansão.",
        "Sustentação operacional: apoio administrativo, jurídico, comercial e até mesmo técnico (design, conteúdo, automações) que o IDB ainda não estruturou sozinho, mas que já estão disponíveis na LABirintar.",
        "Narrativa conjunta com propósito: posiciona-se desde cedo como uma EdTech com impacto claro em Educação Integral, com alinhamento ético e metodológico com o universo das Infâncias, algo raro no campo de dados educacionais.",
        "Crescimento com lastro e reputação: a vinculação simbólica e institucional com a LABirintar fortalece a reputação do IDB, que passa a fazer parte de um ecossistema inovador com missão clara."
      ]
    },
    remuneration: [
      "A LABirintar realiza um aporte em ativos estratégicos no IDB (processos comerciais concebidos em teste, fornecedores de serviços de marketing, assessoria jurídica, suporte administrativo/financeiro, redes de escolas e gestão pedagógica). Em contrapartida, a LABirintar entra na sociedade do IDB, com participação proporcional ao valor estratégico de seus ativos e ao apoio oferecido. As receitas passam a ser compartilhadas e os custos operacionais coordenados com uma lógica de eficiência e visão sistêmica.",
      "Estrutura e governança: propõe-se um Acordo de Acionistas com regras claras de decisão, remuneração, responsabilidades e proteção mútua. A proposta garante autonomia das partes e liberdade para ajustes conforme o avanço da parceria.",
      "Caminho aberto para co-fundação: a depender da maturidade da colaboração, existe abertura e interesse de que Henrique se torne, futuramente, co-founder da LABirintar, mantendo-se também como fundador do IDB. Isso será construído com base na confiança, entrega mútua e desejo genuíno de evoluir juntos.",
      "Visão institucional: o IDB pode ser posicionado como “LABirintar Data” ou “Núcleo de Inteligência Educacional”, com marca combinada ou dupla, conforme o contexto. Essa configuração amplia a força institucional da LABirintar como hub de inovação em Educação Integral com frente de dados própria."
    ],
    equity: undefined,
  }
];

// From components/Icons.tsx
const HandshakeIcon = ({ className }) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" })
  )
);

const ChartBarIcon = ({ className }) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" })
  )
);

const RocketLaunchIcon = ({ className }) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 21a8.966 8.966 0 01-5.982-2.275 1.131 1.131 0 01.01-1.452l3.597-3.598a2.625 2.625 0 113.712 3.712l-3.598 3.597a1.131 1.131 0 01-1.452.01A8.966 8.966 0 0112 21z" }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 4.875c0 .399.012.79.034 1.176a6 6 0 01-3.66 5.564 1.125 1.125 0 00-.598 1.03V18a.75.75 0 001.5 0v-2.203a3.375 3.375 0 005.795-2.032c.164-.99.345-2.012.345-3.033 0-2.396-1.928-4.33-4.32-4.375a1.5 1.5 0 00-.034.004z" })
  )
);

const CheckCircleIcon = ({ className }) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
  )
);

// From components/InfoCard.tsx
const InfoCard = ({ title, icon, children }) => {
  return React.createElement("div", { className: "bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full" },
    React.createElement("div", { className: "flex items-center mb-4" },
      React.createElement("div", { className: "bg-brand-light p-2 rounded-full mr-4" }, icon),
      React.createElement("h3", { className: "text-xl font-bold text-neutral-800" }, title)
    ),
    React.createElement("div", { className: "text-neutral-600 space-y-2" }, children)
  );
};

// From App.tsx
const Header = () => (
  React.createElement("header", { className: "text-center py-12 bg-white shadow-sm" },
    React.createElement("div", { className: "container mx-auto px-4" },
      React.createElement("div", { className: "flex items-center justify-center gap-x-8 mb-6" },
        React.createElement("img", { src: "./logoslabirintar/Labirintar_RGB.png", alt: "LABirintar Logo", className: "w-auto h-24" }),
        React.createElement("img", { src: "./logoslabirintar/idb.png", alt: "Idb Logo", className: "w-auto h-12" })
      ),
      React.createElement("h1", { className: "text-4xl md:text-5xl font-bold text-brand-primary mb-2" }, "Proposta de Parceria Estratégica"),
      //React.createElement("p", { className: "text-2xl font-semibold text-neutral-800" }, "+ Instituto IDB"),
      React.createElement("p", { className: "mt-4 text-lg text-neutral-600 max-w-3xl mx-auto" }, "Educação Integral como Inteligência Viva: uma parceria entre LABirintar e IDB para transformar o extracurricular em dado, política e futuro.")
    )
  )
);

const Introduction = () => (
  React.createElement("section", { className: "py-16" },
    React.createElement("div", { className: "container mx-auto px-4" },
      React.createElement("h2", { className: "text-3xl font-bold text-center text-neutral-800 mb-4" }, "Uma Sinergia Visionária"),
      React.createElement("p", { className: "text-center text-neutral-800 mb-12" }, "Um ecossistema de tecnologia + pesquisa educacional + impacto"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-start" },
        React.createElement(InfoCard, { title: "LABirintar", icon: React.createElement(RocketLaunchIcon, { className: "w-6 h-6 text-brand-primary" }) },
          React.createElement("p", null, "Plataforma de gestão e curadoria para o contraturno escolar. Em fase de ", React.createElement("strong", null, "Validação de Cliente"), ", busca escalar seu modelo de negócio e validar seu Product-Market Fit (PMF) com agilidade, capitalizada por investimento anjo.")
        ),
        React.createElement(InfoCard, { title: "Instituto IDB", icon: React.createElement(ChartBarIcon, { className: "w-6 h-6 text-brand-primary" }) },
          React.createElement("p", null, "Especialista em inteligência preditiva e análise de dados para o setor educacional. Em fase de ", React.createElement("strong", null, "Descoberta de Cliente"), ", busca ser o \"back-end\" de dados para EdTechs, validando suas soluções em cenários reais.")
        )
      )
    )
  )
);

const ScenarioContent = ({ scenario }) => (
  React.createElement("div", { className: "bg-white rounded-lg shadow-lg p-8 mt-6 border border-gray-200 animate-fade-in" },
    React.createElement("h3", { className: "text-2xl font-bold text-neutral-800 mb-2" }, scenario.subtitle),
    React.createElement("p", { className: "text-neutral-600 mb-8" }, scenario.description),
    scenario.objectives && scenario.objectives.length > 0 && (
      React.createElement("div", { className: "mb-8" },
        React.createElement("h4", { className: "text-lg font-semibold text-neutral-800 mb-2" }, "Objetivos:"),
        React.createElement("ul", { className: "list-disc pl-6 space-y-1 text-neutral-700" },
          scenario.objectives.map((objective, idx) =>
            React.createElement("li", { key: idx }, objective)
          )
        )
      )
    ),
    React.createElement("div", { className: "grid md:grid-cols-2 gap-8 mb-8" },
      React.createElement("div", null,
        React.createElement("h4", { className: "text-lg font-semibold text-neutral-800 mb-3" }, "Benefícios para LABirintar"),
        React.createElement("ul", { className: "space-y-2" },
          scenario.benefits.labirintar.map((benefit, index) =>
            React.createElement("li", { key: index, className: "flex items-start" },
              React.createElement(CheckCircleIcon, { className: "w-5 h-5 text-brand-secondary mr-3 mt-1 flex-shrink-0" }),
              React.createElement("span", { className: "text-neutral-600" }, benefit)
            )
          )
        )
      ),
      React.createElement("div", null,
        React.createElement("h4", { className: "text-lg font-semibold text-neutral-800 mb-3" }, "Benefícios para IDB"),
        React.createElement("ul", { className: "space-y-2" },
          scenario.benefits.idb.map((benefit, index) =>
            React.createElement("li", { key: index, className: "flex items-start" },
              React.createElement(CheckCircleIcon, { className: "w-5 h-5 text-brand-secondary mr-3 mt-1 flex-shrink-0" }),
              React.createElement("span", { className: "text-neutral-600" }, benefit)
            )
          )
        )
      )
    ),
    React.createElement("div", null,
      React.createElement("h4", { className: "text-lg font-semibold text-neutral-800 mb-3" }, "Modelo de Colaboração"),
      React.createElement("div", { className: "bg-neutral-100 p-4 rounded-lg border border-gray-200" },
        Array.isArray(scenario.remuneration) ? (
          React.createElement("ul", { className: "list-disc pl-6 space-y-1 text-neutral-700 mb-3" },
            scenario.remuneration.map((item, idx) =>
              React.createElement("li", { key: idx }, item)
            )
          )
        ) : (
          React.createElement("p", { className: "text-neutral-600 mb-3" },
            React.createElement("strong", { className: "text-neutral-700" }, "Remuneração:"), " ", scenario.remuneration
          )
        ),
        scenario.equity && React.createElement("p", { className: "text-neutral-600" },
          React.createElement("strong", { className: "text-neutral-700" }, "Equity:"), " ", scenario.equity
        )
      )
    )
  )
);

const Scenarios = () => {
  const [activeScenario, setActiveScenario] = useState(1);

  const handleSetScenario = useCallback((id) => {
    setActiveScenario(id);
  }, []);

  const currentScenario = SCENARIOS.find(s => s.id === activeScenario);

  return React.createElement("section", { className: "py-16 bg-brand-light" },
    React.createElement("div", { className: "container mx-auto px-4" },
      React.createElement("h2", { className: "text-3xl font-bold text-center text-neutral-800 mb-2" }, "Cenários de Parceria Evolutiva"),
      React.createElement("p", { className: "text-center text-neutral-600 mb-12 max-w-2xl mx-auto" }, "Propomos uma jornada de colaboração crescente, permitindo que a parceria se aprofunde de forma orgânica e estratégica."),
      React.createElement("div", { className: "flex flex-wrap justify-center gap-2 md:gap-4 mb-6" },
        SCENARIOS.map(scenario =>
          React.createElement("button", {
            key: scenario.id,
            onClick: () => handleSetScenario(scenario.id),
            className: `px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary ${
              activeScenario === scenario.id
                ? 'bg-brand-primary text-white shadow-md'
                : 'bg-white text-neutral-600 hover:bg-white hover:text-brand-primary hover:shadow-md'
            }`,
            "aria-pressed": activeScenario === scenario.id
          }, scenario.title)
        )
      ),
      currentScenario && React.createElement(ScenarioContent, { scenario: currentScenario })
    )
  );
};

const StrategicAnalysis = () => (
  React.createElement("section", { className: "py-16" },
    React.createElement("div", { className: "container mx-auto px-4" },
      React.createElement("h2", { className: "text-3xl font-bold text-center text-neutral-800 mb-12" }, "Análise Estratégica e Atratividade para Investidores"),
      React.createElement("div", { className: "max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200" },
        React.createElement("div", { className: "space-y-6" },
          React.createElement("div", { className: "flex items-start" },
            React.createElement(HandshakeIcon, { className: "w-8 h-8 text-brand-primary mr-4 mt-1 flex-shrink-0" }),
            React.createElement("div", null,
              React.createElement("h4", { className: "text-xl font-bold text-neutral-800" }, "Proposta de Valor Integrada"),
              React.createElement("p", { className: "text-neutral-600 mt-1" }, "A colaboração entre a LABirintar e o Instituto IDB dá origem a uma EdTech única no cenário nacional: uma plataforma que combina gestão pedagógica sensível com inteligência preditiva aplicada ao contraturno escolar. Trata-se de uma solução integrada e inovadora, com alto grau de diferenciação e potencial real de gerar valor tanto para escolas quanto para redes educacionais públicas e privadas.")
            )
          ),
          React.createElement("div", { className: "flex items-start" },
            React.createElement(RocketLaunchIcon, { className: "w-8 h-8 text-brand-primary mr-4 mt-1 flex-shrink-0" }),
            React.createElement("div", null,
              React.createElement("h4", { className: "text-xl font-bold text-neutral-800" }, "Validação estratégica e horizonte de crescimento"),
              React.createElement("p", { className: "text-neutral-600 mt-1" }, "Ao unirem forças, LABirintar e IDB aceleram a validação de mercado de suas soluções, fortalecendo a confiança institucional e a atratividade comercial. A capacidade de gerar e transformar dados sobre engajamento, retenção, inadimplência e desenvolvimento infantil em indicadores acionáveis amplia o valor percebido e abre espaço para trajetórias futuras de investimento, aquisição estratégica (M&A) ou fusão com plataformas educacionais em expansão.")
            )
          ),
          React.createElement("div", { className: "flex items-start" },
            React.createElement(ChartBarIcon, { className: "w-8 h-8 text-brand-primary mr-4 mt-1 flex-shrink-0" }),
            React.createElement("div", null,
              React.createElement("h4", { className: "text-xl font-bold text-neutral-800" }, "Governança colaborativa e visão de futuro"),
              React.createElement("p", { className: "text-neutral-600 mt-1" }, "A participação societária cruzada, ainda que minoritária em um primeiro momento, assegura o alinhamento de interesses e sinaliza ao mercado um compromisso institucional sólido. Ao substituir a lógica tradicional de “fornecedor e cliente” por uma relação de cocriação e corresponsabilidade, o modelo inspira confiança e demonstra maturidade estratégica, visão compartilhada e resiliência na construção conjunta de valor.")
            )
          )
        )
      )
    )
  )
);

const Footer = () => (
  React.createElement("footer", { className: "text-center py-6 bg-neutral-800 text-neutral-100" },
    React.createElement("p", null, "© ", new Date().getFullYear(), " LABirintar & Instituto IDB. Todos os direitos reservados.")
  )
);

function App() {
  return React.createElement("div", { className: "min-h-screen bg-neutral-100" },
    React.createElement(Header),
    React.createElement("main", null,
      React.createElement(Introduction),
      React.createElement(Scenarios),
      React.createElement(StrategicAnalysis)
    ),
    React.createElement(Footer)
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App)
  )
); 