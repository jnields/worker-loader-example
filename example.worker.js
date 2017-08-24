var isSorted = require('is-sorted');
onmessage = function(e) {
  setTimeout(
    postMessage,
    2000,
    isSorted(e.data)
  );
};
