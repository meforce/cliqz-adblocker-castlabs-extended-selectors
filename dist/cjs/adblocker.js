"use strict";
/*!
 * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classifySelector = exports.SelectorType = exports.PSEUDO_ELEMENTS = exports.PSEUDO_CLASSES = exports.EXTENDED_PSEUDO_CLASSES = exports.matches = exports.querySelectorAll = exports.tokenize = exports.parse = void 0;
var parse_1 = require("./src/parse");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parse_1.parse; } });
Object.defineProperty(exports, "tokenize", { enumerable: true, get: function () { return parse_1.tokenize; } });
var eval_1 = require("./src/eval");
Object.defineProperty(exports, "querySelectorAll", { enumerable: true, get: function () { return eval_1.querySelectorAll; } });
Object.defineProperty(exports, "matches", { enumerable: true, get: function () { return eval_1.matches; } });
__exportStar(require("./src/types"), exports);
var extended_1 = require("./src/extended");
Object.defineProperty(exports, "EXTENDED_PSEUDO_CLASSES", { enumerable: true, get: function () { return extended_1.EXTENDED_PSEUDO_CLASSES; } });
Object.defineProperty(exports, "PSEUDO_CLASSES", { enumerable: true, get: function () { return extended_1.PSEUDO_CLASSES; } });
Object.defineProperty(exports, "PSEUDO_ELEMENTS", { enumerable: true, get: function () { return extended_1.PSEUDO_ELEMENTS; } });
Object.defineProperty(exports, "SelectorType", { enumerable: true, get: function () { return extended_1.SelectorType; } });
Object.defineProperty(exports, "classifySelector", { enumerable: true, get: function () { return extended_1.classifySelector; } });
//# sourceMappingURL=adblocker.js.map