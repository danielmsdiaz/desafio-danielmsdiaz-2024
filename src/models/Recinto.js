class Recinto {
    constructor(numero, bioma, tamanhoTotal, animaisExistentes = []) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.animaisExistentes = animaisExistentes;
    }

    adicionarAnimal(animal) {
        this.animaisExistentes.push(animal);
    }

    calcularEspacoLivre() {
        const espacoOcupado = this.animaisExistentes.reduce((total, animal) => total + animal.tamanho, 0);
        return this.tamanhoTotal - espacoOcupado;
    }
}

export default Recinto;
