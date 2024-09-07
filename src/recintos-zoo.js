import RecintoService from "./services/recintoService.js";

class RecintosZoo {
    constructor() {
        this.service = new RecintoService();
    }

    analisaRecintos(animal, quantidade) {
        return this.service.analisaRecintos(animal, quantidade);
    }

}

export { RecintosZoo as RecintosZoo };
