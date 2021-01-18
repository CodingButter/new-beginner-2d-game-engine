import { Tree } from 'Classes/Entities/Static'

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
            x: 7,
            y: 3
        },
        {
            entityType: () => {
                return new Tree(null, 0, 0)
            },
            x: 9,
            y: 10
        },
        {
            entityType: () => {
                return new Tree(null, 0, 0)
            },
            x: 2,
            y: 20
        }
    ]
}
