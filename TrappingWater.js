/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(array) {
    if (array.length === 0 || array.length === 1) { return 0 }
    var maxSeenSoFar = 0;
    var maxSeenRight = [];
    var maxSeenLeft = 0;
    var rainwater = 0;

    for (var i = array.length - 1; i >= 0; i--) {
        currentTower = array[i];
        if (currentTower > maxSeenSoFar) {
            maxSeenSoFar = currentTower;
            maxSeenRight[i] = currentTower;
        } else {
            maxSeenRight[i] = maxSeenSoFar
        }
    }

    for (var j = 0; j < array.length; j++) {
        currentTower1 = array[j];
        rainwater = rainwater + Math.max(Math.min(maxSeenLeft, maxSeenRight[j]) - currentTower1, 0)

        if (currentTower1 > maxSeenLeft) {
            maxSeenLeft = currentTower1;
        }
    }

    return rainwater


};
