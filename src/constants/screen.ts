export enum ScreenSize {
  SM = 319,
  MD = 481,
  LG = 769,
  XL = 1025
}

export const ScreenSizesPx = {
  SM: `${ScreenSize.SM}px` as const,
  MD: `${ScreenSize.MD}px` as const,
  LG: `${ScreenSize.LG}px` as const,
  XL: `${ScreenSize.XL}px` as const
}