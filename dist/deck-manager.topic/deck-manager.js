"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorDeckTopic = exports.ErrorDeckMessage = exports.SendDeckTopic = exports.SendDeckMessage = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
class SendDeckMessage extends Messages_1.MessageId {
    userId;
    constructor(userId) {
        super(userId);
        this.userId = userId;
    }
}
exports.SendDeckMessage = SendDeckMessage;
// Auth --->
class SendDeckTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.deckUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'SendDeckTopic-queue';
    routingKey = 'SendDeckTopic-key';
}
exports.SendDeckTopic = SendDeckTopic;
class ErrorDeckMessage extends Messages_1.MessageId {
    userId;
    constructor(userId) {
        super(userId);
        this.userId = userId;
    }
}
exports.ErrorDeckMessage = ErrorDeckMessage;
// <--- Auth
class ErrorDeckTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.authApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'SendDeckTopic-queue';
    routingKey = 'SendDeckTopic-key';
}
exports.ErrorDeckTopic = ErrorDeckTopic;
//# sourceMappingURL=deck-manager.js.map