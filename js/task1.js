/*
Implement polyfill for Array.map. As you can check on caniuse the [].map is not supported IE 10.
As a best software engineer, I would like to have ability to use Array.map in my project at IE 10. Can you please help me? :)
Send us jsfiddle, or Github Page for this polyfill.
*/

if (Array.prototype.map === 'undefined') {
    Array.prototype.map = function (fun, thisPtr) {
        if (this === void 0 || this === null) {
            throw new TypeError("Can't assign null");
        }

        if (typeof(fun) !== 'function') {
            throw new TypeError('fun is not a function');
        }

        const thisObj = Object(this);
        const length = thisObj.length >>> 0; // fast conversation anything to positive integer (get rid of undefined if any)

        let result = [];

        for (let i = 0; i < length; i++) {
            if (i in thisObj) {
                let val = thisObj[i];
                result[i] = thisPtr ? fun.call(thisPtr, val, i, thisObj) : fun(val, i, thisObj);
            }
        }

        return result;
    }
}