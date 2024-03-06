import 'mocha';
import { expect } from 'chai';
import { Rational } from "../../src/ejercicio-clase/rational/rational";
import { Complex } from "../../src/ejercicio-clase/complex/complex";
import { RationalComplexAdapter } from "../../src/ejercicio-clase/complex/adapter";

describe('Rational', () => {
  it('Sum', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const sum = rational1.add(rational2);
    expect(sum.toString()).to.equal('5/4');
  });

  it('Substract', () => {
    const rational1 = new Rational(3, 4);
    const rational2 = new Rational(1, 2);
    const difference = rational1.subtract(rational2);
    expect(difference.toString()).to.equal('1/4');
  });

  it('multiply', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const product = rational1.multiply(rational2);
    expect(product.toString()).to.equal('3/8');
  });

  it('divide', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const quotient = rational1.divide(rational2);
    expect(quotient.toString()).to.equal('2/3');
  });

  it('exception with 0 in denominator', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(0, 1);
    expect(() => rational1.divide(rational2)).to.throw('Cannot divide by zero');
  });
  it('manage negative numbers', () => {
    const rational1 = new Rational(-1, 2);
    const rational2 = new Rational(3, 4);
    const sum = rational1.add(rational2);
    const difference = rational1.subtract(rational2);
    const product = rational1.multiply(rational2);
    const quotient = rational1.divide(rational2);
    expect(sum.toString()).to.equal('1/4');
    expect(difference.toString()).to.equal('-5/4');
    expect(product.toString()).to.equal('-3/8');
    expect(quotient.toString()).to.equal('-2/3');
  });
  it('exception with denominator 0', () => {
    expect(() => new Rational(1, 0)).to.throw('Denominator cannot be zero');
  });

  it('reduce rational', () => {
    const rational = new Rational(4, 8);
    expect(rational.toString()).to.equal('1/2');
  });

  it('manage negative numbers', () => {
    const rational = new Rational(-4, -8);
    expect(rational.toString()).to.equal('1/2');
  });
  
  it('abs', () => {
    const rational = new Rational(-1, 2);
    expect(rational.abs().toString()).to.equal('1/2');
  });

  it('ignore denominator if 1', () => {
    const rational = new Rational(2, 1);
    expect(rational.toString()).to.equal('2');
  });
});

describe('Complex operations', () => {
  const complexNumber1 = new Complex(new Rational(3, 4), new Rational(1, 2));
  const complexNumber2 = new Complex(new Rational(1, 2), new Rational(1, 3));

  it('Sum', () => {
    expect(complexNumber1.add(complexNumber2).toString()).to.equal("5/4 + 5/6i");
  });

  it('Subtract', () => {
    expect(complexNumber1.subtract(complexNumber2).toString()).to.equal("1/4 + 1/6i");
  });

  it('Multiply', () => {
    expect(complexNumber1.multiply(complexNumber2).toString()).to.equal("5/24 + 1/2i");
  });

  // it('Divide', () => {
  //   expect(complexNumber1.divide(complexNumber2).toString()).to.equal("3/2 + 1/2i");
  // });
});

describe('Complex operations with adapter', () => {
  const rationalNumber = new Rational(3, 4);
  const complexNumber = new Complex(new Rational(1, 2), new Rational(1, 3));
  const adapter = new RationalComplexAdapter(rationalNumber);
  const complexFromRational = adapter.toComplex();

  it('Sum', () => {
    expect(complexFromRational.add(complexNumber).toString()).to.equal("5/4 + 1/3i");
  });

  it('Subtract', () => {
    expect(complexFromRational.subtract(complexNumber).toString()).to.equal("1/4 - 1/3i");
  });

  it('Multiply', () => {
    expect(complexFromRational.multiply(complexNumber).toString()).to.equal("3/8 + 1/4i");
  });

  // it('Divide', () => {
  //   expect(complexFromRational.divide(complexNumber).toString()).to.equal("3/2 + 1/2i");
  // });
});