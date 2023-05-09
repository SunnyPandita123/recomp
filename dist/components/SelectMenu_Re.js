"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function SelectMenuRe(props) {
  const {
    menuLabel,
    menuValue,
    onAgeChange,
    selectMenuList
  } = _objectSpread({}, props);
  return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    sx: {
      m: 1,
      minWidth: 120
    },
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "demo-select-small-label"
  }, menuLabel), /*#__PURE__*/_react.default.createElement(_Select.default, {
    labelId: "demo-select-small-label",
    id: "demo-select-small",
    value: menuValue,
    label: menuLabel,
    onChange: onAgeChange
  }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: ""
  }, /*#__PURE__*/_react.default.createElement("em", null, "None")), selectMenuList.map((menu, index) => /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    key: index,
    value: menu.value
  }, menu.label))));
}
var _default = SelectMenuRe;
exports.default = _default;