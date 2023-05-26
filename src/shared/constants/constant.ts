export const emptyFunction = () => {};

export const numberFormat = (nStr: string) => {
  return nStr?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const rupiah = (numberValue: number) => {
  const numberString = numberValue.toString().replace(/\D/g, "");
  const ribuan = numberFormat(numberString);

  if (numberValue >= 0) {
    return `Rp ${ribuan}`;
  } else {
    return `-Rp ${ribuan}`;
  }
};
