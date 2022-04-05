"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeType = exports.ExchangeHolding = void 0;
class ExchangeHolding {
    static authApiExchange = 'AuthApi-Exchange';
    static gameUserApiExchange = 'GameUserApi-Exchange';
    static deckUserApiExchange = 'DeckUserApi-Exchange';
    static fileManagerExchange = 'FileApi-Exchange';
    static socketManagerExchange = 'SocketApi-Exchange';
}
exports.ExchangeHolding = ExchangeHolding;
var ExchangeType;
(function (ExchangeType) {
    ExchangeType["Topic"] = "topic";
    ExchangeType["Fanout"] = "fanout";
    ExchangeType["Direct"] = "direct";
})(ExchangeType = exports.ExchangeType || (exports.ExchangeType = {}));
//# sourceMappingURL=providers.js.map