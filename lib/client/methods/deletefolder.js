"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _invariant = _interopRequireDefault(require("invariant"));
var _default = _ref => {
  let {
    client
  } = _ref;
  return folderid => {
    (0, _invariant.default)(typeof folderid === "number", "`folderid must be a number.`");
    (0, _invariant.default)(folderid, "`folderid` is required and can't be `0`.");
    return client.api("deletefolderrecursive", {
      params: {
        folderid: folderid
      }
    }).then(() => true);
  };
};
exports.default = _default;