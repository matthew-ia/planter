(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _planter = require("./planter");

var x = 100;
var y = 200;
var inst = new _planter.MyClass(x, y);
console.log(inst.x, inst.y);
var p = 20;
var o = _planter.SOMEOTHER;
console.log(o);

},{"./planter":2}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy9wbGFudGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQSxJQUFJLENBQUMsR0FBRyxHQUFSO0FBQ0EsSUFBSSxDQUFDLEdBQUcsR0FBUjtBQUVBLElBQUksSUFBSSxHQUFHLElBQUksZ0JBQUosQ0FBWSxDQUFaLEVBQWMsQ0FBZCxDQUFYO0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUMsQ0FBakIsRUFBb0IsSUFBSSxDQUFDLENBQXpCO0FBRUEsSUFBSSxDQUFDLEdBQUcsRUFBUjtBQUNBLElBQUksQ0FBQyxHQUFHLGtCQUFSO0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxDQUFaOzs7Ozs7Ozs7Ozs7QUNYTyxJQUFJLFNBQVMsR0FBRyxDQUFoQjs7O0lBRU0sTyxHQUNYLGlCQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCO0FBQUE7O0FBQ2hCLE9BQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxPQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0QsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IE15Q2xhc3MsIFNPTUVPVEhFUiB9IGZyb20gJy4vcGxhbnRlcic7XG5cbmxldCB4ID0gMTAwO1xubGV0IHkgPSAyMDA7XG5cbmxldCBpbnN0ID0gbmV3IE15Q2xhc3MoeCx5KTtcblxuY29uc29sZS5sb2coaW5zdC54LCBpbnN0LnkpO1xuXG5sZXQgcCA9IDIwO1xubGV0IG8gPSBTT01FT1RIRVI7XG5cbmNvbnNvbGUubG9nKG8pO1xuIiwiXG5leHBvcnQgdmFyIFNPTUVPVEhFUiA9IDE7XG5cbmV4cG9ydCBjbGFzcyBNeUNsYXNzIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxufVxuIl19
