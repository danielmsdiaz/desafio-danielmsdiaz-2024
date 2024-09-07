import animaisDisponiveis from '../data/dataAnimais.js';
import recintos from '../data/dataRecintos.js';
import Utils from '../utils/utils.js';

class RecintoService {
    constructor() {
        this.recintos = recintos;
    }

    analisaRecintos(nomeAnimal, quantidade) {
        const animal = animaisDisponiveis[nomeAnimal.toUpperCase()];
        
        if (!animal) {
            return { erro: 'Animal inválido' };
        }

        if (quantidade <= 0) {
            return { erro: 'Quantidade inválida' };
        }

        const recintosViaveis = this.recintos.filter(recinto => {
            return recinto.calcularEspacoLivre() >= (animal.getTamanho() * quantidade) + (recinto.todosAnimaisMesmaEspecie(animal) ? 0 : 1)
                && Utils.verficarSeBiomaCompativel(animal.getBioma(), recinto.getBioma())
                && Utils.verificarConfortoAnimais(animal, recinto, quantidade);
        });
        
        if (recintosViaveis.length === 0) {
            return { erro: 'Não há recinto viável' };
        }

        return {
            recintosViaveis: recintosViaveis.map(recinto =>
                `Recinto ${recinto.getNumero()} (espaço livre: ${recinto.calcularEspacoPosInclusao(quantidade, animal)} total: ${recinto.getTamanhoTotal()})`
            ),
        };
    }
}

export default RecintoService;
