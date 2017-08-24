webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
	return new Worker(__webpack_require__.p + "c8683681f339b760f895.worker.js");
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isSorted = __webpack_require__(0);
var ExampleWorker = __webpack_require__(1);


function onReady() {
  var a1 = [1,2,3,4];
  var a2 = [3,4,1,2];
  var a1node = document.createElement('div');
  a1node.innerText = 'a1 sorted: ' + isSorted(a1);
  document.body.appendChild(a1node);
  var worker = new ExampleWorker();
  worker.onmessage = function(e) {
    var a2node = document.createElement('div');
    a2node.innerText = 'a2 sorted: ' + e.data;
    document.body.appendChild(a2node);
  };
  worker.postMessage(a2);
}
document.addEventListener('DOMContentLoaded', onReady);


/***/ })
],[2]);