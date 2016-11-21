var depthSum = function(nestedList, depth = 0) {
    sum = 0;
    for (var i = 0; i < nestedList; i++) {
        if (nestedList[i].isInteger()) {
          sum += nestedList[i].getInteger() * depth;
        } else {
          sum += depthSum(nestedList[i].getList(), depth + 1);

        }
    }

    return sum
};
