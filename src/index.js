const { MD5 } = require("./utils/md5-sum.js");

module.exports = class DirtyCalf {
    constructor(options) {
        const defaultOptions = {
            alphabet: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_",
            formatting: {
                prefix: "",
                suffix: "",
                digitPrefix: "_",
            },
        };

        options = { ...defaultOptions, ...options };

        if (new Set(options.alphabet).size !== options.alphabet.length) {
            throw new Error("Alphabet contains repeating characters");
        }

        if (options.formatting.prefix.match(/^\d/)) {
            throw new Error("Prefix cannot be a digit");
        }

        this._alphabet = options.alphabet;
        this._options = options.formatting;
        this._cache = [];
        this._position = [0];
    }

    poop(name, filename, css) {
        const hash = MD5(css);

        const cachedData = this._cache.find(obj => obj.name === name && obj.filename === filename && obj.hash === hash);
        if (cachedData) return cachedData.className;

        const className = this._next();
        this._cache.push({ name, filename, hash, className });

        return className;
    }

    _next() {
        const chars = [];
        for (const char of this._position) {
            chars.unshift(this._alphabet[char]);
        }

        this._increment();

        let className = this._options.prefix + chars.join("") + this._options.suffix;

        if (this._options.digitPrefix && className.match(/^\d/)) {
            className = this._options.digitPrefix + className;
        }

        return className;
    }

    _increment() {
        for (let i = 0; i < this._position.length; i++) {
            const val = ++this._position[i];
            if (val >= this._alphabet.length) {
                this._position[i] = 0;
            } else {
                return;
            }
        }
        this._position.push(0);
    }

    *[Symbol.iterator]() {
        while (true) {
            yield this._next();
        }
    }
};
