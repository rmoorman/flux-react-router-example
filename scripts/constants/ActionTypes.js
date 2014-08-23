'use strict';

var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
  REQUEST_USER: null,
  REQUEST_USER_SUCCESS: null,
  REQUEST_USER_ERROR: null,

  REQUEST_REPO: null,
  REQUEST_REPO_SUCCESS: null,
  REQUEST_REPO_ERROR: null,

  REQUEST_STARRED_REPOS_PAGE: null,
  REQUEST_STARRED_REPOS_PAGE_SUCCESS: null,
  REQUEST_STARRED_REPOS_PAGE_ERROR: null
});