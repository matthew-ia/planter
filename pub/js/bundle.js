(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _someOther = require("./someOther");

var x = 100;
var y = 200;
var inst = new _someOther.MyClass(x, y);
console.log(inst.x, inst.y);
var p = 20;
var o = _someOther.SOMEOTHER;
console.log(o);

},{"./someOther":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyClass = exports.SOMEOTHER = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SOMEOTHER = 1;
exports.SOMEOTHER = SOMEOTHER;

var MyClass = function MyClass(x, y) {
  _classCallCheck(this, MyClass);

  this.x = x;
  this.y = y;
};

exports.MyClass = MyClass;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy9zb21lT3RoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUVBLElBQUksQ0FBQyxHQUFHLEdBQVI7QUFDQSxJQUFJLENBQUMsR0FBRyxHQUFSO0FBRUEsSUFBSSxJQUFJLEdBQUcsSUFBSSxrQkFBSixDQUFZLENBQVosRUFBYyxDQUFkLENBQVg7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQyxDQUFqQixFQUFvQixJQUFJLENBQUMsQ0FBekI7QUFFQSxJQUFJLENBQUMsR0FBRyxFQUFSO0FBQ0EsSUFBSSxDQUFDLEdBQUcsb0JBQVI7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLENBQVo7Ozs7Ozs7Ozs7OztBQ1hPLElBQUksU0FBUyxHQUFHLENBQWhCOzs7SUFFTSxPLEdBQ1gsaUJBQVksQ0FBWixFQUFlLENBQWYsRUFBa0I7QUFBQTs7QUFDaEIsT0FBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLE9BQUssQ0FBTCxHQUFTLENBQVQ7QUFDRCxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgTXlDbGFzcywgU09NRU9USEVSIH0gZnJvbSAnLi9zb21lT3RoZXInO1xuXG5sZXQgeCA9IDEwMDtcbmxldCB5ID0gMjAwO1xuXG5sZXQgaW5zdCA9IG5ldyBNeUNsYXNzKHgseSk7XG5cbmNvbnNvbGUubG9nKGluc3QueCwgaW5zdC55KTtcblxubGV0IHAgPSAyMDtcbmxldCBvID0gU09NRU9USEVSO1xuXG5jb25zb2xlLmxvZyhvKTtcbiIsIlxuZXhwb3J0IHZhciBTT01FT1RIRVIgPSAxO1xuXG5leHBvcnQgY2xhc3MgTXlDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbn1cbiJdfQ==
