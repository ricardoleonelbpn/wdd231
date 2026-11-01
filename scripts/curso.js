const cursos = [
    {
        assunto: 'CSE',
        numero: 110,
        titulo: 'Introdução à Programação',
        creditos: 2,
        certificado: 'Programação Web e de Computadores',
        descricao: 'Este curso apresentará aos alunos a programação. Ele apresentará os elementos básicos das linguagens de programação (variáveis, decisões, cálculos, loops, arrays e entrada/saída) e como usá-los para resolver problemas.',
        tecnologia: ['Python'],
        concluido: true
    },
    {
        assunto: 'WDD',
        numero: 130,
        titulo: 'Fundamentos da Web',
        creditos: 2,
        certificado: 'Programação Web e de Computadores',
        descricao: 'Este curso apresenta aos alunos a World Wide Web e as carreiras em design e desenvolvimento de websites.',
        tecnologia: ['HTML', 'CSS'],
        concluido: true
    },
    {
        assunto: 'CSE',
        numero: 111,
        titulo: 'Programação com Funções',
        creditos: 2,
        certificado: 'Programação Web e de Computadores',
        descricao: 'Os alunos de CSE 111 tornam-se programadores de computador mais organizados, eficientes e poderosos ao aprenderem a pesquisar e chamar funções escritas por outros.',
        tecnologia: ['Python'],
        concluido: true
    },
    {
        assunto: 'CSE',
        numero: 210,
        titulo: 'Programação com Classes',
        creditos: 2,
        certificado: 'Programação Web e de Computadores',
        descricao: 'Este curso apresentará a noção de classes e objetos. Ele apresentará o encapsulamento em um nível conceitual. Também abordará herança e polimorfismo.',
        tecnologia: ['C#'],
        concluido: false
    },
    {
        assunto: 'WDD',
        numero: 131,
        titulo: 'Fundamentos da Web Dinâmica',
        creditos: 2,
        certificado: 'Programação Web e de Computadores',
        descricao: 'Este curso se baseia em experiências anteriores em fundamentos da Web e programação. Os alunos aprenderão a criar sites dinâmicos que usam JavaScript para responder a eventos, atualizar conteúdo e criar experiências de usuário responsivas.',
        tecnologia: ['HTML', 'CSS', 'JavaScript'],
        concluido: false
    },
    {
        assunto: 'WDD',
        numero: 231,
        titulo: 'Desenvolvimento Web Frontend I',
        creditos: 2,
        certificado: 'Programação Web e de Computadores',
        descricao: 'Este curso se baseia na experiência prévia com Fundamentos da Web Dinâmica e programação. Os alunos se concentrarão em experiência do usuário, acessibilidade, conformidade, otimização de desempenho e uso básico de APIs.',
        tecnologia: ['HTML', 'CSS', 'JavaScript'],
        concluido: false
    }
];

//Exiba os cursos dinamicamente

function mostrarCursos(lista) {

    const elementoCursos = document.querySelector("#lista-cursos");

    elementoCursos.innerHTML = "";

    lista.forEach(curso => {

        const cartao = document.createElement("div");

        cartao.classList.add("curso");

        // Verifica se o curso foi concluído
        if (curso.concluido === true) {
            cartao.classList.add("concluido");
        }

        cartao.innerHTML = `
            <h3>${curso.assunto} ${curso.numero}</h3>
            <h4>${curso.titulo}</h4>
            <p>${curso.creditos} créditos</p>
            <p>${curso.tecnologia.join(", ")}</p>
            <p>${curso.concluido ? "Concluído ✓" : "Não concluído"}</p>
        `;

        elementoCursos.appendChild(cartao);

    });

}

//Implemente os filtros com filter()

function filtrarCursos(categoria) {

    let cursosFiltrados = cursos;

    if (categoria === "WDD") {

        cursosFiltrados = cursos.filter(curso =>
            curso.assunto === "WDD"
        );

    } else if (categoria === "CSE") {

        cursosFiltrados = cursos.filter(curso =>
            curso.assunto === "CSE"
        );

    }

    mostrarCursos(cursosFiltrados);

    calcularCreditos(cursosFiltrados);

    calcularCreditosConcluidos(cursosFiltrados);

}
document.querySelector("#todos").addEventListener("click", () => {
    filtrarCursos("TODOS");
});

document.querySelector("#wdd").addEventListener("click", () => {
    filtrarCursos("WDD");
});

document.querySelector("#cse").addEventListener("click", () => {
    filtrarCursos("CSE");
});

//Calcule os créditos usando reduce()

function calcularCreditos(lista) {

    const total = lista.reduce((soma, curso) => {
        return soma + curso.creditos;
    }, 0);

    document.querySelector("#total-creditos").textContent =
        `Total de créditos: ${total}`;
}

function calcularCreditosConcluidos(lista) {

    const totalConcluido = lista
        .filter(curso => curso.concluido === true)
        .reduce((soma, cursos) => soma + cursos.creditos, 0);
    
    document.querySelector("#creditos-concluidos").textContent =
        `Créditos concluidos: ${totalConcluido}`;
        
}

//Inicialize a página
mostrarCursos(cursos);
calcularCreditos(cursos);

