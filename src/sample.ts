const incrementNum = (num: number): number => {
  return num++;
};

const numConvertToStr = (num: number): string => {
  return num.toString();
};

const greeding = (name: string): string => {
  return `Hello ${name}!`;
};

const toggle = (prevStatus: boolean): boolean => {
  return !prevStatus;
}

export { incrementNum, numConvertToStr, greeding, toggle };
