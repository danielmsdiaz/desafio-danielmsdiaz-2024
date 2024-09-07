class Utils {
    static verficarSeBiomaCompativel(animalBioma, recintoBioma) {
        return animalBioma.some(bioma => recintoBioma.toUpperCase().includes(bioma.toUpperCase()));
    }

    static verificarConfortoAnimais(animal, recinto, quantidade) {
        if (recinto.getAnimaisExistentes().length === 0) {
            if (animal.getEspecie() === "MACACO" && quantidade === 1) {
                return false;
            }
            return true;
        }
        
        if (animal.getEspecie() === "HIPOPOTAMO") {
            const jaTemHipopotamo = recinto.getAnimaisExistentes().some(animal => animal.especie === "HIPOPOTAMO");
            return recinto.getBioma() === "Savana e Rio" || jaTemHipopotamo;
        }
    
        if (!animal.isCarnivoro()) {
            return recinto.getAnimaisExistentes()[0].isCarnivoro() ? false : true;
        }
        
        const todosMesmaEspecie = recinto.todosAnimaisMesmaEspecie(animal);
         
        return todosMesmaEspecie;
    }
}

export default Utils;
