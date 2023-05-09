"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Chip(props) {
  const {
    message
  } = props;
  return /*#__PURE__*/_react.default.createElement("span", {
    style: {
      padding: "5px 20px",
      backgroundColor: "#61dafb",
      borderRadius: "20px",
      border: "none",
      boxShadow: '1px 2px 9px rgb(50 47 48 / 23%)',
      fontSize: "12px"
    }
  }, message);
}
var _default = Chip;
exports.default = _default;