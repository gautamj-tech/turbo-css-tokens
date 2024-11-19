/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import { TTheme, getThemeTokens } from "./themes";
import { ITokenType } from "./types/token";

class Themes {
  private static themeName: TTheme;

  private static currentTokens: ITokenType | undefined;

  constructor() {}

  public setTheme = (theme: TTheme) => {
    Themes.themeName = theme;
    Themes.currentTokens = getThemeTokens(theme);
  };

  public getTheme = () => ({ tokens: Themes.currentTokens, name: Themes.themeName });
}

const themes = new Themes();
export default themes;
