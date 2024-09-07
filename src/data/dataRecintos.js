import Recinto from "../models/Recinto.js";
import Animal from "../models/Animal.js";

const recintos = [
    new Recinto(1, 'Savana', 10, [new Animal('MACACO', 1, ['Savana']), new Animal('MACACO', 1, ['Savana']), new Animal('MACACO', 1, ['Savana'])]),
    new Recinto(2, 'Floresta', 5, []),
    new Recinto(3, 'Savana e Rio', 7, [new Animal('GAZELA', 2, ['Savana'])]),
    new Recinto(4, 'Rio', 8, []),
    new Recinto(5, 'Savana', 9, [new Animal('LEAO', 3, ['Savana'], )])
];

export default recintos