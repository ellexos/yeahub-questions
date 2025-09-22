export const rating = [
    {id: 1, title: "1"},
    {id: 2, title: "2"},
    {id: 3, title: "3"},
    {id: 4, title: "4"},
    {id: 5, title: "5"}
]

export const complexity = [
    {id: 1, title: "1-3", value:[1, 2, 3]},
    {id: 2, title: "4-6", value:[4, 5, 6]},
    {id: 3, title: "7-8", value:[7, 8]},
    {id: 4, title: "9-10", value:[9, 10]}
]

export const getComplexityValues = (ids: number[]): number[] => {
    const result: number[] =  []
    complexity.forEach(item => {
        if (ids.includes(item.id)) result.push(...item.value)
    })
    return result
}