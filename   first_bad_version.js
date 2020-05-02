/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  function getMiddleNumber(a, b) {
    return a + (Math.floor((b - a) / 2))
  }

  return function(n) {
    let l = 1;
    let r = n
    let ans = Infinity
    while (l <= r) {
      let mid = getMiddleNumber(l, r)
      if(isBadVersion(mid)) {
        ans = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
    return ans
  };
};