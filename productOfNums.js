function p2(arr) {
  var highest = arr[0];
  var h2 = arr[0] * arr[1];
  for (var i = 0; i < arr.length; i++) {
    h2 = Math.max(h2, arr[i] * highest);
    highest = Math.max(arr[i], highest);
  }

  return h2;
}

arr = [1,10,5,1,100];

p2(arr)

function p3(arr) {
  if (arr.length < 3) { return arr };
  var highest = l = arr[0];
  var h2 =  l2 = arr[0] * arr[1];
  var h3 = arr[0] * arr[1] * arr[2];

  for (var i = 0; i < arr.length; i++) {
    h3 = Math.max(h3, arr[i] * h2, arr[i] * l2);
    h2 = Math.max(h2, arr[i] * highest, arr[i] * l);
    l2 = Math.min(l2, arr[i] * highest, arr[i] * l);
    highest = Math.max(arr[i], highest);
    l = Math.min(arr[i], l);
  }

  return h3;
}

arr = [1,10,-5,1,-100];

p3(arr)
