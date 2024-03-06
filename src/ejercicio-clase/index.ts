import { Rational } from "./rational/rational";
import { Complex } from "./complex/complex";
import { RationalComplexAdapter } from "./complex/adapter";

const rationalNumber = new Rational(3, 4);
const complexNumber = new Complex(new Rational(1, 2), new Rational(1, 3));

const adapter = new RationalComplexAdapter(rationalNumber);
const complexFromRational = adapter.toComplex();

console.log("Operaciones entre número racional y complejo:");
console.log("Suma:", complexFromRational.add(complexNumber).toString());
console.log("Resta:", complexFromRational.subtract(complexNumber).toString());
console.log("Multiplicación:", complexFromRational.multiply(complexNumber).toString());
console.log("División:", complexFromRational.divide(complexNumber).toString());
