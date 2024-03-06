import { Rational } from "../rational/rational";

/**
 * Clase que representa un número complejo.
 */
export class Complex {
    /**
     * Constructor de la clase
     * @param real Parte real
     * @param imaginary Parte imaginaria
     */
    constructor(public real: Rational, public imaginary: Rational) {}

    /**
     * Método que suma dos números complejos
     * @param other Número complejo a sumar
     * @returns Número complejo resultante
     */
    add(other: Complex): Complex {
        return new Complex(this.real.add(other.real), this.imaginary.add(other.imaginary));
    }

    /**
     * Método que resta dos números complejos
     * @param other Número complejo a restar
     * @returns Número complejo resultante
     */
    subtract(other: Complex): Complex {
        return new Complex(this.real.subtract(other.real), this.imaginary.subtract(other.imaginary));
    } 

    /**
     * Método que multiplica dos números complejos
     * @param other Número complejo a multiplicar
     * @returns Número complejo resultante
     */
    multiply(other: Complex): Complex {
        const realPart1 = this.real.multiply(other.real);
        const realPart2 = this.imaginary.multiply(other.imaginary);
        const realPart = realPart1.subtract(realPart2);
        const imaginaryPart1 = this.real.multiply(other.imaginary);
        const imaginaryPart2 = this.imaginary.multiply(other.real);
        const imaginaryPart = imaginaryPart1.add(imaginaryPart2);
        return new Complex(realPart, imaginaryPart);
    }

    /**
     * Método que divide dos números complejos
     * @param other Número complejo a dividir
     * @returns Número complejo resultante
     */
    divide(other: Complex): Complex {
        const denominator1 = other.real.multiply(other.real);
        const denominator2 = other.imaginary.multiply(other.imaginary);
        const denominator = denominator1.add(denominator2);
        const realPart1 = this.real.multiply(other.real);
        const realPart2 = this.imaginary.multiply(other.imaginary);
        const realPart = (realPart1.add(realPart2)).divide(denominator);
        const imaginaryPart1 = this.imaginary.multiply(other.real);
        const imaginaryPart2 = this.real.multiply(other.imaginary);
        const imaginaryPart = (imaginaryPart1.subtract(imaginaryPart2)).divide(denominator);
        return new Complex(realPart, imaginaryPart);
    }

    /**
     * Método que devuelve el valor absoluto del número complejo
     * @returns Valor absoluto
     */
    toString(): string {  // controlo los signos y quito el signo de la parte imaginaria
        const sign = this.imaginary.numerator < 0 ? '-' : '+';
        return `${this.real.toString()} ${sign} ${this.imaginary.abs().toString()}i`;
    }
}