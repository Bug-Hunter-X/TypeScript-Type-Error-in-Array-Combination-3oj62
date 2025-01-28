function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, '6']; // Type Error
const combinedArr = combine(arr1, arr2);