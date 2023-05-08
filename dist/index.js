"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function MyComp() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Edit ", /*#__PURE__*/_react.default.createElement("code", null, "src/App.js"), " and save to reload."), /*#__PURE__*/_react.default.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React")));
}
var _default = MyComp;
exports.default = _default;