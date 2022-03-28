/**
 * PE 102- LUNES 28 DE MARZO 2022
 * Andrea Calero Caro
 * @class PrimeNumber con tiene las especificaciones y búsqueda de números primos
 * @private @param prime_number que es un array de números
 */
export class PrimeNumber{
    private prime_number: number[] = []

    /**
     * 1º @static primenumber atributo privado estático cuyo tipo es la propia clase PrimeNumber
     * para almacenar la única instancia que va a tener dicha clase.
     */
    private static primenumber: PrimeNumber;

    /**
     * 2º @constructor privado por lo que no puede ser invocado desde fuera de la propia clase.
     */
    private constructor(){
        this.prime_number = [];
    }

    /**
     * 3º Método público que retorna la instancia del primo
     * @returns la instancia privada del número primo
     */
    public static getPrimeInstance(): PrimeNumber {
        if (!PrimeNumber.primenumber) {
            PrimeNumber.primenumber = new PrimeNumber();
        }
        return PrimeNumber.primenumber;
    }


    public getPrimeNumber() {
        return PrimeNumber.primenumber.prime_number;
    }
}