function soma(a, b) {
  return a + b;
}

test('A função soma, soma dois valores, passando 4 e 5 o resultado esperado é 9', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
