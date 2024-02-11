const getSubgridSize = (baseline, subgrid) => subgrid ? Number(baseline) / (Number(subgrid) + 1) : 0

export default getSubgridSize
