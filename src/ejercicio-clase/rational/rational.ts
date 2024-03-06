/**
 * Clase que representa un número racional
 */
export class Rational {
    /**
     * Constructor de la clase
     * @param numerator Numerador
     * @param denominator Denominador
     */
    constructor(public numerator: number, public denominator: number) {
        if (denominator === 0) {
            throw new Error('Denominator cannot be zero');
        }
        const gcd = this.greatestCommonDivisor(Math.abs(numerator), Math.abs(denominator));
        this.numerator = numerator / gcd;
        this.denominator = denominator / gcd;
  
        if (denominator < 0) {
            this.numerator = -this.numerator;
            this.denominator = -this.denominator;
        }
    }
  
    /**
     * Método que calcula el máximo común divisor entre dos números
     * @param a Número 1
     * @param b Número 2
     * @returns Máximo común divisor
     */
    private greatestCommonDivisor(a: number, b: number): number {
        return b === 0 ? a : this.greatestCommonDivisor(b, a % b);
    }
    
    /**
     * Método que suma dos números racionales
     * @param other Número racional a sumar
     * @returns Número racional resultante
     */
    add(other: Rational): Rational {
        const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator);
    }
    
    /**
     * Método que resta dos números racionales
     * @param other Número racional a restar
     * @returns Número racional resultante
     */
    subtract(other: Rational): Rational {
        const newNumerator = this.numerator * other.denominator - other.numerator * this.denominator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator);
    }
    
    /**
     * Método que multiplica dos números racionales
     * @param other Número racional a multiplicar
     * @returns Número racional resultante
     */
    multiply(other: Rational): Rational {
        const newNumerator = this.numerator * other.numerator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator);
    }
    
    /**
     * Método que divide dos números racionales
     * @param other Número racional a dividir
     * @returns Número racional resultante
     */
    divide(other: Rational): Rational {
        if (other.numerator === 0) {
            throw new Error('Cannot divide by zero');
        }
        const newNumerator = this.numerator * other.denominator;
        const newDenominator = this.denominator * other.numerator;
        return new Rational(newNumerator, newDenominator);
    }

    /**
     * Método que devuelve el valor absoluto de un número racional
     * @returns Número racional con valor absoluto
     */
    abs(): Rational {
        return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
    }
    
    /**
     * Método que devuelve el valor del número racional en formato string
     * @returns Número racional en formato string
     */
    toString(): string {
        if (this.denominator === 1) {
            return `${this.numerator}`;
        } else {
            return `${this.numerator}/${this.denominator}`;
        }
    }
}
