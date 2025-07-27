import { Veiculo } from './veiculo.js';

export class Moto extends Veiculo {
    constructor( nome, tipoMotor ) {
        super( nome, 2, tipoMotor );
    }
}