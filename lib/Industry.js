const Category = require("./Category");
const codes = require("../data/2017_NAICS_Descriptions.json");

/** An industry classification as defined in the 2017 NAICS Descriptions document */
class Industry {
    constructor(code) {
        this._code = code;
    }

    /**
     * Get an industry from its code
     * @param { string } code - an industry code as defined in the 2017 NAICS
     * @returns { Industry | undefined } an Industry representing the code provided.
     * If the code was not valid, undefined will be returned.
     */
    static from(code) {
        return codes[code] // check if it exists
            ? new Industry(code)
            : undefined;
    }

    /**
     * Get an Iterable<Industry> of all codes
     * @returns { Iterable<Industry> } an Iterable of all industries
     */
    static *codes() {
        for (const code of Object.keys(codes)) {
            yield Industry.from(code);
        }
    }

    /**
     * Get an Iterable<Industry> of all codes that represent sectors
     * @returns { Iterable<Industry> } an Iterable of all sectors
     */
    static *sectors() {
        for (const code of Object.keys(codes)) {
            if (code.length === Category.Sector) {
                yield Industry.from(code);
            }
        }
    }

    /**
     * @type { string } The 2-6 digit classification code
     */
    get code() {
        return this._code;
    }

    /**
     * @type { string } The title of the industry
     */
    get title() {
        return codes[this._code].Title.replace(/T ?$/, "");
    }

    /**
     * @type { string } The description of the industry
     */
    get description() {
        return codes[this._code].Description;
    }

    /**
     * @type { string } The 2-6 digit classification code
     */
    get category() {
        for (const [name, length] of Object.entries(Category)) {
            if (this._code.length === length) return name;
        }
    }

    /**
     * Gets all descendants of the industry.
     * @returns { Industry[] }
     */
    descendants() {
        return Array.from(Object.keys(codes))
            .filter((code) => code.startsWith(this._code))
            .map((code) => Industry.from(code));
    }

    /**
     * Gets the children of the industry but not it's indirect descendants
     * @returns { Industry[] }
     */
    children() {
        return Array.from(Object.keys(codes))
            .filter(
                (code) =>
                    code.startsWith(this._code) && // get the industries that start with the same
                    code.length === this._code.length + 1 // digits and whos code is one longer
            )
            .map((code) => Industry.from(code));
    }

    /**
     * Gets the parent classification of the industry, or nothing if the industry
     * is a Sector.
     * @returns { Industry | undefined }
     */
    parent() {
        if (this._code.length !== Category.Sector) {
            const parentCode = this._code.slice(0, -1);
            return Industry.from(parentCode);
        }
    }
}

module.exports = Industry;
