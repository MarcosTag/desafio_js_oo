import { Veiculo } from './veiculo.js';

export class Carro extends Veiculo {
    constructor( nome, tipoMotor ) {
        super( nome, 4, tipoMotor );
    }
}