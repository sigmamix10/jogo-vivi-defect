/**
 * Banco de Dados de Conteúdo: Vygotsky e a Defectologia
 * Contém os flashcards principais e as questões estruturadas do Modo Desafio (Quiz).
 */

export const flashcardsData = [
  {
    id: 1,
    category: "Conceito Fundamental",
    titulo: "Defectologia Clássica vs. Moderna",
    frente: "Qual é a principal diferença de perspectiva entre a defectologia antiga e a defectologia moderna proposta por Vygotsky?",
    verso: "A defectologia antiga possuía um caráter negativo focado em medir as limitações neurológicas do sujeito de forma matemática através de testes de inteligência. A defectologia moderna adota um olhar positivo focado nos aspectos qualitativos e parte do princípio de que o estudante atípico se desenvolve de forma diferente e possui plenas potencialidades de aprendizagem.",
    emoji: "🧠",
    color: "#06b6d4"
  },
  {
    id: 2,
    category: "Processo Psíquico",
    titulo: "Compensação Social",
    frente: "De que maneira o conceito de compensação social reorienta a visão tradicional sobre as limitações biológicas?",
    verso: "A limitação orgânica não é apenas uma perda mas atua como um estímulo que desafia o cérebro e o psiquismo a buscarem caminhos adaptativos. Essa superação não se dá de maneira puramente biológica mas é mediada socialmente na relação do indivíduo com o meio cultural e com o uso de ferramentas sociais.",
    emoji: "🤝",
    color: "#8b5cf6"
  },
  {
    id: 3,
    category: "Estrutura do Defeito",
    titulo: "Complicações Primárias vs. Secundárias",
    frente: "No âmbito da defectologia histórico-cultural qual é a relação que se estabelece entre as complicações primárias e secundárias?",
    verso: "A complicação primária consiste na limitação orgânica ou fisiológica herdada ou adquirida pelo sujeito. A complicação secundária surge de maneira social quando a coletividade deixa de fornecer acessibilidade e meios de interação adequados para aquele corpo atípico criando desvantagens que dificultam o desenvolvimento psíquico.",
    emoji: "🔬",
    color: "#ec4899"
  },
  {
    id: 4,
    category: "Prática Educacional",
    titulo: "Caminhos Alternativos de Desenvolvimento",
    frente: "O que caracterizam os caminhos alternativos de desenvolvimento e como a escola deve conduzir esse processo?",
    verso: "São rotas pedagógicas estruturadas pela cultura para contornar barreiras biológicas de adaptação direta de modo que o estudante se aproprie dos conceitos escolares por outros canais sensoriais. O professor deve conhecer essas peculiaridades e assegurar pontes adaptadas como o sistema Braille para cegos e a língua de sinais para surdos.",
    emoji: "✨",
    color: "#f59e0b"
  },
  {
    id: 5,
    category: "Teoria do Aprendizado",
    titulo: "Zona de Desenvolvimento Proximal (ZDP)",
    frente: "Como a Zona de Desenvolvimento Proximal se aplica à dinâmica do aprendizado na educação especial?",
    verso: "Ela identifica o espaço entre o desenvolvimento consolidado com autonomia e o desenvolvimento potencial expressado com apoio de terceiros. A intervenção pedagógica deve focar nessa zona de capacidades em amadurecimento propondo desafios mediados que transformem o potencial futuro em aprendizado real.",
    emoji: "🎯",
    color: "#10b981"
  },
  {
    id: 6,
    category: "Conceito Teórico",
    titulo: "Aprendizagem Desenvolvimental (Obutchénie)",
    frente: "Qual é o sentido do conceito russo Obutchénie nos escritos de Vygotsky sobre o desenvolvimento humano?",
    verso: "Representa o processo ativo e intencional de ensino-aprendizagem de caráter desenvolvimental. Longe de ser um movimento espontâneo ou de apenas acompanhar a maturação biológica a única boa aprendizagem é aquela que se adianta ao desenvolvimento de modo a liderar e provocar saltos qualitativos no psiquismo superior.",
    emoji: "📖",
    color: "#3b82f6"
  },
  {
    id: 7,
    category: "Educação Social",
    titulo: "Educação Coletiva (Vospitanie)",
    frente: "O que representa o conceito russo Vospitanie e qual é o seu papel para os estudantes atípicos?",
    verso: "Traduz-se como a educação social e coletiva do sujeito em interação direta com as práticas da comunidade. No ensino especial esse conceito serve como o grande elemento mobilizador que retira o foco da deficiência e insere o estudante atípico em atividades cooperativas de trabalho sociedade e natureza.",
    emoji: "🌱",
    color: "#14b8a6"
  },
  {
    id: 8,
    category: "Dinâmica Social",
    titulo: "A Força Motriz do Coletivo Escolar",
    frente: "Por que o coletivo escolar é considerado por Vygotsky a principal força motriz para neutralizar barreiras da deficiência?",
    verso: "O convívio ativo com os colegas e o trabalho em cooperação social alteram a posição do sujeito no grupo. Essa mudança do papel de aluno impossível para estudante colaborador transforma o significado de suas ações e reorganiza qualitativamente a conduta do aluno uma vez que o que é inviável individualmente torna-se realizável no plano social.",
    emoji: "👥",
    color: "#a855f7"
  },
  {
    id: 9,
    category: "Crítica Pedagógica",
    titulo: "Superação do Ensino Simplificado",
    frente: "Por que Vygotsky criticava duramente a simplificação excessiva de conteúdos para estudantes com deficiência intelectual?",
    verso: "Seguir a linha de menor resistência restringindo o ensino à visualização direta e ao pensamento intuitivo e concreto bloqueia o acesso aos conhecimentos elaborados. O papel da escola é desafiar as capacidades criativas forçando o desenvolvimento do intelecto prático e estimulando o pensamento conceitual abstrato.",
    emoji: "💡",
    color: "#ef4444"
  },
  {
    id: 10,
    category: "Perspectiva Humana",
    titulo: "Autonomia na Vida Adulta Atípica",
    frente: "De que forma a teoria histórico-cultural contrapõe-se ao estigma que reduz a pessoa com deficiência intelectual à categoria de eterna criança?",
    verso: "A teoria rejeita essa visão normativa e infantilizadora de menoridade perene demonstrando que o desenvolvimento de autonomia e a visão crítica de si continuam ativos na vida adulta. Essa maturação é um processo dinâmico impulsionado por interações sociais acolhedoras e oportunidades de ressignificar a si e ao mundo.",
    emoji: "🌟",
    color: "#f97316"
  }
];

export const quizQuestions = [
  {
    id: 1,
    pergunta: "No pensamento de Vygotsky, a defectologia moderna supera a defectologia clássica ao propor uma nova compreensão sobre o desenvolvimento. Qual é o núcleo dessa diferença teórica?",
    opcoes: [
      "A defectologia clássica baseava-se em diagnósticos qualitativos do psiquismo, enquanto a moderna foca na aplicação estrita de testes de inteligência.",
      "A defectologia clássica adotava uma perspectiva biológica de menos-valia quantitativa, ao passo que a moderna foca no desenvolvimento qualitativamente diferente.",
      "A defectologia clássica defendia a inclusão escolar imediata, enquanto a moderna preconiza o isolamento em instituições médicas de reabilitação.",
      "A defectologia clássica investigava as leis do psiquismo normal, enquanto a moderna afirma que o psiquismo atípico obedece a leis inteiramente exclusivas."
    ],
    correta: 1,
    explicacao: "A defectologia clássica avaliava a deficiência de forma quantitativa e anatômica. Vygotsky demonstrou que a criança se desenvolve de maneira qualitativamente diferente, mas sob as mesmas leis gerais do psiquismo humano."
  },
  {
    id: 2,
    pergunta: "De acordo com a perspectiva histórico-cultural, como se caracteriza o processo de compensação social do sujeito com deficiência?",
    opcoes: [
      "Consiste em uma reabilitação biológica e espontânea do sistema nervoso afetado, que ocorre sem a necessidade de intervenção do ambiente externo.",
      "Configura-se como uma resposta mística do psiquismo que confere sentidos adicionais e capacidades extrassensoriais inatas aos indivíduos.",
      "Representa o movimento em que a limitação orgânica atua como estímulo para que o sujeito crie caminhos alternativos mediados pela cultura.",
      "Refere-se à oferta de auxílio financeiro por parte do Estado para suprir a incapacidade laborativa de sujeitos que possuem limitações."
    ],
    correta: 2,
    explicacao: "A limitação biológica atua como um estímulo que impulsiona o sujeito a buscar formas alternativas de desenvolvimento através da mediação social e cultural."
  },
  {
    id: 3,
    pergunta: "Vygotsky direcionou duras críticas às escolas especiais de sua época que promoviam o isolamento dos estudantes. Qual era o argumento central dessa crítica?",
    opcoes: [
      "O currículo dessas instituições exigia esforços intelectuais abstratos que excediam a capacidade cognitiva e o desenvolvimento das crianças.",
      "A organização dessas escolas criava um ambiente artificial e apartado do coletivo social, o que dificultava a preparação para a vida real.",
      "A infraestrutura das salas de aula integradas impedia que os professores aplicassem avaliações estáticas individuais de forma constante.",
      "O isolamento escolar reduz o tempo dedicado à reabilitação clínica e motora, que deveria ser a única prioridade no atendimento especial."
    ],
    correta: 1,
    explicacao: "Para Vygotsky, as escolas especiais de sua época criavam micromundos artificiais que apartavam o estudante do convívio social real, impedindo sua efetiva inserção e desenvolvimento."
  },
  {
    id: 4,
    pergunta: "No contexto da educação especial, como o professor deve trabalhar a partir do conceito de Zona de Desenvolvimento Proximal?",
    opcoes: [
      "Propondo tarefas de fácil execução que o estudante já realiza com autonomia para consolidar o desenvolvimento que já está consolidado.",
      "Limitando as intervenções pedagógicas ao nível de desenvolvimento real determinado previamente pelo diagnóstico clínico do sujeito.",
      "Focando nas funções intelectuais que ainda não amadureceram por meio de atividades mediadas nas quais o aluno conta com o apoio de terceiros.",
      "Evitando desafios cognitivos complexos que demandem a colaboração de colegas de sala de aula de modo a resguardar o aluno de tensões."
    ],
    correta: 2,
    explicacao: "O professor deve atuar na área de desenvolvimento proximal, focando no potencial de aprendizagem que a criança consegue expressar quando recebe ajuda mediada."
  },
  {
    id: 5,
    pergunta: "Vygotsky defende o uso de caminhos alternativos de desenvolvimento na educação de pessoas com deficiência sensorial. Qual das seguintes alternativas apresenta uma aplicação correta dessa tese?",
    opcoes: [
      "O ensino mecânico e forçado da fala oralizada para estudantes surdos para assegurar a correspondência imediata com a via de audição natural.",
      "O uso do sistema Braille e da leitura tátil para pessoas com deficiência visual para substituir o canal óptico por uma via cultural funcional.",
      "A simplificação radical das atividades de leitura para estudantes com baixa visão com o objetivo de evitar o desgaste das funções superiores.",
      "A substituição de ferramentas semióticas por intervenções médicas contínuas para restaurar a integridade biológica do órgão comprometido."
    ],
    correta: 1,
    explicacao: "A leitura por vias táteis como o Braille exemplifica como a cultura consegue contornar barreiras biológicas de forma eficiente por meio de signos alternativos."
  },
  {
    id: 6,
    pergunta: "Como deve ser planejada a educação do estudante com deficiência intelectual sob a ótica histórico-cultural?",
    opcoes: [
      "Centrando as ações pedagógicas no desenvolvimento do intelecto prático e adaptando de forma qualitativa as tarefas sem rotular o sujeito.",
      "Utilizando testes psicométricos contínuos de quociente de inteligência para ajustar o conteúdo curricular ao nível de inteligência medido.",
      "Reduzindo as metas curriculares ao ensino de habilidades manuais repetitivas para que o aluno não enfrente conteúdos de natureza abstrata.",
      "Adotando práticas de ensino idênticas às aplicadas a crianças sem deficiência uma vez que os processos compensatórios operam sem variações."
    ],
    correta: 0,
    explicacao: "Em vez de limitar o currículo e rotular o aluno a partir de diagnósticos quantitativos, a escola deve desenvolver as potencialidades qualitativas e o raciocínio prático do sujeito."
  },
  {
    id: 7,
    pergunta: "O Modelo Social da Deficiência estabelece uma distinção conceitual importante. Qual é a correta definição das categorias de impedimento e deficiência?",
    opcoes: [
      "Impedimento refere-se ao transtorno de ordem social; deficiência diz respeito à limitação biológica reversível por intervenção médica.",
      "Impedimento consiste na característica física ou sensorial do corpo do sujeito; deficiência representa as barreiras sociais que excluem esse corpo.",
      "Impedimento e deficiência são sinônimos formais utilizados pela psicologia comportamental para classificar o grau de dependência do indivíduo.",
      "Impedimento indica a necessidade de internação do sujeito em asilo; deficiência aponta para a ausência de recursos econômicos estáveis."
    ],
    correta: 1,
    explicacao: "O Modelo Social propõe que o corpo possui impedimentos biológicos, mas é a sociedade que gera a deficiência ao erguer barreiras físicas e sociais de exclusão."
  },
  {
    id: 8,
    pergunta: "A Defectologia de Vygotsky e o Modelo Social da Deficiência compartilham de uma mesma base metodológica de análise. Qual é essa corrente epistemológica?",
    opcoes: [
      "O positivismo lógico que busca quantificar as anomalias biológicas por meio de dados experimentais.",
      "O idealismo subjetivo focado na percepção individual e espiritual que o sujeito possui de sua própria limitação.",
      "O materialismo histórico-dialético que compreende a deficiência como uma produção construída nas relações sociais.",
      "O evolucionismo darwinista focado na adaptação orgânica espontânea dos corpos ao meio ambiente físico."
    ],
    correta: 2,
    explicacao: "Ambas as correntes partilham da matriz dialética materialista, analisando o desenvolvimento humano e as restrições sociais como fenômenos históricos construídos socialmente."
  },
  {
    id: 9,
    pergunta: "Na defectologia histórico-cultural, qual é a relação que se estabelece entre as complicações primárias e as complicações secundárias?",
    opcoes: [
      "As primárias atingem o psiquismo de crianças com diagnóstico médico tardio; as secundárias instalam-se na vida de pessoas com lesões congênitas.",
      "As primárias decorrem das limitações orgânicas do sujeito; as secundárias surgem das barreiras impostas por um meio social inacessível à sua diferença.",
      "As primárias correspondem aos comprometimentos de locomoção; as secundárias abrangem as dificuldades decorrentes de quadros visuais.",
      "As primárias representam as alterações genéticas identificadas clinicamente; as secundárias dizem respeito às terapias físicas recomendadas."
    ],
    correta: 1,
    explicacao: "O defeito primário é biológico (fisiologia). O defeito secundário é social e cultural, surgindo das dificuldades de interação e inclusão social impostas ao sujeito atípico."
  },
  {
    id: 10,
    pergunta: "Apesar de compartilharem da distinção entre o biológico e o social, em qual aspecto a Defectologia de Vygotsky e o Modelo Social da Deficiência diferem quanto ao seu foco principal?",
    opcoes: [
      "Vygotsky defendia que o desenvolvimento atípico depende do isolamento em clínicas, enquanto o Modelo Social priorizava a reabilitação doméstica.",
      "O Modelo Social direciona o foco para as transformações políticas e externas; Vygotsky foca no desenvolvimento subjetivo e na reconstrução do psiquismo.",
      "Vygotsky buscava a cura biológica do defeito por meio de medicamentos; o Modelo Social rejeita toda e qualquer forma de intervenção educacional.",
      "O Modelo Social investiga as leis universais do desenvolvimento neurológico infantil; Vygotsky centrava suas investigações na quantificação escolar."
    ],
    correta: 1,
    explicacao: "O Modelo Social possui caráter militante de reivindicação política de direitos, enquanto Vygotsky se aprofunda na dimensão subjetiva de reorganização psíquica por meio de signos."
  },
  {
    id: 11,
    pergunta: "Qual é a crítica que a perspectiva histórico-cultural faz à forma como a sociedade tradicionalmente enxerga o desenvolvimento de adultos com deficiência intelectual?",
    opcoes: [
      "A crítica ao uso inadequado de cronogramas que aceleram o processo de escolarização formal sem respeitar a maturidade biológica desses sujeitos.",
      "A crítica à tendência generalizada de reduzi-los à condição de eternas crianças, o que limita suas oportunidades de desenvolver autonomia.",
      "A crítica de que a plasticidade cerebral cessa na infância, impedindo o desenvolvimento de novas funções psicológicas superiores na maturidade.",
      "A crítica de que esses indivíduos devem permanecer sob tutela familiar constante de forma a evitar o engajamento em atividades laborativas."
    ],
    correta: 1,
    explicacao: "A abordagem histórico-cultural contrapõe-se ao estigma infantilizador de 'menoridade perene', apontando que o adulto com deficiência intelectual tem possibilidades plenas de maturação e autonomia."
  },
  {
    id: 12,
    pergunta: "No arcabouço conceitual da defectologia histórico-cultural, a palavra russa Obutchénie é traduzida e compreendida como:",
    opcoes: [
      "Um processo mecânico de memorização de estímulos visuais que atua de forma isolada na mente do estudante com limitações intelectuais.",
      "Um processo integrado de ensino-aprendizagem que atua de forma intempestiva e provoca o retrocesso do desenvolvimento intelectual do aluno.",
      "O processo de ensino-aprendizagem de caráter desenvolvimental que atua na ZDP e impulsiona o desenvolvimento de funções psíquicas superiores.",
      "Um diagnóstico clínico estático que define os limites biológicos imutáveis do desenvolvimento cognitivo da criança que apresenta alterações orgânicas."
    ],
    correta: 2,
    explicacao: "Obutchénie traduz o processo interativo e intencional de ensino-aprendizagem, que atua como o grande motor que puxa e orienta o desenvolvimento psíquico."
  },
  {
    id: 13,
    pergunta: "No contexto dos Fundamentos da Defectologia, qual significado o conceito russo de Vospitanie assume na teoria de Vygotsky?",
    opcoes: [
      "Educação no sentido social e cultural amplo, que atua como o principal motor para a inserção ativa do sujeito com deficiência nas práticas coletivas.",
      "Treinamento fisiológico voltado à correção mecânica de órgãos afetados de forma a restabelecer a integridade anatomofuncional do sujeito.",
      "Acompanhamento familiar privado e asilamento preventivo do aluno atípico para protegê-lo dos desafios gerados pela convivência social comum.",
      "Avaliação sistemática de padrões comportamentais por meio da aplicação de testes psicométricos normativos de quociente de inteligência."
    ],
    correta: 0,
    explicacao: "Vospitanie denota a Educação social em âmbito coletivo, que desafia e conduz o sujeito a apropriar-se dos bens culturais para superar suas limitações biológicas."
  },
  {
    id: 14,
    pergunta: "Qual tese traduz a relação entre o ensino desenvolvimental e o desenvolvimento psíquico na teoria de Vygotsky?",
    opcoes: [
      "O ensino deve acompanhar passivamente o desenvolvimento natural já maduro para evitar sobrecarregar o psiquismo da criança atípica com desafios.",
      "O ensino e o desenvolvimento ocorrem de maneira independente, de modo que o aprendizado escolar não interfere na estrutura neurológica do sujeito.",
      "O bom ensino é aquele que se adianta ao desenvolvimento, atuando na zona de desenvolvimento proximal das funções psíquicas em maturação.",
      "O ensino biológico direto altera a programação genética do sujeito e remove o impedimento orgânico de forma definitiva e permanente."
    ],
    correta: 2,
    explicacao: "Para Vygotsky, o aprendizado impulsiona e reestrutura o desenvolvimento cognitivo quando atua de forma prospectiva, focando nas capacidades que estão se formando."
  },
  {
    id: 15,
    pergunta: "Vygotsky rejeitou as interpretações místicas sobre o desenvolvimento de pessoas com deficiência sensorial que circulavam no início do século XX. Qual era o argumento científico do autor?",
    opcoes: [
      "O desenvolvimento dessas pessoas obedece às leis biológicas da seleção natural que eliminam paulatinamente as limitações por mutação direta.",
      "A compensação de uma deficiência não decorre de dons naturais ou forças sobrenaturais, mas sim da apropriação ativa de signos e ferramentas sociais.",
      "A perda de um órgão sensorial é reparada de forma espontânea pelo sistema nervoso sem necessidade de mediações do ambiente físico.",
      "O desenvolvimento dessas pessoas depende exclusivamente de técnicas de hipnose clínica para desbloquear as funções cognitivas afetadas pela deficiência."
    ],
    correta: 1,
    explicacao: "Vygotsky desmistificou o desenvolvimento atípico ao demonstrar que a compensação não é um dom místico ou biológico intrínseco, mas sim construída na interação social mediada."
  },
  {
    id: 16,
    pergunta: "Por qual razão teórica Vygotsky apresentava restrições às propostas tradicionais de educação compensatória adotadas em países ocidentais de sua época?",
    opcoes: [
      "Ele considerava que os métodos ocidentais exigiam recursos industriais incompatíveis com a estrutura econômica soviética de seu período histórico.",
      "Ele refutava a ênfase na cooperação coletiva dessas abordagens, defendendo que a compensação psíquica deveria ocorrer por meio de terapia individual.",
      "Ele criticava o caráter assistencial dessas propostas, que tratavam o aluno como inválido, em vez de focar na sua inserção social e cultural ativa.",
      "Ele se opunha ao uso de sistemas táteis de leitura nas salas de aula ocidentais por entender que a linguagem oral deveria ser a única via de escolarização."
    ],
    correta: 2,
    explicacao: "A educação não deve ser um ato filantrópico ou de caridade assistencialista, mas sim um processo ativo de inserção e apropriação cultural das ferramentas sociais."
  },
  {
    id: 17,
    pergunta: "Vygotsky dialogou com a teoria da compensação de Alfred Adler, mas promoveu um avanço crítico importante em relação a ela. Qual foi esse avanço?",
    opcoes: [
      "Ele desconsiderou os processos psicológicos subjetivos da compensação de modo a reabilitar os diagnósticos puramente biológicos da defectologia antiga.",
      "Ele deslocou a força motriz da compensação, que em Adler focava nos sentimentos subjetivos de inferioridade, para as oportunidades de caráter social.",
      "Ele rejeitou a tese de Adler de que as brincadeiras coletivas atuam como estimuladoras do desenvolvimento de funções psíquicas complexas na infância.",
      "Ele adotou de forma irrestrita a metodologia de testes psicométricos de Adler para estabelecer o quociente de inteligência como guia da educação."
    ],
    correta: 1,
    explicacao: "Enquanto Adler centrava a compensação no sentimento de inferioridade e no esforço psíquico subjetivo, Vygotsky redirecionou o conceito para o papel objetivo do coletivo e das práticas mediadas."
  },
  {
    id: 18,
    pergunta: "A pesquisa contemporânea fundamentada em Vygotsky demonstra como as mediações pedagógicas alteram a conduta do estudante com deficiência. Qual princípio da teoria é ilustrado pela mudança de atuação do aluno no coletivo?",
    opcoes: [
      "O princípio de que a exclusão temporária do estudante do ambiente escolar é necessária para que ele reorganize de forma individual o seu psiquismo.",
      "O princípio de que a mudança na posição social que o sujeito ocupa na dinâmica coletiva reconstrói as suas funções psicológicas e sua conduta.",
      "O princípio de que o treinamento mecânico de movimentos repetitivos é suficiente para superar as dificuldades do desenvolvimento cognitivo.",
      "O princípio de que o diagnóstico médico estático deve determinar previamente o tipo de atividade que o estudante pode ou não realizar em sala."
    ],
    correta: 1,
    explicacao: "O estudo de caso demonstra que alterar a posição e o papel social do estudante (ex: integrá-lo de forma ativa a tarefas coletivas) é constitutivo do seu psiquismo e reorganiza sua atitude."
  },
  {
    id: 19,
    pergunta: "Vygotsky utiliza a lei da dificuldade de tomada de consciência para explicar a emergência de processos de compensação psíquica. Qual é esse princípio?",
    opcoes: [
      "O psiquismo humano desenvolve formas superiores de pensamento de modo espontâneo, sem que haja necessidade de interações ou obstáculos externos.",
      "O obstáculo ao caminho direto de adaptação biológica atua como um estímulo que impulsiona o sujeito a buscar vias alternativas mediadas pela cultura.",
      "O estudante com limitações cognitivas apresenta dificuldades permanentes em tomar consciência de suas próprias ações físicas e reflexas habituais.",
      "O desenvolvimento psíquico progride sem tensões ou contradições quando o ambiente escolar simplifica as atividades de leitura e de escrita abstrata."
    ],
    correta: 1,
    explicacao: "Inspirando-se em Claparède, Vygotsky explica que a impossibilidade de adaptação por uma via direta (lesão orgânica) provoca a tomada de consciência e o desenvolvimento de caminhos alternativos."
  },
  {
    id: 20,
    pergunta: "Por que o desenvolvimento da criança com deficiência evidencia uma divergência nítida entre as linhas de desenvolvimento natural e cultural?",
    opcoes: [
      "Porque a evolução biológica de seu organismo ocorre em ritmo acelerado em comparação com a apropriação dos instrumentos de comunicação da sociedade.",
      "Porque os artefatos culturais e as ferramentas da sociedade são historicamente desenhados para corpos com uma organização típica.",
      "Porque a limitação orgânica impede de forma absoluta e irrestrita qualquer apropriação de signos e ferramentas da cultura humana.",
      "Porque as linhas de desenvolvimento natural e cultural se fundem de forma harmoniosa e sem tensões em sujeitos que possuem limitações motoras."
    ],
    correta: 1,
    explicacao: "A divergência ocorre porque as criações culturais da sociedade (fala, livros, ferramentas) pressupõem órgãos e sentidos típicos. Cabe à educação especial projetar caminhos alternativos adaptados."
  },
  {
    id: 21,
    pergunta: "Vygotsky recorre à metáfora de que a pedra rejeitada pelos construtores se tornou a pedra angular para descrever a relevância científica da defectologia. Qual o sentido dessa analogia?",
    opcoes: [
      "O avanço do modelo médico tradicional que conseguiu corrigir as limitações fisiológicas das pessoas atípicas no início do século passado.",
      "O estudo do desenvolvimento atípico e de suas compensações que revelou as leis que regem o funcionamento psicológico de todos os seres humanos.",
      "A aplicação de testes psicométricos de quociente de inteligência que se tornaram a ferramenta norteadora de todas as escolas regulares modernas.",
      "A consolidação de escolas especiais de caráter segregador como a principal referência para o desenvolvimento de teorias sobre a aprendizagem."
    ],
    correta: 1,
    explicacao: "Estudar o desenvolvimento atípico não é um ramo marginal, mas sim uma via privilegiada para desvelar a dinâmica profunda e as potencialidades do psiquismo humano geral."
  },
  {
    id: 22,
    pergunta: "Em suas formulações iniciais nos anos 1920, Vygotsky apresentou propostas inovadoras para a escolarização de crianças cegas. Qual era a sua tese central?",
    opcoes: [
      "Elas deveriam ser educadas de forma conjunta com crianças videntes em escolas integradas de modo a combater o isolamento social.",
      "Elas precisavam ser mantidas em salas de aula exclusivas e separadas para evitar que tivessem contato com materiais de alta complexidade abstrata.",
      "Elas eram incapazes de acessar a linguagem escrita e de desenvolver o pensamento abstrato devido à ausência de correspondência visual.",
      "Elas deveriam ser submetidas a tratamentos de caráter cirúrgico nas dependências escolares antes de iniciarem a aprendizagem formal."
    ],
    correta: 0,
    explicacao: "Vygotsky já propunha a educação integrada (conjunta) na década de 1920, sustentando que o isolamento das escolas especiais prejudicava o desenvolvimento social e cultural do estudante cego."
  },
  {
    id: 23,
    pergunta: "Qual era a crítica de Vygotsky em relação à adoção exclusiva do método oralista puro na educação de estudantes com deficiência auditiva?",
    opcoes: [
      "O método falhava ao exigir uma articulação fonadora que as pessoas surdas têm biologicamente impedida de realizar de forma absoluta.",
      "O método ignorava o potencial comunicativo e a necessidade social que os surdos encontram no uso espontâneo de linguagens de sinais.",
      "O método sobrecarregava as funções motoras manuais ao focar em dinâmicas de leitura de lábios em detrimento do ensino de disciplinas científicas.",
      "O método acelerava o processo de socialização em demasia, o que impedia o aluno de desenvolver o seu intelecto prático de forma isolada."
    ],
    correta: 1,
    explicacao: "Tentar forçar a oralização exclusiva gerava prejuízos de socialização e isolamento. Vygotsky defendeu que as línguas de sinais são as verdadeiras vias naturais e linguísticas de compensação da surdez."
  },
  {
    id: 24,
    pergunta: "Vygotsky criticava o ensino simplificado que limitava o currículo de estudantes com deficiência intelectual ao uso do concreto. Qual o fundamento dessa crítica?",
    opcoes: [
      "Essa redução curricular provocava fadiga cognitiva desnecessária por focar na memorização de conceitos complexos de física e matemática.",
      "Essa simplificação inibia o desenvolvimento do pensamento abstrato ao conduzir o ensino pela linha de menor resistência.",
      "Essa abordagem impedia o professor de aplicar testes psicométricos estáticos de quociente de inteligência de forma diária em sala de aula.",
      "Essa prática gerava um distanciamento das atividades manuais que deveriam ser a única meta educativa viável para estudantes com atraso."
    ],
    correta: 1,
    explicacao: "Em vez de restringir a criança com deficiência intelectual ao pensamento estritamente visual e concreto, o papel do ensino é justamente estimular e forjar as vias do pensamento conceitual abstrato."
  },
  {
    id: 25,
    pergunta: "Por que a cooperação social e as atividades coletivas são apontadas por Vygotsky como a principal fonte de superação das limitações individuais?",
    opcoes: [
      "Porque as interações forçam o organismo a corrigir biologicamente a lesão anatomofuncional por meio da ativação de genes latentes de regeneração.",
      "Porque a cooperação compensa a limitação individual ao possibilitar que o sujeito atípico se aproprie do patrimônio cultural coletivo.",
      "Porque o ambiente coletivo induz o aluno a realizar tarefas de maneira autônoma e sem necessidade de ferramentas de mediação de outros sujeitos.",
      "Porque o convívio em grupo estimula a competição de força física, o que anula os efeitos sociais negativos decorrentes de debilidades."
    ],
    correta: 1,
    explicacao: "A dinâmica coletiva serve como ponte: a falta do recurso biológico individual em uma pessoa atípica é compensada socialmente através de ferramentas partilhadas e linguagens no trabalho conjunto."
  },
  {
    id: 26,
    pergunta: "Qual é o efeito que a apropriação dos instrumentos de cultura exerce sobre o psiquismo da criança que apresenta comprometimentos orgânicos?",
    opcoes: [
      "Mantém o curso de seu pensamento sob o controle exclusivo das leis biológicas do crescimento sem alterar sua conduta ou seu reflexo motor.",
      "Reelabora a sua conduta de maneira qualitativa e reorganiza todo o funcionamento psíquico em estruturas complexas de pensamento mediado.",
      "Atrasa o desenvolvimento de habilidades intelectuais básicas devido ao acúmulo excessivo de regras gramaticais e de códigos de linguagem abstratos.",
      "Reduz as funções psicológicas superiores a reações reflexas elementares que facilitam a adaptação passiva ao ambiente social estático."
    ],
    correta: 1,
    explicacao: "A imersão cultural reestrutura o sistema neurológico e psíquico da criança de forma qualitativa, permitindo que processos cognitivos superiores compensem limitações puramente orgânicas."
  }
];
