// @ts-check

import {
  hello,
} from './hello_world';

const DIFFERENCE_PRECISION_IN_DIGITS = 6;

describe('hello', () => {
  test('return hello world', () => {
    const actual = hello();
    expect(actual).toBe('Hello World');
  });
});

