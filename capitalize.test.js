import capitalize from './capitalize';

test('String Capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});