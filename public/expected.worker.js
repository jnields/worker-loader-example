window = self;
importScripts('/manifest.js', '/commons.js');
delete window;

webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isSorted = __webpack_require__(0);
onmessage = function(e) {
  setTimeout(
    postMessage,
    2000,
    isSorted(e.data)
  );
};

/***/ })
],[2]);
