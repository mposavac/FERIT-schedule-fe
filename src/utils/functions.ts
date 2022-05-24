export const capitalizeWords = (str: string): string | undefined | null => {
  if (str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let arrDashed = arr[i].split("-");
      if (arrDashed.length > 1) {
        for (let j = 0; j < arrDashed.length; j++) {
          arrDashed[j] =
            arrDashed[j].charAt(0).toUpperCase() +
            arrDashed[j].slice(1).toLocaleLowerCase();
        }
        arr[i] = arrDashed.join("-");
      } else {
        arr[i] =
          arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLocaleLowerCase();
      }
    }
    return arr.join(" ");
  } else return null;
};
