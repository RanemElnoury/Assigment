"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _postSlice = _interopRequireDefault(require("../features/posts/postSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// store.js
var _default = (0, _toolkit.configureStore)({
  reducer: {
    postsData: _postSlice["default"]
  }
});

exports["default"] = _default;