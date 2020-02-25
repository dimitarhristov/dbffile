"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iconv_lite_1 = require("iconv-lite");
/** Validates the given options and substitutes defaults for missing properties. Returns a new options object. */
function normaliseOptions(options) {
    options = options || {};
    // Validate `encoding`.
    let encoding = options.encoding || 'ISO-8859-1';
    if (typeof encoding === 'string') {
        if (!iconv_lite_1.encodingExists(encoding))
            throw new Error(`Unsupported character encoding '${encoding}'`);
    }
    else if (typeof encoding === 'object') {
        if (!encoding.default)
            throw new Error(`No default encoding specified`);
        for (let key of Object.keys(encoding)) {
            if (!iconv_lite_1.encodingExists(encoding[key]))
                throw new Error(`Unsupported character encoding '${encoding}'`);
        }
    }
    else {
        throw new Error(`Invalid encoding value ${encoding}`);
    }
    // Return a new options object.
    return {
        fileVersion: options.fileVersion,
        encoding
    };
}
exports.normaliseOptions = normaliseOptions;
//# sourceMappingURL=options.js.map