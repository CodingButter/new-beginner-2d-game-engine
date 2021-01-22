import { Tree, Mortium } from 'Classes/Entities/Static'

const a1 = 0,
    a2 = 1,
    a3 = 2,
    a4 = 3
export default {
    spawn: {
        x: 9,
        y: 8
    },
    // prettier-ignore
    tiles: [
    [a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3],
    [a3, a3, a3, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a2, a1, a4, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a3, a3, a3, a3, a3, a3, a1, a1, a1, a1, a1, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3],
    [a3, a3, a2, a3, a3, a3, a1, a1, a2, a1, a1, a1, a1, a1, a3, a3, a3, a4, a1, a1, a3, a3, a3, a3, a1, a1, a3, a3],
    [a3, a2, a1, a1, a1, a1, a1, a1, a4, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a4, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a2, a2, a2, a2, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a4, a1, a1, a1, a1, a1, a2, a1, a1, a1, a2, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a1, a1, a1, a1, a1, a2, a2, a2, a2, a2, a2, a2, a1, a1, a1, a1, a1, a3, a3, a3, a3, a3, a3, a3, a3],
    [a3, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a4, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a3, a3, a3, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a3, a1, a3, a3, a3, a1, a1, a1, a3, a3, a3, a1, a1, a3, a3, a3, a3, a1, a1, a3, a3, a3, a3, a1, a1, a3, a3],
    [a3, a1, a1, a1, a1, a1, a3, a3, a3, a3, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3]
  ],
    staticEntities: [
        {
            entityType: () => {
                return new Tree(null, 0, 0)
            },
            positions: [
                { x: 7, y: 3 },
                { x: 15, y: 3 },
                { x: 2, y: 8 },
                { x: 20, y: 16 },
                { x: 11, y: 13 }
            ]
        },
        {
            entityType: () => {
                return new Mortium(null, 0, 0)
            },
            positions: [
                { x: 10, y: 7 },
                { x: 4, y: 12 },
                { x: 14, y: 8 },
                { x: 18, y: 10 },
                { x: 10, y: 18 }
            ]
        }
    ]
}
