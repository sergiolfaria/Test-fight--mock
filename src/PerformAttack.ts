import { Personagem } from "./Personagem";

export const performAttackDireto = (Atacante: Personagem, Defensor: Personagem): void => {
    if (!Atacante.ValidarPersonagem(Atacante) || !Defensor.ValidarPersonagem(Defensor)) {
      throw new Error('Invalid Character');
    }
  
    const damage = Atacante.forca - Defensor.defesa;
      console.log(Atacante.forca, Defensor.defesa , damage )
      Defensor.vida = damage;
    
  };
  
  export const performAttackInversao = (Atacante: Personagem, Defensor: Personagem, validator: (character: Personagem) => boolean): void => {
    if (!validator(Atacante) || !validator(Defensor)) {
      throw new Error('Invalid Character');
    }
  
    const damage = Atacante.forca - Defensor.defesa;
    if (damage > 0) {
      Defensor.vida -= damage;
    }
  };