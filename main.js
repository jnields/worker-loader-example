var isSorted = require('is-sorted');
var ExampleWorker = require('./example.worker');


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
