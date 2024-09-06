import Animal from "../models/Animal";

const animaisDisponiveis = {
  LEAO: new Animal('LEAO', 3, 'savana'),
  LEOPARDO: new Animal('LEOPARDO', 2, 'savana'),
  CROCODILO: new Animal('CROCODILO', 3, 'rio'),
  MACACO: new Animal('MACACO', 1, 'savana ou floresta'),
  GAZELA: new Animal('GAZELA', 2, 'savana'),
  HIPOPOTAMO: new Animal('HIPOPOTAMO', 4, 'savana ou rio'),
};

export default animaisDisponiveis
