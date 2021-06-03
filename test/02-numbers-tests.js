const assert = require('assert');
const tasks = require('../src/02-numbers-tasks');
it.optional = require('../extensions/it-optional');

describe('02-numbers-tasks', () => {
  it.optional('getRectangleArea should return a square of rectangle', () => {
    assert.strictEqual(tasks.getRectangleArea(5, 10), 50);
    assert.strictEqual(tasks.getRectangleArea(5, 5), 25);
  });

  it.optional('getCircleCircumference should return a circumference of circle', () => {
    assert.strictEqual(tasks.getCircleCircumference(5), 31.41592653589793);
    assert.strictEqual(tasks.getCircleCircumference(3.14), 19.729201864543903);
    assert.strictEqual(tasks.getCircleCircumference(0), 0);
  });

  it.optional('getAverage should return an average of two numbers', () => {
    assert.strictEqual(tasks.getAverage(5, 5), 5);
    assert.strictEqual(tasks.getAverage(10, 0), 5);
    assert.strictEqual(tasks.getAverage(-3, 3), 0);
    assert.strictEqual(tasks.getAverage(Number.MAX_VALUE - 2, Number.MAX_VALUE), Number.MAX_VALUE - 1);
    assert.strictEqual(tasks.getAverage(Number.MAX_VALUE, -Number.MAX_VALUE / 2), Number.MAX_VALUE / 4);
  });

  it.optional('getDistanceBetweenPoints should return a distance between points', () => {
    assert.strictEqual(tasks.getDistanceBetweenPoints(0, 0, 0, 1), 1);
    assert.strictEqual(tasks.getDistanceBetweenPoints(0, 0, 1, 0), 1);
    assert.strictEqual(tasks.getDistanceBetweenPoints(-5, 0, 10, -10), 18.027756377319946);
  });

  it.optional('getLinearEquationRoot should return a root of linear equation', () => {
    assert.strictEqual(tasks.getLinearEquationRoot(5, -10), 2);
    assert.strictEqual(tasks.getLinearEquationRoot(1, 8), -8);
    assert.strictEqual(tasks.getLinearEquationRoot(5, 0), 0);
  });

  it.optional('getAngleBetweenVectors should return a angle (in radians) between two linear vectors', () => {
    assert.strictEqual(tasks.getAngleBetweenVectors(1, 0, 0, 1), Math.PI / 2);
    assert.strictEqual(tasks.getAngleBetweenVectors(0, 1, 0, -1), Math.PI);
    assert.strictEqual(tasks.getAngleBetweenVectors(0, -1, 1, 0), Math.PI / 2);
    assert.strictEqual(tasks.getAngleBetweenVectors(0, 1, 0, 1), 0);
  });

  it.optional('getLastDigit should return a last digit of the number', () => {
    assert.strictEqual(tasks.getLastDigit(100), 0);
    assert.strictEqual(tasks.getLastDigit(37), 7);
    assert.strictEqual(tasks.getLastDigit(5), 5);
    assert.strictEqual(tasks.getLastDigit(0), 0);
  });

  it.optional('parseNumberFromString should return a number from the given string representation', () => {
    assert.strictEqual(tasks.parseNumberFromString('100'), 100);
    assert.strictEqual(tasks.parseNumberFromString('37'), 37);
    assert.strictEqual(tasks.parseNumberFromString('-525.5'), -525.5);
  });

  it.optional('getParallelepipedDiagonal should return a diagonal length of the rectangular parallepiped', () => {
    assert.strictEqual(tasks.getParallelepipedDiagonal(1, 1, 1), Math.sqrt(3));
    assert.strictEqual(tasks.getParallelepipedDiagonal(3, 3, 3), Math.sqrt(27));
    assert.strictEqual(tasks.getParallelepipedDiagonal(1, 2, 3), Math.sqrt(14));
  });

  it.optional('roundToPowerOfTen should return an number rounded to specified power of 10', () => {
    assert.strictEqual(tasks.roundToPowerOfTen(1234, 0), 1234);
    assert.strictEqual(tasks.roundToPowerOfTen(1234, 1), 1230);
    assert.strictEqual(tasks.roundToPowerOfTen(1234, 2), 1200);
    assert.strictEqual(tasks.roundToPowerOfTen(1234, 3), 1000);

    assert.strictEqual(tasks.roundToPowerOfTen(9678, 0), 9678);
    assert.strictEqual(tasks.roundToPowerOfTen(9678, 1), 9680);
    assert.strictEqual(tasks.roundToPowerOfTen(9678, 2), 9700);
    assert.strictEqual(tasks.roundToPowerOfTen(9678, 3), 10000);
  });

  it.optional('isPrime should return true if specified number is prime', () => {
    assert.strictEqual(tasks.isPrime(2), true, '2');
    assert.strictEqual(tasks.isPrime(3), true, '3');
    assert.strictEqual(tasks.isPrime(4), false, '4');
    assert.strictEqual(tasks.isPrime(5), true, '5');
    assert.strictEqual(tasks.isPrime(6), false, '6');
    assert.strictEqual(tasks.isPrime(7), true, '7');
    assert.strictEqual(tasks.isPrime(8), false, '8');
    assert.strictEqual(tasks.isPrime(9), false, '9');
    assert.strictEqual(tasks.isPrime(10), false, '10');
    assert.strictEqual(tasks.isPrime(11), true, '11');
    assert.strictEqual(tasks.isPrime(12), false, '12');
    assert.strictEqual(tasks.isPrime(13), true, '13');
    assert.strictEqual(tasks.isPrime(113), true, '113');
    assert.strictEqual(tasks.isPrime(119), false, '119');
  });

  it.optional('toNumber should convert any value to number or return the default', () => {
    assert.strictEqual(tasks.toNumber(null, 0), 0);
    assert.strictEqual(tasks.toNumber('test', 0), 0);
    assert.strictEqual(tasks.toNumber('1', 0), 1);
    assert.strictEqual(tasks.toNumber(42, 0), 42);
    // eslint-disable-next-line no-new-wrappers
    assert.strictEqual(tasks.toNumber(new Number(42), 0), 42);
    assert.strictEqual(tasks.toNumber(undefined, -1), -1);
  });
});
