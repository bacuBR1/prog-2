import { DadosPolitico, Esfera, Poder, Politico } from "./Politico";

export class Senador extends Politico {
  public constructor(
    dados: DadosPolitico,
    private nomeEstado: string,
    private anoEleito: number,
  ) {
    super(dados, Esfera.Federal, Poder.Legislativo);
    if (!nomeEstado.trim()) throw new Error("Estado nao pode ficar vazio.");
  }

  public getNomeEstado(): string {
    return this.nomeEstado;
  }

  public getAnoEleito(): number {
    return this.anoEleito;
  }

  public exercerMandato(): void {
    console.log(
      `[Mandato de ${this.getNome()} - ${this.getNomeEstado()}] Sabatina e aprova autoridades, legisla sobre leis federais e autoriza operacoes financeiras externas.`,
    );
  }

  public aprovarAutoridadesAltoEscalao(): string {
    return "Aprovar autoridades de alto escalao, como ministros do STF e o Procurador-Geral da Republica.";
  }

  public julgarCrimesResponsabilidade(): string {
    return "Julgar crimes de responsabilidade.";
  }

  public representarInteressesEstado(): string {
    return `Representar os interesses do Estado de ${this.getNomeEstado()}.`;
  }

  public autorizarOperacoesFinanceirasExternas(): string {
    return "Autorizar operacoes financeiras externas.";
  }

  public listarAcoes(): string[] {
    return [
      this.aprovarAutoridadesAltoEscalao(),
      this.julgarCrimesResponsabilidade(),
      this.representarInteressesEstado(),
      this.autorizarOperacoesFinanceirasExternas(),
    ];
  }

  public cadastroResumo(): string {
    return `${super.cadastroResumo()}\nEstado: ${this.getNomeEstado()}\nAno em que foi eleito: ${this.getAnoEleito()}`;
  }
}