import animaisDisponiveis from '../data/dataAnimais';
import recintos from '../data/dataRecintos';

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
            return recinto.bioma.includes(animal.bioma) && recinto.calcularEspacoLivre() >= animal.tamanho * quantidade;
        })

        if (recintosViaveis.length === 0) {
            return { erro: 'Não há recinto viável' };
        }

        return {
            recintosViaveis: recintosViaveis.map(recinto =>
                `Recinto ${recinto.numero} (espaço livre: ${recinto.calcularEspacoLivre()} total: ${recinto.tamanhoTotal})`
            ),
        };
    }
}

export default RecintoService;
