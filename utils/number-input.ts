export const unExpectedChars = ['e', 'E', '+', '-', '.'];

export const blockSpecialChar = (e: any) =>
  unExpectedChars?.includes(e?.key) && e.preventDefault();
