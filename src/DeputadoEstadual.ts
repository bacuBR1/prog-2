import { DadosPolitico, Esfera, Poder, Politico } from "./Politico";

export class DeputadoEstadual extends Politico {
  private comissoes: string[];

  public constructor(
    dados: DadosPolitico,
    private nomeEstado: string,
    comissoes: string[],
  ) {
    super(dados, Esfera.Estadual, Poder.Legislativo);
    if (!nomeEstado.trim()) throw new Error("Estado nao pode ficar vazio.");
    if (comissoes.length < 1) {
      throw new Error("O deputado estadual deve participar de ao menos uma comissao.");
    }
    this.comissoes = [...comissoes];
  }

  public getNomeEstado(): string {
    return this.nomeEstado;
  }

  public getComissoes(): string[] {
    return [...this.comissoes];
  }

  public adicionarComissao(comissao: string): void {
    if (!comissao.trim()) throw new Error("Nome da comissao invalido.");
    this.comissoes.push(comissao);
  }

  public exercerMandato(): void {
    console.log(
      `[Mandato de ${this.getNome()} - ${this.getNomeEstado()}] Legisla sobre assuntos de interesse do Estado e fiscaliza o governador.`,
    );
  }

  public votarPpaLoaLdoEstadual(): string {
    return `Votar o PPA, a LOA e a LDO do Estado de ${this.getNomeEstado()}.`;
  }

  public proporEmendasConstituicaoEstadual(): string {
    return `Propor emendas a Constituicao estadual de ${this.getNomeEstado()}.`;
  }

  public criarCpiEstadual(): string {
    return `Criar CPI estadual em ${this.getNomeEstado()}.`;
  }

  public listarAcoes(): string[] {
    return [
      this.votarPpaLoaLdoEstadual(),
      this.proporEmendasConstituicaoEstadual(),
      this.criarCpiEstadual(),
    ];
  }

  public cadastroResumo(): string {
    return `${super.cadastroResumo()}\nEstado: ${this.getNomeEstado()}\nComissoes: ${this.getComissoes().join("; ")}`;
  }
}