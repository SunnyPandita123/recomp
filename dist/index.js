"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Chip", {
  enumerable: true,
  get: function get() {
    return _Chip.default;
  }
});
exports.MyComp = MyComp;
var _react = _interopRequireDefault(require("react"));
var _Chip = _interopRequireDefault(require("./components/Chip"));
var _Button = _interopRequireDefault(require("./components/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function MyComp() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Edit ", /*#__PURE__*/_react.default.createElement("code", null, "src/App.js"), " and save to reload.")));
}