class Recinto {
    constructor(numero, bioma = [], tamanhoTotal, animaisExistentes = []) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.animaisExistentes = animaisExistentes;
    }

    getNumero() {
        return this.numero;
    }

    getBioma() {
        return this.bioma;
    }

    getTamanhoTotal() {
        return this.tamanhoTotal;
    }

    getAnimaisExistentes() {
        return this.animaisExistentes || [];
    }

    todosAnimaisMesmaEspecie(animal) {
        return this.getAnimaisExistentes().every(a => a.especie === animal.getEspecie());
    }
    
    calcularEspacoLivre() {
        const espacoOcupado = this.animaisExistentes.reduce((total, animal) => total + animal.tamanho, 0);
        return this.tamanhoTotal - espacoOcupado;
    }

    calcularEspacoPosInclusao(quantidade, animal) {
        const espacoLivre = this.calcularEspacoLivre();
        return espacoLivre - (quantidade * animal.getTamanho()) - (this.animaisExistentes.some(animalRecinto => animalRecinto.especie != animal.especie) ? 1 : 0)
    }
}

export default Recinto;
