const perguntasDificeis = [
    {
        q: "A ODS 2 não trata apenas da fome. Qual formulação representa melhor seu objetivo completo?",
        options: [
            "Acabar com a fome, alcançar segurança alimentar, melhorar a nutrição e promover agricultura sustentável",
            "Acabar com a fome, ampliar a distribuição de alimentos e incentivar a produção agrícola intensiva",
            "Reduzir a fome, melhorar a alimentação escolar e aumentar a produção de alimentos industrializados"
        ],
        correct: 0,
        explanation: "A ODS 2 envolve quatro pontos centrais: fome zero, segurança alimentar, melhor nutrição e agricultura sustentável."
    },
    {
        q: "Qual alternativa diferencia melhor segurança alimentar de soberania alimentar?",
        options: [
            "Segurança alimentar foca no acesso a alimentos; soberania alimentar inclui o direito dos povos de decidir seus sistemas alimentares",
            "Segurança alimentar depende apenas da produção agrícola; soberania alimentar depende apenas da importação de alimentos",
            "Segurança alimentar trata da qualidade dos alimentos; soberania alimentar trata somente da quantidade produzida"
        ],
        correct: 0,
        explanation: "Segurança alimentar está ligada ao acesso regular a alimentos adequados. Soberania alimentar envolve autonomia sobre produção, distribuição e consumo."
    },
    {
        q: "Na ODS 2, a agricultura sustentável deve considerar principalmente:",
        options: [
            "Produtividade, preservação ambiental, resiliência climática e condições dignas para produtores",
            "Alta produtividade, redução de custos, expansão territorial e aumento das exportações",
            "Uso de tecnologia, mecanização ampla, produção em larga escala e padronização alimentar"
        ],
        correct: 0,
        explanation: "A agricultura sustentável busca equilíbrio entre produção, meio ambiente, adaptação climática e justiça social."
    },
    {
        q: "O que torna a insegurança alimentar grave mesmo quando uma pessoa ainda se alimenta todos os dias?",
        options: [
            "A falta de regularidade, qualidade nutricional ou certeza de acesso aos alimentos",
            "A ausência total de alimentos em todas as refeições do dia",
            "O consumo de alimentos preparados fora de casa com frequência"
        ],
        correct: 0,
        explanation: "Uma pessoa pode comer diariamente e ainda viver insegurança alimentar se não tiver alimentos suficientes, nutritivos ou garantidos."
    },
    {
        q: "Qual situação representa melhor insegurança alimentar moderada?",
        options: [
            "A família reduz a qualidade ou quantidade dos alimentos por falta de recursos",
            "A família passa vários dias consecutivos sem consumir nenhum alimento",
            "A família escolhe reduzir o consumo de certos alimentos por preferência pessoal"
        ],
        correct: 0,
        explanation: "Na insegurança alimentar moderada, há comprometimento da quantidade ou qualidade dos alimentos, mas não necessariamente ausência total de comida."
    },
    {
        q: "Qual é um efeito indireto das mudanças climáticas sobre a segurança alimentar?",
        options: [
            "Redução da produção agrícola e aumento da instabilidade nos preços dos alimentos",
            "Aumento permanente da produção agrícola em regiões tropicais",
            "Melhora automática da distribuição de alimentos em áreas vulneráveis"
        ],
        correct: 0,
        explanation: "Secas, enchentes e eventos extremos podem reduzir safras, afetar transporte e elevar preços."
    },
    {
        q: "Por que a diversidade agrícola é importante para sistemas alimentares sustentáveis?",
        options: [
            "Porque reduz vulnerabilidades a pragas, clima e dependência de poucos cultivos",
            "Porque permite substituir todos os alimentos básicos por produtos de maior valor comercial",
            "Porque concentra a produção em culturas mais lucrativas e padronizadas"
        ],
        correct: 0,
        explanation: "A diversidade agrícola fortalece a resiliência do sistema alimentar e amplia a variedade nutricional."
    },
    {
        q: "Qual alternativa mostra uma relação correta entre pobreza e fome?",
        options: [
            "A fome pode ocorrer mesmo com alimentos disponíveis, quando famílias não conseguem comprá-los",
            "A fome ocorre apenas quando não existe produção agrícola suficiente no país",
            "A fome deixa de existir quando há supermercados próximos às comunidades"
        ],
        correct: 0,
        explanation: "A disponibilidade de alimentos não garante acesso. A renda e os preços influenciam diretamente a alimentação."
    },
    {
        q: "Qual ação está mais alinhada à meta de apoiar pequenos produtores na ODS 2?",
        options: [
            "Ampliar acesso a terra, crédito, tecnologia, mercados e capacitação",
            "Substituir pequenos produtores por grandes sistemas automatizados",
            "Direcionar pequenos produtores apenas para culturas de exportação"
        ],
        correct: 0,
        explanation: "A ODS 2 valoriza pequenos produtores e busca melhorar sua renda, produtividade e acesso a recursos."
    },
    {
        q: "O que significa tornar os sistemas alimentares mais resilientes?",
        options: [
            "Capacitá-los para resistir e se recuperar de crises climáticas, econômicas e sociais",
            "Aumentar a produção de alimentos sem alterar métodos agrícolas tradicionais",
            "Reduzir a variedade de alimentos para facilitar distribuição em larga escala"
        ],
        correct: 0,
        explanation: "Resiliência é a capacidade de enfrentar crises sem colapsar o acesso à alimentação."
    },
    {
        q: "Qual alternativa representa melhor uma perda de alimento, e não desperdício?",
        options: [
            "Alimentos estragam no transporte antes de chegar ao mercado",
            "Consumidor joga fora comida pronta que sobrou no prato",
            "Restaurante descarta refeições servidas em excesso ao final do dia"
        ],
        correct: 0,
        explanation: "Perda ocorre geralmente antes da etapa de consumo, como na colheita, armazenamento ou transporte. Desperdício ocorre mais perto do consumidor final."
    },
    {
        q: "Qual alternativa representa melhor desperdício de alimento, e não perda?",
        options: [
            "Uma família joga fora alimentos comprados em excesso e vencidos em casa",
            "Parte da colheita se perde por falta de armazenamento adequado",
            "Frutas estragam durante o transporte por falha na refrigeração"
        ],
        correct: 0,
        explanation: "Desperdício ocorre quando alimentos próprios para consumo são descartados na venda, preparo ou consumo."
    },
    {
        q: "Qual ponto é essencial para avaliar se uma alimentação é adequada?",
        options: [
            "Quantidade, qualidade nutricional, regularidade e respeito às necessidades da pessoa",
            "Quantidade de calorias, preço baixo e facilidade de preparo",
            "Presença de alimentos frescos, ausência de industrializados e baixo custo"
        ],
        correct: 0,
        explanation: "Alimentação adequada não é apenas comer bastante. Ela precisa ser nutritiva, regular e compatível com as necessidades humanas."
    },
    {
        q: "Por que a alimentação escolar pode ser estratégica para a ODS 2?",
        options: [
            "Porque melhora nutrição, permanência escolar e proteção social de estudantes vulneráveis",
            "Porque substitui permanentemente a alimentação familiar das crianças",
            "Porque resolve a insegurança alimentar sem necessidade de outras políticas públicas"
        ],
        correct: 0,
        explanation: "A alimentação escolar é importante, mas funciona melhor junto com outras políticas de renda, saúde e segurança alimentar."
    },
    {
        q: "Qual alternativa apresenta uma política pública mais completa contra a fome?",
        options: [
            "Transferência de renda, alimentação escolar, apoio à agricultura familiar e abastecimento local",
            "Distribuição emergencial de alimentos sem ações de renda ou produção",
            "Aumento da produção agrícola sem políticas de acesso para famílias vulneráveis"
        ],
        correct: 0,
        explanation: "Combater a fome exige ações integradas: renda, produção, distribuição, nutrição e proteção social."
    },
    {
        q: "Qual é o risco de focar apenas no aumento da produção de alimentos?",
        options: [
            "Produzir mais não garante acesso justo, qualidade nutricional ou sustentabilidade ambiental",
            "A produção maior sempre elimina a fome automaticamente",
            "A produção agrícola deixa de ser importante para a segurança alimentar"
        ],
        correct: 0,
        explanation: "A fome não depende só da quantidade produzida, mas também de acesso, renda, distribuição, preços e qualidade."
    },
    {
        q: "Qual alternativa melhor explica a relação entre nutrição e segurança alimentar?",
        options: [
            "Segurança alimentar inclui acesso a alimentos suficientes e também nutricionalmente adequados",
            "Segurança alimentar significa apenas consumir calorias suficientes diariamente",
            "Nutrição adequada depende apenas da escolha individual de cada pessoa"
        ],
        correct: 0,
        explanation: "Não basta ter comida. A alimentação precisa oferecer nutrientes necessários para saúde e desenvolvimento."
    },
    {
        q: "Qual prática agrícola está mais associada à conservação do solo?",
        options: [
            "Rotação de culturas e cobertura vegetal",
            "Cultivo contínuo de uma única cultura no mesmo solo",
            "Expansão da área cultivada sem manejo de nutrientes"
        ],
        correct: 0,
        explanation: "Rotação de culturas e cobertura vegetal ajudam a preservar nutrientes, reduzir erosão e melhorar a saúde do solo."
    },
    {
        q: "Qual alternativa representa melhor uma cadeia alimentar sustentável?",
        options: [
            "Produção responsável, transporte eficiente, menor desperdício e acesso justo aos alimentos",
            "Produção em larga escala, distribuição rápida e foco em alimentos de maior valor comercial",
            "Venda de alimentos baratos, mesmo sem avaliar origem, perdas ou impacto ambiental"
        ],
        correct: 0,
        explanation: "Uma cadeia alimentar sustentável considera todas as etapas: produção, transporte, consumo, perdas, acesso e impacto ambiental."
    },
    {
        q: "Qual detalhe torna uma resposta incorreta sobre o combate à fome?",
        options: [
            "Afirmar que a fome pode ser resolvida apenas com aumento da produção agrícola",
            "Defender políticas de renda junto com programas de alimentação",
            "Valorizar agricultura familiar, merenda escolar e redução do desperdício"
        ],
        correct: 0,
        explanation: "Aumentar produção ajuda, mas não resolve sozinho. O acesso aos alimentos depende de renda, distribuição, preços e políticas públicas."
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