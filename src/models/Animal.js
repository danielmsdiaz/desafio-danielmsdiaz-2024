class Animal {
    constructor(especie, tamanho, bioma = []) {
        this.especie = especie;
        this.tamanho = tamanho;
        this.bioma = bioma;
    }

    getEspecie() {
        return this.especie;
    }

    getTamanho() {
        return this.tamanho;
    }

    getBioma() {
        return this.bioma;
    }

    isCarnivoro() {
        const carnivoros = ["LEAO", "LEOPARDO", "CROCODILO"];
        return carnivoros.includes(this.especie);
    }

}

export default Animal;
