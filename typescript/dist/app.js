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
console.log(bira2["age"]);
// parâmetros e retornos tipados
// ao invés de ": number =>", poderia ser "=> <number>"
var soma = function (n1, n2) {
    if (n1 === void 0) { n1 = 0; }
    var ns = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        ns[_i - 2] = arguments[_i];
    }
    return n1 + (n2 || 0) + (ns.length > 0 ? ns.reduce(function (prev, next) { return prev + next; }) : 0);
};
console.log("Soma:");
console.log(soma(23, 1, 2, 23, 3, 1231234, 5));
