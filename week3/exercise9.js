var deret = [1, 3, 3];

function cariMean(arr) {
  let num = 0;
  let mean;
  for (let i=0; i<arr.length;i++) {
    num += arr[i];
  }
  mean = num / arr.length;
  mean2 = mean - Math.floor(mean);
  if (mean2 > 0.4) {
    return Math.ceil(mean);
  } else {
    return Math.floor(mean);
  }
}

console.log(cariMean(deret));