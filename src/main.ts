import { DeputadoEstadual } from "./DeputadoEstadual";
import { DeputadoFederal } from "./DeputadoFederal";
import { Governador } from "./Governador";
import { Politico } from "./Politico";
import { Presidente } from "./Presidente";
import { Senador } from "./Senador";

const SUBSIDIO_CONGRESSO = 46366.19;
const SUBSIDIO_DEP_ESTADUAL = 34774.64;
const SUBSIDIO_GOV_PE = 22000;
const SUBSIDIO_GOV_SP = 36301.53;

function linha(): void {
  console.log("-".repeat(78));
}

function demonstrar(politico: Politico): void {
  linha();
  console.log(politico.cadastroResumo());
  politico.exercerMandato();
  console.log("Acoes:");
  politico.listarAcoes().forEach((acao, indice) => console.log(`  ${indice + 1}. ${acao}`));
}

const presidente = new Presidente(
  {
    nome: "Luiz Inacio Lula da Silva",
    partido: "PT",
    nomeLocalTrabalho: "Palacio do Planalto",
    enderecoLocalTrabalho: "Praca dos Tres Poderes, Brasilia - DF",
    remuneracao: SUBSIDIO_CONGRESSO,
    projetos: ["Novo PAC", "Brasil sem Fome", "Marco da TV 3.0"],
  },
  38,
);

const governadoraPE = new Governador(
  {
    nome: "Raquel Lyra",
    partido: "PSD",
    nomeLocalTrabalho: "Palacio do Campo das Princesas",
    enderecoLocalTrabalho: "Praca da Republica, s/n, Recife - PE",
    remuneracao: SUBSIDIO_GOV_PE,
    projetos: ["PE na Escola", "Pavimentacao de rodovias do Agreste"],
  },
  22,
  "Pernambuco",
);

const governadorSP = new Governador(
  {
    nome: "Tarcisio de Freitas",
    partido: "Republicanos",
    nomeLocalTrabalho: "Palacio dos Bandeirantes",
    enderecoLocalTrabalho: "Av. Morumbi, 4500, Sao Paulo - SP",
    remuneracao: SUBSIDIO_GOV_SP,
    projetos: ["Expansao das linhas de metro", "Concessao de rodovias estaduais"],
  },
  26,
  "Sao Paulo",
);

const federaisPE = [
  new DeputadoFederal(
    {
      nome: "Pedro Campos",
      partido: "PSB",
      nomeLocalTrabalho: "Camara dos Deputados",
      enderecoLocalTrabalho: "Praca dos Tres Poderes, Brasilia - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Fomento a industria naval de PE", "Transposicao do Sao Francisco"],
    },
    "Governista",
  ),
  new DeputadoFederal(
    {
      nome: "Clarissa Tercio",
      partido: "PP",
      nomeLocalTrabalho: "Camara dos Deputados",
      enderecoLocalTrabalho: "Praca dos Tres Poderes, Brasilia - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Valorizacao da familia", "Seguranca publica"],
    },
    "Conservadora",
  ),
  new DeputadoFederal(
    {
      nome: "Carlos Veras",
      partido: "PT",
      nomeLocalTrabalho: "Camara dos Deputados",
      enderecoLocalTrabalho: "Praca dos Tres Poderes, Brasilia - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Reforma agraria no Sertao", "Agricultura familiar"],
    },
    "Sindical",
  ),
];

const federaisSP = [
  new DeputadoFederal(
    {
      nome: "Tabata Amaral",
      partido: "PSB",
      nomeLocalTrabalho: "Camara dos Deputados",
      enderecoLocalTrabalho: "Praca dos Tres Poderes, Brasilia - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Fundeb permanente", "Educacao em tempo integral"],
    },
    "Educacao",
  ),
  new DeputadoFederal(
    {
      nome: "Kim Kataguiri",
      partido: "Uniao Brasil",
      nomeLocalTrabalho: "Camara dos Deputados",
      enderecoLocalTrabalho: "Praca dos Tres Poderes, Brasilia - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Desburocratizacao tributaria", "Controle de gastos publicos"],
    },
    "Liberal",
  ),
];

const estaduaisPE = [
  new DeputadoEstadual(
    {
      nome: "Delegada Gleide Angelo",
      partido: "PSB",
      nomeLocalTrabalho: "Assembleia Legislativa de Pernambuco",
      enderecoLocalTrabalho: "Rua da Uniao, 397, Recife - PE",
      remuneracao: SUBSIDIO_DEP_ESTADUAL,
      projetos: ["Lei de protecao a mulheres", "Reestruturacao da Policia Civil"],
    },
    "Pernambuco",
    ["Comissao de Seguranca Publica", "Comissao de Constituicao e Justica"],
  ),
  new DeputadoEstadual(
    {
      nome: "Joao Paulo",
      partido: "PT",
      nomeLocalTrabalho: "Assembleia Legislativa de Pernambuco",
      enderecoLocalTrabalho: "Rua da Uniao, 397, Recife - PE",
      remuneracao: SUBSIDIO_DEP_ESTADUAL,
      projetos: ["Desenvolvimento urbano", "Cultura pernambucana"],
    },
    "Pernambuco",
    ["Comissao de Cultura", "Comissao de Desenvolvimento Economico"],
  ),
  new DeputadoEstadual(
    {
      nome: "Antonio Coelho",
      partido: "Uniao Brasil",
      nomeLocalTrabalho: "Assembleia Legislativa de Pernambuco",
      enderecoLocalTrabalho: "Rua da Uniao, 397, Recife - PE",
      remuneracao: SUBSIDIO_DEP_ESTADUAL,
      projetos: ["Incentivo ao agronegocio do Sertao", "Saneamento no Agreste"],
    },
    "Pernambuco",
    ["Comissao de Agricultura"],
  ),
];

const estaduaisSP = [
  new DeputadoEstadual(
    {
      nome: "Andre do Prado",
      partido: "Republicanos",
      nomeLocalTrabalho: "Assembleia Legislativa de Sao Paulo",
      enderecoLocalTrabalho: "Av. Pedro Alvares Cabral, 201, Sao Paulo - SP",
      remuneracao: SUBSIDIO_DEP_ESTADUAL,
      projetos: ["Reforma administrativa estadual", "Parcerias publico-privadas"],
    },
    "Sao Paulo",
    ["Comissao de Constituicao e Justica", "Comissao de Financas e Orcamento"],
  ),
  new DeputadoEstadual(
    {
      nome: "Emidio de Souza",
      partido: "PT",
      nomeLocalTrabalho: "Assembleia Legislativa de Sao Paulo",
      enderecoLocalTrabalho: "Av. Pedro Alvares Cabral, 201, Sao Paulo - SP",
      remuneracao: SUBSIDIO_DEP_ESTADUAL,
      projetos: ["Transporte metropolitano", "Saude na Grande Sao Paulo"],
    },
    "Sao Paulo",
    ["Comissao de Saude", "Comissao de Transportes"],
  ),
];

const senadores = [
  new Senador(
    {
      nome: "Humberto Costa",
      partido: "PT",
      nomeLocalTrabalho: "Senado Federal",
      enderecoLocalTrabalho: "Praca dos Tres Poderes, Brasilia - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Mais Medicos permanente", "Fortalecimento do SUS"],
    },
    "Pernambuco",
    2010,
  ),
  new Senador(
    {
      nome: "Teresa Leitao",
      partido: "PT",
      nomeLocalTrabalho: "Senado Federal",
      enderecoLocalTrabalho: "Praca dos Tres Poderes, Brasilia - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Valorizacao do magisterio", "Piso nacional da educacao"],
    },
    "Pernambuco",
    2022,
  ),
  new Senador(
    {
      nome: "Flavio Bolsonaro",
      partido: "PL",
      nomeLocalTrabalho: "Senado Federal",
      enderecoLocalTrabalho: "Praca dos Tres Poderes, Brasilia - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Reducao de impostos", "Seguranca nas fronteiras"],
    },
    "Rio de Janeiro",
    2018,
  ),
];

console.log("=".repeat(78));
console.log("SISTEMA DE CADASTRO DE POLITICOS - ELEICOES 2026");
console.log("IFPE Campus Jaboatao dos Guararapes | Programacao 2 - POO");
console.log("=".repeat(78));

console.log("\n>>> PRESIDENTE DA REPUBLICA");
demonstrar(presidente);

console.log("\n>>> GOVERNADORES");
demonstrar(governadoraPE);
demonstrar(governadorSP);

console.log("\n>>> DEPUTADOS FEDERAIS DE PERNAMBUCO");
federaisPE.forEach(demonstrar);

console.log("\n>>> DEPUTADOS FEDERAIS DE SAO PAULO");
federaisSP.forEach(demonstrar);

console.log("\n>>> DEPUTADOS ESTADUAIS DE PERNAMBUCO");
estaduaisPE.forEach(demonstrar);

console.log("\n>>> DEPUTADOS ESTADUAIS DE SAO PAULO");
estaduaisSP.forEach(demonstrar);

console.log("\n>>> SENADORES");
senadores.forEach(demonstrar);

const todos: Politico[] = [
  presidente,
  governadoraPE,
  governadorSP,
  ...federaisPE,
  ...federaisSP,
  ...estaduaisPE,
  ...estaduaisSP,
  ...senadores,
];

linha();
console.log("POLIMORFISMO: exercerMandato() e listarAcoes() mudam conforme o cargo.");
console.log(`Total de politicos cadastrados: ${todos.length}`);
linha();