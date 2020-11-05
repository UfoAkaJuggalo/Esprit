import { ArrayInterpolation } from "@emotion/core";
import { spaceCSS } from "..";
import { SpaceType, Size, Side, SpaceCSSProps } from "../Utilities";

export interface SpaceProps {
  [key: string]: any;
  m0?: boolean;
  m1?: boolean;
  m2?: boolean;
  m3?: boolean;
  m4?: boolean;
  m5?: boolean;
  mAuto?: boolean;
  m0Sm?: boolean;
  m1Sm?: boolean;
  m2Sm?: boolean;
  m3Sm?: boolean;
  m4Sm?: boolean;
  m5Sm?: boolean;
  mAutoSm?: boolean;
  m0Md?: boolean;
  m1Md?: boolean;
  m2Md?: boolean;
  m3Md?: boolean;
  m4Md?: boolean;
  m5Md?: boolean;
  mAutoMd?: boolean;
  m0Lg?: boolean;
  m1Lg?: boolean;
  m2Lg?: boolean;
  m3Lg?: boolean;
  m4Lg?: boolean;
  m5Lg?: boolean;
  mAutoLg?: boolean;
  m0Xl?: boolean;
  m1Xl?: boolean;
  m2Xl?: boolean;
  m3Xl?: boolean;
  m4Xl?: boolean;
  m5Xl?: boolean;
  mAutoXl?: boolean;
  mT0?: boolean;
  mT1?: boolean;
  mT2?: boolean;
  mT3?: boolean;
  mT4?: boolean;
  mT5?: boolean;
  mTAuto?: boolean;
  mT0Sm?: boolean;
  mT1Sm?: boolean;
  mT2Sm?: boolean;
  mT3Sm?: boolean;
  mT4Sm?: boolean;
  mT5Sm?: boolean;
  mTAutoSm?: boolean;
  mT0Md?: boolean;
  mT1Md?: boolean;
  mT2Md?: boolean;
  mT3Md?: boolean;
  mT4Md?: boolean;
  mT5Md?: boolean;
  mTAutoMd?: boolean;
  mT0Lg?: boolean;
  mT1Lg?: boolean;
  mT2Lg?: boolean;
  mT3Lg?: boolean;
  mT4Lg?: boolean;
  mT5Lg?: boolean;
  mTAutoLg?: boolean;
  mT0Xl?: boolean;
  mT1Xl?: boolean;
  mT2Xl?: boolean;
  mT3Xl?: boolean;
  mT4Xl?: boolean;
  mT5Xl?: boolean;
  mTAutoXl?: boolean;
  mB0?: boolean;
  mB1?: boolean;
  mB2?: boolean;
  mB3?: boolean;
  mB4?: boolean;
  mB5?: boolean;
  mBAuto?: boolean;
  mB0Sm?: boolean;
  mB1Sm?: boolean;
  mB2Sm?: boolean;
  mB3Sm?: boolean;
  mB4Sm?: boolean;
  mB5Sm?: boolean;
  mBAutoSm?: boolean;
  mB0Md?: boolean;
  mB1Md?: boolean;
  mB2Md?: boolean;
  mB3Md?: boolean;
  mB4Md?: boolean;
  mB5Md?: boolean;
  mBAutoMd?: boolean;
  mB0Lg?: boolean;
  mB1Lg?: boolean;
  mB2Lg?: boolean;
  mB3Lg?: boolean;
  mB4Lg?: boolean;
  mB5Lg?: boolean;
  mBAutoLg?: boolean;
  mB0Xl?: boolean;
  mB1Xl?: boolean;
  mB2Xl?: boolean;
  mB3Xl?: boolean;
  mB4Xl?: boolean;
  mB5Xl?: boolean;
  mBAutoXl?: boolean;
  mL0?: boolean;
  mL1?: boolean;
  mL2?: boolean;
  mL3?: boolean;
  mL4?: boolean;
  mL5?: boolean;
  mLAuto?: boolean;
  mL0Sm?: boolean;
  mL1Sm?: boolean;
  mL2Sm?: boolean;
  mL3Sm?: boolean;
  mL4Sm?: boolean;
  mL5Sm?: boolean;
  mLAutoSm?: boolean;
  mL0Md?: boolean;
  mL1Md?: boolean;
  mL2Md?: boolean;
  mL3Md?: boolean;
  mL4Md?: boolean;
  mL5Md?: boolean;
  mLAutoMd?: boolean;
  mL0Lg?: boolean;
  mL1Lg?: boolean;
  mL2Lg?: boolean;
  mL3Lg?: boolean;
  mL4Lg?: boolean;
  mL5Lg?: boolean;
  mLAutoLg?: boolean;
  mL0Xl?: boolean;
  mL1Xl?: boolean;
  mL2Xl?: boolean;
  mL3Xl?: boolean;
  mL4Xl?: boolean;
  mL5Xl?: boolean;
  mLAutoXl?: boolean;
  mR0?: boolean;
  mR1?: boolean;
  mR2?: boolean;
  mR3?: boolean;
  mR4?: boolean;
  mR5?: boolean;
  mRAuto?: boolean;
  mR0Sm?: boolean;
  mR1Sm?: boolean;
  mR2Sm?: boolean;
  mR3Sm?: boolean;
  mR4Sm?: boolean;
  mR5Sm?: boolean;
  mRAutoSm?: boolean;
  mR0Md?: boolean;
  mR1Md?: boolean;
  mR2Md?: boolean;
  mR3Md?: boolean;
  mR4Md?: boolean;
  mR5Md?: boolean;
  mRAutoMd?: boolean;
  mR0Lg?: boolean;
  mR1Lg?: boolean;
  mR2Lg?: boolean;
  mR3Lg?: boolean;
  mR4Lg?: boolean;
  mR5Lg?: boolean;
  mRAutoLg?: boolean;
  mR0Xl?: boolean;
  mR1Xl?: boolean;
  mR2Xl?: boolean;
  mR3Xl?: boolean;
  mR4Xl?: boolean;
  mR5Xl?: boolean;
  mRAutoXl?: boolean;
  mX0?: boolean;
  mX1?: boolean;
  mX2?: boolean;
  mX3?: boolean;
  mX4?: boolean;
  mX5?: boolean;
  mXAuto?: boolean;
  mX0Sm?: boolean;
  mX1Sm?: boolean;
  mX2Sm?: boolean;
  mX3Sm?: boolean;
  mX4Sm?: boolean;
  mX5Sm?: boolean;
  mXAutoSm?: boolean;
  mX0Md?: boolean;
  mX1Md?: boolean;
  mX2Md?: boolean;
  mX3Md?: boolean;
  mX4Md?: boolean;
  mX5Md?: boolean;
  mXAutoMd?: boolean;
  mX0Lg?: boolean;
  mX1Lg?: boolean;
  mX2Lg?: boolean;
  mX3Lg?: boolean;
  mX4Lg?: boolean;
  mX5Lg?: boolean;
  mXAutoLg?: boolean;
  mX0Xl?: boolean;
  mX1Xl?: boolean;
  mX2Xl?: boolean;
  mX3Xl?: boolean;
  mX4Xl?: boolean;
  mX5Xl?: boolean;
  mXAutoXl?: boolean;
  mY0?: boolean;
  mY1?: boolean;
  mY2?: boolean;
  mY3?: boolean;
  mY4?: boolean;
  mY5?: boolean;
  mYAuto?: boolean;
  mY0Sm?: boolean;
  mY1Sm?: boolean;
  mY2Sm?: boolean;
  mY3Sm?: boolean;
  mY4Sm?: boolean;
  mY5Sm?: boolean;
  mYAutoSm?: boolean;
  mY0Md?: boolean;
  mY1Md?: boolean;
  mY2Md?: boolean;
  mY3Md?: boolean;
  mY4Md?: boolean;
  mY5Md?: boolean;
  mYAutoMd?: boolean;
  mY0Lg?: boolean;
  mY1Lg?: boolean;
  mY2Lg?: boolean;
  mY3Lg?: boolean;
  mY4Lg?: boolean;
  mY5Lg?: boolean;
  mYAutoLg?: boolean;
  mY0Xl?: boolean;
  mY1Xl?: boolean;
  mY2Xl?: boolean;
  mY3Xl?: boolean;
  mY4Xl?: boolean;
  mY5Xl?: boolean;
  mYAutoXl?: boolean;
  p0?: boolean;
  p1?: boolean;
  p2?: boolean;
  p3?: boolean;
  p4?: boolean;
  p5?: boolean;
  p0Sm?: boolean;
  p1Sm?: boolean;
  p2Sm?: boolean;
  p3Sm?: boolean;
  p4Sm?: boolean;
  p5Sm?: boolean;
  p0Md?: boolean;
  p1Md?: boolean;
  p2Md?: boolean;
  p3Md?: boolean;
  p4Md?: boolean;
  p5Md?: boolean;
  p0Lg?: boolean;
  p1Lg?: boolean;
  p2Lg?: boolean;
  p3Lg?: boolean;
  p4Lg?: boolean;
  p5Lg?: boolean;
  p0Xl?: boolean;
  p1Xl?: boolean;
  p2Xl?: boolean;
  p3Xl?: boolean;
  p4Xl?: boolean;
  p5Xl?: boolean;
  pT0?: boolean;
  pT1?: boolean;
  pT2?: boolean;
  pT3?: boolean;
  pT4?: boolean;
  pT5?: boolean;
  pT0Sm?: boolean;
  pT1Sm?: boolean;
  pT2Sm?: boolean;
  pT3Sm?: boolean;
  pT4Sm?: boolean;
  pT5Sm?: boolean;
  pT0Md?: boolean;
  pT1Md?: boolean;
  pT2Md?: boolean;
  pT3Md?: boolean;
  pT4Md?: boolean;
  pT5Md?: boolean;
  pT0Lg?: boolean;
  pT1Lg?: boolean;
  pT2Lg?: boolean;
  pT3Lg?: boolean;
  pT4Lg?: boolean;
  pT5Lg?: boolean;
  pT0Xl?: boolean;
  pT1Xl?: boolean;
  pT2Xl?: boolean;
  pT3Xl?: boolean;
  pT4Xl?: boolean;
  pT5Xl?: boolean;
  pB0?: boolean;
  pB1?: boolean;
  pB2?: boolean;
  pB3?: boolean;
  pB4?: boolean;
  pB5?: boolean;
  pB0Sm?: boolean;
  pB1Sm?: boolean;
  pB2Sm?: boolean;
  pB3Sm?: boolean;
  pB4Sm?: boolean;
  pB5Sm?: boolean;
  pB0Md?: boolean;
  pB1Md?: boolean;
  pB2Md?: boolean;
  pB3Md?: boolean;
  pB4Md?: boolean;
  pB5Md?: boolean;
  pB0Lg?: boolean;
  pB1Lg?: boolean;
  pB2Lg?: boolean;
  pB3Lg?: boolean;
  pB4Lg?: boolean;
  pB5Lg?: boolean;
  pB0Xl?: boolean;
  pB1Xl?: boolean;
  pB2Xl?: boolean;
  pB3Xl?: boolean;
  pB4Xl?: boolean;
  pB5Xl?: boolean;
  pL0?: boolean;
  pL1?: boolean;
  pL2?: boolean;
  pL3?: boolean;
  pL4?: boolean;
  pL5?: boolean;
  pL0Sm?: boolean;
  pL1Sm?: boolean;
  pL2Sm?: boolean;
  pL3Sm?: boolean;
  pL4Sm?: boolean;
  pL5Sm?: boolean;
  pL0Md?: boolean;
  pL1Md?: boolean;
  pL2Md?: boolean;
  pL3Md?: boolean;
  pL4Md?: boolean;
  pL5Md?: boolean;
  pL0Lg?: boolean;
  pL1Lg?: boolean;
  pL2Lg?: boolean;
  pL3Lg?: boolean;
  pL4Lg?: boolean;
  pL5Lg?: boolean;
  pL0Xl?: boolean;
  pL1Xl?: boolean;
  pL2Xl?: boolean;
  pL3Xl?: boolean;
  pL4Xl?: boolean;
  pL5Xl?: boolean;
  pR0?: boolean;
  pR1?: boolean;
  pR2?: boolean;
  pR3?: boolean;
  pR4?: boolean;
  pR5?: boolean;
  pR0Sm?: boolean;
  pR1Sm?: boolean;
  pR2Sm?: boolean;
  pR3Sm?: boolean;
  pR4Sm?: boolean;
  pR5Sm?: boolean;
  pR0Md?: boolean;
  pR1Md?: boolean;
  pR2Md?: boolean;
  pR3Md?: boolean;
  pR4Md?: boolean;
  pR5Md?: boolean;
  pR0Lg?: boolean;
  pR1Lg?: boolean;
  pR2Lg?: boolean;
  pR3Lg?: boolean;
  pR4Lg?: boolean;
  pR5Lg?: boolean;
  pR0Xl?: boolean;
  pR1Xl?: boolean;
  pR2Xl?: boolean;
  pR3Xl?: boolean;
  pR4Xl?: boolean;
  pR5Xl?: boolean;
  pX0?: boolean;
  pX1?: boolean;
  pX2?: boolean;
  pX3?: boolean;
  pX4?: boolean;
  pX5?: boolean;
  pX0Sm?: boolean;
  pX1Sm?: boolean;
  pX2Sm?: boolean;
  pX3Sm?: boolean;
  pX4Sm?: boolean;
  pX5Sm?: boolean;
  pX0Md?: boolean;
  pX1Md?: boolean;
  pX2Md?: boolean;
  pX3Md?: boolean;
  pX4Md?: boolean;
  pX5Md?: boolean;
  pX0Lg?: boolean;
  pX1Lg?: boolean;
  pX2Lg?: boolean;
  pX3Lg?: boolean;
  pX4Lg?: boolean;
  pX5Lg?: boolean;
  pX0Xl?: boolean;
  pX1Xl?: boolean;
  pX2Xl?: boolean;
  pX3Xl?: boolean;
  pX4Xl?: boolean;
  pX5Xl?: boolean;
  pY0?: boolean;
  pY1?: boolean;
  pY2?: boolean;
  pY3?: boolean;
  pY4?: boolean;
  pY5?: boolean;
  pY0Sm?: boolean;
  pY1Sm?: boolean;
  pY2Sm?: boolean;
  pY3Sm?: boolean;
  pY4Sm?: boolean;
  pY5Sm?: boolean;
  pY0Md?: boolean;
  pY1Md?: boolean;
  pY2Md?: boolean;
  pY3Md?: boolean;
  pY4Md?: boolean;
  pY5Md?: boolean;
  pY0Lg?: boolean;
  pY1Lg?: boolean;
  pY2Lg?: boolean;
  pY3Lg?: boolean;
  pY4Lg?: boolean;
  pY5Lg?: boolean;
  pY0Xl?: boolean;
  pY1Xl?: boolean;
  pY2Xl?: boolean;
  pY3Xl?: boolean;
  pY4Xl?: boolean;
  pY5Xl?: boolean;
}

enum SpacePropsEnum {
  m0,
  m1,
  m2,
  m3,
  m4,
  m5,
  mAuto,
  m0Sm,
  m1Sm,
  m2Sm,
  m3Sm,
  m4Sm,
  m5Sm,
  mAutoSm,
  m0Md,
  m1Md,
  m2Md,
  m3Md,
  m4Md,
  m5Md,
  mAutoMd,
  m0Lg,
  m1Lg,
  m2Lg,
  m3Lg,
  m4Lg,
  m5Lg,
  mAutoLg,
  m0Xl,
  m1Xl,
  m2Xl,
  m3Xl,
  m4Xl,
  m5Xl,
  mAutoXl,
  mT0,
  mT1,
  mT2,
  mT3,
  mT4,
  mT5,
  mTAuto,
  mT0Sm,
  mT1Sm,
  mT2Sm,
  mT3Sm,
  mT4Sm,
  mT5Sm,
  mTAutoSm,
  mT0Md,
  mT1Md,
  mT2Md,
  mT3Md,
  mT4Md,
  mT5Md,
  mTAutoMd,
  mT0Lg,
  mT1Lg,
  mT2Lg,
  mT3Lg,
  mT4Lg,
  mT5Lg,
  mTAutoLg,
  mT0Xl,
  mT1Xl,
  mT2Xl,
  mT3Xl,
  mT4Xl,
  mT5Xl,
  mTAutoXl,
  mB0,
  mB1,
  mB2,
  mB3,
  mB4,
  mB5,
  mBAuto,
  mB0Sm,
  mB1Sm,
  mB2Sm,
  mB3Sm,
  mB4Sm,
  mB5Sm,
  mBAutoSm,
  mB0Md,
  mB1Md,
  mB2Md,
  mB3Md,
  mB4Md,
  mB5Md,
  mBAutoMd,
  mB0Lg,
  mB1Lg,
  mB2Lg,
  mB3Lg,
  mB4Lg,
  mB5Lg,
  mBAutoLg,
  mB0Xl,
  mB1Xl,
  mB2Xl,
  mB3Xl,
  mB4Xl,
  mB5Xl,
  mBAutoXl,
  mL0,
  mL1,
  mL2,
  mL3,
  mL4,
  mL5,
  mLAuto,
  mL0Sm,
  mL1Sm,
  mL2Sm,
  mL3Sm,
  mL4Sm,
  mL5Sm,
  mLAutoSm,
  mL0Md,
  mL1Md,
  mL2Md,
  mL3Md,
  mL4Md,
  mL5Md,
  mLAutoMd,
  mL0Lg,
  mL1Lg,
  mL2Lg,
  mL3Lg,
  mL4Lg,
  mL5Lg,
  mLAutoLg,
  mL0Xl,
  mL1Xl,
  mL2Xl,
  mL3Xl,
  mL4Xl,
  mL5Xl,
  mLAutoXl,
  mR0,
  mR1,
  mR2,
  mR3,
  mR4,
  mR5,
  mRAuto,
  mR0Sm,
  mR1Sm,
  mR2Sm,
  mR3Sm,
  mR4Sm,
  mR5Sm,
  mRAutoSm,
  mR0Md,
  mR1Md,
  mR2Md,
  mR3Md,
  mR4Md,
  mR5Md,
  mRAutoMd,
  mR0Lg,
  mR1Lg,
  mR2Lg,
  mR3Lg,
  mR4Lg,
  mR5Lg,
  mRAutoLg,
  mR0Xl,
  mR1Xl,
  mR2Xl,
  mR3Xl,
  mR4Xl,
  mR5Xl,
  mRAutoXl,
  mX0,
  mX1,
  mX2,
  mX3,
  mX4,
  mX5,
  mXAuto,
  mX0Sm,
  mX1Sm,
  mX2Sm,
  mX3Sm,
  mX4Sm,
  mX5Sm,
  mXAutoSm,
  mX0Md,
  mX1Md,
  mX2Md,
  mX3Md,
  mX4Md,
  mX5Md,
  mXAutoMd,
  mX0Lg,
  mX1Lg,
  mX2Lg,
  mX3Lg,
  mX4Lg,
  mX5Lg,
  mXAutoLg,
  mX0Xl,
  mX1Xl,
  mX2Xl,
  mX3Xl,
  mX4Xl,
  mX5Xl,
  mXAutoXl,
  mY0,
  mY1,
  mY2,
  mY3,
  mY4,
  mY5,
  mYAuto,
  mY0Sm,
  mY1Sm,
  mY2Sm,
  mY3Sm,
  mY4Sm,
  mY5Sm,
  mYAutoSm,
  mY0Md,
  mY1Md,
  mY2Md,
  mY3Md,
  mY4Md,
  mY5Md,
  mYAutoMd,
  mY0Lg,
  mY1Lg,
  mY2Lg,
  mY3Lg,
  mY4Lg,
  mY5Lg,
  mYAutoLg,
  mY0Xl,
  mY1Xl,
  mY2Xl,
  mY3Xl,
  mY4Xl,
  mY5Xl,
  mYAutoXl,
  p0,
  p1,
  p2,
  p3,
  p4,
  p5,
  p0Sm,
  p1Sm,
  p2Sm,
  p3Sm,
  p4Sm,
  p5Sm,
  p0Md,
  p1Md,
  p2Md,
  p3Md,
  p4Md,
  p5Md,
  p0Lg,
  p1Lg,
  p2Lg,
  p3Lg,
  p4Lg,
  p5Lg,
  p0Xl,
  p1Xl,
  p2Xl,
  p3Xl,
  p4Xl,
  p5Xl,
  pT0,
  pT1,
  pT2,
  pT3,
  pT4,
  pT5,
  pT0Sm,
  pT1Sm,
  pT2Sm,
  pT3Sm,
  pT4Sm,
  pT5Sm,
  pT0Md,
  pT1Md,
  pT2Md,
  pT3Md,
  pT4Md,
  pT5Md,
  pT0Lg,
  pT1Lg,
  pT2Lg,
  pT3Lg,
  pT4Lg,
  pT5Lg,
  pT0Xl,
  pT1Xl,
  pT2Xl,
  pT3Xl,
  pT4Xl,
  pT5Xl,
  pB0,
  pB1,
  pB2,
  pB3,
  pB4,
  pB5,
  pB0Sm,
  pB1Sm,
  pB2Sm,
  pB3Sm,
  pB4Sm,
  pB5Sm,
  pB0Md,
  pB1Md,
  pB2Md,
  pB3Md,
  pB4Md,
  pB5Md,
  pB0Lg,
  pB1Lg,
  pB2Lg,
  pB3Lg,
  pB4Lg,
  pB5Lg,
  pB0Xl,
  pB1Xl,
  pB2Xl,
  pB3Xl,
  pB4Xl,
  pB5Xl,
  pL0,
  pL1,
  pL2,
  pL3,
  pL4,
  pL5,
  pL0Sm,
  pL1Sm,
  pL2Sm,
  pL3Sm,
  pL4Sm,
  pL5Sm,
  pL0Md,
  pL1Md,
  pL2Md,
  pL3Md,
  pL4Md,
  pL5Md,
  pL0Lg,
  pL1Lg,
  pL2Lg,
  pL3Lg,
  pL4Lg,
  pL5Lg,
  pL0Xl,
  pL1Xl,
  pL2Xl,
  pL3Xl,
  pL4Xl,
  pL5Xl,
  pR0,
  pR1,
  pR2,
  pR3,
  pR4,
  pR5,
  pR0Sm,
  pR1Sm,
  pR2Sm,
  pR3Sm,
  pR4Sm,
  pR5Sm,
  pR0Md,
  pR1Md,
  pR2Md,
  pR3Md,
  pR4Md,
  pR5Md,
  pR0Lg,
  pR1Lg,
  pR2Lg,
  pR3Lg,
  pR4Lg,
  pR5Lg,
  pR0Xl,
  pR1Xl,
  pR2Xl,
  pR3Xl,
  pR4Xl,
  pR5Xl,
  pX0,
  pX1,
  pX2,
  pX3,
  pX4,
  pX5,
  pX0Sm,
  pX1Sm,
  pX2Sm,
  pX3Sm,
  pX4Sm,
  pX5Sm,
  pX0Md,
  pX1Md,
  pX2Md,
  pX3Md,
  pX4Md,
  pX5Md,
  pX0Lg,
  pX1Lg,
  pX2Lg,
  pX3Lg,
  pX4Lg,
  pX5Lg,
  pX0Xl,
  pX1Xl,
  pX2Xl,
  pX3Xl,
  pX4Xl,
  pX5Xl,
  pY0,
  pY1,
  pY2,
  pY3,
  pY4,
  pY5,
  pY0Sm,
  pY1Sm,
  pY2Sm,
  pY3Sm,
  pY4Sm,
  pY5Sm,
  pY0Md,
  pY1Md,
  pY2Md,
  pY3Md,
  pY4Md,
  pY5Md,
  pY0Lg,
  pY1Lg,
  pY2Lg,
  pY3Lg,
  pY4Lg,
  pY5Lg,
  pY0Xl,
  pY1Xl,
  pY2Xl,
  pY3Xl,
  pY4Xl,
  pY5Xl
}

enum MediaQueryEnum {
  Xs,
  Sm,
  Md,
  Lg
}

const SpaceResolver = (params: SpaceProps): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];
  const spaceProps: Array<keyof SpaceProps> = Object.keys(
    SpacePropsEnum
  ).filter(key => isNaN(Number(key)));

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      if (spaceProps.find(element => element === key)) {
        let spaceCSSProps: SpaceCSSProps = {
          spaceType: key[0] === "m" ? SpaceType.margin : SpaceType.padding,
          size: GetSizeProp(key)
        };

        spaceCSSProps = SideProp(key, spaceCSSProps);
        spaceCSSProps = MediaQueryProp(key, spaceCSSProps);

        css.push(spaceCSS(spaceCSSProps));
      }
    }
  }

  return css;
};

export default SpaceResolver;

const GetSizeProp = (prop: string): Size => {
  const size = Object.keys(Size).find(key => prop.includes(key));

  switch (size) {
    case "0":
      return Size.s0;
    case "1":
      return Size.s1;
    case "2":
      return Size.s2;
    case "3":
      return Size.s3;
    case "4":
      return Size.s4;
    case "5":
      return Size.s5;
    default:
      return Size.auto;
  }
};

const SideProp = (key: string, cssProps: SpaceCSSProps): SpaceCSSProps => {
  const sideKeys = Object.keys(Side).find(
    sKey => sKey.toUpperCase().charAt(0) === key.charAt(1)
  );

  switch (sideKeys) {
    case "top":
      cssProps.side = Side.top;
      break;
    case "bottom":
      cssProps.side = Side.bottom;
      break;
    case "left":
      cssProps.side = Side.left;
      break;
    case "right":
      cssProps.side = Side.right;
      break;
    case "x":
      cssProps.side = Side.x;
      break;
    case "y":
      cssProps.side = Side.y;
      break;
  }

  return cssProps;
};

const MediaQueryProp = (
  key: string,
  cssProps: SpaceCSSProps
): SpaceCSSProps => {
  const mqKeys = Object.keys(MediaQueryEnum).find(
    sKey => sKey === key.slice(key.length - 2)
  );

  switch (mqKeys) {
    case "Xs":
      cssProps.mediaQuery = "xs";
      break;
    case "Sm":
      cssProps.mediaQuery = "sm";
      break;
    case "Md":
      cssProps.mediaQuery = "md";
      break;
    case "Lg":
      cssProps.mediaQuery = "lg";
      break;
  }

  return cssProps;
};
