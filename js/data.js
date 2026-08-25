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
  },
  {
    id: 7,
    pergunta: "De acordo com o Modelo Social da Deficiência, qual é a distinção conceitual básica estabelecida entre 'comprometimento' (impairment) e 'deficiência' (disability)?",
    opcoes: [
      "Comprometimento é um transtorno de ordem social; deficiência é de ordem médica e curável.",
      "Comprometimento é de ordem biológica, individual e privada (como uma lesão ou perda de função); deficiência é de ordem social, coletiva e pública, gerada pela opressão de uma sociedade insensível às diferenças.",
      "Comprometimento e deficiência são termos sinônimos idênticos usados para descrever a tragédia pessoal de um indivíduo.",
      "Comprometimento é a perda de inteligência medida por testes; deficiência é a perda de locomoção física."
    ],
    correta: 1,
    explicacao: "O Modelo Social defende que o comprometimento é a característica corpórea/sensorial (individual e privada), enquanto a deficiência é o resultado das barreiras físicas, atitudinais e sociais que excluem e oprimem o sujeito (coletivo e público)."
  },
  {
    id: 8,
    pergunta: "Qual base metodológica comum fundamenta tanto a Defectologia de Vygotsky quanto as formulações teóricas do Modelo Social da Deficiência?",
    opcoes: [
      "O empirismo estatístico e a psicometria quantitativa.",
      "O idealismo subjetivo e a pedagogia terapêutica clássica.",
      "O materialismo histórico-dialético.",
      "O evolucionismo darwinista e o determinismo biológico."
    ],
    correta: 2,
    explicacao: "Ambas as correntes partilham do alicerce metodológico do materialismo histórico-dialético para compreender a deficiência de maneira contextualizada, rejeitando explicações puramente naturais ou biologizadas."
  },
  {
    id: 9,
    pergunta: "Na defectologia de Vygotsky, o que são as complicações primárias (defeitos primários) e as complicações secundárias?",
    opcoes: [
      "Primárias são as que afetam crianças, e secundárias são as que acometem adultos.",
      "Primárias são as limitações de caráter orgânico/biológico; secundárias são as alterações do desenvolvimento decorrentes da interação desse organismo comprometido com um meio social e cultural não acessível.",
      "Primárias referem-se às deficiências sensoriais, e secundárias referem-se à deficiência intelectual.",
      "Primárias são os diagnósticos clínicos, e secundárias são os tratamentos medicamentosos."
    ],
    correta: 1,
    explicacao: "A complicação primária é a limitação biológica (ex: lesão na retina). A complicação secundária surge quando a sociedade, por falta de acessibilidade ou ferramentas, impede que o sujeito se aproprie da cultura geral, gerando barreiras ao desenvolvimento psíquico."
  },
  {
    id: 10,
    pergunta: "Conquanto Vygotsky e o Modelo Social da Deficiência compartilhem da separação entre o biológico e o social, qual é uma diferença de foco marcante entre as duas teorias?",
    opcoes: [
      "Vygotsky defendia que pessoas com deficiência não precisavam de educação, ao passo que o Modelo Social priorizava exclusivamente a escola especial.",
      "O Modelo Social foca na luta política e na eliminação de barreiras sociais externas; a Defectologia de Vygotsky foca no desenvolvimento interno do sujeito por meio da educação e da apropriação individual de signos e ferramentas.",
      "Vygotsky baseava suas teses na cura médica cirúrgica, enquanto o Modelo Social focava no desenvolvimento cognitivo espontâneo.",
      "O Modelo Social apoia intervenções clínicas individuais em oposição ao historicismo que Vygotsky defendia."
    ],
    correta: 1,
    explicacao: "O Modelo Social (nascido do ativismo de pessoas com deficiência) dá ênfase à ação sociopolítica externa para remoção de barreiras. Vygotsky, embora reconheça a importância social, centra sua teoria em como as mediações pedagógicas reorganizam internamente as funções psíquicas do indivíduo."
  },
  {
    id: 11,
    pergunta: "Qual é a crítica da perspectiva histórico-cultural à forma normativa tradicional como a sociedade frequentemente enxerga e trata as pessoas com deficiência intelectual?",
    opcoes: [
      "A crítica de que a idade cronológica desses sujeitos deveria ser desconsiderada.",
      "A crítica à tendência de reduzi-las à categoria de 'eterna criança' (menoridade perene), negligenciando suas plenas possibilidades de desenvolvimento de autonomia e autocrítica no decorrer da vida adulta.",
      "A crítica de que o desenvolvimento de processos de compensação psíquica cessa de forma absoluta no final da infância.",
      "A crítica de que adultos com deficiência intelectual devem ser mantidos exclusivamente sob regime de asilamento."
    ],
    correta: 1,
    explicacao: "A visão histórico-cultural contrapõe-se à crença normativa e infantilizadora de que a deficiência intelectual aprisiona o sujeito em uma infância perpétua, argumentando que a idade adulta atípica traz novas possibilidades de autonomia e ressignificação de si."
  },
  {
    id: 12,
    pergunta: "No contexto discursivo dos Fundamentos da Defectologia, o termo russo 'Obutchénie' (Обучение) refere-se especificamente a qual conceito?",
    opcoes: [
      "Uma resposta reflexa ou condicionada puramente biológica.",
      "Uma memorização passiva e mecânica de conteúdos escolares de visualização direta.",
      "Aprendizagem Desenvolvimental (um processo ativo de ensino-aprendizagem intencional que impulsiona o desenvolvimento psíquico).",
      "Um diagnóstico estático obtido por meio de exames e testes psicométricos de QI."
    ],
    correta: 2,
    explicacao: "Obutchénie representa o processo interativo de ensino-aprendizagem. Sob a ótica de Vygotsky, a adequada organização desse processo serve como propulsora do desenvolvimento psíquico superior do aluno."
  },
  {
    id: 13,
    pergunta: "Nos escritos de Vygotsky sobre defectologia, o termo russo 'Vospitanie' (Воспитание) carrega o sentido de:",
    opcoes: [
      "Educação (especialmente no sentido de educação social e coletiva), atuando como um fator essencialmente mobilizador de aprendizagem e desenvolvimento.",
      "Tratamento cirúrgico para a correção fisiológica direta do defeito orgânico primário.",
      "Adestramento mecânico, rígido e repetitivo para simular condutas típicas de controle de comportamento.",
      "Isolamento familiar para proteger a criança contra as dificuldades das tarefas escolares comuns."
    ],
    correta: 0,
    explicacao: "Vospitanie diz respeito à Educação. Para Vygotsky, a educação social (vospitanie) é o meio pelo qual a sociedade insere ativamente o sujeito atípico em práticas coletivas e cooperativas."
  },
  {
    id: 14,
    pergunta: "Qual é a tese central da perspectiva histórico-cultural sobre a relação entre o ensino (Obutchénie) e o desenvolvimento psíquico humano?",
    opcoes: [
      "O ensino deve apenas seguir passivamente o desenvolvimento biológico natural já amadurecido.",
      "Ensino e desenvolvimento são processos idênticos que ocorrem de forma espontânea.",
      "A única boa aprendizagem (Obutchénie) é aquela que se adianta ao desenvolvimento, atuando na Zona de Desenvolvimento Proximal das funções que ainda estão em fase de maturação.",
      "O ensino biológico determina diretamente a evolução da estrutura genética do sujeito."
    ],
    correta: 2,
    explicacao: "Vygotsky revolucionou as concepções pedagógicas ao propor que o ensino não deve esperar as funções amadurecerem sozinhas, mas sim provocar e liderar o desenvolvimento ao desafiar o amanhã do aluno."
  },
  {
    id: 15,
    pergunta: "No início do século XX, Vygotsky contrapôs-se à 'versão mística' sobre o desenvolvimento das pessoas com deficiência. Que ideia essa vertente mística defendia?",
    opcoes: [
      "Defendia que a deficiência era transmissível socialmente; Vygotsky provou que era de origem puramente infecciosa.",
      "Atribuía às pessoas com deficiência forças místicas ou divinas (como um 'terceiro ouvido' ou sensibilidade mágica compensatória); Vygotsky rejeitou-a, mostrando que a compensação se constrói por relações sociais e ferramentas reais.",
      "Defendia que as pessoas cegas tinham audição biológica perfeita por herança hereditária involuntária.",
      "Propunha que os comprometimentos físicos seriam curados pela reabilitação de isolamento em consultório médico."
    ],
    correta: 1,
    explicacao: "A visão mística apoiava-se em ideias de 'dons divinos' ou dons naturais misteriosos que compensariam perdas sensoriais. Vygotsky demonstrou cientificamente que a compensação é um fenômeno histórico-cultural construído em interações sociais."
  },
  {
    id: 16,
    pergunta: "Por que Vygotsky apresentava uma divergência radical com as propostas ocidentais tradicionais da chamada 'educação compensatória' de sua época?",
    opcoes: [
      "Porque ele preferia métodos de punição corporal estritos aos métodos de premiação.",
      "Porque as propostas ocidentais exigiam tecnologia de ponta inacessível na União Soviética.",
      "Porque no Ocidente a compensação era vista sob um enfoque filantrópico de bem-estar, caridade e assistência para inválidos (social supply); Vygotsky defendia que a compensação devia ser guiada por uma educação estritamente social e participativa.",
      "Porque as propostas compensatórias do Ocidente recusavam o uso de sistemas táteis como o sistema Braille."
    ],
    correta: 2,
    explicacao: "Vygotsky criticava veementemente a 'filantropia de invalidez'. Ele defendia que a educação social não serve para oferecer um mero 'suprimento ou caridade', mas sim para criar oportunidades de inserção cultural ativa do sujeito atípico."
  },
  {
    id: 17,
    pergunta: "Vygotsky inspirou-se na teoria da compensação do psicólogo austríaco Alfred Adler, mas realizou uma importante ruptura teórica. Qual foi essa mudança?",
    opcoes: [
      "Vygotsky abandonou a ideia de compensação psíquica e defendeu que ela era puramente um fenômeno orgânico de reflexo biológico.",
      "Adler focava na compensação movida por sentimentos subjetivos de inferioridade e forças individuais; Vygotsky deslocou essa força motriz da subjetividade isolada para as oportunidades objetivas coletivas, sociais e culturais.",
      "Vygotsky rejeitou a proposta de Adler de que as crianças atípicas deveriam realizar brincadeiras coletivas com seus pares.",
      "Adler propunha testes quantitativos de QI como motor da compensação, metodologia que Vygotsky aceitou de forma integral."
    ],
    correta: 1,
    explicacao: "Embora partilhasse do otimismo de Adler, Vygotsky criticou seu foco excessivo nas forças e sentimentos subjetivos do indivíduo. Vygotsky argumentava que o real poder explicativo do desenvolvimento humano reside na natureza social e coletiva."
  },
  {
    id: 18,
    pergunta: "A tese de que 'a posição que o sujeito ocupa na dinâmica social é constitutiva de seu psiquismo' é ilustrada em estudos contemporâneos (como o de Debora Dainez) por meio de qual intervenção com o aluno Gustavo (que tem síndrome de Down)?",
    opcoes: [
      "Isolar o estudante no fundo da sala para que ele não estoure os balões da decoração de uma festa escolar.",
      "Substituir as tarefas escolares do estudante por atividades motoras repetitivas isoladas de forma definitiva.",
      "Convidar o aluno a participar ativamente da decoração da festa (pendurando balões), mudando o significado de suas ações de 'aluno impossível' para 'estudante colaborador com possibilidades'.",
      "Aumentar o uso de avaliações estáticas e reduzir sua socialização com alunos típicos."
    ],
    correta: 2,
    explicacao: "Ao reorientar a conduta e integrá-lo ativamente ao coletivo, a professora alterou o papel de Gustavo na atividade. A mudança na sua posição social transformou o significado de suas ações e seu envolvimento psíquico na aula."
  },
  {
    id: 19,
    pergunta: "Vygotsky utiliza a 'lei da dificuldade de tomada de consciência' do psicólogo Édouard Claparède para sustentar qual princípio da Defectologia?",
    opcoes: [
      "A tese de que a fala egocêntrica não exerce nenhum papel no planejamento cognitivo.",
      "O princípio de que a estrutura dos caminhos indiretos (compensações psíquicas) surge no comportamento humano justamente quando o caminho direto de adaptação biológica está impedido.",
      "A ideia de que as dificuldades escolares devem ser eliminadas previamente para evitar a frustração do aluno.",
      "O suposto de que o desenvolvimento natural da criança coincide harmonicamente e sem tensões com seu desenvolvimento cultural."
    ],
    correta: 1,
    explicacao: "Baseando-se em Claparède, Vygotsky mostra que o psiquismo humano busca caminhos indiretos (mediados por signos) quando encontra obstáculos na via biológica direta. O impedimento orgânico funciona, assim, como estímulo para o pensamento consciente e para o uso de ferramentas culturais."
  },
  {
    id: 20,
    pergunta: "O que ocorre no desenvolvimento de uma criança com comprometimentos que evidencia de forma nítida as contradições entre as linhas natural (biológica) e cultural do desenvolvimento psíquico?",
    opcoes: [
      "Uma fusão harmoniosa e espontânea entre as linhas natural e cultural desde o nascimento.",
      "Uma profunda divergência ou discrepância, uma vez que todo o aparato cultural (signos, escrita, técnicas) é socialmente calculado para corpos com organizações psicofisiológicas normais.",
      "O desaparecimento imediato das limitações biológicas por força do avanço das leis gerais da genética do desenvolvimento.",
      "O bloqueio incondicional de qualquer apropriação de ferramentas simbólicas, impedindo o desenvolvimento cultural."
    ],
    correta: 1,
    explicacao: "Na criança sem deficiência, as linhas natural e cultural parecem coincidir. Na criança atípica, ocorre uma divergência óbvia porque as ferramentas da cultura padrão (livros visuais, instrumentos de mão, fala oral) não coincidem com suas funções biológicas comprometidas. A educação atua criando as pontes alternativas de desenvolvimento cultural adaptadas a esse corpo."
  },
  {
    id: 21,
    pergunta: "A que se refere a metáfora de Vygotsky de que 'a pedra que os construtores rejeitaram se tornou a pedra angular' no campo científico?",
    opcoes: [
      "Refere-se aos testes quantitativos de QI, que passaram a ditar de forma absoluta as diretrizes da educação inclusiva moderna.",
      "Refere-se à Defectologia (estudo das pessoas com deficiência) que, de uma área marginalizada e considerada de menor valor na psicologia, revelou contribuições inéditas para a compreensão da psique de todos os seres humanos.",
      "Refere-se ao modelo médico clássico, que reabilitou anatomicamente todos os casos de surdocegueira no século XX.",
      "Refere-se às práticas de segregação escolar que provaram ser úteis na consolidação do desenvolvimento cognitivo."
    ],
    correta: 1,
    explicacao: "Vygotsky defendia que o estudo das variações qualitativas e das anomalias do desenvolvimento humano (objeto da defectologia) revelou as leis subterrâneas das funções psíquicas superiores com uma nitidez impossível de se obter estudando apenas indivíduos típicos."
  },
  {
    id: 22,
    pergunta: "No seu primeiro texto compilado nos Fundamentos da Defectologia (1924), qual era a posição de Vygotsky em relação ao ensino de crianças cegas?",
    opcoes: [
      "Ele advogava que as crianças cegas deveriam ser completamente isoladas em escolas especiais para evitar tensões.",
      "Ele defendia a necessidade de 'educação conjunta' (escolas integradas de crianças cegas e videntes) como uma síntese dialética superior, combatendo o isolamento antissocial das escolas especiais.",
      "Ele considerava que as crianças cegas eram incapazes de ler e escrever mesmo por meios de caminhos alternativos.",
      "Ele sugeria que a educação geral de crianças videntes devia ser reduzida ao nível das limitações das crianças atípicas."
    ],
    correta: 1,
    explicacao: "Há mais de um século, Vygotsky já criticava o caráter segregador das escolas especiais, as quais criavam 'micromundos fechados' e isolados que impediam uma escolarização voltada à vida social. Ele via na educação conjunta o verdadeiro futuro do desenvolvimento e aprendizagem das crianças atípicas."
  },
  {
    id: 23,
    pergunta: "Por que Vygotsky aponta que o método oralista puro (baseado apenas no treino mecânico e rigoroso de articulação da fala) fracassava em desenvolver a comunicação social de estudantes surdos?",
    opcoes: [
      "Porque as pessoas surdas possuem o aparelho fonador biologicamente paralisado na ontogênese.",
      "Porque esse método coercitivo ignorava o potencial natural e a atração espontânea dos surdos pela linguagem de gestos e sinais, que surge da necessidade real de comunicação no meio coletivo.",
      "Porque o uso de sinais manuais exigia pouca atenção e enfraquecia as funções do intelecto prático.",
      "Porque os surdos preferiam ler por meio da escrita visual sem necessidade de interagir com as pessoas."
    ],
    correta: 1,
    explicacao: "Vygotsky apontava que tentar incutir a fala falada de forma puramente mecânica e artificial gerava frustração e isolamento social nos surdos. Os surdos criavam línguas de sinais de forma espontânea justamente para suprir o desejo de interagir, provando que a via de sinais é o caminho cultural correto de compensação."
  },
  {
    id: 24,
    pergunta: "Qual é a crítica de Vygotsky em relação ao 'ensino simplificado' ou à redução de materiais pedagógicos para estudantes com deficiência intelectual nas instituições de sua época?",
    opcoes: [
      "A crítica de que esses programas causavam excesso de fadiga neurológica devido ao grau avançado de raciocínio lógico exigido.",
      "A crítica de que, ao seguir a 'linha de menor resistência', limitando o currículo à visualização física e ao concreto, a escola especial bloqueava o acesso dos estudantes ao pensamento abstrato e inibia as possibilidades de desenvolvimento potencial.",
      "A crítica de que as escolas especiais deveriam adotar currículos universitários para crianças atípicas.",
      "A crítica de que os testes quantitativos de QI deveriam ser ampliados para ajustar as notas escolares de forma diária."
    ],
    correta: 1,
    explicacao: "Vygotsky argumentava que o estudante com deficiência intelectual necessita de recursos para estimular o pensamento conceitual abstrato, e não de um afunilamento pedagógico que o limite apenas ao pensamento intuitivo e concreto sob a justificativa de suas debilidades."
  },
  {
    id: 25,
    pergunta: "Por que o 'coletivo' (cooperação social) é apontado por Vygotsky como a principal fonte de superação das limitações das crianças atípicas?",
    opcoes: [
      "Porque no coletivo o comprometimento biológico desaparece de forma instantânea em virtude de pressões da herança genética.",
      "Porque as limitações do desenvolvimento individual são superadas pelas potencialidades sociais; no caso da deficiência visual, por exemplo, o pensamento coletivo e a cooperação com videntes é a fonte fundamental para compensar as consequências da cegueira.",
      "Porque as interações forçam o aluno atípico a realizar atividades de forma isolada e sem dependência de mediações externas.",
      "Porque as crianças com deficiência passam a competir fisicamente, neutralizando de forma biológica as alterações de seus órgãos."
    ],
    correta: 1,
    explicacao: "Vygotsky ressalta que 'aquilo que parece impossível para um, torna-se possível para dois'. Ao estimular o pensamento coletivo e as relações colaborativas, as consequências sociais negativas de uma deficiência são neutralizadas pelas vias infinitas da cultura e da linguagem."
  },
  {
    id: 26,
    pergunta: "Ao discutir os Fundamentos da Defectologia, Vygotsky enfatiza que, ao penetrar na cultura, a própria cultura humana:",
    opcoes: [
      "Mantém a condutiva da criança inalterada, permanecendo sob as leis exclusivas do crescimento biológico.",
      "Reelabora toda a conduta da criança, reorganizando de forma inteiramente nova o curso de seu pensamento e seu desenvolvimento natural.",
      "Provoca um atraso estrutural no desenvolvimento cognitivo devido à complexidade semiótica do meio social.",
      "Simplifica as funções psicológicas superiores, de modo a torná-las desprovidas de representações simbólicas."
    ],
    correta: 1,
    explicacao: "A apropriação de ferramentas semióticas (como a linguagem) não é um simples acréscimo de conhecimento; ela altera qualitativamente a arquitetura cerebral e o funcionamento psíquico, reestruturando as funções biológicas de comportamento do sujeito em formas superiores e históricas."
  }
];
