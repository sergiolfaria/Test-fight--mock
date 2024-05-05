export class Personagem {
  nome: string;
  vida: number;
  defesa: number;
  forca: number;

  constructor(nome: string, vida: number, defesa: number, forca: number) {
    this.nome = nome;
    this.vida = vida;
    this.defesa = defesa;
    this.forca = forca;
  }

  ValidarPersonagem = (input: Personagem): boolean => {
    if (
      input.nome === "" ||
      input.vida <= 0 ||
      input.defesa <= 0 ||
      input.forca <= 0
    ) {
      return false;
    }
    return true;
  };

  
}


