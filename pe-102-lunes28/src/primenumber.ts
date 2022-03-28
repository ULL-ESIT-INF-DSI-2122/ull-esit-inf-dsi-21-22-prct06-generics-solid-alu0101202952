
/**
 * PE 102- LUNES 28 DE MARZO 2022
 * Andrea Calero Caro
 * @class PrimeNumber con tiene las especificaciones y búsqueda de números primos
 * @private @param prime_number que es un array de números
 */
export class PrimeNumber {
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

    /**
     * Método público que retorna el número primo 
     * @returns ela instancia llamando al número primo
     */
    public getPrimeNumber() {
        return PrimeNumber.primenumber.prime_number;
    }

    /**
     * Método público que retorna el número primo 
     * @returns ela instancia llamando al número primo
     */
    public getPrimeLenght() {
        return PrimeNumber.primenumber.prime_number.length;
    }

    /**
     * Método público setter para añadir un nuevo número primo
     * @param nuevo_primo a añadir
     */
    public setPrimeNumber(nuevo_primo: number[]) {
        let aux: number [] = []
        for(let i: number = 0; i < nuevo_primo.length; i++){
            aux.push(PrimeNumber.primenumber.prime_number.push(nuevo_primo[i]))
        }
    }

    /**
     * Método público que retorna el número primo 
     * @returns ela instancia llamando al número primo
     */
    public getNPrimeNumber(indice: number) {
        if (indice >= PrimeNumber.primenumber.getPrimeLenght()) {
            return undefined;
        }
        return PrimeNumber.primenumber.prime_number[indice];
    }

    /**
     * Apartado 2: Método que devuelve los primos entre un rango de indice1 a indice2
     * @param indice1 (m) indice superior
     * @param indice2 (n) índice inferior
     * @returns los primos comprendidos entre esos rangos
     */
    public getNToMPrime(indice1: number, indice2: number){
        let aux: number[] = []
        if (indice2 >= PrimeNumber.primenumber.getPrimeLenght() || indice1 <= PrimeNumber.primenumber.getPrimeLenght()) {
            return undefined;
        }
        for(let i: number = 0 ; i < PrimeNumber.primenumber.getPrimeLenght(); i++){
            aux.push(PrimeNumber.primenumber.prime_number[i]);
        }
        aux.forEach(elemento =>{
            console.log(aux[elemento])
        })
        return aux
    }

    
}

let primo1 = PrimeNumber.getPrimeInstance();
console.log('Vacío: '+primo1.getPrimeNumber());
console.log(primo1.setPrimeNumber([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]));
console.log('Números primos: ['+primo1.getPrimeNumber()+']');
console.log('\nN primero números primos(índice 1): '+primo1.getNPrimeNumber(3));
console.log('\nNúmeros primos de n hasta m: '+primo1.getNToMPrime(3,6));