import { Rational } from '../rational/rational';
import { Complex } from './complex';

/**
 * Adaptador que permite convertir un número racional en un número complejo.
 */
export class RationalComplexAdapter {
  /**
   * Constructor del adaptador
   * @param rational Número racional a adaptar
   */
  constructor(public rational: Rational) {}

  /**
   * Convierte el número racional a un número complejo.
   */
  toComplex(): Complex {
      return new Complex(this.rational, new Rational(0, 1));
  }
}