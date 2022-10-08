import "styled-components";
import { defaultTheme } from "sty/theme";

declare module "styled-components" {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}
