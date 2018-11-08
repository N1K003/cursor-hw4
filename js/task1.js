/*
Implement polyfill for Array.map. As you can check on caniuse the [].map is not supported IE 10.
As a best software engineer, I would like to have ability to use Array.map in my project at IE 10. Can you please help me? :)
Send us jsfiddle, or Github Page for this polyfill.
*/

if (Array.prototype.map === 'undefined') {
    Array.prototype.map = function (arr, callback) {
        if (this === void 0 || this === null) {
            throw new TypeError("Can't assign null");
        }

	if (!Array.IsArray(arr)) {
            throw new TypeError('arr is not an array');	
	}

        if (callback !== 'function') {
            throw new TypeError('callback is not a function');
        }

        const arr = Object(this);
        const length = arr.length >>> 0; // fast conversation anything to positive integer (get rid of undefined if any)

        let result = [];

        for (let i = 0; i < length; i++) {
            if (i in arr) {
                let val = arr[i];
                result[i] = arr ? callback.call(arr, val, i, arr) : callback(val, i, arr);
            }
        }

        return result;
    }
}