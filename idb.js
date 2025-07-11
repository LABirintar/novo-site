import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';

// From types.ts
const SCENARIOS = [
  {
    id: 1,
    title: "Cenário 1",
    subtitle: "Parceria Estratégica de Leads e Prospecção Conjunta",
    description: "Nesta fase inicial de baixa complexidade, Labirintar e IDB formalizam um acordo de compartilhamento de leads para otimizar a prospecção. Labirintar busca acelerar sua validação de clientes, enquanto o IDB necessita testar sua descoberta de clientes em um ecossistema real.",
    benefits: {
      labirintar: [
        "Acesso a uma base de potenciais clientes qualificados pelo IDB.",
        "Validação inicial do interesse do mercado em inteligência de dados.",
        "Potencial redução do Custo de Aquisição de Clientes (CAC) via indicações."
      ],
      idb: [
        "Acesso à rede de escolas e educadores da Labirintar para prospecção.",
        "Oportunidade de testar e validar o modelo de 'descoberta de cliente'.",
        "Geração de 'testemunhos' e casos de uso iniciais com baixo risco."
      ]
    },
    remuneration: "Inicialmente, a troca de indicações não é remunerada, focando no feedback mútuo. Prevê-se uma comissão simbólica (ex: 2%) sobre o faturamento inicial de um lead convertido para incentivar a qualidade.",
  },
  {
    id: 2,
    title: "Cenário 2",
    subtitle: "Integração de Valor: Solução IDB na Plataforma Labirintar",
    description: "Evoluindo a parceria, o IDB integraria suas funcionalidades de inteligência de dados e dashboards preditivos à plataforma Labirintar, transformando-a em uma fonte viva de dados e elevando sua proposta de valor.",
    benefits: {
      labirintar: [
        "Oferta de insights sobre retenção, engajamento e desempenho curricular.",
        "Aumento do valor percebido da plataforma, atraindo escolas e investidores.",
        "Diferenciação competitiva significativa no mercado EdTech."
      ],
      idb: [
        "Ganho de escala ao ter sua solução embarcada e testada em um ecossistema crescente.",
        "Acesso a uma base de dados real e rica para refinar seus modelos preditivos.",
        "Validação de mercado e credibilidade ao ter sua tecnologia em uso por uma EdTech."
      ]
    },
    remuneration: "Labirintar remunera o IDB com uma taxa de serviço (fixa ou por usuário). Adicionalmente, o IDB recebe uma porcentagem (5-10%) sobre a receita incremental gerada pelas funcionalidades de inteligência de dados.",
    equity: "Como contrapartida pelos ativos (tecnologia e dados), a Labirintar poderia ceder uma participação minoritária (1-2%) de equity ao IDB, alinhando interesses a longo prazo."
  },
  {
    id: 3,
    title: "Cenário 3",
    subtitle: "Spin-off Estratégica e Fusão Operacional",
    description: "O IDB é vinculado à Labirintar como uma 'spin-off estratégica', com a Labirintar atuando como investidora. Esta fase evolui para a fusão das operações de mercado, produção e financeiro, criando um fluxo unificado para formar uma 'plataforma nacional de inteligência educacional'.",
    benefits: {
      labirintar: [
        "Posicionamento como 'hub de inovação' e criação de um novo braço de negócio (data intelligence).",
        "Acesso prioritário a inovações do IDB, fortalecendo o portfólio.",
        "Maximização de sinergias e eficiências operacionais com a fusão."
      ],
      idb: [
        "Aceleração do desenvolvimento com suporte estruturado e mentoria.",
        "Minimização de custos e acesso a um pipeline de clientes qualificado.",
        "Estrutura robusta para escalar nacionalmente através da operação integrada."
      ]
    },
    remuneration: "A Labirintar realiza um aporte (financeiro ou em serviços) no IDB. Com a fusão, as receitas são combinadas e os custos geridos centralmente, com a governança unificada sob um Acordo de Acionistas.",
    equity: "A Labirintar recebe uma participação societária no IDB (ex: 5-10%). Na fusão, o 'cap table' é consolidado, redefinindo as participações com base no valuation e nos ativos estratégicos de cada empresa."
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
      React.createElement("img", { src: "/logoslabirintar/Labirintar_RGB.png", alt: "LABirintar Logo", className: "w-auto h-24 mx-auto mb-6" }),
      React.createElement("h1", { className: "text-4xl md:text-5xl font-bold text-brand-primary mb-2" }, "Proposta de Parceria Estratégica"),
      React.createElement("p", { className: "text-2xl font-semibold text-neutral-800" }, "+ Instituto IDB"),
      React.createElement("p", { className: "mt-4 text-lg text-neutral-600 max-w-3xl mx-auto" }, "Construindo o futuro da Educação Integral através da sinergia entre curadoria pedagógica e inteligência de dados.")
    )
  )
);

const Introduction = () => (
  React.createElement("section", { className: "py-16" },
    React.createElement("div", { className: "container mx-auto px-4" },
      React.createElement("h2", { className: "text-3xl font-bold text-center text-neutral-800 mb-12" }, "Uma Sinergia Visionária"),
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
        React.createElement("p", { className: "text-neutral-600 mb-3" },
          React.createElement("strong", { className: "text-neutral-700" }, "Remuneração:"), " ", scenario.remuneration
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
      React.createElement("p", { className: "text-center text-neutral-600 mb-12 max-w-2xl mx-auto" }, "Propusemos uma jornada de colaboração crescente, permitindo que a parceria se aprofunde de forma orgânica e estratégica."),
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
              React.createElement("p", { className: "text-neutral-600 mt-1" }, "A união cria uma EdTech única que oferece desde a curadoria pedagógica até a inteligência preditiva do impacto dessas atividades, uma solução de ponta a ponta com forte diferenciação competitiva.")
            )
          ),
          React.createElement("div", { className: "flex items-start" },
            React.createElement(RocketLaunchIcon, { className: "w-8 h-8 text-brand-primary mr-4 mt-1 flex-shrink-0" }),
            React.createElement("div", null,
              React.createElement("h4", { className: "text-xl font-bold text-neutral-800" }, "Validação e Potencial de Exit"),
              React.createElement("p", { className: "text-neutral-600 mt-1" }, "A parceria reforça a validação de mercado de ambas as empresas. A capacidade de gerar e analisar dados sobre desempenho, retenção e inadimplência agrega valor mensurável, aprimorando o potencial para um futuro exit (M&A) com grandes grupos educacionais.")
            )
          ),
          React.createElement("div", { className: "flex items-start" },
            React.createElement(ChartBarIcon, { className: "w-8 h-8 text-brand-primary mr-4 mt-1 flex-shrink-0" }),
            React.createElement("div", null,
              React.createElement("h4", { className: "text-xl font-bold text-neutral-800" }, "Governança e Alinhamento"),
              React.createElement("p", { className: "text-neutral-600 mt-1" }, "A participação mútua de equity, mesmo que minoritária nos estágios iniciais, alinha os interesses para o longo prazo e demonstra um compromisso estratégico que vai além de uma simples relação cliente-fornecedor, o que é altamente valorizado por investidores.")
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