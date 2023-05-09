"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Button(props) {
  const {
    message,
    onClick,
    isPrimary
  } = props;
  return /*#__PURE__*/_react.default.createElement("button", {
    style: {
      padding: "10px 30px",
      backgroundColor: "".concat(isPrimary, " ? \"yellow\" : \"grey\""),
      border: "none",
      boxShadow: '1px 2px 9px rgb(50 47 48 / 23%)'
    },
    onClick: onClick
  }, message);
}
var _default = Button;
exports.default = _default;