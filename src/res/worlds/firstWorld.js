const a1 = 0,
  a2 = 1,
  a3 = 2;
export default {
  spawn: {
    x: 8,
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
    [a3, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a3, a3, a3, a3, a3, a3, a1, a1, a1, a1, a1, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3, a3],
    [a3, a3, a2, a3, a3, a3, a1, a1, a2, a1, a1, a1, a1, a1, a3, a3, a3, a3, a1, a1, a3, a3, a3, a3, a1, a1, a3, a3],
    [a3, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a2, a2, a2, a2, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a2, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a1, a1, a1, a1, a1, a1, a1, a2, a2, a2, a2, a2, a2, a2, a1, a1, a1, a1, a1, a3, a3, a3, a3, a3, a3, a3, a3],
    [a3, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
    [a3, a1, a2, a1, a1, a1, a1, a1, a2, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a1, a3],
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
  ]
};
