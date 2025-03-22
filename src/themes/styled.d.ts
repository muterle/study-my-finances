import "styled-components";

import { lightTheme } from "./lightTheme";

export type ITheme = typeof lightTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ITheme {}
}
