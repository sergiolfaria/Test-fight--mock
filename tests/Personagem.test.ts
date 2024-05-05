import { performAttackDireto, performAttackInversao } from "../src/PerformAttack";
import { Personagem } from "../src/Personagem";
import { mockAtacante, mockDefesor } from './mock';


describe('testando Personagens de um jogo de luta', () => {
    let personagem: Personagem;

    beforeEach(() => {
        personagem = new Personagem("Nome", 100, 50, 75);
    });

    it('a. Valida personagem com nome vazio', () => {
        const personagemInvalida = new Personagem("", 100, 50, 75);
        expect(personagem.ValidarPersonagem(personagemInvalida)).toBe(false);
    });

    it('b. Testa que verifica o comportamento da função com um personagem com a vida igual a zero', () => {
        const personagemInvalida = new Personagem("Nome", 0, 50, 75);
        expect(personagem.ValidarPersonagem(personagemInvalida)).toBe(false);
    });

    it('c. Um teste que verifica o comportamento da função com um personagem com a força igual a zero', () => {
        const personagemInvalida = new Personagem("Nome", 100, 50, 0);
        expect(personagem.ValidarPersonagem(personagemInvalida)).toBe(false);
    });

    it('d. Teste que verifique o comportamento da função com um personagem com a defesa igual a zero', () => {
        const personagemInvalida = new Personagem("Nome", 100, 0, 75);
        expect(personagem.ValidarPersonagem(personagemInvalida)).toBe(false);
    });

    it('e. Teste que verifica o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo', () => {
        const personagemInvalida = new Personagem("Nome", -100, 50, 75);
        expect(personagem.ValidarPersonagem(personagemInvalida)).toBe(false);
    });

    it('f. teste que verifica o comportamento da função com um personagem com as informações válidas', () => {
        expect(personagem.ValidarPersonagem(personagem)).toBe(true);
    });

    const mockValidarPersonagem = jest.fn(() => false);

    describe('testa os perform attack direto', () => {
        const Atacante = new Personagem(mockAtacante.nome, mockAtacante.vida, mockAtacante.forca, mockAtacante.defesa);
        const defensor = new Personagem(mockDefesor.nome, mockDefesor.vida, mockDefesor.forca, mockDefesor.defesa);



        it('testa se a vida do defensor chegara ao zero após o ataque', () => {
            performAttackDireto(Atacante, defensor);
            expect(defensor.vida).toBe(0);

        });


        const atacante = new Personagem(mockAtacante.nome, mockAtacante.vida, mockAtacante.forca, mockAtacante.defesa);
        const invaliddefensor = new Personagem(mockDefesor.nome, mockDefesor.vida, mockDefesor.forca, mockDefesor.defesa);


        it('irá realizar um erro caso algum personagem for inválido', () => {
         
            expect(atacante.ValidarPersonagem(atacante)).toBe(true);

            expect(invaliddefensor.ValidarPersonagem(invaliddefensor)).toBe(true);

            expect(() => {
                performAttackInversao(atacante, invaliddefensor, mockValidarPersonagem);
            }).toThrow('Invalid Character');
            expect(mockValidarPersonagem).toHaveBeenCalledTimes(1); 
        });
    });

});


