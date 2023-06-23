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
exports.Storage = exports.MemoryStorage = exports.SessionStorage = exports.LocalStorage = void 0;
var storage_1 = require("./storage");
Object.defineProperty(exports, "Storage", { enumerable: true, get: function () { return storage_1.Storage; } });
var internal_1 = require("./internal");
var LocalStorage = /** @class */ (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage(keyPrefix, parser) {
        if (keyPrefix === void 0) { keyPrefix = "azz"; }
        return _super.call(this, keyPrefix, globalThis.localStorage, parser) || this;
    }
    return LocalStorage;
}(storage_1.Storage));
exports.LocalStorage = LocalStorage;
var SessionStorage = /** @class */ (function (_super) {
    __extends(SessionStorage, _super);
    function SessionStorage(keyPrefix, parser) {
        if (keyPrefix === void 0) { keyPrefix = "azz"; }
        return _super.call(this, keyPrefix, globalThis.sessionStorage, parser) || this;
    }
    return SessionStorage;
}(storage_1.Storage));
exports.SessionStorage = SessionStorage;
var MemoryStorage = /** @class */ (function (_super) {
    __extends(MemoryStorage, _super);
    function MemoryStorage(keyPrefix, parser) {
        if (keyPrefix === void 0) { keyPrefix = "azz"; }
        return _super.call(this, keyPrefix, new internal_1.Memory(), parser) || this;
    }
    return MemoryStorage;
}(storage_1.Storage));
exports.MemoryStorage = MemoryStorage;
//# sourceMappingURL=index.js.map