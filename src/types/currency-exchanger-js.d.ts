declare module 'currency-exchanger-js' {
  const converter: {
    convert: (amount: number, from: string, to: string) => Promise<number>;
  };
  export default converter;
}