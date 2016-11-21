  arr =   [1, 7, 3, 4]

  // function product(arr) {
  //   var newArr = [];
  //   var sumAfter = 1
  //   var sumsAfter = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     sumsAfter.push(sumAfter);
  //     sumAfter = arr[i] * sumAfter;
  //
  //     // sumAfter = 1;
  //   }
  //
  //   sumBefore = 1;
  //   sumsBefore = [];
  //   for (var j = 0; j < i; j++) {
  //     sumsBefore.push(sumBefore);
  //     sumBefore = arr[j] * sumBefore
  //
  //     // sumBefore = 1;
  //   }
  //
  //   // newArr.push(sumBefore * sumAfter);
  //   return [sumsBefore, sumsAfter];
  // }




  // function product(arr) {
  //   var productSoFar = 1;
  //   var newArr = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     newArr[i] = productSoFar
  //     productSoFar = productSoFar * arr[i]
  //   }
  //   return productSoFar
  // }


function product(arr) {
  var productBeforeIndex = [];
  i = 0;
  j = arr.length - 1;
  product = 1;
  while (i < arr.length) {
    productBeforeIndex[i] = product;
    product = arr[i] * product;
    i++;
  }

  product = 1;
  while (j >= 0 ) {
    // consol
    productBeforeIndex[j] = productBeforeIndex[j] * product;
    product = arr[j] * product;
    j--;
  }
  return productBeforeIndex
}

  // function product(arr) {
  //   var productOfBefore = 1;
  //   var beforeProducts = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     beforeProducts.push(productOfBefore)
  //     productOfBefore = productOfBefore * arr[i];
  //   }
  //
  //
  //   var productAfter = 1;
  //   var afterProducts = [];
  //   for (var j = arr.length - 1; j >= 0; j--) {
  //     afterProducts.push(productAfter)
  //     productAfter = productAfter * arr[j];
  //   }
  //   return afterProducts
  // }

  product(arr);
