"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
var Memory = /** @class */ (function () {
    function Memory() {
        this.store = new Map();
    }
    Object.defineProperty(Memory.prototype, "length", {
        get: function () {
            return this.store.size;
        },
        enumerable: false,
        configurable: true
    });
    Memory.prototype.clear = function () {
        this.store.clear();
    };
    Memory.prototype.getItem = function (key) {
        var _a;
        return (_a = this.store.get(key)) !== null && _a !== void 0 ? _a : null;
    };
    Memory.prototype.key = function (index) {
        var _a;
        return (_a = Array.from(this.store.keys()).at(index)) !== null && _a !== void 0 ? _a : null;
    };
    Memory.prototype.removeItem = function (key) {
        this.store.delete(key);
    };
    Memory.prototype.setItem = function (key, value) {
        this.store.set(key, value);
    };
    return Memory;
}());
exports.Memory = Memory;
//# sourceMappingURL=internal.js.map