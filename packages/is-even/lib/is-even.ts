import { isOdd } from "is-odd";

export function isEven(n: number): boolean {
  return !isOdd(n);
}
