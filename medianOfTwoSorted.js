/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(ar1, ar2) {
    var m = ar1.length;
    var n = ar2.length;
    var totalLength = m + n;

    if (totalLength % 2 === 1) {
        return findMid(ar1, m, ar2, n, Math.floor(totalLength / 2) + 1);
    } else {
        return (findMid(ar1, m, ar2, n, Math.floor(totalLength / 2) + 1) + findMid(ar1, m, ar2, n, Math.floor(totalLength / 2))) / 2;
    }

};

function findMid(ar1, m, ar2, n, mid) {
    if (m > n) {
        return findMid(ar2, n, ar1, m, mid);
    }

    if (m === 0) {
        return ar2[mid - 1];
    }

    if (mid === 1) {
        return Math.min(ar1[0], ar2[0]);
    }

    pa = Math.min(Math.floor(mid / 2), m);
    pb = mid - pa;

    if (ar1[pa - 1] < ar2[pb - 1]) {
        return findMid(ar1.slice(pa), m - pa, ar2, n, mid - pa);
    } else if (ar1[pa - 1] > ar2[pb - 1]) {
        return findMid(ar1, m, ar2.slice(pb), n - pb, mid - pb);
    } else {
        return ar1[pa - 1];
    }

}
