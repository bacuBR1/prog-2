export enum Esfera {
  Municipal = "Municipal",
  Estadual = "Estadual",
  Federal = "Federal",
}

export enum Poder {
  Executivo = "Executivo",
  Legislativo = "Legislativo",
  Judiciario = "Judiciario",
}

export interface DadosPolitico {
  nome: string;
  partido: string;
  nomeLocalTrabalho: string;
  enderecoLocalTrabalho: string;
  remuneracao: number;
  projetos: string[];
}

export abstract class Politico {
  private nome: string;
  private partido: string;
  private esfera: Esfera;
  private poder: Poder;
  private nomeLocalTrabalho: string;
  private enderecoLocalTrabalho: string;
  private remuneracao: number;
  private projetos: string[];

  protected constructor(dados: DadosPolitico, esfera: Esfera, poder: Poder) {
    this.nome = dados.nome;
    this.partido = dados.partido;
    this.esfera = esfera;
    this.poder = poder;
    this.nomeLocalTrabalho = dados.nomeLocalTrabalho;
    this.enderecoLocalTrabalho = dados.enderecoLocalTrabalho;
    this.remuneracao = dados.remuneracao;
    this.projetos = [...dados.projetos];
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(valor: string): void {
    if (!valor.trim()) throw new Error("Nome nao pode ficar vazio.");
    this.nome = valor;
  }

  public getPartido(): string {
    return this.partido;
  }

  public setPartido(valor: string): void {
    if (!valor.trim()) throw new Error("Partido nao pode ficar vazio.");
    this.partido = valor;
  }

  public getEsfera(): Esfera {
    return this.esfera;
  }

  public getPoder(): Poder {
    return this.poder;
  }

  public getNomeLocalTrabalho(): string {
    return this.nomeLocalTrabalho;
  }

  public setNomeLocalTrabalho(valor: string): void {
    if (!valor.trim()) throw new Error("Local de trabalho nao pode ficar vazio.");
    this.nomeLocalTrabalho = valor;
  }

  public getEnderecoLocalTrabalho(): string {
    return this.enderecoLocalTrabalho;
  }

  public setEnderecoLocalTrabalho(valor: string): void {
    if (!valor.trim()) throw new Error("Endereco nao pode ficar vazio.");
    this.enderecoLocalTrabalho = valor;
  }

  public getRemuneracao(): number {
    return this.remuneracao;
  }

  public setRemuneracao(valor: number): void {
    if (valor < 0) throw new Error("Remuneracao nao pode ser negativa.");
    this.remuneracao = valor;
  }

  public getProjetos(): string[] {
    return [...this.projetos];
  }

  public adicionarProjeto(titulo: string): void {
    if (!titulo.trim()) throw new Error("Titulo do projeto nao pode ficar vazio.");
    this.projetos.push(titulo);
  }

  protected formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  public cadastroResumo(): string {
    return [
      `Nome: ${this.getNome()}`,
      `Partido: ${this.getPartido()}`,
      `Cargo: ${this.constructor.name}`,
      `Esfera: ${this.getEsfera()} | Poder: ${this.getPoder()}`,
      `Local de trabalho: ${this.getNomeLocalTrabalho()}`,
      `Endereco: ${this.getEnderecoLocalTrabalho()}`,
      `Remuneracao: ${this.formatarMoeda(this.getRemuneracao())}`,
      `Projetos: ${this.getProjetos().length ? this.getProjetos().join("; ") : "(nenhum)"}`,
    ].join("\n");
  }

  public abstract exercerMandato(): void;
  public abstract listarAcoes(): string[];
}