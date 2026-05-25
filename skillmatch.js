
// ==========================================
// CANDIDATO
// ==========================================

const candidato = {
    nome: "Gabriel Carlos de Souza",
    area: "Creative Front-End Developer ⚛︎ Background em Indústria Criativa | Suporte T.I",

    habilidades: [
        "HTML",
        "CSS",
        "JavaScript",
		"React",
		"TypeScript",
		"API",
		"Node.js",
        "Git",
		"Atlassian Jira",
        "Responsividade",
        "Funções",
        "Objetos"
    ]
};

// ==========================================
// CLASSES
// ==========================================

class Pessoa {

    constructor(nome, area) {

        this.nome = nome;
        this.area = area;
    }

    apresentar() {

        return `${this.nome} atua na área de ${this.area}`;
    }
}

class Candidato extends Pessoa {

    constructor(nome, area, habilidades) {

        super(nome, area);

        this.habilidades = habilidades;
    }

    listarHabilidades() {

        return this.habilidades.join(", ");
    }
}

// ==========================================
// CLASSE VAGA
// ==========================================

class Vaga {

    constructor(
        id,
        empresa,
        cargo,
        requisitos,
        salario,
        modalidade
    ) {

        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
    }
}

// ==========================================
// HERANÇA
// ==========================================

class VagaFrontEnd extends Vaga {

    constructor(
        id,
        empresa,
        cargo,
        requisitos,
        salario,
        modalidade
    ) {

        super(
            id,
            empresa,
            cargo,
            requisitos,
            salario,
            modalidade
        );
    }

    mostrarResumo() {

        return `${this.empresa} - ${this.cargo}`;
    }
}

// ==========================================
// INSTÂNCIA DO CANDIDATO
// ==========================================

const candidatoClasse = new Candidato(
    candidato.nome,
    candidato.area,
    candidato.habilidades
);

// ==========================================
// APRESENTAÇÃO
// ==========================================

console.log("====================================");
console.log("CANDIDATO");
console.log("====================================");

console.log(
    candidatoClasse.apresentar()
);

console.log(
    "Habilidades:",
    candidatoClasse.listarHabilidades()
);

// ==========================================
// ARRAY DE VAGAS
// ==========================================

const vagas = [

    // ALTA COMPATIBILIDADE

    new VagaFrontEnd(
        1,
        "WebSolutions",
        "Front-End Júnior",

        [
            "HTML",
            "CSS",
            "JavaScript",
            "Git",
            "Responsividade",
            "Funções",
            "React"
        ],

        "R$ 2800",
        "Remoto"
    ),

    // MÉDIA COMPATIBILIDADE

    new VagaFrontEnd(
        2,
        "DevConnect",
        "Desenvolvedor Front-End",

        [
            "HTML",
            "CSS",
            "React",
            "API",
            "Node.js",
            "TypeScript"
        ],

        "R$ 3200",
        "Híbrido"
    ),

    // BAIXA COMPATIBILIDADE

    new VagaFrontEnd(
        3,
        "CodeWave",
        "Programador JavaScript Jr",

        [
            "Python",
            "Docker",
            "AWS",
            "MongoDB",
            "JavaScript"
        ],

        "R$ 3500",
        "Presencial"
    )
];

// ==========================================
// MAP
// ==========================================

const nomesEmpresas = vagas.map(
    vaga => vaga.empresa
);

console.log("\n====================================");
console.log("EMPRESAS CADASTRADAS");
console.log("====================================");

console.log(nomesEmpresas);

// ==========================================
// MAP + THIS
// ==========================================

const resumoVagas = vagas.map(
    vaga => vaga.mostrarResumo()
);

console.log("\n====================================");
console.log("VAGAS ENCONTRADAS");
console.log("====================================");

resumoVagas.forEach(vaga => {

    console.log(vaga);
});

// ==========================================
// FIND
// ==========================================

const vagaRemota = vagas.find(
    vaga => vaga.modalidade === "Remoto"
);

console.log("\n====================================");
console.log("BUSCA DE VAGA REMOTA");
console.log("====================================");

console.log(
    vagaRemota.mostrarResumo()
);

// ==========================================
// EVERY
// ==========================================

const habilidadesValidas =
    candidato.habilidades.every(

        habilidade =>
            typeof habilidade === "string"
    );

console.log("\n====================================");
console.log("VALIDAÇÃO DAS HABILIDADES");
console.log("====================================");

console.log(
    "Todas habilidades cadastradas são válidas?"
);

console.log(
    habilidadesValidas ? "Sim" : "Não"
);

// ==========================================
// SOME
// ==========================================

const habilidadesCompativeis = vagas.some(vaga =>

    vaga.requisitos.some(requisito =>

        candidato.habilidades.includes(
            requisito
        )
    )
);

console.log("\n====================================");
console.log("COMPATIBILIDADE INICIAL");
console.log("====================================");

console.log(
    "O candidato tem habilidades compatíveis com as vagas?"
);

console.log(
    habilidadesCompativeis ? "Sim" : "Não"
);

// ==========================================
// CLOSURE
// ==========================================

function criarContador() {

    let totalAnalises = 0;

    return function () {

        totalAnalises++;

        return totalAnalises;
    };
}

const contadorAnalises =
    criarContador();

// ==========================================
// CALLBACK
// ==========================================

function processarVagas(
    vagas,
    callback
) {

    vagas.forEach(vaga => {

        callback(vaga);
    });
}

// ==========================================
// CLASSIFICAÇÃO
// ==========================================

function classificarCompatibilidade(
    percentual
) {

    switch (true) {

        case percentual >= 80:

            return "Alta compatibilidade";

        case percentual >= 50:

            return "Média compatibilidade";

        default:

            return "Baixa compatibilidade";
    }
}

// ==========================================
// SIMULAÇÃO DE SERVIDOR
// ==========================================

function carregarVagas() {

    console.log(
        "\nCarregando vagas compatíveis com o perfil selecionado...\n"
    );

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(vagas);

        }, 2000);
    });
}

// ==========================================
// ANÁLISE DAS VAGAS
// ==========================================

async function analisarVagas() {

    const vagasCarregadas =
        await carregarVagas();

    let melhorVaga = null;

    const resultados = [];

    processarVagas(
        vagasCarregadas,

        (vaga) => {

            // FILTER

            const habilidadesEncontradas =

                vaga.requisitos.filter(

                    requisito =>

                        candidato.habilidades.includes(
                            requisito
                        )
                );

            // FILTER

            const habilidadesFaltantes =

                vaga.requisitos.filter(

                    requisito =>

                        !candidato.habilidades.includes(
                            requisito
                        )
                );

            // COMPATIBILIDADE

            const compatibilidade =

                (
                    habilidadesEncontradas.length /
                    vaga.requisitos.length
                ) * 100;

            // CLASSIFICAÇÃO

            const classificacao =

                classificarCompatibilidade(
                    compatibilidade
                );

            resultados.push({

                empresa: vaga.empresa,

                compatibilidade
            });

            // RESULTADO

            console.log(
                "\n===================================="
            );

            console.log(
                `Empresa: ${vaga.empresa}`
            );

            console.log(
                `Cargo: ${vaga.cargo}`
            );

            console.log(
                `Salário: ${vaga.salario}`
            );

            console.log(
                `Modalidade: ${vaga.modalidade}`
            );

            console.log(
                `Compatibilidade: ${compatibilidade.toFixed(0)}%`
            );

            console.log(
                `Classificação: ${classificacao}`
            );

            console.log(
                "Habilidades encontradas:",
                habilidadesEncontradas.join(", ")
            );

            console.log(
                "Habilidades faltantes:",
                habilidadesFaltantes.join(", ")
            );

            console.log(
                `Análises realizadas: ${contadorAnalises()}`
            );

            // MELHOR VAGA

            if (

                !melhorVaga ||

                compatibilidade >
                melhorVaga.compatibilidade

            ) {

                melhorVaga = {

                    empresa: vaga.empresa,

                    cargo: vaga.cargo,

                    compatibilidade:
                        compatibilidade.toFixed(0)
                };
            }
        }
    );

    // ======================================
    // REDUCE
    // ======================================

    const somaCompatibilidade =

        resultados.reduce(

            (acc, vaga) =>

                acc + vaga.compatibilidade,

            0
        );

    const mediaCompatibilidade =

        somaCompatibilidade /
        resultados.length;

    console.log("\n====================================");
    console.log("MÉDIA DE COMPATIBILIDADE");
    console.log("====================================");

    console.log(
        `Média geral: ${mediaCompatibilidade.toFixed(0)}%`
    );

    // ======================================
    // VAGA MAIS COMPATÍVEL
    // ======================================

    console.log("\n====================================");
    console.log("VAGA MAIS COMPATÍVEL");
    console.log("====================================");

    console.log(
        `Empresa: ${melhorVaga.empresa}`
    );

    console.log(
        `Cargo: ${melhorVaga.cargo}`
    );

    console.log(
        `Compatibilidade: ${melhorVaga.compatibilidade}%`
    );

    // ======================================
    // RECOMENDAÇÃO DE ESTUDO
    // ======================================

    const todasFaltantes =

        vagasCarregadas.flatMap(vaga =>

            vaga.requisitos.filter(

                requisito =>

                    !candidato.habilidades.includes(
                        requisito
                    )
            )
        );

    const recomendacoes =

        [...new Set(todasFaltantes)];

    console.log("\n====================================");
    console.log("RECOMENDAÇÃO DE ESTUDO");
    console.log("====================================");

    console.log(
        `Priorize estudar: ${recomendacoes.join(", ")}`
    );
}

// ==========================================
// EXECUTAR SISTEMA
// ==========================================

analisarVagas();