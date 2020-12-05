import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    size: {
      sm: string;
      smd: string;
      mmd: string;
      md: string;
      lg: string;
    };

    color: {
      blue: string;
      middleBlue: string;
      carrot: string;
      lightGray:string;
      mint:string;
      lightBlue:string;
      notActive:string;
      gray:string;
      black:string;
      grayB2:string;
    };
  }
}