/* eslint-disable no-unused-vars */
import { buttonTokens } from "../button-tokens";
import { cornerRadiusTokens } from "../corner-radius-tokens";
import { iconTokens } from "../icon-tokens";
import { shadowTokens } from "../shadow-tokens";
import { sizeTokens } from "../size-tokens";
import { spacingTokens } from "../spacing-tokens";
import { strokeTokens } from "../stroke-tokens";
import { typographyTokens } from "../typography-tokens";
import baseTokens from "./Base/token";
import BlueTokens from "./Blue/token";

// eslint-disable-next-line no-shadow
export enum Themes {
  Base = "Base",
  Blue = "Blue",
}

export type TTheme = `${Themes}`;

export interface IThemes {
  Base: {
    tokens: typeof baseTokens;
  };
  Blue: {
    tokens: typeof BlueTokens;
  };
}

const themes: IThemes = {
  Base: {
    tokens: { ...baseTokens },
  },
  Blue: {
    tokens: { ...BlueTokens },
  },
};

export const getThemeTokens = (theme: TTheme) => {
  const { tokens } = themes[theme];
  return {
    ...tokens,
    ...spacingTokens,
    ...buttonTokens,
    ...iconTokens,
    ...sizeTokens,
    ...strokeTokens,
    ...cornerRadiusTokens,
    ...typographyTokens,
    ...shadowTokens
  };
};
export const generateTailwindThemeConfig = (theme: TTheme) => {
  const { tokens } = themes[theme];
  return {
    colors: tokens, 
    spacing: { ...spacingTokens, ...buttonTokens, ...iconTokens, ...sizeTokens, ...strokeTokens, ...typographyTokens },
    borderRadius: cornerRadiusTokens,
    boxShadow: shadowTokens
  };
};


export type TTokens = ReturnType<typeof getThemeTokens>;
