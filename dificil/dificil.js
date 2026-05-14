const perguntasDificeis = [
    {
        q: "Sobre a ODS 2, assinale a alternativa mais correta:",
        options: [
            "A ODS 2 busca acabar com a fome, alcançar segurança alimentar, melhorar a nutrição e promover agricultura sustentável.",
            "A ODS 2 busca reduzir a fome, aumentar a produção agrícola e garantir distribuição emergencial de alimentos.",
            "A ODS 2 busca acabar com a fome, ampliar a produção de alimentos e priorizar a exportação agrícola.",
            "A ODS 2 busca garantir segurança alimentar por meio do aumento da produtividade e da oferta de alimentos."
        ],
        correct: 0,
        explanation: "A formulação mais completa da ODS 2 inclui fome zero, segurança alimentar, melhoria da nutrição e agricultura sustentável."
    },
    {
        q: "Verdadeiro ou falso: Segurança alimentar significa apenas ter comida suficiente em quantidade.",
        options: [
            "Falso, porque também envolve qualidade, regularidade, acesso e adequação nutricional.",
            "Verdadeiro, porque a principal dimensão da segurança alimentar é a quantidade de alimentos.",
            "Falso, porque segurança alimentar se refere apenas à produção agrícola sustentável.",
            "Verdadeiro, desde que a quantidade de comida seja suficiente para evitar fome."
        ],
        correct: 0,
        explanation: "Segurança alimentar não é só quantidade. Também envolve acesso regular, qualidade nutricional, estabilidade e adequação."
    },
    {
        q: "Qual alternativa define melhor insegurança alimentar leve?",
        options: [
            "Preocupação ou incerteza quanto ao acesso futuro aos alimentos, sem necessariamente reduzir a alimentação.",
            "Redução clara da quantidade de alimentos consumidos por falta de recursos financeiros.",
            "Privação alimentar intensa, com episódios de fome e ausência de refeições.",
            "Consumo diário de alimentos, mas apenas de alimentos industrializados."
        ],
        correct: 0,
        explanation: "Na insegurança alimentar leve, a principal característica é a preocupação ou incerteza sobre o acesso futuro aos alimentos."
    },
    {
        q: "Qual alternativa define melhor insegurança alimentar moderada?",
        options: [
            "Comprometimento da qualidade ou quantidade dos alimentos por falta de recursos.",
            "Preocupação com a possibilidade futura de faltar comida, sem alteração na dieta.",
            "Falta total de alimentos por vários dias consecutivos.",
            "Escolha voluntária por uma alimentação menos variada."
        ],
        correct: 0,
        explanation: "Na insegurança alimentar moderada, a alimentação já é afetada em qualidade ou quantidade."
    },
    {
        q: "Qual alternativa define melhor insegurança alimentar grave?",
        options: [
            "Privação alimentar real, podendo envolver fome e falta de refeições.",
            "Dificuldade de manter alimentos saudáveis, mas sem redução da quantidade.",
            "Preocupação com o preço dos alimentos, sem mudança no consumo.",
            "Consumo frequente de alimentos com baixo valor nutricional."
        ],
        correct: 0,
        explanation: "A insegurança alimentar grave envolve privação concreta, podendo levar a episódios de fome."
    },
    {
        q: "Verdadeiro ou falso: Um país pode produzir alimentos suficientes e ainda ter população em situação de fome.",
        options: [
            "Verdadeiro, porque a fome também depende de renda, acesso, distribuição e desigualdade.",
            "Falso, porque se há produção suficiente, a fome deixa de existir automaticamente.",
            "Verdadeiro, mas apenas quando não há agricultura familiar no país.",
            "Falso, porque a fome é sempre causada por baixa produção agrícola."
        ],
        correct: 0,
        explanation: "A produção de alimentos não garante acesso. Pessoas podem passar fome por falta de renda, preços altos ou má distribuição."
    },
    {
        q: "Qual alternativa diferencia melhor disponibilidade e acesso aos alimentos?",
        options: [
            "Disponibilidade é a existência de alimentos; acesso é a possibilidade real de obtê-los.",
            "Disponibilidade é a renda familiar; acesso é a quantidade de alimentos produzida.",
            "Disponibilidade é a qualidade nutricional; acesso é a variedade alimentar.",
            "Disponibilidade é o consumo diário; acesso é a produção sustentável."
        ],
        correct: 0,
        explanation: "Disponibilidade indica que o alimento existe. Acesso indica que as pessoas conseguem obtê-lo de fato."
    },
    {
        q: "Qual alternativa define melhor estabilidade na segurança alimentar?",
        options: [
            "Manutenção do acesso a alimentos adequados ao longo do tempo, inclusive diante de crises.",
            "Aumento da produção agrícola durante períodos de safra.",
            "Presença de alimentos variados em mercados de grandes cidades."
        ],
        correct: 0,
        explanation: "Estabilidade significa que o acesso aos alimentos precisa ser contínuo, e não apenas momentâneo."
    },
    {
        q: "Verdadeiro ou falso: A fome pode ser resolvida apenas com aumento da produtividade agrícola.",
        options: [
            "Falso, porque produtividade não garante acesso, renda, distribuição nem qualidade nutricional.",
            "Verdadeiro, porque maior produção reduz automaticamente os preços e elimina a fome.",
            "Falso, porque produtividade agrícola não tem relação com segurança alimentar.",
            "Verdadeiro, desde que a produção seja feita em larga escala."
        ],
        correct: 0,
        explanation: "Aumentar a produtividade pode ajudar, mas não resolve a fome sozinho. O problema também envolve acesso e desigualdade."
    },
    {
        q: "Qual alternativa define melhor soberania alimentar?",
        options: [
            "Direito dos povos de decidir seus próprios sistemas de produção, distribuição e consumo de alimentos.",
            "Garantia de que todas as pessoas consumam alimentos suficientes em calorias.",
            "Capacidade de um país importar alimentos quando sua produção nacional é baixa.",
            "Estratégia de aumentar estoques de alimentos para enfrentar crises futuras."
        ],
        correct: 0,
        explanation: "Soberania alimentar envolve autonomia dos povos sobre seus sistemas alimentares, não apenas acesso à comida."
    },
    {
        q: "Qual alternativa apresenta a diferença mais precisa entre segurança alimentar e soberania alimentar?",
        options: [
            "Segurança alimentar foca no acesso adequado aos alimentos; soberania alimentar foca também na autonomia sobre o sistema alimentar.",
            "Segurança alimentar trata de produção local; soberania alimentar trata de distribuição internacional.",
            "Segurança alimentar envolve apenas quantidade; soberania alimentar envolve apenas qualidade.",
            "Segurança alimentar depende da agricultura familiar; soberania alimentar depende da produção industrial."
        ],
        correct: 0,
        explanation: "Segurança alimentar está ligada ao acesso. Soberania alimentar acrescenta a dimensão política e cultural da autonomia."
    },
    {
        q: "Qual alternativa define melhor agricultura sustentável no contexto da ODS 2?",
        options: [
            "Produção agrícola que mantém produtividade, preserva recursos naturais e fortalece condições sociais no campo.",
            "Produção agrícola que aumenta safras com menor custo e maior eficiência tecnológica.",
            "Produção agrícola que prioriza alimentos orgânicos e elimina o uso de qualquer tecnologia.",
            "Produção agrícola que reduz impactos ambientais mesmo que diminua permanentemente o acesso a alimentos."
        ],
        correct: 0,
        explanation: "Agricultura sustentável equilibra produção, preservação ambiental e condições sociais."
    },
    {
        q: "Verdadeiro ou falso: Agricultura sustentável significa produzir menos alimentos para preservar mais o meio ambiente.",
        options: [
            "Falso, porque busca produzir de forma responsável, mantendo recursos naturais e segurança alimentar.",
            "Verdadeiro, porque a sustentabilidade exige reduzir a produção agrícola.",
            "Falso, porque agricultura sustentável significa apenas usar tecnologia no campo.",
            "Verdadeiro, desde que a produção restante seja destinada ao consumo local."
        ],
        correct: 0,
        explanation: "Agricultura sustentável não significa parar ou reduzir a produção, mas produzir sem comprometer o futuro."
    },
    {
        q: "Qual alternativa melhor explica o papel da agricultura familiar na ODS 2?",
        options: [
            "Contribui para abastecimento local, diversidade alimentar, renda no campo e fortalecimento de comunidades.",
            "É responsável apenas por alimentos de subsistência, sem impacto relevante no abastecimento.",
            "Substitui a necessidade de políticas públicas de segurança alimentar.",
            "Tem importância principalmente quando está voltada à exportação de alimentos."
        ],
        correct: 0,
        explanation: "A agricultura familiar pode fortalecer mercados locais, gerar renda e ampliar a diversidade de alimentos."
    },
    {
        q: "Qual alternativa define melhor sistema alimentar sustentável?",
        options: [
            "Sistema que considera produção, transporte, acesso, consumo, nutrição, desperdício e impactos ambientais.",
            "Sistema que aumenta a produção agrícola e reduz o preço final dos alimentos.",
            "Sistema que prioriza alimentos naturais e reduz totalmente alimentos processados."
        ],
        correct: 0,
        explanation: "Sistema alimentar sustentável envolve toda a cadeia alimentar, não apenas a produção."
    },
    {
        q: "Verdadeiro ou falso: A má nutrição pode ocorrer mesmo quando uma pessoa consome calorias suficientes.",
        options: [
            "Verdadeiro, porque pode haver excesso de calorias e falta de nutrientes essenciais.",
            "Falso, porque consumir calorias suficientes impede qualquer forma de má nutrição.",
            "Verdadeiro, mas apenas quando a pessoa vive em área rural.",
            "Falso, porque má nutrição é sinônimo exclusivo de fome."
        ],
        correct: 0,
        explanation: "Má nutrição inclui desnutrição, deficiência de micronutrientes e excesso de peso com baixa qualidade alimentar."
    },
    {
        q: "Qual alternativa define melhor dupla carga da má nutrição?",
        options: [
            "Convivência de desnutrição, deficiências nutricionais e excesso de peso em uma mesma população.",
            "Presença simultânea de fome grave e ausência total de produção agrícola.",
            "Combinação entre baixa renda familiar e aumento da produção de alimentos.",
            "Situação em que uma pessoa come pouco durante o dia e muito à noite."
        ],
        correct: 0,
        explanation: "A dupla carga ocorre quando diferentes formas de má nutrição coexistem, como desnutrição e obesidade."
    },
    {
        q: "Qual alternativa explica melhor a relação entre ultraprocessados e má nutrição?",
        options: [
            "Podem fornecer muitas calorias, mas poucos nutrientes essenciais quando consumidos em excesso.",
            "São sempre a principal causa direta da fome em populações vulneráveis.",
            "São nutricionalmente inadequados apenas quando têm alto preço.",
            "Substituem alimentos frescos sem alterar a qualidade nutricional da dieta."
        ],
        correct: 0,
        explanation: "Ultraprocessados podem contribuir para dietas pobres em nutrientes e ricas em açúcar, sódio e gorduras."
    },
    {
        q: "Qual alternativa diferencia melhor perda e desperdício de alimentos?",
        options: [
            "Perda ocorre mais antes do consumo final; desperdício ocorre mais no varejo, preparo ou consumo.",
            "Perda ocorre quando o alimento é jogado fora em casa; desperdício ocorre na colheita.",
            "Perda envolve alimentos estragados; desperdício envolve apenas alimentos vencidos.",
            "Perda e desperdício são termos iguais, usados para qualquer descarte de comida."
        ],
        correct: 0,
        explanation: "Perdas costumam ocorrer na produção, armazenamento e transporte. Desperdício ocorre mais próximo do consumidor final."
    },
    {
        q: "Qual situação representa melhor perda de alimentos?",
        options: [
            "Frutas estragam no transporte por falta de refrigeração adequada.",
            "Uma família descarta comida pronta que sobrou no prato.",
            "Um restaurante joga fora refeições preparadas em excesso.",
            "Um mercado descarta produtos ainda próprios para consumo por aparência."
        ],
        correct: 0,
        explanation: "Perda ocorre antes do alimento chegar ao consumidor final, como no transporte e armazenamento."
    },
    {
        q: "Qual situação representa melhor desperdício de alimentos?",
        options: [
            "Alimentos comprados em excesso vencem na casa do consumidor.",
            "Parte da colheita é perdida por falta de armazenamento.",
            "Grãos estragam durante transporte inadequado.",
            "Hortaliças são danificadas antes de chegar ao mercado."
        ],
        correct: 0,
        explanation: "Desperdício acontece principalmente na etapa de venda, preparo ou consumo."
    },
    {
        q: "Verdadeiro ou falso: Reduzir desperdício ajuda a ODS 2, mas não substitui políticas de renda e acesso.",
        options: [
            "Verdadeiro, porque desperdício é parte do problema, mas fome também envolve desigualdade e pobreza.",
            "Falso, porque reduzir desperdício elimina totalmente a fome.",
            "Verdadeiro, mas apenas em países com baixa produção agrícola.",
            "Falso, porque desperdício não tem relação com segurança alimentar."
        ],
        correct: 0,
        explanation: "Reduzir desperdício é importante, mas não resolve sozinho as causas estruturais da fome."
    },
    {
        q: "Qual alternativa explica melhor como mudanças climáticas afetam a ODS 2?",
        options: [
            "Podem afetar produção, preços, transporte, renda agrícola e estabilidade do acesso aos alimentos.",
            "Afetam apenas a produção no campo, sem impacto no preço final dos alimentos.",
            "Afetam a ODS 2 somente quando causam perda total das plantações.",
            "Podem reduzir a fome ao aumentar automaticamente a diversidade agrícola."
        ],
        correct: 0,
        explanation: "Crises climáticas podem atingir várias etapas do sistema alimentar, desde a produção até o consumo."
    },
    {
        q: "Qual alternativa define melhor resiliência agrícola?",
        options: [
            "Capacidade de resistir, adaptar-se e recuperar-se diante de choques climáticos, econômicos ou ambientais.",
            "Capacidade de manter sempre o mesmo nível de produção sem alterar técnicas agrícolas.",
            "Capacidade de substituir diversidade agrícola por cultivos mais lucrativos.",
            "Capacidade de aumentar produção mesmo com degradação progressiva do solo."
        ],
        correct: 0,
        explanation: "Resiliência envolve resistir, adaptar e recuperar sem comprometer a segurança alimentar."
    },
    {
        q: "Qual alternativa explica melhor o risco das monoculturas para a segurança alimentar?",
        options: [
            "A dependência de poucos cultivos aumenta vulnerabilidade a pragas, clima e oscilações de mercado.",
            "A monocultura reduz a produtividade agrícola ao impedir mecanização em grande escala.",
            "A monocultura é sempre incompatível com qualquer forma de produção alimentar.",
            "A dependência de poucos cultivos melhora a estabilidade nutricional da população."
        ],
        correct: 0,
        explanation: "Monoculturas podem ser produtivas, mas deixam o sistema mais vulnerável a crises específicas."
    },
    {
        q: "Qual alternativa explica melhor a importância da biodiversidade na alimentação?",
        options: [
            "Favorece polinização, saúde do solo, controle natural de pragas e diversidade alimentar.",
            "Garante automaticamente maior produção de commodities agrícolas.",
            "É importante apenas para áreas preservadas, não para produção de alimentos.",
            "Reduz a necessidade de manejo agrícola e elimina riscos climáticos."
        ],
        correct: 0,
        explanation: "Biodiversidade é fundamental para sistemas agrícolas equilibrados e mais resistentes."
    },
    {
        q: "Verdadeiro ou falso: A alimentação escolar pode contribuir para a ODS 2, mas não resolve sozinha a insegurança alimentar.",
        options: [
            "Verdadeiro, porque ajuda na nutrição e proteção social, mas precisa de políticas complementares.",
            "Falso, porque a alimentação escolar é suficiente para garantir segurança alimentar familiar.",
            "Verdadeiro, mas apenas quando substitui completamente a alimentação em casa.",
            "Falso, porque a alimentação escolar não tem relação com fome ou nutrição."
        ],
        correct: 0,
        explanation: "A alimentação escolar é estratégica, mas deve atuar junto com renda, saúde, agricultura e proteção social."
    },
    {
        q: "Qual alternativa apresenta a política pública mais completa para combater a fome?",
        options: [
            "Combinar transferência de renda, alimentação escolar, abastecimento, apoio à agricultura familiar e educação alimentar.",
            "Priorizar doações emergenciais, aumento da produção agrícola e redução de gastos públicos.",
            "Ampliar exportações agrícolas, reduzir desperdício doméstico e incentivar escolhas individuais saudáveis."
        ],
        correct: 0,
        explanation: "O combate à fome exige políticas integradas, não ações isoladas."
    },
    {
        q: "Qual alternativa contém um erro sutil sobre educação alimentar?",
        options: [
            "Educação alimentar é suficiente para superar a fome quando ensina escolhas saudáveis.",
            "Educação alimentar pode melhorar escolhas, mas depende também de acesso e renda.",
            "Educação alimentar ajuda a compreender qualidade nutricional e consumo consciente.",
            "Educação alimentar não substitui políticas públicas de segurança alimentar."
        ],
        correct: 0,
        explanation: "Educação alimentar é importante, mas não basta se as pessoas não têm renda ou acesso aos alimentos."
    },
    {
        q: "Qual alternativa contém um erro sutil sobre alimentação adequada?",
        options: [
            "Alimentação adequada é garantida quando há calorias suficientes para evitar fome.",
            "Alimentação adequada envolve qualidade nutricional, regularidade e respeito às necessidades individuais.",
            "Alimentação adequada não depende apenas da quantidade de alimentos.",
            "Alimentação adequada também considera acesso, cultura alimentar e segurança."
        ],
        correct: 0,
        explanation: "Calorias suficientes não garantem alimentação adequada. Nutrientes, qualidade e regularidade também importam."
    },
    {
        q: "Verdadeiro ou falso: Segurança alimentar envolve também a utilização biológica dos alimentos pelo organismo.",
        options: [
            "Verdadeiro, porque saúde, saneamento e preparo adequado influenciam o aproveitamento dos nutrientes.",
            "Falso, porque segurança alimentar trata somente da compra e distribuição de alimentos.",
            "Verdadeiro, mas apenas em casos de insegurança alimentar grave.",
            "Falso, porque utilização biológica pertence apenas à área médica, não à alimentação."
        ],
        correct: 0,
        explanation: "A utilização dos alimentos é uma dimensão da segurança alimentar e depende de saúde, saneamento e nutrição."
    },
    {
        q: "Qual alternativa define melhor a dimensão de utilização dos alimentos?",
        options: [
            "Capacidade do corpo de aproveitar os nutrientes, influenciada por saúde, preparo e saneamento.",
            "Capacidade da família de comprar alimentos no mercado com regularidade.",
            "Quantidade de alimentos disponíveis em um território ao longo do ano.",
            "Estabilidade dos preços dos alimentos em períodos de crise."
        ],
        correct: 0,
        explanation: "Utilização se refere ao aproveitamento nutricional dos alimentos pelo organismo."
    },
    {
        q: "Qual alternativa melhor explica a relação entre renda e segurança alimentar?",
        options: [
            "A renda influencia o acesso regular a alimentos adequados, mesmo quando há oferta no mercado.",
            "A renda só interfere na compra de alimentos industrializados, não na alimentação básica.",
            "A renda é menos importante que a produção agrícola nacional em todos os contextos.",
            "A renda afeta a alimentação apenas quando não existem políticas agrícolas."
        ],
        correct: 0,
        explanation: "Sem renda suficiente, a família pode não conseguir comprar alimentos adequados, mesmo que eles estejam disponíveis."
    },
    {
        q: "Qual alternativa contém o erro mais sutil sobre agricultura sustentável?",
        options: [
            "Agricultura sustentável é aquela que elimina totalmente impactos ambientais da produção.",
            "Agricultura sustentável busca reduzir impactos e preservar recursos naturais.",
            "Agricultura sustentável considera produtividade e conservação ambiental.",
            "Agricultura sustentável pode incluir técnicas de manejo do solo e da água."
        ],
        correct: 0,
        explanation: "Toda produção tem algum impacto. A agricultura sustentável busca reduzir impactos e preservar recursos, não eliminá-los totalmente."
    },
    {
        q: "Qual alternativa define melhor abastecimento alimentar?",
        options: [
            "Organização da oferta e circulação de alimentos para garantir regularidade, acesso e preços adequados.",
            "Produção agrícola suficiente para abastecer apenas os grandes centros urbanos.",
            "Distribuição emergencial de alimentos apenas em situações de calamidade.",
            "Capacidade de uma família armazenar alimentos para consumo próprio."
        ],
        correct: 0,
        explanation: "Abastecimento alimentar envolve produção, distribuição, circulação, preço e acesso."
    },
    {
        q: "Verdadeiro ou falso: A ODS 2 depende apenas de ações do governo.",
        options: [
            "Falso, porque exige participação de governos, produtores, instituições, empresas e sociedade.",
            "Verdadeiro, porque apenas políticas públicas podem alterar sistemas alimentares.",
            "Falso, porque depende exclusivamente das escolhas individuais dos consumidores.",
            "Verdadeiro, desde que o governo invista em produção agrícola."
        ],
        correct: 0,
        explanation: "Governos são fundamentais, mas a ODS 2 exige participação coletiva e ações integradas."
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

/* EMBARALHA QUALQUER ARRAY */
function embaralharArray(array) {
    return array
        .map(item => ({ item, ordem: Math.random() }))
        .sort((a, b) => a.ordem - b.ordem)
        .map(({ item }) => item);
}

/* EMBARALHA AS ALTERNATIVAS SEM PERDER A RESPOSTA CERTA */
function prepararPerguntas(perguntas) {
    return perguntas.map(pergunta => {
        const alternativas = pergunta.options.map((texto, index) => {
            return {
                texto: texto,
                correta: index === pergunta.correct
            };
        });

        const alternativasEmbaralhadas = embaralharArray(alternativas);

        return {
            q: pergunta.q,
            options: alternativasEmbaralhadas.map(alt => alt.texto),
            correct: alternativasEmbaralhadas.findIndex(alt => alt.correta),
            explanation: pergunta.explanation
        };
    });
}

/* AQUI O JOGO USA AS PERGUNTAS COM ALTERNATIVAS EMBARALHADAS */
const questions = prepararPerguntas(perguntasDificeis);

/* CARREGA A PERGUNTA NA TELA */
function loadQuestion() {
    const qData = questions[currentQuestion];

    document.getElementById("progress").innerText = `PERGUNTA ${currentQuestion + 1} DE ${questions.length}`;
    document.getElementById("question-text").innerText = qData.q;

    const optionsDiv = document.getElementById("options-container");
    optionsDiv.innerHTML = "";

    qData.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "btn-game";
        btn.onclick = () => handleAnswer(index, btn);
        optionsDiv.appendChild(btn);
    });
}

/* VERIFICA A RESPOSTA */
function handleAnswer(choice, selectedButton) {
    const qData = questions[currentQuestion];
    const isCorrect = choice === qData.correct;

    const allButtons = document.querySelectorAll("#options-container button");

    allButtons.forEach(button => {
        button.disabled = true;
    });

    if (isCorrect) {
        score++;
        selectedButton.classList.add("btn-correct");
    } else {
        selectedButton.classList.add("btn-wrong");
        allButtons[qData.correct].classList.add("btn-correct");
    }

    userAnswers.push({
        question: qData.q,
        selected: qData.options[choice],
        correctAnswer: qData.options[qData.correct],
        correct: isCorrect,
        explanation: qData.explanation
    });

    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 900);
}

/* MOSTRA RESULTADO FINAL */
function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz-container").classList.remove("active");

    document.getElementById("result-screen").style.display = "flex";
    document.getElementById("result-screen").classList.add("active");

    let rating = "";

    if (score >= 17) {
        rating = "EXCELENTE! VOCÊ É UM EXPERT.";
    } else if (score >= 10) {
        rating = "NA MÉDIA. PODE MELHORAR!";
    } else {
        rating = "PRECISA ESTUDAR MAIS A ODS 2.";
    }

    document.getElementById("feedback-rating").innerText = rating;
    document.getElementById("score-text").innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
}

/* MOSTRA REVISÃO */
function showReview() {
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("result-screen").classList.remove("active");

    document.getElementById("review-screen").style.display = "flex";
    document.getElementById("review-screen").classList.add("active");

    const list = document.getElementById("review-list");

    list.innerHTML = userAnswers.map((ans, index) => `
        <div style="margin-bottom: 20px; border-bottom: 1px solid rgba(255, 180, 0, 0.25); padding-bottom: 12px;">
            <p><strong>${index + 1}. ${ans.question}</strong></p>

            <p style="margin-top: 8px; color: ${ans.correct ? '#2ecc71' : '#e74c3c'};">
                ${ans.correct ? '✓ Você acertou' : '✗ Você errou'}
            </p>

            <p style="margin-top: 6px;">
                <strong>Sua resposta:</strong> ${ans.selected}
            </p>

            <p style="margin-top: 6px;">
                <strong>Resposta certa:</strong> ${ans.correctAnswer}
            </p>

            <p style="margin-top: 8px; font-style: italic; opacity: 0.85;">
                ${ans.explanation}
            </p>
        </div>
    `).join("");
}

/* INICIA O QUIZ */
loadQuestion();