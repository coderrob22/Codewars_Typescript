// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

//export method
export const otherAngle = (a, b) => 180 - a - b;

//Or
export function otherAngle(a: number, b: number): number {
    return 180 - a - b;
  }