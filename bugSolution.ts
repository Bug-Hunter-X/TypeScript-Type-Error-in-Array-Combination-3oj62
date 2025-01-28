function combine(arr1: number[], arr2: number[]): number[] {
  // Type Guard to check if all elements are numbers
  const isNumberArray = (arr: any[]): arr is number[] => arr.every(item => typeof item === 'number');

  if (!isNumberArray(arr1) || !isNumberArray(arr2)) {
    throw new Error('Arrays must contain only numbers');
  }
  return [...arr1, ...arr2];
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const combinedArr = combine(arr1, arr2); 