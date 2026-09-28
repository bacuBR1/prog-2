import { DadosPolitico, Esfera, Poder, Politico } from "./Politico";

export class DeputadoFederal extends Politico {
  private bancada: string;

  public constructor(dados: DadosPolitico, bancada: string) {
    super(dados, Esfera.Federal, Poder.Legislativo);
    if (!bancada.trim()) { throw new Error("Bancada nao pode ficar vazia.")}
    else {
    this.bancada = bancada;}
  }

  public getBancada(): string {
    return this.bancada;
  }

  public setBancada(valor: string): void {
    if (!valor.trim()) throw new Error("Bancada nao pode ficar vazia.");
    this.bancada = valor;
  }

  public exercerMandato(): void {
    console.log(
      `[Mandato de ${this.getNome()}] Legisla sobre os codigos Penal e Tributario e as leis trabalhistas, e fiscaliza o Presidente da Republica.`,
    );
  }

  public votarPecs(): string {
    return "Votar PECs (Propostas de Emenda a Constituicao Federal).";
  }

  public criarCpiNacional(): string {
    return "Criar CPI nacional (Comissao Parlamentar de Inquerito).";
  }

  public votarOrcamentoNacional(): string {
    return "Votar o PPA, a LDO e a LOA nacionais.";
  }

  public proporLeisComplementares(): string {
    return "Propor leis complementares.";
  }

  public listarAcoes(): string[] {
    return [
      this.votarPecs(),
      this.criarCpiNacional(),
      this.votarOrcamentoNacional(),
      this.proporLeisComplementares(),
    ];
  }

  public cadastroResumo(): string {
    return `${super.cadastroResumo()}\nBancada: ${this.getBancada()}`;
  }
}