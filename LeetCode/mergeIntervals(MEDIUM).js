/*
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].

*/


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
  intervals.sort((a, b) => a.start - b.start);
    
  let result = [],
  prev = null;
    
  for (let i = 0; i < intervals.length; i++) {
    if( prev === null || intervals[i].start > prev.end ) {
      result.push(intervals[i]);
      prev = intervals[i];
    } else if( intervals[i].end > prev.end ){
      prev.end = intervals[i].end;
    }
  }
    return result;
};