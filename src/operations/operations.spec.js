import { describe, test } from '@jest/globals';
import { sub, sum } from './operations';

describe('Operation tests block', () => {
  test('Should return 3 when add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('Should return 3 when subtracting two numbers', () => {
    expect(sub(4, 1)).toBe(3);
  });
});
