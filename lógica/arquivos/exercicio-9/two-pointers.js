var arr = ['h', 'e', 'l', 'l', 'o'];

const reverseArray = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let tmp = arr[i];
    arr[i++] = arr[j];
    arr[j--] = tmp;
  }

  return arr; 
};
