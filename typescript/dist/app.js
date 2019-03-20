var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var message = "E aí vei, belê?";
console.log(message);
var episode = 4;
console.log(episode);
episode += 1;
console.log(episode);
var bira = {
    name: "string",
    age: 2
};
var bira2 = __assign({}, bira, { height: 2 });
