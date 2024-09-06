import Recinto from "../models/Recinto";
import Animal from "../models/Animal";

const recintos = [
    new Recinto(1, 'savana', 10, [new Animal('MACACO', 1, 'savana')]),
    new Recinto(2, 'floresta', 5, []),
    new Recinto(3, 'savana e rio', 7, [new Animal('GAZELA', 2, 'savana')]),
    new Recinto(4, 'rio', 8, []),
    new Recinto(5, 'savana', 9, [new Animal('LEAO', 3, 'savana')])
];

export default recintos