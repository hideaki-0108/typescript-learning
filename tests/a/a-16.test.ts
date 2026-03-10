import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/a/a-16.js';

describe('A-16', () => {
  it('normal Test', () => {
    const input = `Orange`;
    const expected = `Oforange`;
    expect(solve(input)).toBe(expected);
  });

  it('normal Test2', () => {
    const input = 'Glen';
    const expected = 'Ofglen';
    expect(solve(input)).toBe(expected);
  });

  it('normal Test3', () => {
    const input = 'I';
    const expected = 'Ofi';
    expect(solve(input)).toBe(expected);
  });

  it('normal Test4', () => {
    const input = 'Fred';
    const expected = 'Offred';
    expect(solve(input)).toBe(expected);
  });

  it('normal Test5', () => {
    const input = `TEST`;
    const expected = `Oftest`;
    expect(solve(input)).toBe(expected);
  });

  it('not Test6', () => {
    const input = `Tanaka`;
    const expected = `OfTanaka`;
    expect(solve(input)).not.toBe(expected);
  });
});
