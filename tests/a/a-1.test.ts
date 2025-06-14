import { describe, it, expect } from "@jest/globals";
import { solve } from "../../src/problems/a/a-1.js";

describe("A-1", () => {
  it("should solve the problem correctly", () => {
    const input = `3
1 2 3`;
    const expected = `6`;
    expect(solve(input)).toBe(expected);
  });
});
