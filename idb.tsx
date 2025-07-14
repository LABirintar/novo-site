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
    description: `A união entre LABirintar e Instituto IDB configura uma EdTech única, que entrega gestão pedagógica integrada à inteligência de dados, formando uma solução completa e inovadora para o contraturno escolar.
Esse diferencial competitivo posiciona a parceria como referência na transição para a Educação Integral no Brasil.
A validação simultânea das duas soluções e a geração de dados estratégicos sobre engajamento, inadimplência e desempenho agregam valor mensurável ao negócio, ampliando o potencial de um exit futuro via fusão ou aquisição com grandes grupos educacionais.
O modelo de equity cruzado demonstra compromisso de longo prazo, alinha interesses e fortalece a governança, sinal claro para investidores de que se trata de uma construção sólida, coesa e escalável.`,
    objectives: [
      "Consolidar uma operação única capaz de escalar com profundidade técnica e intencionalidade pedagógica.",
      "Posicionar a LABirintar como hub nacional de inovação em Educação Integral, com frente de dados própria.",
      "Dar ao IDB estrutura, apoio estratégico e integração comercial para acelerar e sustentar seu crescimento.",
      "Criar um ecossistema com densidade institucional para atrair grandes investidores e políticas públicas."
    ],
    benefits: {
      labirintar: [
        "Criação de um novo braço de negócios de alto valor agregado (Data Intelligence).",
        "Propriedade de uma solução analítica com diferencial competitivo raro no mercado.",
        "Fortalecimento institucional como plataforma, instituto e rede.",
        "Potencial de verticalizar a geração de conhecimento e monetizar dados com base ética."
      ],
      idb: [
        "Aceleração técnica e comercial com acesso a pipeline ativo e redes da LABirintar.",
        "Redução de riscos operacionais e estrutura de negócio compartilhada.",
        "Validação de mercado acelerada, com apoio narrativo, pedagógico e institucional.",
        "Participação em uma construção coletiva com potencial nacional."
      ]
    },
    remuneration: [
      "A Labirintar realiza um aporte (em serviços) no IDB. As receitas passam a ser combinadas e os custos geridos de forma centralizada, com governança unificada sob um Acordo de Acionistas.",
      "A Labirintar recebe participação societária no IDB. Na integração societária (cap table combinado), as participações são redefinidas com base no valuation e nos ativos estratégicos de cada empresa.",
      "Possibilidade de consolidar a marca IDB como ‘LABirintar Data’ ou ‘Núcleo de Inteligência Educacional’."
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
              React.createElement("h4", { className: "text-xl font-bold text-neutral-800" }, "Proposta de Valor Combinada"),
              React.createElement("p", { className: "text-neutral-600 mt-1" }, "A união entre LABirintar e Instituto IDB dá origem a uma EdTech singular no mercado: uma plataforma que integra gestão pedagógica sensível com inteligência preditiva aplicada ao contraturno escolar. Trata-se de uma solução de ponta a ponta, com forte diferenciação competitiva e capacidade real de gerar valor tanto para escolas quanto para redes educacionais.")
            )
          ),
          React.createElement("div", { className: "flex items-start" },
            React.createElement(RocketLaunchIcon, { className: "w-8 h-8 text-brand-primary mr-4 mt-1 flex-shrink-0" }),
            React.createElement("div", null,
              React.createElement("h4", { className: "text-xl font-bold text-neutral-800" }, "Validação e Potencial de Exit"),
              React.createElement("p", { className: "text-neutral-600 mt-1" }, "A parceria acelera a validação de mercado de ambas as soluções, ampliando a confiança institucional e comercial. A capacidade de gerar, analisar e transformar dados sobre engajamento, retenção, inadimplência e desenvolvimento infantil em indicadores acionáveis representa valor mensurável, aprimorando o potencial de um futuro exit (M&A) junto a grupos educacionais, fundos de impacto ou plataformas de tecnologia em expansão.")
            )
          ),
          React.createElement("div", { className: "flex items-start" },
            React.createElement(ChartBarIcon, { className: "w-8 h-8 text-brand-primary mr-4 mt-1 flex-shrink-0" }),
            React.createElement("div", null,
              React.createElement("h4", { className: "text-xl font-bold text-neutral-800" }, "Governança e Alinhamento"),
              React.createElement("p", { className: "text-neutral-600 mt-1" }, "A participação societária mútua, ainda que minoritária em um primeiro momento, garante alinhamento de interesses no longo prazo, sinaliza compromisso institucional e rompe com o modelo tradicional de fornecedor vs. cliente. Para investidores, essa configuração indica maturidade estratégica, coerência de visão e resiliência na construção conjunta de valor.")
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