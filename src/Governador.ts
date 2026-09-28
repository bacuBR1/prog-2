import { DadosPolitico, Esfera, Poder, Politico } from "./Politico";

export class Governador extends Politico {
  public constructor(
    dados: DadosPolitico,
    private quantidadeSecretarios: number,
    private nomeEstado: string,
  ) {
    super(dados, Esfera.Estadual, Poder.Executivo);
    if (quantidadeSecretarios < 0) throw new Error("Quantidade de secretarios invalida.");
    if (!nomeEstado.trim()) throw new Error("Estado nao pode ficar vazio.");
  }

  public getQuantidadeSecretarios(): number {
    return this.quantidadeSecretarios;
  }

  public setQuantidadeSecretarios(valor: number): void {
    if (valor < 0) throw new Error("Quantidade de secretarios invalida.");
    this.quantidadeSecretarios = valor;
  }

  public getNomeEstado(): string {
    return this.nomeEstado;
  }

  public setNomeEstado(valor: string): void {
    if (!valor.trim()) throw new Error("Estado nao pode ficar vazio.");
    this.nomeEstado = valor;
  }

  public exercerMandato(): void {
    console.log(
      `[Mandato de ${this.getNome()} - ${this.getNomeEstado()}] Sanciona e veta leis estaduais, decreta estado de calamidade e envia PEC a Assembleia Legislativa.`,
    );
  }

  public gerirPoliciaMilitar(): string {
    return `Gerir a Policia Militar do Estado de ${this.getNomeEstado()}.`;
  }

  public administrarRodoviasEstaduais(): string {
    return `Administrar as rodovias estaduais de ${this.getNomeEstado()}.`;
  }

  public coordenarEducacaoSaude(): string {
    return `Coordenar a educacao e a saude do Estado de ${this.getNomeEstado()}.`;
  }

  public elaborarEnviarOrcamentoEstadual(): string {
    return `Elaborar e enviar a Assembleia Legislativa o PPA, a LDO e a proposta da LOA de ${this.getNomeEstado()}.`;
  }

  public listarAcoes(): string[] {
    return [
      this.gerirPoliciaMilitar(),
      this.administrarRodoviasEstaduais(),
      this.coordenarEducacaoSaude(),
      this.elaborarEnviarOrcamentoEstadual(),
    ];
  }

  public cadastroResumo(): string {
    return `${super.cadastroResumo()}\nEstado: ${this.getNomeEstado()}\nSecretarios: ${this.getQuantidadeSecretarios()}`;
  }
}