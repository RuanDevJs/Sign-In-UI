import theme from "../styles";

type Theme = typeof theme;

export declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}