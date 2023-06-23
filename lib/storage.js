"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
var Storage = /** @class */ (function () {
    function Storage(keyPrefix, storage, parser) {
        if (keyPrefix === void 0) { keyPrefix = "azz"; }
        if (storage === void 0) { storage = globalThis.localStorage; }
        this.keyPrefix = keyPrefix;
        this.storage = storage;
        this.parser = parser;
    }
    Storage.prototype.prefixedKey = function (key) {
        return this.keyPrefix + key;
    };
    Storage.prototype.get = function (key, defaultVal) {
        var _a;
        return this.parser
            ? this.parser.getVal(localStorage.getItem(this.prefixedKey(key)), defaultVal)
            : ((_a = this.storage) === null || _a === void 0 ? void 0 : _a.getItem(this.keyPrefix + key)) || defaultVal;
    };
    Storage.prototype.set = function (key, val) {
        var _a;
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.setItem(this.prefixedKey(key), (this.parser ? this.parser.setVal(val) : val));
    };
    Storage.prototype.remove = function (key) {
        var _a;
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.removeItem(this.prefixedKey(key));
    };
    return Storage;
}());
exports.Storage = Storage;
//# sourceMappingURL=storage.js.map