/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length === 1 || intervals.length === 0) { return intervals }
    sorted = intervals.sort(function(a,b) {
        return a.start - b.start;
    });

    var result = [sorted[0]];

    for (var i = 1; i < sorted.length; i++) {
        current = sorted[i]
        last = result[result.length - 1]
        if (sorted[i].start <= result[result.length - 1].end) {

            result[result.length - 1].end = Math.max(result[result.length - 1].end, sorted[i].end)
        } else {
                result.push(sorted[i])
        }




    }

    return result;


};
