const perguntasOriginais = [
    {
        q: "Qual o objetivo principal da ODS 2?",
        options: ["Educação de Qualidade", "Fome Zero e Agricultura Sustentável", "Energia Limpa"],
        correct: 1,
        explanation: "A ODS 2 busca acabar com a fome, melhorar a nutrição e promover uma agricultura sustentável."
    },
    {
        q: "O que significa insegurança alimentar?",
        options: ["Comer demais", "Ter medo de cozinhar", "Não ter acesso garantido a comida"],
        correct: 2,
        explanation: "Insegurança alimentar acontece quando uma pessoa não tem acesso garantido a alimentos suficientes e nutritivos."
    },
    {
        q: "A fome mundial está ligada principalmente a qual problema?",
        options: ["Excesso de internet", "Falta de acesso a alimentos", "Muitos jogos eletrônicos"],
        correct: 1,
        explanation: "A fome acontece quando pessoas não conseguem acessar alimentos em quantidade e qualidade suficientes."
    },
    {
        q: "O que é agricultura sustentável?",
        options: ["Produzir alimentos cuidando da natureza", "Parar toda produção de comida", "Produzir alimentos sem cuidar do meio ambiente"],
        correct: 0,
        explanation: "Agricultura sustentável é produzir alimentos respeitando o solo, a água, os animais e as futuras gerações."
    },
    {
        q: "Qual alimento é considerado importante para uma boa nutrição?",
        options: ["Somente doces", "Apenas refrigerante", "Frutas e verduras"],
        correct: 2,
        explanation: "Frutas, verduras, legumes e outros alimentos naturais ajudam o corpo a receber nutrientes importantes."
    },
    {
        q: "A ODS 2 também fala sobre melhorar a:",
        options: ["Velocidade dos carros", "Nutrição", "Construção de prédios"],
        correct: 1,
        explanation: "Além de combater a fome, a ODS 2 busca melhorar a nutrição das pessoas."
    },
    {
        q: "Quem pode ajudar no combate à fome?",
        options: ["Apenas presidentes", "Somente agricultores", "Governos, empresas e sociedade"],
        correct: 2,
        explanation: "O combate à fome depende da união entre governos, empresas, comunidades e cidadãos."
    },
    {
        q: "O desperdício de alimentos é um problema porque:",
        options: ["Deixa a internet lenta", "A comida poderia alimentar outras pessoas", "Faz chover menos"],
        correct: 1,
        explanation: "Quando alimentos são desperdiçados, comida que poderia ajudar pessoas acaba sendo perdida."
    },
    {
        q: "Uma forma simples de evitar desperdício é:",
        options: ["Planejar as refeições", "Comprar mais do que precisa", "Jogar comida boa fora"],
        correct: 0,
        explanation: "Planejar refeições ajuda a comprar apenas o necessário e evita jogar alimentos fora."
    },
    {
        q: "A fome pode afetar principalmente:",
        options: ["Apenas pessoas ricas", "Crianças e pessoas em situação de vulnerabilidade", "Somente atletas profissionais"],
        correct: 1,
        explanation: "Crianças, idosos e pessoas em situação de vulnerabilidade costumam ser mais afetadas pela fome."
    },
    {
        q: "Ter uma alimentação saudável significa:",
        options: ["Comer só salgadinho", "Nunca beber água", "Comer alimentos variados e nutritivos"],
        correct: 2,
        explanation: "Uma alimentação saudável inclui variedade, equilíbrio e alimentos que ajudam o corpo a funcionar bem."
    },
    {
        q: "O pequeno agricultor é importante porque:",
        options: ["Impede as pessoas de comerem", "Ajuda na produção de alimentos", "Não tem relação com comida"],
        correct: 1,
        explanation: "Pequenos agricultores ajudam a produzir muitos alimentos consumidos pelas comunidades."
    },
    {
        q: "Qual atitude ajuda a combater a fome?",
        options: ["Desperdiçar comida", "Doar alimentos em bom estado", "Ignorar o problema"],
        correct: 1,
        explanation: "Doar alimentos em bom estado pode ajudar pessoas que estão passando por dificuldade."
    },
    {
        q: "A má nutrição acontece quando:",
        options: ["A pessoa dorme muito", "O corpo não recebe nutrientes suficientes", "A pessoa usa roupas coloridas"],
        correct: 1,
        explanation: "A má nutrição ocorre quando o corpo não recebe os nutrientes necessários para se manter saudável."
    },
    {
        q: "A ODS 2 faz parte de um conjunto de objetivos criados pela:",
        options: ["NASA", "FIFA", "ONU"],
        correct: 2,
        explanation: "A ODS 2 faz parte dos Objetivos de Desenvolvimento Sustentável criados pela ONU."
    },
    {
        q: "Qual dessas ações ajuda a agricultura sustentável?",
        options: ["Poluir rios", "Cuidar do solo", "Desmatar sem controle"],
        correct: 1,
        explanation: "Cuidar do solo ajuda a manter a produção de alimentos sem prejudicar o meio ambiente."
    },
    {
        q: "A fome zero quer dizer:",
        options: ["Que ninguém possa cozinhar", "Que todas as pessoas tenham acesso a comida adequada", "Que só exista um tipo de alimento"],
        correct: 1,
        explanation: "Fome zero significa garantir que todas as pessoas tenham acesso a alimentos suficientes e saudáveis."
    },
    {
        q: "O que pode piorar a fome em uma região?",
        options: ["Acesso à comida", "Produção sustentável", "Desigualdade social"],
        correct: 2,
        explanation: "A desigualdade social pode dificultar o acesso de muitas pessoas a alimentos de qualidade."
    },
    {
        q: "Qual destas opções representa um alimento nutritivo?",
        options: ["Bala", "Feijão", "Refrigerante"],
        correct: 1,
        explanation: "O feijão é um alimento nutritivo, rico em proteínas, ferro e outros nutrientes importantes."
    },
    {
        q: "Por que a água é importante na produção de alimentos?",
        options: ["Porque substitui todos os alimentos", "Porque impede a agricultura", "Porque ajuda no cultivo das plantas"],
        correct: 2,
        explanation: "A água é essencial para o crescimento das plantas e para a produção de muitos alimentos."
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
const questions = prepararPerguntas(perguntasOriginais);

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