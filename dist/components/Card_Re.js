"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _CardActions = _interopRequireDefault(require("@mui/material/CardActions"));
var _CardContent = _interopRequireDefault(require("@mui/material/CardContent"));
var _CardMedia = _interopRequireDefault(require("@mui/material/CardMedia"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function CardRe(props) {
  const {
    onShare,
    learnMore,
    cardTitle,
    cardDesc
  } = _objectSpread({}, props);
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    sx: {
      maxWidth: 345
    }
  }, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    sx: {
      height: 140
    },
    image: "https://mui.com/static/images/cards/paella.jpg",
    title: "green iguana"
  }), /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, cardTitle), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "text.secondary",
    style: {
      textAlign: 'left'
    }
  }, cardDesc)), /*#__PURE__*/_react.default.createElement(_CardActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: "small",
    onClick: onShare
  }, "Share"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: "small",
    onClick: learnMore
  }, "Learn More")));
}
var _default = CardRe;
exports.default = _default;