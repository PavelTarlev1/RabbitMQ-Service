"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestMessage = exports.TestTopic = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
//only for testing purpose !
class TestTopic extends abstract_topic_1.Topic {
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    queue = 'register-queue';
    routingKey = 'register-key';
    exchangeType = providers_1.ExchangeType.Topic;
}
exports.TestTopic = TestTopic;
//only for testing purpose !
class TestMessage extends Messages_1.Messages {
    userId;
    someString;
    constructor(userId, someString) {
        super();
        this.userId = userId;
        this.someString = someString;
    }
}
exports.TestMessage = TestMessage;
//# sourceMappingURL=topics.js.map