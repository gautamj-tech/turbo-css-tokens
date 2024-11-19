export const primitiveColors = [
];

export type ColorKey = typeof primitiveColors[number]

export type ColorType = Record<ColorKey, string>;
