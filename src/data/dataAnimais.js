import Animal from "../models/Animal.js";

const animaisDisponiveis = {
  LEAO: new Animal('LEAO', 3, ['Savana']),
  LEOPARDO: new Animal('LEOPARDO', 2, ['Savana']),
  CROCODILO: new Animal('CROCODILO', 3, ['Rio']),
  MACACO: new Animal('MACACO', 1, ['Savana', 'Floresta']),
  GAZELA: new Animal('GAZELA', 2, ['Savana']),
  HIPOPOTAMO: new Animal('HIPOPOTAMO', 4, ['Savana', 'Rio']),
};

export default animaisDisponiveis
