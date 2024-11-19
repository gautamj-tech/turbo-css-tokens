import { ITokenType } from "./types/token";

export const generateCssVariables = (tokenMapping: ITokenType) => {
  const cssVariablesTokenMapping: Record<string, string> = {};
  const cssVariables: Record<string, string> = {};

  Object.entries(tokenMapping).forEach(([key, value]) => {
    cssVariablesTokenMapping[key] = `var(--${key.split("-").join("-")}`;
    const cssKey: string = `var(--${key.split("-").join("-")}` as string;
    cssVariables[cssKey] = value as string;
  });
  return [cssVariables, cssVariablesTokenMapping];
};

export const generateCssFileContents = (
  cssVariables: Record<string, string>,
) => `:root {
    ${Object.entries(cssVariables)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n")}
  }`;
