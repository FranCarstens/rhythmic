/**
 * Calculates the subgrid size based on the baseline and subgrid values
 * 
 * @param {number} baseline 
 * @param {number} subgrid 
 * @returns 
 */

const getSubgridSize = (baseline, subgrid) => subgrid ? Number(baseline) / (Number(subgrid) + 1) : 0

export default getSubgridSize
