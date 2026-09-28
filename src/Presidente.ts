import { DadosPolitico, Esfera, Poder, Politico } from "./Politico";

export class Presidente extends Politico {
  public constructor(dados: DadosPolitico, private quantidadeMinistros: number) {
    super(dados, Esfera.Federal, Poder.Executivo);
    if (quantidadeMinistros < 0) throw new Error("Quantidade de ministros invalida.");
  }

  public getQuantidadeMinistros(): number {
    return this.quantidadeMinistros;
  }

  public setQuantidadeMinistros(valor: number): void {
    if (valor < 0) throw new Error("Quantidade de ministros invalida.");
    this.quantidadeMinistros = valor;
  }

  public exercerMandato(): void {
    console.log(`[Mandato de ${this.getNome()}] Propoe, sanciona e veta leis e edita medidas provisorias.`);
  }

  public nomearMinistros(): string {
    return "Nomear Ministros de Estado.";
  }

  public exonerarMinistros(): string {
    return "Exonerar Ministros de Estado.";
  }

  public comandarForcasArmadas(): string {
    return "Comandar as Forcas Armadas.";
  }

  public representarPaisInternacionalmente(): string {
    return "Representar o pais em eventos internacionais.";
  }

  public elaborarEnviarOrcamentoNacional(): string {
    return "Elaborar e enviar ao Congresso o PPA, a LDO e a proposta da LOA nacionais.";
  }

  public listarAcoes(): string[] {
    return [
      this.nomearMinistros(),
      this.exonerarMinistros(),
      this.comandarForcasArmadas(),
      this.representarPaisInternacionalmente(),
      this.elaborarEnviarOrcamentoNacional(),
    ];
  }

  public cadastroResumo(): string {
    return `${super.cadastroResumo()}\nMinistros de Estado: ${this.getQuantidadeMinistros()}`;
  }
}