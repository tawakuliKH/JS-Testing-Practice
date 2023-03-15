import Calc from './calculator';

const calculator = new Calc();
describe('Calculator Functions', () => {
  test('ADD', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test('Subtract', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });
  test('Multiply', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  test('Devide', () => {
    expect(calculator.devide(10, 5)).toBe(2);
  });
});