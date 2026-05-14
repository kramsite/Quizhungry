const perguntasDificeis = [
    {
        q: "Qual alternativa descreve com mais precisão a dimensão de 'utilização' na segurança alimentar?",
        options: [
            "Refere-se ao aproveitamento biológico dos nutrientes, influenciado por saúde, saneamento, preparo e qualidade da dieta.",
            "Refere-se à capacidade econômica das famílias de comprar alimentos suficientes e nutritivos com regularidade.",
            "Refere-se à quantidade de alimentos produzidos, armazenados e disponíveis em uma região ao longo do tempo."
        ],
        correct: 0,
        explanation: "A utilização está ligada à forma como o organismo aproveita os alimentos, dependendo também de saúde, higiene, preparo e saneamento."
    },
    {
        q: "Em segurança alimentar, qual alternativa diferencia corretamente 'disponibilidade' e 'acesso'?",
        options: [
            "Disponibilidade trata da existência de alimentos; acesso trata da capacidade real de obtê-los física e economicamente.",
            "Disponibilidade trata da renda familiar; acesso trata da qualidade nutricional dos alimentos consumidos.",
            "Disponibilidade trata da regularidade do consumo; acesso trata da estabilidade dos preços agrícolas."
        ],
        correct: 0,
        explanation: "Pode haver alimentos disponíveis em um país ou cidade, mas nem todas as pessoas conseguem acessá-los por falta de renda, distância ou preço alto."
    },
    {
        q: "Verdadeiro ou falso: A insegurança alimentar leve já pode existir mesmo sem redução direta da quantidade de alimentos consumidos.",
        options: [
            "Verdadeiro, pois pode envolver preocupação ou incerteza sobre o acesso futuro aos alimentos.",
            "Falso, pois só existe insegurança alimentar quando há redução concreta da quantidade de comida.",
            "Verdadeiro, mas apenas quando a família já apresenta sinais físicos de desnutrição."
        ],
        correct: 0,
        explanation: "Na insegurança alimentar leve, a alimentação ainda pode não ter sido reduzida, mas já existe incerteza ou preocupação com o acesso."
    },
    {
        q: "Qual alternativa define melhor insegurança alimentar moderada?",
        options: [
            "Situação em que há comprometimento da qualidade ou da quantidade dos alimentos por limitação de recursos.",
            "Situação em que há privação alimentar severa, com episódios frequentes de fome e ausência de refeições.",
            "Situação em que há apenas preocupação futura com os alimentos, mas sem alteração na dieta familiar."
        ],
        correct: 0,
        explanation: "A insegurança alimentar moderada ocorre quando a alimentação já sofre mudanças, seja pela redução da qualidade ou da quantidade."
    },
    {
        q: "Qual alternativa apresenta a definição mais precisa de soberania alimentar?",
        options: [
            "Direito dos povos de definir seus próprios sistemas alimentares, incluindo produção, distribuição, consumo e cultura alimentar.",
            "Condição em que todas as pessoas têm acesso físico e econômico a alimentos suficientes e seguros.",
            "Estratégia de ampliar estoques públicos para reduzir oscilações de preço em períodos de crise alimentar."
        ],
        correct: 0,
        explanation: "Soberania alimentar envolve autonomia política, cultural e territorial sobre os sistemas alimentares."
    },
    {
        q: "Qual alternativa diferencia melhor segurança alimentar de soberania alimentar?",
        options: [
            "Segurança alimentar foca no acesso adequado aos alimentos; soberania alimentar acrescenta autonomia sobre o sistema alimentar.",
            "Segurança alimentar trata da produção local; soberania alimentar trata apenas da importação de alimentos.",
            "Segurança alimentar depende da agricultura familiar; soberania alimentar depende da produção em larga escala."
        ],
        correct: 0,
        explanation: "Segurança alimentar se concentra no acesso a alimentos adequados. Soberania alimentar inclui o direito de decidir como esses alimentos são produzidos e distribuídos."
    },
    {
        q: "Qual alternativa contém o erro conceitual mais sutil sobre combate à fome?",
        options: [
            "A fome pode ser eliminada apenas com aumento da produtividade agrícola nacional.",
            "A fome depende também de renda, acesso, distribuição, preços e políticas públicas.",
            "A produção de alimentos é importante, mas não garante sozinha segurança alimentar."
        ],
        correct: 0,
        explanation: "Aumentar a produção pode ajudar, mas não elimina a fome sozinho. A fome também envolve desigualdade, renda, acesso e distribuição."
    },
    {
        q: "Qual alternativa define melhor a dimensão de estabilidade na segurança alimentar?",
        options: [
            "Capacidade de manter acesso adequado aos alimentos ao longo do tempo, inclusive diante de crises.",
            "Capacidade de produzir alimentos em quantidade suficiente durante períodos de maior safra.",
            "Capacidade de diversificar a alimentação por meio de maior variedade disponível nos mercados."
        ],
        correct: 0,
        explanation: "Estabilidade significa que o acesso aos alimentos deve ser contínuo, não apenas momentâneo ou sazonal."
    },
    {
        q: "Qual alternativa explica melhor por que a má nutrição pode ocorrer mesmo com ingestão calórica suficiente?",
        options: [
            "Porque pode haver excesso de calorias combinado com deficiência de micronutrientes e baixa qualidade alimentar.",
            "Porque calorias suficientes impedem a fome, mas não interferem no estado nutricional das pessoas.",
            "Porque má nutrição ocorre apenas quando a ingestão de proteínas é maior que a de carboidratos."
        ],
        correct: 0,
        explanation: "Má nutrição não é apenas falta de comida. Também pode envolver excesso de calorias e deficiência de nutrientes essenciais."
    },
    {
        q: "Qual alternativa define melhor a dupla carga da má nutrição?",
        options: [
            "Coexistência de desnutrição, deficiências nutricionais e excesso de peso em uma mesma população.",
            "Presença simultânea de fome grave e ausência total de produção agrícola em uma mesma região.",
            "Combinação entre insegurança alimentar leve e aumento temporário do preço dos alimentos."
        ],
        correct: 0,
        explanation: "A dupla carga da má nutrição ocorre quando diferentes formas de má nutrição coexistem, como desnutrição e obesidade."
    },
    {
        q: "Qual alternativa diferencia melhor perda de alimentos e desperdício de alimentos?",
        options: [
            "Perda ocorre mais antes do consumo final; desperdício ocorre mais no varejo, preparo ou consumo.",
            "Perda ocorre apenas quando o alimento estraga; desperdício ocorre apenas quando o alimento vence.",
            "Perda ocorre no consumo doméstico; desperdício ocorre principalmente na produção agrícola."
        ],
        correct: 0,
        explanation: "Perdas costumam ocorrer na colheita, armazenamento e transporte. Desperdício ocorre mais perto do consumidor final."
    },
    {
        q: "Qual situação representa melhor perda de alimentos, e não desperdício?",
        options: [
            "Grãos estragam durante o armazenamento por falta de estrutura adequada.",
            "Uma família descarta alimentos comprados em excesso e vencidos.",
            "Um restaurante joga fora refeições prontas que sobraram no fim do dia."
        ],
        correct: 0,
        explanation: "Quando o alimento se perde antes de chegar ao consumidor final, geralmente é considerado perda, não desperdício."
    },
    {
        q: "Qual alternativa representa melhor um sistema alimentar sustentável?",
        options: [
            "Sistema que considera produção, distribuição, acesso, consumo, nutrição, perdas, desperdício e impactos ambientais.",
            "Sistema que prioriza aumento da produção, redução de preços e padronização da alimentação da população.",
            "Sistema que substitui cadeias alimentares locais por produção em larga escala mais eficiente."
        ],
        correct: 0,
        explanation: "Um sistema alimentar sustentável considera toda a cadeia alimentar, não apenas a produção ou o preço."
    },
    {
        q: "Verdadeiro ou falso: Agricultura sustentável significa eliminar completamente os impactos ambientais da produção agrícola.",
        options: [
            "Falso, pois busca reduzir impactos, preservar recursos e manter a produção de forma responsável.",
            "Verdadeiro, pois só é sustentável a agricultura que não gera nenhum impacto ambiental.",
            "Falso, pois agricultura sustentável se refere apenas ao aumento da produtividade no campo."
        ],
        correct: 0,
        explanation: "Toda produção pode gerar impactos. A sustentabilidade busca reduzi-los e manter os recursos naturais para o futuro."
    },
    {
        q: "Qual alternativa melhor explica a relação entre monocultura e vulnerabilidade alimentar?",
        options: [
            "A dependência de poucos cultivos aumenta riscos diante de pragas, clima extremo e oscilações de mercado.",
            "A monocultura reduz riscos porque concentra recursos técnicos em um alimento mais produtivo.",
            "A monocultura melhora a segurança alimentar quando aumenta a exportação de produtos agrícolas."
        ],
        correct: 0,
        explanation: "A monocultura pode ser produtiva, mas torna o sistema mais vulnerável a crises específicas."
    },
    {
        q: "Qual alternativa apresenta uma relação mais precisa entre biodiversidade e ODS 2?",
        options: [
            "A biodiversidade fortalece polinização, saúde do solo, controle natural de pragas e diversidade alimentar.",
            "A biodiversidade aumenta a produtividade apenas quando substitui totalmente técnicas agrícolas modernas.",
            "A biodiversidade está ligada à preservação ambiental, mas tem pouca relação direta com a segurança alimentar."
        ],
        correct: 0,
        explanation: "A biodiversidade é essencial para sistemas agrícolas mais equilibrados, resilientes e nutritivos."
    },
    {
        q: "Qual alternativa contém um erro sutil sobre educação alimentar?",
        options: [
            "Educação alimentar é suficiente para garantir segurança alimentar quando ensina escolhas saudáveis.",
            "Educação alimentar contribui para melhores escolhas, mas depende também de renda e acesso.",
            "Educação alimentar não substitui políticas públicas de abastecimento, renda e proteção social."
        ],
        correct: 0,
        explanation: "Educação alimentar ajuda, mas não resolve sozinha se as pessoas não têm renda ou acesso aos alimentos."
    },
    {
        q: "Qual alternativa define melhor vulnerabilidade alimentar?",
        options: [
            "Risco aumentado de perder acesso a alimentos adequados por fatores econômicos, sociais, ambientais ou políticos.",
            "Condição em que uma família necessariamente já está sem alimentos por vários dias consecutivos.",
            "Situação restrita a regiões rurais onde não há produção suficiente para abastecer a população local."
        ],
        correct: 0,
        explanation: "Vulnerabilidade alimentar é uma condição de risco, não necessariamente a privação alimentar já instalada."
    },
    {
        q: "Qual alternativa explica melhor o impacto das mudanças climáticas na segurança alimentar?",
        options: [
            "Podem afetar safras, transporte, renda agrícola, preços e estabilidade do acesso aos alimentos.",
            "Afetam principalmente a produção, mas têm pouca relação com renda, preços ou distribuição.",
            "Afetam a segurança alimentar apenas quando causam perda total e imediata das plantações."
        ],
        correct: 0,
        explanation: "Mudanças climáticas afetam várias etapas do sistema alimentar, desde a produção até o acesso final."
    },
    {
        q: "Qual alternativa apresenta a política pública mais completa para enfrentar a fome estrutural?",
        options: [
            "Transferência de renda, alimentação escolar, abastecimento, apoio à agricultura familiar e educação alimentar.",
            "Distribuição emergencial de cestas básicas, aumento da produção agrícola e campanhas de conscientização.",
            "Apoio à exportação agrícola, redução do desperdício doméstico e incentivo ao consumo responsável."
        ],
        correct: 0,
        explanation: "A fome estrutural exige políticas integradas, atacando renda, acesso, produção, abastecimento, nutrição e proteção social."
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