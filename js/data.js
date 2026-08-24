/**
 * Banco de Dados de Conteúdo: Vygotsky e a Defectologia
 * Contém os flashcards principais e as questões estruturadas do Modo Desafio (Quiz).
 */

export const flashcardsData = [
  {
    id: 1,
    category: "Conceito Fundamental",
    titulo: "Defectologia Antiga vs. Moderna",
    frente: "O que diferencia a defectologia clássica (antiga) da defectologia moderna proposta por Vygotsky?",
    verso: "A defectologia antiga limitava-se a uma abordagem biológica e quantitativa de 'menos-valia' (focada na deficiência e medida por testes de QI). A moderna foca na qualidade do desenvolvimento, compreendendo que a pessoa com deficiência se desenvolve de forma qualitativamente diferente, mas sob as mesmas leis gerais do psiquismo.",
    emoji: "🧠",
    color: "#06b6d4"
  },
  {
    id: 2,
    category: "Processo Psíquico",
    titulo: "Compensação Social",
    frente: "O que é o processo de 'compensação social' na perspectiva de Vygotsky?",
    verso: "É o mecanismo pelo qual a deficiência atua como um estímulo para que o organismo e o aparelho psíquico criem caminhos alternativos de superação. Essa compensação não ocorre de forma puramente biológica, mas sim de maneira indireta, por meio de interações sociais e do uso de ferramentas culturais.",
    emoji: "🤝",
    color: "#8b5cf6"
  },
  {
    id: 3,
    category: "Teoria do Aprendizado",
    titulo: "Zona de Desenvolvimento Proximal (ZDP)",
    frente: "Como a Zona de Desenvolvimento Proximal (ZDP) se aplica à educação especial?",
    verso: "A ZDP é o espaço entre o nível de desenvolvimento real (o que o aluno faz sozinho) e o potencial (o que faz com ajuda). No ensino especial, o professor deve focar na ZDP, propondo desafios mediados para transformar o potencial do aluno em capacidade real, em vez de focar apenas no diagnóstico de suas limitações.",
    emoji: "🎯",
    color: "#10b981"
  },
  {
    id: 4,
    category: "Prática Educacional",
    titulo: "Mediação Pedagógica",
    frente: "Qual é o papel do professor como 'mediador pedagógico' segundo a defectologia vygotskyana?",
    verso: "O professor é o mediador social essencial. Sua função é organizar o ambiente social e introduzir ferramentas culturais e meios alternativos de aprendizagem que permitam ao estudante compensar suas limitações orgânicas e se desenvolver plenamente.",
    emoji: "👨‍🏫",
    color: "#f59e0b"
  },
  {
    id: 5,
    category: "Ferramentas Culturais",
    titulo: "Caminhos Alternativos",
    frente: "O que são 'caminhos alternativos' de compensação e quais são seus exemplos práticos?",
    verso: "São vias culturais criadas para substituir funções biológicas que estão danificadas. Exemplos práticos incluem o uso do sistema Braille e da linguagem tátil para pessoas com deficiência visual, e o uso da língua de sinais e da datilologia para pessoas com deficiência auditiva.",
    emoji: "✨",
    color: "#ec4899"
  }
];

export const quizQuestions = [
  {
    id: 1,
    pergunta: "De acordo com Vygotsky, qual é a principal diferença entre a defectologia antiga e a defectologia moderna?",
    opcoes: [
      "A antiga focava no desenvolvimento social, enquanto a moderna prioriza testes quantitativos de QI.",
      "A antiga limitava-se a uma perspectiva biológica de 'menos-valia' quantitativa; a moderna foca nos aspectos qualitativos e no desenvolvimento diferente do sujeito.",
      "Ambas defendem que a criança com deficiência deve ser segregada em ambientes escolares isolados.",
      "A moderna defende que as leis de funcionamento psíquico da criança com deficiência são completamente diferentes das leis de uma criança sem deficiência."
    ],
    correta: 1,
    explicacao: "A defectologia antiga avaliava a inteligência de forma puramente quantitativa e anatômica. Vygotsky rompeu com isso ao demonstrar que a criança se desenvolve de maneira qualitativamente diferente, mas sob as mesmas leis gerais do psiquismo."
  },
  {
    id: 2,
    pergunta: "Como Vygotsky explica o papel da deficiência no desenvolvimento da personalidade por meio da 'compensação social'?",
    opcoes: [
      "A deficiência funciona puramente como um fator de limitação intransponível para o sistema nervoso.",
      "O organismo compensa a deficiência de maneira exclusivamente biológica, sem necessidade de interferência cultural.",
      "A deficiência atua como um estímulo que desafia o organismo e o psiquismo a buscarem caminhos indiretos (sociais e culturais) de desenvolvimento e superação.",
      "A compensação ocorre apenas quando o indivíduo é afastado de interações sociais e focado em reabilitação médica."
    ],
    correta: 2,
    explicacao: "A deficiência tem um duplo papel: ao mesmo tempo em que cria limitações, atua como um estímulo que impulsiona o sujeito a desenvolver caminhos alternativos de superação mediada social e culturalmente."
  },
  {
    id: 3,
    pergunta: "Qual era a crítica central de Vygotsky em relação às escolas especiais segregadoras de sua época?",
    opcoes: [
      "Elas focavam excessivamente no aprendizado de disciplinas acadêmicas avançadas.",
      "Elas criavam um micromundo fechado e separado da sociedade que reduzia o aprendizado e não preparava a criança para a vida social real.",
      "Elas se recusavam a utilizar avaliações psicológicas por meio de exames e testes psicométricos.",
      "Elas integravam de forma muito precoce as crianças no sistema geral de instrução pública."
    ],
    correta: 1,
    explicacao: "Vygotsky criticava o isolamento dessas escolas. Elas criavam um ambiente artificial focado em assistência social e na segregação, o que prejudicava severamente o aprendizado e a inclusão efetiva do estudante."
  },
  {
    id: 4,
    pergunta: "No contexto do ensino especial, como a Zona de Desenvolvimento Proximal (ZDP) deve ser trabalhada pelo professor?",
    opcoes: [
      "O professor deve propor tarefas fáceis que o aluno já consegue realizar sozinho, sem intervir.",
      "O professor deve evitar propor desafios que exijam a colaboração de outras pessoas.",
      "O professor deve intervir de forma mediada, valorizando o que o aluno realiza com ajuda de terceiros para impulsionar suas potencialidades futuras.",
      "O professor deve limitar as atividades ao diagnóstico clínico e anatômico do estudante."
    ],
    correta: 2,
    explicacao: "A ZDP mostra o caminho entre o desenvolvimento real (o que se faz sozinho) e o potencial (o que se faz com apoio). A mediação do professor atua na ZDP para que as capacidades futuras sejam desenvolvidas."
  },
  {
    id: 5,
    pergunta: "Em relação aos caminhos alternativos de ensino discutidos por Vygotsky, assinale a associação correta entre deficiência e recurso pedagógico recomendado:",
    opcoes: [
      "Deficiência auditiva: treinamento mecânico e rigoroso de articulação oral de sons (método oralista coercitivo).",
      "Deficiência intelectual: exclusão de conteúdos complexos e foco único em diagnóstico médico estático.",
      "Deficiência visual: substituição total da linguagem falada por orientações puramente espaciais.",
      "Deficiência visual e auditiva: adoção de vias táteis e de sinais (como Braille e língua de sinais/datilologia) em substituição aos canais biológicos danificados."
    ],
    correta: 3,
    explicacao: "A compensação de limitações sensoriais ocorre por canais culturais alternativos que substituem os canais biológicos afetados (como ler com os dedos pelo Braille ou falar com as mãos pela língua de sinais)."
  },
  {
    id: 6,
    pergunta: "Como deve ser planejada a educação do estudante com deficiência intelectual segundo as bases de Vygotsky?",
    opcoes: [
      "Focando no 'intelecto prático' (raciocínio, autonomia e comunicação) e adaptando qualitativamente os conteúdos escolares em vez de rotulá-lo.",
      "Adotando exclusivamente testes de QI constantes para ajustar as notas do estudante.",
      "Reduzindo e simplificando drasticamente as tarefas escolares, já que o desenvolvimento é quantitativamente limitado.",
      "Tratando todas as funções intelectuais como se estivessem afetadas de forma idêntica e sem possibilidade de mudança."
    ],
    correta: 0,
    explicacao: "Vygotsky defendia o desenvolvimento do intelecto prático (raciocínio, autonomia, comunicação) por caminhos alternativos, se opondo ao diagnóstico estático baseado em testes de inteligência e rótulos limitadores."
  }
];
