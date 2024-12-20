"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fetchPosts", {
  enumerable: true,
  get: function get() {
    return _postsApi.fetchPosts;
  }
});
Object.defineProperty(exports, "addPosts", {
  enumerable: true,
  get: function get() {
    return _postsApi.addPosts;
  }
});
Object.defineProperty(exports, "deletePosts", {
  enumerable: true,
  get: function get() {
    return _postsApi.deletePosts;
  }
});
Object.defineProperty(exports, "updatePosts", {
  enumerable: true,
  get: function get() {
    return _postsApi.updatePosts;
  }
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
    }).addCase(_postsApi.addPosts.fulfilled, function (state, action) {
      state.posts.push(action.payload);
    }).addCase(_postsApi.deletePosts.fulfilled, function (state, action) {
      state.posts = state.posts.filter(function (post) {
        return post.id !== action.payload;
      });
    }).addCase(_postsApi.updatePosts.fulfilled, function (state, action) {
      var postIndex = state.posts.findIndex(function (post) {
        return post.id === action.payload.id;
      });

      if (postIndex !== -1) {
        state.posts[postIndex] = action.payload;
      }
    });
  }
});
exports.postSlice = postSlice;
var _default = postSlice.reducer;
exports["default"] = _default;