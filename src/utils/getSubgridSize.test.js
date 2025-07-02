import { describe, it, expect } from 'vitest'
import getSubgridSize from "./getSubgridSize";

describe('getSubGridSize', () => {
  it('it should return the correct subgrid size', () => {
    const subgridSize = getSubgridSize(16, 1)
    expect(subgridSize).toBe(8)

    const subgridSize2 = getSubgridSize(16, 2)
    expect(subgridSize2).toBe(16/3)

    const subgridSize3 = getSubgridSize(16, 3)
    expect(subgridSize3).toBe(16/4)
  })
})