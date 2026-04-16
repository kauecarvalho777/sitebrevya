export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const posts: Post[] = [
  {
    slug: "como-a-tecnologia-transforma-o-varejo",
    title: "Como a tecnologia transforma o varejo em 2025",
    excerpt: "Descubra as principais tendências tecnológicas que estão revolucionando o setor varejista e como sua empresa pode se preparar.",
    content: `
A transformação digital no varejo não é mais uma tendência — é uma realidade consolidada. Em 2025, empresas que ainda resistem à adoção de tecnologia estão ficando para trás em um mercado cada vez mais competitivo.

## O cenário atual

O consumidor moderno espera uma experiência integrada entre o físico e o digital. Segundo pesquisas recentes, mais de 70% dos consumidores brasileiros pesquisam online antes de comprar em lojas físicas.

## Principais tendências

### 1. Inteligência Artificial no atendimento
Chatbots inteligentes e assistentes virtuais estão transformando o atendimento ao cliente, oferecendo respostas personalizadas 24 horas por dia.

### 2. Omnicanalidade real
Não basta estar em todos os canais — é preciso que eles conversem entre si. O cliente precisa começar uma compra no celular e finalizar na loja sem fricção.

### 3. Análise preditiva de demanda
Algoritmos de machine learning conseguem prever demandas sazonais com precisão cada vez maior, otimizando estoques e reduzindo perdas.

## Como a Brevya atua nesse cenário

A Brevya desenvolve soluções tecnológicas sob medida para o varejo, integrando sistemas legados com plataformas modernas e garantindo que a transição digital aconteça de forma estruturada e sustentável.

> "Tecnologia sem estratégia é apenas custo. Com a visão certa, ela se torna o maior diferencial competitivo de uma empresa." — Pablo Nunes, CEO da Brevya
    `,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    date: "2025-04-10",
    author: "Brevya",
    category: "Tecnologia",
  },
  {
    slug: "flow-commerce-gestao-inteligente",
    title: "Flow Commerce: gestão inteligente para e-commerces",
    excerpt: "Conheça como o Flow Commerce centraliza operações e aumenta a eficiência de lojas virtuais com automação e inteligência.",
    content: `
O Flow Commerce nasceu da necessidade real de empresas que operam no e-commerce e enfrentam desafios diários com gestão de pedidos, estoque e integração entre marketplaces.

## O problema

Muitas empresas utilizam dezenas de ferramentas diferentes para gerenciar suas operações online. Isso gera retrabalho, erros e perda de tempo.

## A solução

O Flow Commerce centraliza todas as operações em uma única plataforma:

- **Gestão de pedidos** unificada entre todos os canais
- **Controle de estoque** em tempo real
- **Integração nativa** com os principais marketplaces
- **Relatórios inteligentes** para tomada de decisão

## Resultados reais

Empresas que adotaram o Flow Commerce reportaram:

- Redução de 40% no tempo de processamento de pedidos
- Diminuição de 60% nos erros de estoque
- Aumento de 25% na satisfação do cliente final

## Próximos passos

Se sua empresa opera em múltiplos canais de venda e busca mais eficiência operacional, o Flow Commerce pode ser a solução ideal.
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    date: "2025-03-28",
    author: "Brevya",
    category: "Flow Commerce",
  },
  {
    slug: "importancia-da-consultoria-tecnologica",
    title: "Por que sua empresa precisa de consultoria tecnológica",
    excerpt: "Entenda como uma consultoria especializada pode evitar erros caros e acelerar a transformação digital do seu negócio.",
    content: `
Investir em tecnologia sem orientação estratégica é como construir uma casa sem planta. A consultoria tecnológica existe para garantir que cada investimento gere retorno real.

## O que é consultoria tecnológica?

É o processo de análise, diagnóstico e planejamento da infraestrutura tecnológica de uma empresa, alinhando ferramentas e processos aos objetivos de negócio.

## Quando contratar?

- Quando sua empresa está crescendo e os sistemas atuais não acompanham
- Quando há muitos processos manuais que poderiam ser automatizados
- Quando você não sabe por onde começar a transformação digital
- Quando investimentos anteriores em tecnologia não trouxeram resultado

## O diferencial da Brevya

A Brevya não oferece soluções genéricas. Cada projeto começa com um diagnóstico profundo da operação do cliente, mapeando gargalos e oportunidades antes de propor qualquer solução.

### Metodologia

1. **Diagnóstico** — Mapeamento completo da operação
2. **Estratégia** — Definição de prioridades e roadmap
3. **Execução** — Desenvolvimento e implementação
4. **Acompanhamento** — Monitoramento e otimização contínua

Essa abordagem garante que a tecnologia implementada realmente resolva os problemas identificados e gere valor mensurável.
    `,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    date: "2025-03-15",
    author: "Brevya",
    category: "Consultoria",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getLatestPosts(count: number = 3): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
