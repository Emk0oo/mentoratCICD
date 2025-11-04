const { addition } = require('../app');

describe('Tests de la fonction addition', () => {

  test('addition de deux nombres positifs', () => {
    expect(addition(2, 3)).toBe(5);
  });

  test('addition de nombres négatifs', () => {
    expect(addition(-2, -3)).toBe(-5);
  });

  test('addition avec zéro', () => {
    expect(addition(5, 0)).toBe(5);
    expect(addition(0, 5)).toBe(5);
  });

  test('addition de nombres décimaux', () => {
    expect(addition(2.5, 3.5)).toBe(6);
    expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('addition de nombre positif et négatif', () => {
    expect(addition(10, -5)).toBe(5);
    expect(addition(-10, 5)).toBe(-5);
  });

  test('addition de deux zéros', () => {
    expect(addition(0, 0)).toBe(0);
  });
});
