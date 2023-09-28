import "styled-components";
import { OurTheme } from "./src/theme";

declare module "styled-components" {
  export type DefaultTheme = OurTheme;
}
