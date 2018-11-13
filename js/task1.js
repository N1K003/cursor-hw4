/*
Implement polyfill for Array.map. As you can check on caniuse the [].map is not supported IE 10.
As a best software engineer, I would like to have ability to use Array.map in my project at IE 10. Can you please help me? :)
Send us jsfiddle, or Github Page for this polyfill.
*/

if (!Array.prototype.map) {
    Array.prototype.map = function (callback) {
        if (this === void 0 || this === null) {
            throw new TypeError("\"this\" can't be null);
        }

	if (!Array.IsArray(this)) {
            throw new TypeError('"this" must be an array');	
	}

        if (typeof callback !== 'function') {
            throw new TypeError('callback is not a function');
        }

	let result = [];
        for (let i = 0; i < this.length; i++) {
                result[i] = callback(this[i], i);
        }

        return result;
    }
}
