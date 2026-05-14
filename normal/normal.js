const perguntasMedias = [
    {
        q: "Qual é o principal objetivo da ODS 2?",
        options: [
            "Erradicar a fome, melhorar a nutrição e promover agricultura sustentável",
            "Aumentar a produção agrícola sem considerar impactos ambientais",
            "Garantir alimentos industrializados para toda a população"
        ],
        correct: 0,
        explanation: "A ODS 2 busca acabar com a fome, garantir alimentação adequada e fortalecer sistemas agrícolas sustentáveis."
    },
    {
        q: "O que diferencia fome de insegurança alimentar?",
        options: [
            "A fome é falta direta de comida; a insegurança alimentar inclui incerteza ou dificuldade de acesso a alimentos",
            "A fome acontece apenas em guerras; a insegurança alimentar só ocorre em áreas rurais",
            "A fome é causada por escolhas individuais; a insegurança alimentar é sempre temporária"
        ],
        correct: 0,
        explanation: "A insegurança alimentar pode existir mesmo quando a pessoa ainda come, mas sem garantia de quantidade, qualidade ou regularidade."
    },
    {
        q: "Por que a agricultura sustentável é importante para a ODS 2?",
        options: [
            "Porque ajuda a produzir alimentos sem esgotar recursos naturais",
            "Porque prioriza apenas grandes produtores agrícolas",
            "Porque substitui totalmente a agricultura tradicional por tecnologia"
        ],
        correct: 0,
        explanation: "A agricultura sustentável busca produzir alimentos preservando solo, água, biodiversidade e condições de vida no campo."
    },
    {
        q: "Qual fator contribui diretamente para a insegurança alimentar?",
        options: [
            "Baixa renda e aumento do preço dos alimentos",
            "Maior variedade de alimentos nos mercados",
            "Presença de feiras livres em bairros populares"
        ],
        correct: 0,
        explanation: "Quando a renda é baixa e os alimentos ficam caros, muitas famílias têm dificuldade de manter uma alimentação adequada."
    },
    {
        q: "O que significa ter acesso a uma alimentação adequada?",
        options: [
            "Ter alimentos em quantidade suficiente, com qualidade nutricional e de forma regular",
            "Consumir apenas alimentos naturais, mesmo sem variedade",
            "Comer qualquer alimento disponível, desde que todos os dias"
        ],
        correct: 0,
        explanation: "Alimentação adequada envolve quantidade, qualidade, regularidade e respeito às necessidades nutricionais."
    },
    {
        q: "Qual é uma consequência da má nutrição em crianças?",
        options: [
            "Pode prejudicar o crescimento, a imunidade e o aprendizado",
            "Afeta apenas o peso, sem interferir no desenvolvimento",
            "É resolvida apenas com o aumento da quantidade de comida"
        ],
        correct: 0,
        explanation: "A má nutrição pode comprometer o desenvolvimento físico e cognitivo, além de aumentar riscos de doenças."
    },
    {
        q: "Por que o desperdício de alimentos dificulta o combate à fome?",
        options: [
            "Porque reduz o aproveitamento de alimentos e desperdiça recursos usados na produção",
            "Porque impede que agricultores produzam alimentos frescos",
            "Porque aumenta automaticamente o preço de todos os alimentos"
        ],
        correct: 0,
        explanation: "Ao desperdiçar comida, também são desperdiçados água, energia, terra, trabalho e transporte usados na produção."
    },
    {
        q: "Qual prática está mais ligada à agricultura sustentável?",
        options: [
            "Uso responsável da água e cuidado com o solo",
            "Aumento da produção usando qualquer método disponível",
            "Cultivo de um único alimento em todas as regiões"
        ],
        correct: 0,
        explanation: "A agricultura sustentável considera a conservação dos recursos naturais e a manutenção da produtividade ao longo do tempo."
    },
    {
        q: "Como a desigualdade social se relaciona com a fome?",
        options: [
            "Ela limita o acesso de parte da população a alimentos de qualidade",
            "Ela reduz a produção de alimentos em todos os países",
            "Ela afeta apenas pessoas que vivem longe das cidades"
        ],
        correct: 0,
        explanation: "A fome muitas vezes não acontece por falta total de alimentos, mas pela dificuldade de acesso causada por pobreza e desigualdade."
    },
    {
        q: "Qual ação pública pode ajudar a reduzir a fome?",
        options: [
            "Programas de segurança alimentar, renda e apoio à agricultura familiar",
            "Incentivo apenas à exportação de alimentos",
            "Redução de feiras, mercados populares e merenda escolar"
        ],
        correct: 0,
        explanation: "Políticas públicas podem melhorar o acesso à comida, fortalecer produtores locais e proteger famílias vulneráveis."
    },
    {
        q: "Qual é o papel da agricultura familiar na ODS 2?",
        options: [
            "Contribuir para a produção de alimentos e fortalecer economias locais",
            "Substituir completamente toda a produção agrícola do país",
            "Produzir apenas alimentos para exportação"
        ],
        correct: 0,
        explanation: "A agricultura familiar é importante para o abastecimento de alimentos, especialmente em mercados locais e regionais."
    },
    {
        q: "O que pode tornar uma alimentação inadequada mesmo quando há comida disponível?",
        options: [
            "Baixa qualidade nutricional e pouca variedade alimentar",
            "Presença de alimentos frescos em mercados locais",
            "Consumo equilibrado de diferentes grupos alimentares"
        ],
        correct: 0,
        explanation: "Ter comida não significa necessariamente ter boa nutrição. A qualidade e a variedade dos alimentos também importam."
    },
    {
        q: "Como mudanças climáticas podem afetar a segurança alimentar?",
        options: [
            "Podem causar secas, enchentes e perdas na produção agrícola",
            "Podem garantir colheitas maiores em todas as regiões",
            "Afetam apenas alimentos industrializados"
        ],
        correct: 0,
        explanation: "Eventos climáticos extremos podem prejudicar plantações, encarecer alimentos e reduzir o acesso à comida."
    },
    {
        q: "Qual alternativa representa melhor o conceito de sistema alimentar sustentável?",
        options: [
            "Produção, distribuição e consumo de alimentos com menos impacto social e ambiental",
            "Produção rápida de alimentos com foco apenas no lucro",
            "Distribuição de alimentos sem considerar origem, desperdício ou qualidade"
        ],
        correct: 0,
        explanation: "Um sistema alimentar sustentável envolve toda a cadeia: produção, transporte, consumo, acesso, qualidade e impacto ambiental."
    },
    {
        q: "Por que a merenda escolar pode estar relacionada à ODS 2?",
        options: [
            "Porque pode garantir alimentação regular e nutritiva para estudantes",
            "Porque substitui a responsabilidade das famílias permanentemente",
            "Porque serve apenas para reduzir gastos das escolas"
        ],
        correct: 0,
        explanation: "A alimentação escolar ajuda no combate à fome, melhora a nutrição e contribui para o aprendizado."
    },
    {
        q: "Qual é uma forma eficiente de reduzir perdas de alimentos?",
        options: [
            "Melhorar armazenamento, transporte e planejamento de consumo",
            "Produzir menos alimentos em todas as regiões",
            "Evitar a venda de alimentos próximos ao vencimento mesmo quando seguros"
        ],
        correct: 0,
        explanation: "Muitos alimentos são perdidos antes de chegar ao consumidor por problemas de transporte, armazenamento e planejamento."
    },
    {
        q: "O que significa promover nutrição adequada?",
        options: [
            "Garantir acesso a alimentos que forneçam nutrientes essenciais",
            "Aumentar apenas a quantidade de calorias consumidas",
            "Substituir refeições tradicionais por suplementos"
        ],
        correct: 0,
        explanation: "Nutrição adequada não é só comer mais, mas consumir alimentos que atendam às necessidades do organismo."
    },
    {
        q: "Qual problema pode surgir quando um país depende demais de poucos tipos de cultivo?",
        options: [
            "Maior vulnerabilidade a pragas, crises climáticas e variações de preço",
            "Melhor equilíbrio nutricional para toda a população",
            "Fim automático da insegurança alimentar"
        ],
        correct: 0,
        explanation: "A pouca diversidade agrícola pode deixar a produção mais frágil diante de pragas, clima e instabilidade econômica."
    },
    {
        q: "Qual atitude individual contribui para a ODS 2?",
        options: [
            "Planejar compras e evitar desperdício de alimentos",
            "Comprar alimentos em maior quantidade sem necessidade",
            "Escolher alimentos apenas pelo preço, ignorando qualidade e origem"
        ],
        correct: 0,
        explanation: "O planejamento ajuda a evitar desperdício e torna o consumo mais consciente."
    },
    {
        q: "Qual é a relação entre pobreza e fome?",
        options: [
            "A pobreza dificulta o acesso regular a alimentos adequados",
            "A pobreza só afeta a alimentação em países sem agricultura",
            "A pobreza causa fome apenas quando não há mercados próximos"
        ],
        correct: 0,
        explanation: "Mesmo quando há alimentos disponíveis, famílias em situação de pobreza podem não conseguir comprá-los de forma suficiente e nutritiva."
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
const questions = prepararPerguntas(perguntasMedias);

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