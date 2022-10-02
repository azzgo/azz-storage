"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionStorage = exports.LocalStorage = exports.Storage = void 0;
var Storage = /** @class */ (function () {
    function Storage(keyPrefix, storageType, parser) {
        if (keyPrefix === void 0) { keyPrefix = "azz"; }
        if (storageType === void 0) { storageType = "localStorage"; }
        this.keyPrefix = keyPrefix;
        this.parser = parser;
        switch (storageType) {
            case "localStorage":
                this.storage = globalThis.localStorage;
                break;
            case "sessionStorage":
                this.storage = globalThis.sessionStorage;
                break;
        }
    }
    Storage.prototype.get = function (key, defaultVal) {
        var _a;
        return this.parser
            ? this.parser.get(localStorage.getItem(this.keyPrefix + key), defaultVal)
            : ((_a = this.storage) === null || _a === void 0 ? void 0 : _a.getItem(this.keyPrefix + key)) || defaultVal;
    };
    Storage.prototype.set = function (key, val) {
        var _a;
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.setItem(this.keyPrefix + key, (this.parser ? this.parser.set(val) : val));
    };
    Storage.prototype.remove = function (key) {
        var _a;
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.removeItem(this.keyPrefix + key);
    };
    return Storage;
}());
exports.Storage = Storage;
var LocalStorage = /** @class */ (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage(keyPrefix, parser) {
        if (keyPrefix === void 0) { keyPrefix = "azz"; }
        return _super.call(this, keyPrefix, "localStorage", parser) || this;
    }
    return LocalStorage;
}(Storage));
exports.LocalStorage = LocalStorage;
var SessionStorage = /** @class */ (function (_super) {
    __extends(SessionStorage, _super);
    function SessionStorage(keyPrefix, parser) {
        if (keyPrefix === void 0) { keyPrefix = "azz"; }
        return _super.call(this, keyPrefix, "sessionStorage", parser) || this;
    }
    return SessionStorage;
}(Storage));
exports.SessionStorage = SessionStorage;
//# sourceMappingURL=store.js.map