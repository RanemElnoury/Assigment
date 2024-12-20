"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.postSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _postsApi = require("../../network/postsApi");

var postSlice = (0, _toolkit.createSlice)({
  name: "posts",
  initialState: {
    posts: [],
    error: null,
    loading: false,
    status: 'idle'
  },
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(_postsApi.fetchPosts.fulfilled, function (state, action) {
      state.posts = action.payload;
    });
  }
});
exports.postSlice = postSlice;
var _default = postSlice.reducer;
exports["default"] = _default;