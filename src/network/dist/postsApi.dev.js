"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePosts = exports.deletePosts = exports.addPosts = exports.fetchPosts = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _toolkit = require("@reduxjs/toolkit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = "https://jsonplaceholder.typicode.com/posts";
var fetchPosts = (0, _toolkit.createAsyncThunk)("posts/fetchPosts", function _callee() {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get(BASE_URL));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchPosts = fetchPosts;
var addPosts = (0, _toolkit.createAsyncThunk)("posts/addPosts", function _callee2(postData) {
  var response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post(BASE_URL, postData));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.addPosts = addPosts;
var deletePosts = (0, _toolkit.createAsyncThunk)("posts/deletePosts", function _callee3(postId) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(BASE_URL, "/").concat(postId)));

        case 2:
          return _context3.abrupt("return", postId);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.deletePosts = deletePosts;
var updatePosts = (0, _toolkit.createAsyncThunk)("posts/updatePosts", function _callee4(_ref) {
  var id, updatedData, response;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = _ref.id, updatedData = _ref.updatedData;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].patch("".concat(BASE_URL, "/").concat(id), updatedData));

        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", response.data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
exports.updatePosts = updatePosts;